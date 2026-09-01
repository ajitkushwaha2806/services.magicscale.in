import { NextResponse } from "next/server";
import dbConnect from "@/lib/db-connect";
import { Lead } from "@/models/Lead";
import { Registration } from "@/models/Registration";

export async function GET(req) {
  try {
    const adminToken = req.cookies.get("admin_token")?.value;
    if (adminToken !== "authenticated") {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();

    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get("page") || "1");
    const limit = parseInt(url.searchParams.get("limit") || "15");
    const search = url.searchParams.get("search") || "";
    const statusFilter = url.searchParams.get("status") || "ALL";
    const typeFilter = url.searchParams.get("type") || "ALL";
    const dateFilter = url.searchParams.get("date") || "ALL";

    const matchQuery = search ? {
      $or: [
        { name: { $regex: search, $options: "i" } },
        { phone: { $regex: search, $options: "i" } },
        { restaurantName: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
      ]
    } : {};

    // Fetch matching leads and registrations
    const leads = await Lead.find(matchQuery).lean();
    const registrations = await Registration.find(matchQuery).lean();

    // Unify Leads and Registrations by phone number
    const combinedMap = new Map();

    leads.forEach(lead => {
      combinedMap.set(lead.phone, {
        ...lead,
        leadId: lead._id,
        isRegistered: false,
        isMeeting: !!(lead.meetingDate || lead.meetingSlot),
      });
    });

    registrations.forEach(reg => {
      const existing = combinedMap.get(reg.phone);

      if (existing) {
        combinedMap.set(reg.phone, {
          ...existing,
          ...reg, // overwrite with registration details
          restaurantName: reg.restaurantName || reg.businessName || existing.restaurantName,
          leadId: existing.leadId,
          registrationId: reg._id,
          isRegistered: true,
          isMeeting: !!(reg.meetingDate || reg.meetingSlot || existing.meetingDate),
          remarks: reg.remarks || existing.remarks,
          status: reg.status || existing.status,
          callbackDate: reg.callbackDate || existing.callbackDate,
          latestDate: reg.createdAt,
        });
      } else {
        combinedMap.set(reg.phone, {
          ...reg,
          restaurantName: reg.restaurantName || reg.businessName,
          registrationId: reg._id,
          isRegistered: true,
          isMeeting: !!(reg.meetingDate || reg.meetingSlot),
          latestDate: reg.createdAt,
        });
      }
    });

    let unifiedData = Array.from(combinedMap.values());

    // Apply Status Filter
    if (statusFilter !== "ALL") {
      unifiedData = unifiedData.filter(item => (item.status || "NEW") === statusFilter);
    }

    // Apply Type Filter
    if (typeFilter === "REGISTRATION") {
      unifiedData = unifiedData.filter(item => item.isRegistered === true);
    } else if (typeFilter === "MEETINGS") {
      unifiedData = unifiedData.filter(item => item.isMeeting === true);
    } else if (typeFilter === "LEADS") {
      unifiedData = unifiedData.filter(item => !item.isRegistered);
    }

    const getLocalDateString = (dateVal) => {
      if (!dateVal) return null;
      return new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date(dateVal));
    };

    // Extract active dates
    const activeDatesSet = new Set();
    unifiedData.forEach(item => {
      if (item.status === "CALLBACK" && item.callbackDate) {
        activeDatesSet.add(getLocalDateString(item.callbackDate));
      } else if (item.createdAt) {
        activeDatesSet.add(getLocalDateString(item.createdAt));
      }
    });
    const activeDates = Array.from(activeDatesSet).sort((a, b) => new Date(b) - new Date(a));

    // Apply Date Filter
    if (dateFilter !== "ALL") {
      unifiedData = unifiedData.filter(item => {
        if (item.status === "CALLBACK" && item.callbackDate) {
          return getLocalDateString(item.callbackDate) === dateFilter;
        }
        return getLocalDateString(item.createdAt) === dateFilter;
      });
    }

    // Sort Latest first
    unifiedData.sort((a, b) => new Date(b.latestDate || b.createdAt) - new Date(a.latestDate || a.createdAt));

    // Paginate
    const totalRecords = unifiedData.length;
    const totalPages = Math.max(1, Math.ceil(totalRecords / limit));
    const paginatedData = unifiedData.slice((page - 1) * limit, page * limit);

    return NextResponse.json(
      {
        success: true,
        data: {
          items: paginatedData,
          totalRecords,
          totalPages,
          currentPage: page,
          activeDates,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Admin Data Fetch Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
