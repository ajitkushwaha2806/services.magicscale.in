"use client";

import { useEffect, useState } from "react";
import { 
  Loader2, 
  Users, 
  Search, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  CreditCard, 
  Video, 
  X, 
  Store, 
  MapPin, 
  Calendar as CalendarIcon,
  ShoppingBag,
  TrendingUp,
  MessageSquare,
  Sparkles
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import toast from "react-hot-toast";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { format } from "date-fns";

export default function AdminDashboard() {
  const [data, setData] = useState({ items: [], totalRecords: 0, totalPages: 1, currentPage: 1 });
  const [activeDates, setActiveDates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [typeFilter, setTypeFilter] = useState("ALL");
  const [dateFilter, setDateFilter] = useState(() => new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date()));
  const [savingRemark, setSavingRemark] = useState(null);
  const [savingStatus, setSavingStatus] = useState(null);
  const [savingWaTag, setSavingWaTag] = useState(null);
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  // Debounced Search & Filters
  useEffect(() => {
    const handler = setTimeout(() => {
      if (currentPage !== 1) {
        setCurrentPage(1);
      } else {
        fetchData();
      }
    }, 400);
    return () => clearTimeout(handler);
  }, [searchTerm, statusFilter, typeFilter, dateFilter]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/admin/data?page=${currentPage}&limit=${itemsPerPage}&search=${encodeURIComponent(searchTerm)}&status=${encodeURIComponent(statusFilter)}&type=${encodeURIComponent(typeFilter)}&date=${encodeURIComponent(dateFilter)}`);
      if (res.ok) {
        const result = await res.json();
        setData(result.data);
        if (result.data.activeDates) {
          setActiveDates(result.data.activeDates);
        }
      } else {
        toast.error("Failed to fetch data");
      }
    } catch (error) {
      toast.error("Error loading dashboard");
    } finally {
      setLoading(false);
    }
  };

  const handleSaveRemark = async (id, type, newRemark) => {
    setSavingRemark(id);
    try {
      const res = await fetch("/api/admin/remarks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, type, remarks: newRemark }),
      });

      if (res.ok) {
        toast.success("Remark saved!");
        setData((prev) => {
          const newData = { ...prev };
          const items = [...newData.items];
          const index = items.findIndex(
            (item) => (item.registrationId || item.leadId) === id
          );
          if (index !== -1) items[index].remarks = newRemark;
          newData.items = items;
          return newData;
        });
      } else {
        toast.error("Failed to save remark");
      }
    } catch (error) {
      toast.error("An error occurred");
    } finally {
      setSavingRemark(null);
    }
  };

  const handleSaveStatus = async (id, type, newStatus, callbackDate = null) => {
    setSavingStatus(id);
    try {
      const res = await fetch("/api/admin/status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, type, status: newStatus, callbackDate }),
      });

      if (res.ok) {
        toast.success("Status updated!");
        fetchData();
      } else {
        toast.error("Failed to update status");
      }
    } catch (error) {
      toast.error("An error occurred");
    } finally {
      setSavingStatus(null);
    }
  };

  const handleWaTag = async (id, type, newVal) => {
    setSavingWaTag(id);
    try {
      const res = await fetch("/api/admin/wa-tag", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, type, waMessaged: newVal }),
      });
      if (res.ok) {
        toast.success(newVal ? "Marked as WA Sent!" : "WA tag removed");
        setData((prev) => {
          const newData = { ...prev };
          const items = [...newData.items];
          const index = items.findIndex(
            (item) => (item.registrationId || item.leadId) === id
          );
          if (index !== -1) items[index].waMessaged = newVal;
          newData.items = items;
          return newData;
        });
      } else {
        toast.error("Failed to update WA tag");
      }
    } catch (error) {
      toast.error("An error occurred");
    } finally {
      setSavingWaTag(null);
    }
  };

  const paginatedData = data.items || [];
  const totalPages = data.totalPages || 1;
  const totalRecords = data.totalRecords || 0;

  if (loading && paginatedData.length === 0) {
    return (
      <div className="min-h-screen bg-zinc-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-green-600" />
          <p className="text-zinc-600 font-medium">Loading MagicScale Admin...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#0a0a12] pb-16">
      {/* Top Header */}
      <header className="bg-white dark:bg-[#101018] border-b border-zinc-200 dark:border-zinc-800 sticky top-0 z-30 shadow-sm">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 bg-green-600 rounded-md flex items-center justify-center shadow-md shadow-green-600/20">
              <TrendingUp className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-black text-zinc-900 dark:text-white tracking-tight">MagicScale Admin</h1>
              <p className="text-[11px] font-semibold text-green-600 dark:text-green-400">Restaurant Growth & Leads</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative flex items-center group">
              <Search className="absolute left-3.5 h-4 w-4 text-zinc-400 group-focus-within:text-green-600 transition-colors" />
              <input
                type="text"
                placeholder="Search restaurant, name, phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 pr-8 py-2 bg-zinc-100 dark:bg-zinc-900 border border-transparent focus:border-green-500 rounded-md text-xs font-medium text-zinc-900 dark:text-white placeholder:text-zinc-400 outline-none transition-all w-64 sm:w-72"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-2.5 p-1 rounded-md text-zinc-400 hover:text-zinc-700"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[130px] h-[36px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md font-semibold text-xs text-zinc-700 dark:text-zinc-300">
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent className="rounded-md shadow-xl border-zinc-200 dark:border-zinc-800 z-[100] bg-white dark:bg-zinc-900">
                <SelectItem value="ALL" className="font-semibold text-xs cursor-pointer">All Status</SelectItem>
                <SelectItem value="NEW" className="font-semibold text-xs text-blue-600 cursor-pointer">NEW</SelectItem>
                <SelectItem value="CALLBACK" className="font-semibold text-xs text-purple-600 cursor-pointer">CALLBACK</SelectItem>
                <SelectItem value="CALL_DONE" className="font-semibold text-xs text-cyan-600 cursor-pointer">CALL DONE</SelectItem>
                <SelectItem value="CONVERTED" className="font-semibold text-xs text-green-600 cursor-pointer">CONVERTED</SelectItem>
                <SelectItem value="NOT_INTERESTED" className="font-semibold text-xs text-rose-600 cursor-pointer">NOT INTERESTED</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Date Filter Tabs */}
        {activeDates.length > 0 && (
          <div className="mx-auto px-4 sm:px-6 lg:px-8 py-2 border-t border-zinc-100 dark:border-zinc-800/60 bg-zinc-50/80 dark:bg-zinc-900/50 backdrop-blur-sm">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 snap-x no-scrollbar">
              <button
                onClick={() => setDateFilter("ALL")}
                className={`snap-start whitespace-nowrap px-3 py-1 rounded-md text-[11px] uppercase tracking-wider font-bold transition-all border shrink-0 ${
                  dateFilter === "ALL" 
                    ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 border-zinc-900 shadow-sm" 
                    : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100"
                }`}
              >
                All Dates
              </button>
              {activeDates.map((dateStr) => {
                const dateObj = new Date(dateStr);
                const displayDate = dateObj.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
                return (
                  <button
                    key={dateStr}
                    onClick={() => setDateFilter(dateStr)}
                    className={`snap-start whitespace-nowrap px-3 py-1 rounded-md text-xs font-bold transition-all border shrink-0 ${
                      dateFilter === dateStr 
                        ? "bg-green-600 text-white border-green-600 shadow-md shadow-green-600/20" 
                        : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800 hover:border-green-400"
                    }`}
                  >
                    {displayDate}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </header>

      <main className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        
        {/* Navigation / Filter Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5">
          <div>
            <h2 className="text-2xl font-black text-zinc-900 dark:text-white tracking-tight">Leads & Strategy Bookings</h2>
            <p className="text-xs text-zinc-500 font-medium mt-0.5">Manage incoming restaurant leads, 1-on-1 strategy meetings, and growth plan subscriptions.</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex bg-zinc-200/70 dark:bg-zinc-800/80 p-1 rounded-md border border-zinc-200 dark:border-zinc-700">
              <button 
                onClick={() => setTypeFilter("ALL")}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${typeFilter === 'ALL' ? 'bg-white dark:bg-zinc-900 text-green-700 dark:text-green-400 shadow-sm' : 'text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'}`}
              >
                All ({totalRecords})
              </button>
              <button 
                onClick={() => setTypeFilter("MEETINGS")}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 ${typeFilter === 'MEETINGS' ? 'bg-white dark:bg-zinc-900 text-green-700 dark:text-green-400 shadow-sm' : 'text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'}`}
              >
                <Video className="w-3.5 h-3.5" />
                Google Meet Slots
              </button>
              <button 
                onClick={() => setTypeFilter("REGISTRATION")}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 ${typeFilter === 'REGISTRATION' ? 'bg-white dark:bg-zinc-900 text-green-700 dark:text-green-400 shadow-sm' : 'text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300'}`}
              >
                <CreditCard className="w-3.5 h-3.5" />
                Paid Plans
              </button>
            </div>
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-white dark:bg-[#101018] rounded-md shadow-sm border border-zinc-200 dark:border-zinc-800 overflow-hidden flex flex-col relative">
          {loading && paginatedData.length > 0 && (
            <div className="absolute inset-0 bg-white/50 dark:bg-black/50 backdrop-blur-[1px] z-20 flex items-center justify-center">
              <Loader2 className="h-8 w-8 animate-spin text-green-600" />
            </div>
          )}
          
          <div className="overflow-x-auto min-h-[480px]">
            <table className="w-full text-left text-xs text-zinc-600 dark:text-zinc-300">
              <thead className="bg-zinc-50 dark:bg-zinc-900/80 text-[11px] uppercase text-zinc-500 dark:text-zinc-400 border-b border-zinc-200 dark:border-zinc-800 font-extrabold tracking-wider">
                <tr>
                  <th className="px-5 py-3.5 w-36">Date / Time</th>
                  <th className="px-5 py-3.5 w-48">Owner & Contact</th>
                  <th className="px-5 py-3.5 w-52">Restaurant & City</th>
                  <th className="px-5 py-3.5 w-52">Service / Meeting Slot</th>
                  <th className="px-5 py-3.5 w-36">Payment</th>
                  <th className="px-5 py-3.5 w-44">Lead Status</th>
                  <th className="px-5 py-3.5 min-w-[240px]">Follow-up & Remarks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800/60">
                {paginatedData.map((item) => (
                  <TableRow
                    key={item.registrationId || item.leadId}
                    item={item}
                    savingRemark={savingRemark}
                    onSaveRemark={handleSaveRemark}
                    savingStatus={savingStatus}
                    onSaveStatus={handleSaveStatus}
                    savingWaTag={savingWaTag}
                    onWaTag={handleWaTag}
                  />
                ))}
                
                {paginatedData.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="px-6 py-16 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-zinc-100 dark:bg-zinc-800 mb-3">
                        <Search className="h-6 w-6 text-zinc-400" />
                      </div>
                      <h3 className="text-sm font-bold text-zinc-900 dark:text-white">No records found</h3>
                      <p className="text-xs text-zinc-500 mt-1">Try adjusting your filters or search keywords.</p>
                    </td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="bg-zinc-50 dark:bg-zinc-900/60 border-t border-zinc-200 dark:border-zinc-800 px-5 py-3 flex items-center justify-between">
              <span className="text-xs text-zinc-500 font-medium">
                Showing <span className="text-zinc-900 dark:text-white font-bold">{(currentPage - 1) * itemsPerPage + 1}</span> to <span className="text-zinc-900 dark:text-white font-bold">{Math.min(currentPage * itemsPerPage, totalRecords)}</span> of <span className="text-zinc-900 dark:text-white font-bold">{totalRecords}</span> entries
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="p-1.5 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 hover:bg-zinc-50 disabled:opacity-40 transition-all"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                
                <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300 px-2">
                  Page {currentPage} of {totalPages}
                </span>

                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="p-1.5 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 hover:bg-zinc-50 disabled:opacity-40 transition-all"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

function TableRow({ item, savingRemark, onSaveRemark, savingStatus, onSaveStatus, savingWaTag, onWaTag }) {
  const [localRemark, setLocalRemark] = useState(item.remarks || "");
  const isChanged = localRemark !== (item.remarks || "");
  const [callbackModalOpen, setCallbackModalOpen] = useState(false);
  const [callbackDate, setCallbackDate] = useState(item.callbackDate ? new Date(item.callbackDate) : null);

  const targetId = item.registrationId || item.leadId;
  const targetType = item.registrationId ? "registration" : "lead";

  const dateToUse = item.latestDate || item.createdAt;
  const isNew = new Date(dateToUse).getTime() > Date.now() - 24 * 60 * 60 * 1000;

  const handleSaveRemarkLocal = () => {
    if (isChanged) {
      onSaveRemark(targetId, targetType, localRemark);
    }
  };

  const handleStatusChange = (val) => {
    if (val === "CALLBACK") {
      setCallbackModalOpen(true);
    } else {
      onSaveStatus(targetId, targetType, val);
    }
  };

  const handleCallbackSave = () => {
    if (!callbackDate) return toast.error("Please select a follow-up date!");
    onSaveStatus(targetId, targetType, "CALLBACK", callbackDate);
    setCallbackModalOpen(false);
  };

  const statusColors = {
    NEW: "bg-blue-600 text-white",
    CALLBACK: "bg-purple-600 text-white",
    CALL_DONE: "bg-cyan-600 text-white",
    CONVERTED: "bg-green-600 text-white",
    NOT_INTERESTED: "bg-rose-600 text-white",
  };

  const restaurantName = item.restaurantName || item.businessName || "Unnamed Restaurant";
  const waGreeting = `Hi ${item.name || "there"}, this is regarding your Zomato & Swiggy Growth session for ${restaurantName} with MagicScale!`;

  return (
    <tr className={`transition-colors ${isNew ? 'bg-green-50/20 dark:bg-green-950/10 hover:bg-green-50/40' : 'hover:bg-zinc-50/80 dark:hover:bg-zinc-900/50'}`}>
      
      {/* Date & Time */}
      <td className="px-5 py-4 whitespace-nowrap">
        <div className="font-bold text-zinc-900 dark:text-white">
          {new Date(dateToUse).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
        </div>
        <div className="text-[11px] text-zinc-500 mt-0.5 font-medium">
          {new Date(dateToUse).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}
        </div>
        {isNew && (
          <span className="inline-block mt-1 bg-green-100 text-green-700 dark:bg-green-950/60 dark:text-green-300 text-[10px] font-extrabold px-1.5 py-0.5 rounded-md uppercase">
            New Lead
          </span>
        )}
      </td>
      
      {/* Name & WhatsApp Contact */}
      <td className="px-5 py-4 whitespace-nowrap">
        <div className="font-extrabold text-zinc-900 dark:text-white text-sm">{item.name}</div>
        <a 
          href={`https://wa.me/91${item.phone?.replace(/\D/g, "")}?text=${encodeURIComponent(waGreeting)}`} 
          target="_blank" 
          rel="noreferrer" 
          className="text-green-600 hover:text-green-700 font-bold hover:underline mt-0.5 flex items-center gap-1 text-xs"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          {item.phone}
        </a>
        {item.email && (
          <span className="text-[11px] text-zinc-500 truncate max-w-[160px] block mt-0.5">
            {item.email}
          </span>
        )}
        
        <button
          onClick={() => onWaTag(targetId, targetType, !item.waMessaged)}
          disabled={savingWaTag === targetId}
          className={`mt-1.5 inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-md border transition-all ${
            item.waMessaged
              ? "bg-green-100 text-green-700 border-green-300 dark:bg-green-950/60 dark:text-green-300"
              : "bg-zinc-100 text-zinc-600 border-zinc-200 dark:bg-zinc-800 dark:text-zinc-400"
          }`}
        >
          {savingWaTag === targetId ? <Loader2 className="w-2.5 h-2.5 animate-spin" /> : <span>{item.waMessaged ? "✓" : "+"}</span>}
          WA Sent
        </button>
      </td>

      {/* Restaurant & Location */}
      <td className="px-5 py-4 whitespace-nowrap">
        <div className="flex items-center gap-1.5 font-bold text-zinc-900 dark:text-white">
          <Store className="w-3.5 h-3.5 text-green-600 shrink-0" />
          <span className="truncate max-w-[170px]">{restaurantName}</span>
        </div>
        {item.city && (
          <div className="flex items-center gap-1 text-[11px] text-zinc-500 mt-1">
            <MapPin className="w-3 h-3 text-zinc-400 shrink-0" />
            <span>{item.city}</span>
          </div>
        )}
        {item.dailyOrders && (
          <div className="flex items-center gap-1 text-[10px] font-semibold text-zinc-600 dark:text-zinc-400 mt-1">
            <ShoppingBag className="w-3 h-3 text-green-600 shrink-0" />
            <span>{item.dailyOrders}</span>
          </div>
        )}
      </td>

      {/* Service / Meeting Slot */}
      <td className="px-5 py-4 whitespace-nowrap">
        {item.meetingDate || item.meetingSlot ? (
          <div className="flex flex-col gap-1">
            <div className="inline-flex items-center gap-1.5 bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800/60 px-2 py-1 rounded-md text-[11px] font-bold text-green-800 dark:text-green-300 w-fit">
              <Video className="w-3.5 h-3.5 text-green-600" />
              <span>Google Meet</span>
            </div>
            <div className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 mt-0.5">
              {item.meetingDate}
            </div>
            <div className="text-[11px] text-zinc-500 font-medium">
              {item.meetingSlot}
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200">
              {item.planId || "General Inquiry"}
            </span>
            <span className="text-[11px] text-zinc-500">
              {item.businessActivity || "Growth Plan Inquiry"}
            </span>
          </div>
        )}
      </td>
      
      {/* Payment Information */}
      <td className="px-5 py-4 whitespace-nowrap">
        {item.isRegistered ? (
          <div className="flex flex-col gap-1">
            <span
              className={`inline-flex w-fit px-2 py-0.5 rounded-md text-[10px] font-extrabold tracking-wide uppercase ${
                item.paymentStatus === "SUCCESS"
                  ? "bg-green-100 text-green-700 border border-green-200"
                  : item.paymentStatus === "FAILED"
                  ? "bg-rose-100 text-rose-700 border border-rose-200"
                  : "bg-amber-100 text-amber-700 border border-amber-200"
              }`}
            >
              {item.paymentStatus || "PENDING"}
            </span>
            <span className="text-xs font-extrabold text-zinc-900 dark:text-white">
              ₹{item.amount || item.totalAmount || "0"}
            </span>
          </div>
        ) : (
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-bold text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-950/60 px-2 py-0.5 rounded-md w-fit">
              Free Booking
            </span>
            <span className="text-[11px] text-zinc-400 italic">No payment</span>
          </div>
        )}
      </td>

      {/* Status Selector */}
      <td className="px-5 py-4 whitespace-nowrap">
        <div className="flex flex-col gap-1.5">
          <Select 
            value={item.status || "NEW"} 
            onValueChange={handleStatusChange}
            disabled={savingStatus === targetId}
          >
            <SelectTrigger className={`w-[130px] h-8 rounded-md border-0 text-[11px] font-extrabold uppercase shadow-sm ${statusColors[item.status || "NEW"]}`}>
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent className="rounded-md shadow-xl border-zinc-200 dark:border-zinc-800 z-[100] bg-white dark:bg-zinc-900">
              <SelectItem value="NEW" className="font-semibold text-xs text-blue-600 cursor-pointer">NEW</SelectItem>
              <SelectItem value="CALLBACK" className="font-semibold text-xs text-purple-600 cursor-pointer">CALLBACK</SelectItem>
              <SelectItem value="CALL_DONE" className="font-semibold text-xs text-cyan-600 cursor-pointer">CALL DONE</SelectItem>
              <SelectItem value="CONVERTED" className="font-semibold text-xs text-green-600 cursor-pointer">CONVERTED</SelectItem>
              <SelectItem value="NOT_INTERESTED" className="font-semibold text-xs text-rose-600 cursor-pointer">NOT INTERESTED</SelectItem>
            </SelectContent>
          </Select>
          
          {item.status === "CALLBACK" && (
            <button 
              onClick={() => setCallbackModalOpen(true)}
              className="text-[10px] font-bold text-purple-700 bg-purple-50 hover:bg-purple-100 px-2 py-0.5 rounded-md border border-purple-200 flex items-center gap-1 w-fit"
            >
              <CalendarIcon className="w-3 h-3" />
              {item.callbackDate ? new Date(item.callbackDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }) : "Set Date"}
            </button>
          )}
        </div>
      </td>

      {/* Remarks */}
      <td className="px-5 py-4">
        <div className="relative group">
          <textarea
            value={localRemark}
            onChange={(e) => setLocalRemark(e.target.value)}
            placeholder="Add follow-up remark..."
            className="w-full border border-zinc-200 dark:border-zinc-800 rounded-md px-2.5 py-1.5 text-xs text-zinc-800 dark:text-zinc-200 bg-zinc-50 dark:bg-zinc-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 resize-none min-h-[46px]"
          />
          {isChanged && (
            <button
              onClick={handleSaveRemarkLocal}
              disabled={savingRemark === targetId}
              className="absolute bottom-2 right-2 bg-green-600 text-white p-1.5 rounded-md shadow-md hover:bg-green-700 transition-all disabled:opacity-50"
              title="Save Remark"
            >
              {savingRemark === targetId ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <CheckCircle2 className="h-3.5 w-3.5" />}
            </button>
          )}
        </div>
        
        {/* Callback Date Dialog */}
        <Dialog open={callbackModalOpen} onOpenChange={setCallbackModalOpen}>
          <DialogContent className="sm:max-w-[400px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl rounded-md z-[200]">
            <DialogHeader className="border-b border-zinc-100 dark:border-zinc-800 pb-3">
              <DialogTitle className="text-lg font-bold text-zinc-900 dark:text-white">Set Follow-up Callback</DialogTitle>
              <DialogDescription className="text-xs text-zinc-500 mt-1">
                Select callback date for <strong className="text-zinc-900 dark:text-white">{item.name}</strong> ({restaurantName}).
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-3 py-4">
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    className="w-full text-left font-semibold flex items-center gap-3 border border-zinc-200 dark:border-zinc-800 hover:border-green-500 px-3.5 py-2.5 rounded-md text-xs text-zinc-800 dark:text-zinc-200 bg-zinc-50 dark:bg-zinc-900"
                  >
                    <CalendarIcon className="h-4 w-4 text-green-600" />
                    {callbackDate ? format(callbackDate, "PPP") : <span>Select a date from calendar</span>}
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-2 z-[250] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl rounded-md" align="center">
                  <Calendar
                    mode="single"
                    selected={callbackDate}
                    onSelect={setCallbackDate}
                    initialFocus
                    className="bg-white dark:bg-zinc-900"
                  />
                </PopoverContent>
              </Popover>
            </div>
            <DialogFooter className="border-t border-zinc-100 dark:border-zinc-800 pt-3">
              <button
                onClick={handleCallbackSave}
                className="bg-green-600 text-white px-5 py-2 rounded-md text-xs font-bold hover:bg-green-700 w-full transition-all"
              >
                Confirm Date & Save
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </td>
    </tr>
  );
}
