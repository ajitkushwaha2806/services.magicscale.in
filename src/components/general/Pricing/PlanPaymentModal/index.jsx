"use client";
import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";
import { Store, User, Phone, Mail, ShieldCheck, Lock, Loader2, ArrowRight, CheckCircle2 } from "lucide-react";
import posthog from "posthog-js";
import { useRegistration } from "@/hooks/useRegistration";

const STORAGE_KEY = "magicscale_plan_checkout_progress";

export default function PlanPaymentModal({ open, onOpenChange, selectedPlan }) {
  const { registration } = useRegistration();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    restaurantName: "",
  });

  const [isProcessing, setIsProcessing] = useState(false);

  // Restore saved progress from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setFormData((prev) => ({
          ...prev,
          name: parsed.name || prev.name,
          phone: parsed.phone || prev.phone,
          restaurantName: parsed.restaurantName || prev.restaurantName,
        }));
      }
    } catch (err) {
      console.warn("Could not load plan checkout progress", err);
    }
  }, []);

  // Save progress on every state change
  useEffect(() => {
    try {
      if (formData.name || formData.restaurantName || formData.phone) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
      }
    } catch (err) {
      console.warn("Could not save plan checkout progress", err);
    }
  }, [formData]);

  useEffect(() => {
    const handlePaytmOpened = () => {
      onOpenChange(false);
    };
    window.addEventListener("paytm-opened", handlePaytmOpened);
    return () => window.removeEventListener("paytm-opened", handlePaytmOpened);
  }, [onOpenChange]);

  if (!selectedPlan) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim() || !formData.restaurantName.trim()) {
      toast.error("Please enter your name, phone number, and restaurant name.");
      return;
    }

    const cleanPhone = formData.phone.replace(/\D/g, "");
    if (!/^\d{10}$/.test(cleanPhone)) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }

    setIsProcessing(true);

    try {
      // 1. Capture Lead
      try {
        await fetch("/api/lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name?.trim() || "",
            phone: cleanPhone,
            email: formData.email?.trim() || "",
            restaurantName: formData.restaurantName?.trim() || "",
            businessActivity: `Plan Purchase: ${selectedPlan.title}`,
            planId: selectedPlan._id,
          }),
        });

        if (typeof window !== "undefined") {
          posthog?.capture("plan_checkout_initiated", {
            plan_id: selectedPlan._id,
            price: selectedPlan.price,
            restaurant: formData.restaurantName,
          });

          if (window.fbq) {
            window.fbq("track", "InitiateCheckout", {
              content_name: selectedPlan.title,
              value: selectedPlan.price,
              currency: "INR",
            });
          }
        }
      } catch (leadErr) {
        console.warn("Lead save error:", leadErr);
      }

      // 2. Trigger Payment Gateway
      toast.loading("Initiating secure payment gateway...", { id: "pay-toast" });

      await registration.mutateAsync({
        name: formData.name?.trim() || "",
        phone: cleanPhone,
        email: formData.email?.trim() || "",
        restaurantName: formData.restaurantName?.trim() || "",
        businessName: formData.restaurantName?.trim() || "",
        businessActivity: `Growth Plan: ${selectedPlan.title}`,
        planId: selectedPlan._id,
      });

      toast.dismiss("pay-toast");
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch (e) {}
    } catch (error) {
      console.error(error);
      toast.dismiss("pay-toast");
      toast.error(error?.message || "Failed to initialize payment. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(val) => { if (!registration.isPending && !isProcessing) onOpenChange(val); }}>
      <DialogContent className="z-[100] border border-zinc-200 dark:border-zinc-800 p-0 w-[95vw] max-w-[480px] bg-white dark:bg-[#0c0c14] rounded-2xl shadow-2xl overflow-hidden max-h-[94vh] flex flex-col">
        
        {/* Header */}
        <div className="px-6 pt-6 pb-4 sm:px-8 bg-zinc-50 dark:bg-zinc-900/60 border-b border-zinc-100 dark:border-zinc-800">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-xs font-bold text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-950/60 px-3 py-1 rounded-md uppercase tracking-wider">
              {selectedPlan.badge || "Selected Plan"}
            </span>
            <span className="text-base font-extrabold text-zinc-900 dark:text-white">
              ₹{selectedPlan.price?.toLocaleString("en-IN")}
            </span>
          </div>

          <DialogHeader>
            <DialogTitle className="text-left text-2xl font-black text-zinc-900 dark:text-white tracking-tight">
              {selectedPlan.title}
            </DialogTitle>
            <DialogDescription className="text-left text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm mt-1 font-medium leading-relaxed">
              Enter your details to proceed with instant account onboarding.
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Form */}
        <div className="px-6 py-6 sm:px-8 flex-1 overflow-y-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Restaurant Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wide">
                Restaurant / Brand Name *
              </label>
              <div className="relative">
                <Store className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3.5 pointer-events-none" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Fatkong Kitchen"
                  value={formData.restaurantName}
                  onChange={(e) => setFormData({ ...formData, restaurantName: e.target.value })}
                  className="w-full h-11 pl-10 pr-3 text-sm rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 focus:bg-white focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none text-zinc-900 dark:text-white font-medium"
                />
              </div>
            </div>

            {/* Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wide">
                Your Full Name *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3.5 pointer-events-none" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-11 pl-10 pr-3 text-sm rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 focus:bg-white focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none text-zinc-900 dark:text-white font-medium"
                />
              </div>
            </div>

            {/* Phone */}
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
                  placeholder="9876543210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "") })}
                  className="w-full h-11 pl-10 pr-3 text-sm rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 focus:bg-white focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none text-zinc-900 dark:text-white font-medium"
                />
              </div>
            </div>

            {/* Submit / Pay Button */}
            <div className="pt-4">
              <Button
                type="submit"
                disabled={isProcessing || registration.isPending}
                className="w-full h-13 bg-green-600 hover:bg-green-700 text-white text-base font-bold rounded-md shadow-xl shadow-green-600/30 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                {isProcessing || registration.isPending ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>Proceed to Pay ₹{selectedPlan.price?.toLocaleString("en-IN")}</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </>
                )}
              </Button>
              <div className="flex items-center justify-center gap-1.5 text-center text-[11px] text-zinc-500 dark:text-zinc-400 mt-2.5">
                <ShieldCheck className="w-3.5 h-3.5 text-green-600" />
                <span>100% Encrypted & Secure Payment via Paytm / UPI</span>
              </div>
            </div>

          </form>
        </div>

      </DialogContent>
    </Dialog>
  );
}
