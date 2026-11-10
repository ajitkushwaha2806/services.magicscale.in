"use client";
import React, { useState } from "react";
import { Store, Phone, Zap, ArrowRight, ShieldCheck, CheckCircle2, Loader2, Sparkles } from "lucide-react";
import { toast } from "react-hot-toast";
import posthog from "posthog-js";

export default function AuditForm({ id = "claim-form" }) {
  const [formData, setFormData] = useState({
    restaurantName: "",
    phone: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e, type = "free-preview") => {
    if (e) e.preventDefault();

    if (!formData.restaurantName?.trim() || !formData.phone?.trim()) {
      toast.error("Please enter both your Restaurant Name and WhatsApp Number.");
      return;
    }

    const cleanPhone = (formData.phone || "").replace(/\D/g, "");
    if (!/^\d{10}$/.test(cleanPhone)) {
      toast.error("Please enter a valid 10-digit WhatsApp number.");
      return;
    }

    setIsProcessing(true);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.restaurantName.trim(),
          phone: cleanPhone,
          restaurantName: formData.restaurantName.trim(),
          businessActivity: `Audit Landing Page: ${type === "instant-fix" ? "Fix My Menu Now (₹9,999)" : "Claim Free 3-Dish Preview"}`,
          planId: type === "instant-fix" ? "menu-revamp-paid" : "free-3-dish-preview",
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to submit");
      }

      if (typeof window !== "undefined") {
        posthog?.capture("audit_preview_claimed", {
          restaurant: formData.restaurantName,
          type,
        });

        if (window.fbq) {
          window.fbq("track", "Lead", {
            content_name: type === "instant-fix" ? "Fix My Menu Now" : "Free 3-Dish Preview",
            content_category: "Audit Funnel",
          });
        }
      }

      setSubmitted(true);
      toast.success("Free 3-Dish Preview Claimed!");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <section id={id} className="py-20 sm:py-28 bg-white dark:bg-[#0c0c14] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-md border-2 border-green-500/40 bg-zinc-50 dark:bg-[#101018] p-7 sm:p-12 shadow-2xl overflow-hidden">
          {/* Subtle Ambient Light */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-green-500/10 blur-3xl rounded-full pointer-events-none" />

          {submitted ? (
            <div className="text-center py-6 space-y-4 max-w-lg mx-auto">
              <div className="w-16 h-16 rounded-md bg-green-100 dark:bg-green-950/80 border-2 border-green-500/40 text-green-600 dark:text-green-400 mx-auto flex items-center justify-center shadow-xl shadow-green-500/10">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white">
                Preview Request Claimed! 🎉
              </h3>

              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Thank you! Our menu team is generating a free 3-dish visual preview for <strong className="text-green-600 dark:text-green-400">{formData.restaurantName}</strong>.
              </p>

              <div className="p-4 rounded-md bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs text-left space-y-2 text-zinc-600 dark:text-zinc-300">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-green-600 shrink-0" />
                  <span>We'll review your live Swiggy & Zomato listings</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-green-600 shrink-0" />
                  <span>We will WhatsApp your 3-dish preview to <strong>{formData.phone}</strong> within a few hours.</span>
                </div>
              </div>

              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 underline pt-2"
              >
                Submit another restaurant
              </button>
            </div>
          ) : (
            <div className="max-w-xl mx-auto text-center space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-green-500/10 text-green-700 dark:text-green-300 text-xs font-bold uppercase tracking-wider mb-3 border border-green-500/20">
                  <Sparkles className="w-3.5 h-3.5 text-green-600" />
                  <span>Zero Risk • Free Sample First</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-zinc-900 dark:text-white tracking-tight">
                  See How Your Menu Looks Before You Pay
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                  Enter your restaurant details below. We'll send you a free, customized 3-dish visual preview on WhatsApp within a few hours.
                </p>
              </div>

              {/* 2-Field Form */}
              <form onSubmit={(e) => handleSubmit(e, "free-preview")} className="space-y-4 text-left">
                {/* Field 1: Restaurant Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wide">
                    Restaurant / Brand Name *
                  </label>
                  <div className="relative">
                    <Store className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3.5 pointer-events-none" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Biryani Blues / Fatkong"
                      value={formData.restaurantName}
                      onChange={(e) => setFormData({ ...formData, restaurantName: e.target.value })}
                      className="w-full h-12 pl-10 pr-3 text-sm rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none text-zinc-900 dark:text-white font-medium shadow-sm transition-colors"
                    />
                  </div>
                </div>

                {/* Field 2: WhatsApp Number */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wide">
                    WhatsApp Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3.5 pointer-events-none" />
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      placeholder="10-digit WhatsApp number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "") })}
                      className="w-full h-12 pl-10 pr-3 text-sm rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none text-zinc-900 dark:text-white font-medium shadow-sm transition-colors"
                    />
                  </div>
                </div>

                {/* Primary Button */}
                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full h-13 py-3.5 bg-green-600 hover:bg-green-700 text-white font-black text-sm sm:text-base rounded-md shadow-xl shadow-green-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.98]"
                  >
                    {isProcessing ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        <Zap className="w-4 h-4 text-amber-300 fill-amber-300" />
                        <span>Claim My Free 3-Dish Preview</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>

                  {/* Secondary Instant Upgrade Button */}
                  <button
                    type="button"
                    onClick={(e) => handleSubmit(e, "instant-fix")}
                    disabled={isProcessing}
                    className="w-full h-11 border-2 border-zinc-200 dark:border-zinc-800 hover:border-green-500 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 font-bold text-xs sm:text-sm rounded-md transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Or skip preview: Fix My Entire Menu Now (₹9,999)</span>
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-center text-[11px] text-zinc-400 dark:text-zinc-500 pt-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-green-600" />
                  <span>100% Free Sample • No Payment Required • Zero Spam</span>
                </div>
              </form>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

