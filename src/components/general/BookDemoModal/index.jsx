"use client";
import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";
import { Store, UtensilsCrossed, TrendingUp, User, Phone, MapPin, CheckCircle2, Loader2, Sparkles, ArrowRight, ShieldCheck, Send } from "lucide-react";
import posthog from "posthog-js";

const STORAGE_KEY = "magicscale_enquiry_progress";

const SERVICES = [
  {
    id: "onboarding",
    label: "New Outlet Onboarding",
    desc: "Swiggy & Zomato registration, documents & live launch",
    icon: Store,
    hasPlatforms: true,
  },
  {
    id: "menu",
    label: "Menu Work",
    desc: "Appetizing photos, descriptions & 90+ menu score",
    icon: UtensilsCrossed,
    hasPlatforms: true,
  },
  {
    id: "growth",
    label: "Account Handling (Growth)",
    desc: "Full daily account management, high-ROI ads & rating boost",
    icon: TrendingUp,
    hasPlatforms: false,
  },
];

export default function BookDemoModal({ open, onOpenChange }) {
  const [formData, setFormData] = useState({
    restaurantName: "",
    name: "",
    phone: "",
    city: "",
  });

  const [selectedService, setSelectedService] = useState("onboarding");
  const [platforms, setPlatforms] = useState(["Swiggy", "Zomato"]);
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
          restaurantName: parsed.restaurantName || prev.restaurantName,
          name: parsed.name || prev.name,
          phone: parsed.phone || prev.phone,
          city: parsed.city || prev.city,
        }));
        if (parsed.selectedService) setSelectedService(parsed.selectedService);
        if (parsed.platforms && Array.isArray(parsed.platforms)) setPlatforms(parsed.platforms);
      }
    } catch (err) {
      console.warn("Could not read enquiry progress", err);
    }
  }, []);

  // Save progress on change
  useEffect(() => {
    try {
      if (!submitted && (formData.name || formData.restaurantName || formData.phone)) {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({
            ...formData,
            selectedService,
            platforms,
          })
        );
      }
    } catch (err) {
      console.warn("Could not save enquiry progress", err);
    }
  }, [formData, selectedService, platforms, submitted]);

  useEffect(() => {
    if (open) {
      setSubmitted(false);
    }
  }, [open]);

  const togglePlatform = (plat) => {
    setPlatforms((prev) => {
      if (prev.includes(plat)) {
        if (prev.length === 1) return prev; // keep at least 1 platform selected
        return prev.filter((p) => p !== plat);
      } else {
        return [...prev, plat];
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.restaurantName?.trim() || !formData.name?.trim() || !formData.phone?.trim()) {
      toast.error("Please fill in your restaurant name, your name, and WhatsApp number.");
      return;
    }

    const cleanPhone = (formData.phone || "").replace(/\D/g, "");
    if (!/^\d{10}$/.test(cleanPhone)) {
      toast.error("Please enter a valid 10-digit WhatsApp phone number.");
      return;
    }

    const serviceObj = SERVICES.find((s) => s.id === selectedService) || SERVICES[0];
    const platformStr = serviceObj.hasPlatforms && platforms.length > 0
      ? ` (${platforms.join(", ")})`
      : "";
    const fullServiceRequirement = `${serviceObj.label}${platformStr}`;

    setIsProcessing(true);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name?.trim() || "",
          phone: cleanPhone,
          restaurantName: formData.restaurantName?.trim() || "",
          city: formData.city?.trim() || "",
          dailyOrders: fullServiceRequirement,
          businessActivity: `Website Enquiry: ${formData.restaurantName?.trim() || ""} | Service: ${fullServiceRequirement} | City: ${formData.city?.trim() || "N/A"}`,
          planId: "website-enquiry",
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to submit enquiry");
      }

      if (typeof window !== "undefined") {
        posthog?.capture("enquiry_submitted", {
          restaurant: formData.restaurantName,
          city: formData.city,
          service: fullServiceRequirement,
          platforms,
        });

        if (window.fbq) {
          window.fbq("track", "Lead", {
            content_name: "Website Growth Enquiry",
            content_category: "Enquiry Form",
          });
        }
      }

      // Clear stored progress on successful submission
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch (e) {}

      setSubmitted(true);
      toast.success("Enquiry submitted successfully!");
    } catch (error) {
      console.error(error);
      toast.error(error?.message || "Failed to submit enquiry. Please try again.");
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

  const currentServiceObj = SERVICES.find((s) => s.id === selectedService) || SERVICES[0];

  return (
    <Dialog open={open} onOpenChange={(val) => { if (!isProcessing) onOpenChange(val); }}>
      <DialogContent className="z-[100] border border-zinc-200 dark:border-zinc-800 p-0 w-[96vw] max-w-[620px] bg-white dark:bg-[#0c0c14] rounded-md shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        {submitted ? (
          /* Celebratory Clean Success Screen */
          <div className="p-6 sm:p-8 flex flex-col items-center text-center space-y-4 my-auto">
            <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-950/60 border-2 border-green-500/30 flex items-center justify-center text-green-600 dark:text-green-400 shadow-xl shadow-green-500/10 animate-in zoom-in-75 duration-300">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1 max-w-sm">
              <h3 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white tracking-tight">
                Thank You, {formData.name || "Partner"}!
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                Enquiry received for <strong className="text-green-600 dark:text-green-400 font-bold">{formData.restaurantName}</strong>.
              </p>
            </div>

            <div className="bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 rounded-md p-4 text-left w-full text-xs space-y-2.5 text-zinc-600 dark:text-zinc-300">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>Our growth consultant will call / WhatsApp you on <strong className="text-zinc-900 dark:text-white">{formData.phone}</strong> shortly.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>We will prepare a customized Swiggy &amp; Zomato audit and roadmap for your outlet.</span>
              </div>
            </div>

            <div className="w-full pt-2">
              <Button
                onClick={handleClose}
                className="w-full h-11 bg-green-600 hover:bg-green-700 text-white font-bold rounded-md shadow-lg shadow-green-600/20 text-sm cursor-pointer"
              >
                Done
              </Button>
            </div>
          </div>
        ) : (
          <>
            <DialogHeader className="sr-only">
              <DialogTitle>Grow Your Restaurant Orders</DialogTitle>
            </DialogHeader>

            {/* Modal Form Body */}
            <div className="overflow-y-auto px-5 pt-7 pb-5 sm:px-6 flex-1">
              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Restaurant / Brand Name */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wide">
                    Restaurant / Brand Name *
                  </label>
                  <div className="relative">
                    <Store className="w-4 h-4 text-zinc-400 absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Biryani Blues / Fatkong"
                      value={formData.restaurantName}
                      onChange={(e) => setFormData({ ...formData, restaurantName: e.target.value })}
                      className="w-full h-10 pl-9 pr-3 text-sm rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 focus:bg-white focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none text-zinc-900 dark:text-white font-medium transition-colors"
                    />
                  </div>
                </div>

                {/* Full Name */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wide">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-zinc-400 absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-10 pl-9 pr-3 text-sm rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 focus:bg-white focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none text-zinc-900 dark:text-white font-medium transition-colors"
                    />
                  </div>
                </div>

                {/* WhatsApp Number */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wide">
                    WhatsApp Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-zinc-400 absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      placeholder="10-digit WhatsApp number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "") })}
                      className="w-full h-10 pl-9 pr-3 text-sm rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 focus:bg-white focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none text-zinc-900 dark:text-white font-medium transition-colors"
                    />
                  </div>
                </div>

                {/* City / Outlet Location */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wide">
                    City / Location
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-zinc-400 absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="e.g. Mumbai, Delhi NCR, Bangalore"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full h-10 pl-9 pr-3 text-sm rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 focus:bg-white focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none text-zinc-900 dark:text-white font-medium transition-colors"
                    />
                  </div>
                </div>

                {/* 3 Requirement Cards */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wide">
                      Requirement *
                    </label>
                    <span className="text-[10px] text-zinc-500 dark:text-zinc-400">
                      Select your goal
                    </span>
                  </div>

                  {/* Clean Interactive Tiles with Integrated Platform Selectors */}
                  <div className="space-y-2">
                    {SERVICES.map((s) => {
                      const isSelected = selectedService === s.id;
                      const Icon = s.icon;
                      return (
                        <div
                          key={s.id}
                          onClick={() => setSelectedService(s.id)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              setSelectedService(s.id);
                            }
                          }}
                          className={`rounded-md border transition-all cursor-pointer overflow-hidden ${
                            isSelected
                              ? "border-green-600 bg-green-50/40 dark:bg-green-950/20 ring-1 ring-green-600/30 shadow-xs"
                              : "border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40 hover:bg-zinc-100/70 dark:hover:bg-zinc-800/60 hover:border-zinc-300"
                          }`}
                        >
                          {/* Card Header */}
                          <div className="p-2.5 sm:p-3 flex items-center justify-between gap-3">
                            <div className="flex items-center gap-2.5 min-w-0">
                              <div
                                className={`w-8 h-8 rounded-md flex items-center justify-center shrink-0 transition-colors ${
                                  isSelected
                                    ? "bg-green-600 text-white shadow-xs"
                                    : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 border border-zinc-200/80 dark:border-zinc-700/80"
                                }`}
                              >
                                <Icon className="w-4 h-4" />
                              </div>
                              <div className="min-w-0 text-left">
                                <div className={`text-xs sm:text-[13px] font-bold leading-tight ${
                                  isSelected ? "text-zinc-900 dark:text-white" : "text-zinc-700 dark:text-zinc-300"
                                }`}>
                                  {s.label}
                                </div>
                                <div className="text-[10px] text-zinc-500 dark:text-zinc-400 truncate mt-0.5">
                                  {s.desc}
                                </div>
                              </div>
                            </div>

                            {/* Radio Ring */}
                            <div
                              className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 transition-colors border ${
                                isSelected
                                  ? "border-green-600 bg-green-600 text-white"
                                  : "border-zinc-300 dark:border-zinc-600 bg-transparent"
                              }`}
                            >
                              {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                            </div>
                          </div>

                          {/* Contextual Platform Multi-Selector (Only inside active card) */}
                          {isSelected && s.hasPlatforms && (
                            <div
                              onClick={(e) => e.stopPropagation()}
                              className="px-3 pb-3 pt-2 border-t border-green-200/80 dark:border-green-900/50 bg-white/70 dark:bg-zinc-900/70 animate-in fade-in slide-in-from-top-1 duration-200"
                            >
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-[11px] font-bold text-green-900 dark:text-green-300 uppercase tracking-wide">
                                  Select Platform(s):
                                </span>
                                <span className="text-[10px] font-medium text-zinc-500 dark:text-zinc-400">
                                  Tap to toggle
                                </span>
                              </div>

                              <div className="grid grid-cols-2 gap-2 w-full">
                                {/* Swiggy Button */}
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    togglePlatform("Swiggy");
                                  }}
                                  className={`h-9 px-3 rounded-md text-xs font-black border transition-all cursor-pointer flex items-center justify-center gap-2 select-none active:scale-[0.98] ${
                                    platforms.includes("Swiggy")
                                      ? "bg-[#FC8019] text-white border-[#FC8019] shadow-sm shadow-[#FC8019]/25 hover:bg-[#e47316]"
                                      : "bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-400 hover:border-zinc-300"
                                  }`}
                                >
                                  <span
                                    className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-black shrink-0 ${
                                      platforms.includes("Swiggy")
                                        ? "bg-white text-[#FC8019]"
                                        : "border border-zinc-300 dark:border-zinc-600 text-transparent"
                                    }`}
                                  >
                                    ✓
                                  </span>
                                  <span>Swiggy</span>
                                </button>

                                {/* Zomato Button */}
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    togglePlatform("Zomato");
                                  }}
                                  className={`h-9 px-3 rounded-md text-xs font-black border transition-all cursor-pointer flex items-center justify-center gap-2 select-none active:scale-[0.98] ${
                                    platforms.includes("Zomato")
                                      ? "bg-[#E23744] text-white border-[#E23744] shadow-sm shadow-[#E23744]/25 hover:bg-[#cb2e3a]"
                                      : "bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-400 hover:border-zinc-300"
                                  }`}
                                >
                                  <span
                                    className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-black shrink-0 ${
                                      platforms.includes("Zomato")
                                        ? "bg-white text-[#E23744]"
                                        : "border border-zinc-300 dark:border-zinc-600 text-transparent"
                                    }`}
                                  >
                                    ✓
                                  </span>
                                  <span>Zomato</span>
                                </button>
                              </div>
                            </div>
                          )}

                          {/* Contextual Note for Account Handling */}
                          {isSelected && !s.hasPlatforms && (
                            <div className="px-3 pb-2.5 pt-2 border-t border-green-200/80 dark:border-green-900/50 bg-white/70 dark:bg-zinc-900/70 flex items-center gap-1.5 text-[11px] font-semibold text-green-700 dark:text-green-300 animate-in fade-in slide-in-from-top-1 duration-200">
                              <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-green-600 dark:text-green-400" />
                              <span>Includes full 360° growth management for Swiggy &amp; Zomato</span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full h-11 bg-green-600 hover:bg-green-700 text-white text-sm font-black uppercase tracking-wider rounded-md shadow-xl shadow-green-600/30 flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer"
                  >
                    {isProcessing ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit</span>
                        <ArrowRight className="w-4 h-4 ml-0.5" />
                      </>
                    )}
                  </Button>

                  <div className="flex items-center justify-center gap-2 text-center text-[10px] text-zinc-500 dark:text-zinc-400 mt-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-green-600 shrink-0" />
                    <span>100% Free Consultation • No Spam Guaranteed</span>
                  </div>
                </div>
              </form>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
