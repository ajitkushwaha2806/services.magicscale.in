"use client";
import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";
import { Video, Calendar, Clock, User, Phone, Store, CheckCircle2, Loader2, Sparkles, ArrowRight, ArrowLeft, ShieldCheck, Edit2 } from "lucide-react";
import posthog from "posthog-js";

const STORAGE_KEY = "magicscale_demo_booking_progress";

export default function BookDemoModal({ open, onOpenChange }) {
  const [step, setStep] = useState(1);

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

  const [formData, setFormData] = useState({
    name: "",
    restaurantName: "",
    phone: "",
    meetingDate: dates[0]?.value || "",
    meetingSlot: "12:00 PM – 12:30 PM",
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Restore saved progress from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setFormData((prev) => ({
          ...prev,
          name: parsed.name || prev.name,
          restaurantName: parsed.restaurantName || prev.restaurantName,
          phone: parsed.phone || prev.phone,
          meetingSlot: parsed.meetingSlot || prev.meetingSlot,
          meetingDate: parsed.meetingDate || prev.meetingDate,
        }));
        if (parsed.step && (parsed.step === 1 || parsed.step === 2)) {
          setStep(parsed.step);
        }
      }
    } catch (err) {
      console.warn("Could not read demo booking progress", err);
    }
  }, []);

  // Save progress on every state change
  useEffect(() => {
    try {
      if (!submitted && (formData.name || formData.restaurantName || formData.phone || formData.meetingSlot)) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...formData, step }));
      }
    } catch (err) {
      console.warn("Could not save demo booking progress", err);
    }
  }, [formData, step, submitted]);

  useEffect(() => {
    if (open) {
      setSubmitted(false);
    }
  }, [open]);

  const handleNextStep = (e) => {
    e.preventDefault();
    if (!formData.meetingDate || !formData.meetingSlot) {
      toast.error("Please select both a date and a time slot.");
      return;
    }
    setStep(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.restaurantName?.trim() || !formData.name?.trim() || !formData.phone?.trim()) {
      toast.error("Please fill in your restaurant name, full name, and WhatsApp number.");
      return;
    }

    const cleanPhone = (formData.phone || "").replace(/\D/g, "");
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
          name: formData.name?.trim() || "",
          phone: cleanPhone,
          restaurantName: formData.restaurantName?.trim() || "",
          meetingDate: formData.meetingDate,
          meetingSlot: formData.meetingSlot,
          businessActivity: `Free Google Meet Demo: ${formData.restaurantName || ""} | Slot: ${formData.meetingDate} ${formData.meetingSlot}`,
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
          window.fbq("track", "Lead", {
            content_name: "Google Meet Growth Strategy Session",
            content_category: "Demo Booking",
          });
          window.fbq("track", "Schedule", {
            content_name: "Google Meet Growth Demo",
            date: formData.meetingDate,
            slot: formData.meetingSlot,
          });
        }
      }

      // Clear stored progress on successful submission
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch (e) {}

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
      setStep(1);
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={(val) => { if (!isProcessing) onOpenChange(val); }}>
      <DialogContent className="z-[100] border border-zinc-200 dark:border-zinc-800 p-0 w-[95vw] max-w-[480px] bg-white dark:bg-[#0c0c14] rounded-md shadow-2xl overflow-hidden max-h-[94vh] flex flex-col">
        <div className="px-5 pt-5 pb-3 sm:px-6 bg-zinc-50 dark:bg-zinc-900/60 border-b border-zinc-100 dark:border-zinc-800">
          <div className="flex items-center justify-between mb-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-green-500/10 border border-green-500/20 text-green-700 dark:text-green-300 text-[11px] font-bold uppercase tracking-wider">
              <Video className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
              1-on-1 Google Meet Session
            </div>

            {!submitted && (
              <span className="text-[11px] font-bold text-zinc-500 dark:text-zinc-400">
                Step {step} of 2
              </span>
            )}
          </div>

          <DialogHeader>
            <DialogTitle className="text-left text-xl sm:text-2xl font-black text-zinc-900 dark:text-white tracking-tight">
              {submitted
                ? "Slot Confirmed 🎉"
                : step === 1
                  ? "Select Date & Time Slot"
                  : "Restaurant & Contact Details"}
            </DialogTitle>
          </DialogHeader>
        </div>

        <div className="overflow-y-auto px-5 py-4 sm:px-6 flex-1">
          {submitted ? (
            <div className="py-4 flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-950/60 border-2 border-green-500/30 flex items-center justify-center text-green-600 dark:text-green-400 shadow-xl shadow-green-500/10">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1.5 max-w-sm">
                <h4 className="text-lg font-bold text-zinc-900 dark:text-white">
                  Meeting Booked for {formData.restaurantName}
                </h4>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                  Scheduled for <strong className="text-green-600 dark:text-green-400 font-bold">{formData.meetingDate}</strong> at <strong className="text-green-600 dark:text-green-400 font-bold">{formData.meetingSlot}</strong>.
                </p>
              </div>

              <div className="bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 rounded-md p-3.5 text-left w-full text-xs space-y-2 text-zinc-600 dark:text-zinc-300">
                <div className="flex items-center gap-2">
                  <Video className="w-4 h-4 text-green-500 shrink-0" />
                  <span>Google Meet invite will be sent to WhatsApp <strong>{formData.phone}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-green-500 shrink-0" />
                  <span>Includes live Swiggy & Zomato profile audit and growth roadmap</span>
                </div>
              </div>

              <div className="w-full pt-1">
                <Button
                  onClick={handleClose}
                  className="w-full h-11 bg-green-600 hover:bg-green-700 text-white font-bold rounded-md shadow-lg shadow-green-600/20"
                >
                  Done
                </Button>
              </div>
            </div>
          ) : step === 1 ? (
            <form onSubmit={handleNextStep} className="space-y-4">

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wide flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-green-600" />
                    Select Meeting Date
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
                        className={`shrink-0 min-w-[76px] sm:min-w-[80px] py-2 px-2 rounded-md border text-center transition-all flex flex-col items-center justify-center snap-start ${isSelected
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
                  Select Slot (11:00 AM – 6:00 PM)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {slots.map((slot, i) => {
                    const isSelected = formData.meetingSlot === slot;
                    return (
                      <button
                        type="button"
                        key={i}
                        onClick={() => setFormData({ ...formData, meetingSlot: slot })}
                        className={`p-2.5 text-center rounded-md border text-xs font-bold transition-all ${isSelected
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

              <div className="bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800/60 rounded-md p-2.5 flex items-center justify-between text-xs text-green-800 dark:text-green-300">
                <div className="flex items-center gap-2 font-bold">
                  <Video className="w-4 h-4 text-green-600" />
                  <span>{formData.meetingDate} at {formData.meetingSlot}</span>
                </div>
                <span className="text-[10px] font-extrabold uppercase bg-green-600 text-white px-2 py-0.5 rounded">Free</span>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  className="w-full h-12 bg-green-600 hover:bg-green-700 text-white text-sm font-bold rounded-md shadow-xl shadow-green-600/30 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                >
                  <span>Next: Restaurant Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>

                <div className="flex items-center justify-center gap-2 text-center text-[11px] text-zinc-500 dark:text-zinc-400 mt-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-green-600" />
                  <span>100% Free 1-on-1 Consultation</span>
                </div>
              </div>

            </form>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-2.5 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200 font-semibold truncate">
                  <Calendar className="w-3.5 h-3.5 text-green-600 shrink-0" />
                  <span className="truncate">{formData.meetingDate} • {formData.meetingSlot}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-green-600 hover:text-green-700 text-xs font-bold flex items-center gap-1 shrink-0 ml-2 hover:underline"
                >
                  <Edit2 className="w-3 h-3" />
                  Change
                </button>
              </div>

              {/* Restaurant / Brand Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wide">
                  Restaurant / Brand Name *
                </label>
                <div className="relative">
                  <Store className="w-4 h-4 text-zinc-400 absolute left-3 top-3.5 pointer-events-none" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Fatkong Chinese"
                    value={formData.restaurantName}
                    onChange={(e) => setFormData({ ...formData, restaurantName: e.target.value })}
                    className="w-full h-11 pl-9 pr-3 text-sm rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 focus:bg-white focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none text-zinc-900 dark:text-white font-medium"
                  />
                </div>
              </div>

              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wide">
                  Your Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-zinc-400 absolute left-3 top-3.5 pointer-events-none" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full h-11 pl-9 pr-3 text-sm rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 focus:bg-white focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none text-zinc-900 dark:text-white font-medium"
                  />
                </div>
              </div>

              {/* WhatsApp Number */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wide">
                  WhatsApp Phone Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-zinc-400 absolute left-3 top-3.5 pointer-events-none" />
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "") })}
                    className="w-full h-11 pl-9 pr-3 text-sm rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 focus:bg-white focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none text-zinc-900 dark:text-white font-medium"
                  />
                </div>
              </div>

              {/* Action Buttons: Back + Submit */}
              <div className="pt-2 flex items-center gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(1)}
                  disabled={isProcessing}
                  className="h-12 px-4 border-zinc-200 dark:border-zinc-800 rounded-md font-bold text-xs flex items-center gap-1.5 shrink-0"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </Button>

                <Button
                  type="submit"
                  disabled={isProcessing}
                  className="flex-1 h-12 bg-green-600 hover:bg-green-700 text-white text-sm font-bold rounded-md shadow-xl shadow-green-600/30 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                >
                  {isProcessing ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <Video className="w-4 h-4" />
                      <span>Confirm Free Slot</span>
                      <ArrowRight className="w-4 h-4 ml-0.5" />
                    </>
                  )}
                </Button>
              </div>

            </form>
          )}
        </div>

      </DialogContent>
    </Dialog>
  );
}
