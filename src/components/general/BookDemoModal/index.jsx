"use client";
import React, { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";
import { Video, Calendar, Clock, User, Phone, Mail, Store, MapPin, CheckCircle2, Loader2, Sparkles, ArrowRight, ShieldCheck, ChevronDown, Check, ShoppingBag } from "lucide-react";
import posthog from "posthog-js";

export default function BookDemoModal({ open, onOpenChange }) {
  // Generate next 7 days starting today
  const getDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      const dayName = i === 0 ? "Today" : i === 1 ? "Tomorrow" : d.toLocaleDateString("en-IN", { weekday: "short" });
      const dateText = d.toLocaleDateString("en-IN", { day: "numeric", month: "short" });
      const value = d.toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" });
      dates.push({ dayName, dateText, value });
    }
    return dates;
  };

  const dates = getDates();

  const slots = [
    "11:00 AM – 11:30 AM",
    "12:00 PM – 12:30 PM",
    "01:00 PM – 01:30 PM",
    "02:00 PM – 02:30 PM",
    "03:00 PM – 03:30 PM",
    "04:00 PM – 04:30 PM",
    "05:00 PM – 05:30 PM",
    "05:30 PM – 06:00 PM"
  ];

  const orderOptions = [
    { value: "0-10 orders/day", label: "0 – 10 orders / day" },
    { value: "10-30 orders/day", label: "10 – 30 orders / day" },
    { value: "30-80 orders/day", label: "30 – 80 orders / day" },
    { value: "80+ orders/day", label: "80+ orders / day" },
    { value: "New Outlet", label: "New Outlet (Not live yet)" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    restaurantName: "",
    phone: "",
    email: "",
    city: "",
    dailyOrders: "10-30 orders/day",
    meetingDate: dates[0]?.value || "",
    meetingSlot: "12:00 PM – 12:30 PM",
  });

  const [ordersDropdownOpen, setOrdersDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOrdersDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim() || !formData.restaurantName.trim()) {
      toast.error("Please fill in your restaurant name, your name, and WhatsApp number.");
      return;
    }

    const cleanPhone = formData.phone.replace(/\D/g, "");
    if (!/^\d{10}$/.test(cleanPhone)) {
      toast.error("Please enter a valid 10-digit WhatsApp phone number.");
      return;
    }

    setIsProcessing(true);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: cleanPhone,
          email: formData.email.trim(),
          restaurantName: formData.restaurantName.trim(),
          city: formData.city.trim(),
          dailyOrders: formData.dailyOrders,
          meetingDate: formData.meetingDate,
          meetingSlot: formData.meetingSlot,
          businessActivity: `Free Google Meet Demo: ${formData.restaurantName} | Slot: ${formData.meetingDate} ${formData.meetingSlot}`,
          planId: "growth-consultation",
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to save booking");
      }

      if (typeof window !== "undefined") {
        posthog?.capture("meeting_slot_booked", {
          restaurant: formData.restaurantName,
          date: formData.meetingDate,
          slot: formData.meetingSlot,
        });

        if (window.fbq) {
          window.fbq("track", "Schedule", {
            content_name: "Google Meet Growth Demo",
          });
        }
      }

      setSubmitted(true);
      toast.success("Google Meet strategy session booked!");
    } catch (error) {
      console.error(error);
      toast.error(error?.message || "Failed to book slot. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setSubmitted(false);
    }, 300);
  };

  const selectedOrderLabel = orderOptions.find((o) => o.value === formData.dailyOrders)?.label || formData.dailyOrders;

  return (
    <Dialog open={open} onOpenChange={(val) => { if (!isProcessing) onOpenChange(val); }}>
      <DialogContent className="z-[100] border border-zinc-200 dark:border-zinc-800 p-0 w-[95vw] max-w-[540px] bg-white dark:bg-[#0c0c14] rounded-2xl shadow-2xl overflow-hidden max-h-[94vh] flex flex-col">
        
        {/* Header */}
        <div className="px-6 pt-6 pb-4 sm:px-8 bg-zinc-50 dark:bg-zinc-900/60 border-b border-zinc-100 dark:border-zinc-800">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-green-500/10 border border-green-500/20 text-green-700 dark:text-green-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Video className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
            1-on-1 Google Meet Growth Session
          </div>

          <DialogHeader>
            <DialogTitle className="text-left text-2xl font-black text-zinc-900 dark:text-white tracking-tight">
              {submitted ? "Slot Confirmed 🎉" : "Schedule Your Strategy Meeting"}
            </DialogTitle>
            <DialogDescription className="text-left text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm mt-1 font-medium leading-relaxed">
              {submitted
                ? `We have reserved your slot for ${formData.restaurantName}.`
                : "Select your preferred slot between 11:00 AM to 6:00 PM."}
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Form or Confirmed State */}
        <div className="overflow-y-auto px-6 py-5 sm:px-8 flex-1">
          {submitted ? (
            <div className="py-6 flex flex-col items-center text-center space-y-5">
              <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-950/60 border-2 border-green-500/30 flex items-center justify-center text-green-600 dark:text-green-400 shadow-xl shadow-green-500/10">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2 max-w-sm">
                <h4 className="text-xl font-bold text-zinc-900 dark:text-white">
                  Meeting Booked for {formData.restaurantName}
                </h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Scheduled for <strong className="text-green-600 dark:text-green-400 font-bold">{formData.meetingDate}</strong> at <strong className="text-green-600 dark:text-green-400 font-bold">{formData.meetingSlot}</strong>.
                </p>
              </div>

              <div className="bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 text-left w-full text-xs space-y-2 text-zinc-600 dark:text-zinc-300">
                <div className="flex items-center gap-2">
                  <Video className="w-4 h-4 text-green-500 shrink-0" />
                  <span>Google Meet invite will be sent to WhatsApp <strong>{formData.phone}</strong> & <strong>{formData.email || "Email"}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-green-500 shrink-0" />
                  <span>Includes live Swiggy & Zomato profile audit and growth roadmap</span>
                </div>
              </div>

              <div className="w-full pt-2">
                <Button
                  onClick={handleClose}
                  className="w-full h-12 bg-green-600 hover:bg-green-700 text-white font-bold rounded-md shadow-lg shadow-green-600/20"
                >
                  Done
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Date Selection */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wide flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-green-600" />
                    1. Select Meeting Date
                  </label>
                  <span className="text-[10px] text-zinc-400 font-medium">Scroll horizontally &rarr;</span>
                </div>
                
                <div className="flex items-center gap-2 overflow-x-auto pb-1.5 pt-0.5 no-scrollbar snap-x -mx-1 px-1">
                  {dates.map((d, i) => {
                    const isSelected = formData.meetingDate === d.value;
                    return (
                      <button
                        type="button"
                        key={i}
                        onClick={() => setFormData({ ...formData, meetingDate: d.value })}
                        className={`shrink-0 min-w-[78px] sm:min-w-[84px] py-2 px-2.5 rounded-md border text-center transition-all flex flex-col items-center justify-center snap-start ${
                          isSelected
                            ? "border-green-500 bg-green-500 text-white shadow-md shadow-green-500/25 scale-[1.02]"
                            : "border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:border-green-400"
                        }`}
                      >
                        <span className="text-xs font-bold leading-tight">{d.dayName}</span>
                        <span className={`text-[11px] font-medium leading-tight mt-0.5 ${isSelected ? "text-green-100" : "text-zinc-400"}`}>
                          {d.dateText}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Slot Selection (11 AM to 6 PM) */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wide flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-green-600" />
                  2. Select Slot (11:00 AM – 6:00 PM)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {slots.map((slot, i) => {
                    const isSelected = formData.meetingSlot === slot;
                    return (
                      <button
                        type="button"
                        key={i}
                        onClick={() => setFormData({ ...formData, meetingSlot: slot })}
                        className={`p-2.5 text-center rounded-md border text-xs font-bold transition-all ${
                          isSelected
                            ? "border-green-500 bg-green-50 text-green-800 dark:bg-green-950/60 dark:text-green-300 shadow-sm"
                            : "border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 text-zinc-700 dark:text-zinc-300 hover:border-green-300"
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Restaurant & Personal Details */}
              <div className="space-y-3 pt-2 border-t border-zinc-100 dark:border-zinc-800">
                <label className="text-xs font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wide flex items-center gap-1.5">
                  <Store className="w-3.5 h-3.5 text-green-600" />
                  3. Restaurant & Contact Info
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-zinc-600 dark:text-zinc-400">Restaurant / Brand Name *</span>
                    <div className="relative">
                      <Store className="w-4 h-4 text-zinc-400 absolute left-3 top-3 pointer-events-none" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Fatkong Chinese"
                        value={formData.restaurantName}
                        onChange={(e) => setFormData({ ...formData, restaurantName: e.target.value })}
                        className="w-full h-10 pl-9 pr-3 text-xs sm:text-sm rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 focus:bg-white focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none text-zinc-900 dark:text-white font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-zinc-600 dark:text-zinc-400">Your Full Name *</span>
                    <div className="relative">
                      <User className="w-4 h-4 text-zinc-400 absolute left-3 top-3 pointer-events-none" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full h-10 pl-9 pr-3 text-xs sm:text-sm rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 focus:bg-white focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none text-zinc-900 dark:text-white font-medium"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-zinc-600 dark:text-zinc-400">WhatsApp Number *</span>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-zinc-400 absolute left-3 top-3 pointer-events-none" />
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        placeholder="9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "") })}
                        className="w-full h-10 pl-9 pr-3 text-xs sm:text-sm rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 focus:bg-white focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none text-zinc-900 dark:text-white font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-zinc-600 dark:text-zinc-400">Email (for Calendar Invite)</span>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-zinc-400 absolute left-3 top-3 pointer-events-none" />
                      <input
                        type="email"
                        placeholder="rahul@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full h-10 pl-9 pr-3 text-xs sm:text-sm rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 focus:bg-white focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none text-zinc-900 dark:text-white font-medium"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-zinc-600 dark:text-zinc-400">City / Location</span>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-zinc-400 absolute left-3 top-3 pointer-events-none" />
                      <input
                        type="text"
                        placeholder="e.g. Mumbai / Delhi NCR"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full h-10 pl-9 pr-3 text-xs sm:text-sm rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 focus:bg-white focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none text-zinc-900 dark:text-white font-medium"
                      />
                    </div>
                  </div>

                  {/* Custom Daily Orders Dropdown */}
                  <div className="space-y-1 relative" ref={dropdownRef}>
                    <span className="text-[11px] font-bold text-zinc-600 dark:text-zinc-400">Daily Orders on Zomato/Swiggy</span>
                    
                    <button
                      type="button"
                      onClick={() => setOrdersDropdownOpen(!ordersDropdownOpen)}
                      className="w-full h-10 px-3 text-xs rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 focus:bg-white focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none text-zinc-900 dark:text-white font-medium flex items-center justify-between transition-all"
                    >
                      <div className="flex items-center gap-2 truncate">
                        <ShoppingBag className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                        <span className="truncate">{selectedOrderLabel}</span>
                      </div>
                      <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform duration-200 shrink-0 ${ordersDropdownOpen ? "rotate-180" : ""}`} />
                    </button>

                    {ordersDropdownOpen && (
                      <div className="absolute left-0 right-0 bottom-full mb-1 sm:bottom-auto sm:top-full sm:mt-1 z-50 bg-white dark:bg-[#14141e] border border-zinc-200 dark:border-zinc-800 rounded-md shadow-2xl p-1.5 space-y-1 animate-in fade-in zoom-in-95 duration-150">
                        {orderOptions.map((opt) => {
                          const isSelected = formData.dailyOrders === opt.value;
                          return (
                            <button
                              type="button"
                              key={opt.value}
                              onClick={() => {
                                setFormData({ ...formData, dailyOrders: opt.value });
                                setOrdersDropdownOpen(false);
                              }}
                              className={`w-full text-left px-3 py-2 rounded-md text-xs font-semibold flex items-center justify-between transition-colors ${
                                isSelected
                                  ? "bg-green-50 text-green-700 dark:bg-green-950/60 dark:text-green-300 font-bold"
                                  : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/80"
                              }`}
                            >
                              <span>{opt.label}</span>
                              {isSelected && <Check className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>

              </div>

              {/* Submit Button */}
              <div className="pt-3">
                <Button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full h-13 bg-green-600 hover:bg-green-700 text-white text-base font-bold rounded-md shadow-xl shadow-green-600/30 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                >
                  {isProcessing ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <Video className="w-4 h-4" />
                      <span>Confirm Free Google Meet Slot</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </>
                  )}
                </Button>
                <div className="flex items-center justify-center gap-2 text-center text-[11px] text-zinc-500 dark:text-zinc-400 mt-2.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-green-600" />
                  <span>100% Free Consultation • No Credit Card Required</span>
                </div>
              </div>

            </form>
          )}
        </div>

      </DialogContent>
    </Dialog>
  );
}
