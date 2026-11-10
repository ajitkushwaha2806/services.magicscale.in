"use client";
import React, { useState } from "react";
import Title from "../Title";
import SectionWrapper from "../SectionWrapper";
import { Check, Shield, Zap, ArrowRight } from "lucide-react";
import { Highlighter } from "@/components/ui/highlighter";
import { motion } from "framer-motion";
import { PLANS } from "@/constants/plans";
import PlanPaymentModal from "./PlanPaymentModal";

export default function Pricing() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const basicFeatures = [
    "Basic Food Photography",
    "Complete Menu Setup",
    "Menu Score Optimization - up to 90%",
    "Zomato & Swiggy Ads Management",
    "Customer Review Management",
    "Weekly Consultation & Reports",
  ];

  const premiumFeatures = [
    "Everything in Basic Plan",
    "Professional Restaurant Logo Design",
    "Premium Food Photography",
    "Advanced Complete Menu Setup",
    "Menu Score Optimization - up to 100%",
    "SEO-Friendly Menu Content",
    "Advanced Pricing & Discount Strategy",
    "Advanced Zomato & Swiggy Ads",
    "Strong New Customer Acquisition",
    "Strong Repeat Customer Focus",
    "Human Agent Rating Calls for Live Orders",
    "Advanced Customer Retention Campaigns",
    "Festival & Seasonal Campaigns",
    "Dedicated Growth Consultant",
    "Priority Support",
    "Advanced Profit & Performance Optimization",
  ];

  const handleSelectPlan = (planKey) => {
    const plan = PLANS[planKey];
    if (plan) {
      if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", "ViewContent", {
          content_name: plan.title,
          content_ids: [plan._id],
          content_type: "product",
          value: plan.price,
          currency: "INR",
        });
      }
      setSelectedPlan(plan);
      setModalOpen(true);
    }
  };

  return (
    <SectionWrapper
      id="pricing"
      title={
        <div className="mx-auto mb-10 text-center max-w-3xl">
          <Title
            title={
              <>
                Choose Your{" "}
                <Highlighter action="highlight" color="#22c55e">
                  <span className="text-white relative z-10 px-2 py-1">Growth Plan</span>
                </Highlighter>
              </>
            }
            description="Two clear service levels - one for structured account growth and one for aggressive brand, customer, and retention growth."
          />
        </div>
      }
    >
      {/* Plan Payment Modal */}
      <PlanPaymentModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        selectedPlan={selectedPlan}
      />
      


      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        
        {/* Basic Plan */}
        <div className="flex flex-col bg-white dark:bg-[#10101a] rounded-md border border-neutral-200 dark:border-neutral-800 shadow-xl overflow-hidden transition-all duration-300 hover:border-green-500/30 hover:shadow-2xl hover:-translate-y-1">
          <div className="p-4 sm:p-8 pb-0">
            <h3 className="text-2xl font-black text-neutral-900 dark:text-white">Basic Growth</h3>
            <p className="text-sm text-neutral-500 mt-2 font-medium">For essential visibility & optimization.</p>
            
            <div className="grid grid-cols-2 gap-4 my-6">
              {/* 1 Month Option */}
              <div className="flex flex-col p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
                <span className="text-sm font-bold text-neutral-500 mb-2">1 Month</span>
                <div className="flex items-end gap-1 mb-4">
                  <span className="text-3xl font-black text-neutral-900 dark:text-white">₹9,999</span>
                </div>
                <button
                  onClick={() => handleSelectPlan("basic-growth-1m")}
                  className="w-full py-2.5 bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-neutral-900 text-sm rounded-lg font-bold transition-all active:scale-[0.98] mt-auto"
                >
                  Choose 1 Month
                </button>
              </div>

              {/* 3 Months Option */}
              <div className="flex flex-col p-4 rounded-xl border-2 border-green-500/50 bg-green-50/50 dark:bg-green-500/5 relative hover:border-green-500 transition-colors">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider whitespace-nowrap shadow-sm">
                  Save ₹5,998
                </div>
                <span className="text-sm font-bold text-neutral-500 mb-2">3 Months</span>
                <div className="flex flex-col mb-4">
                  <div className="flex items-end gap-1">
                    <span className="text-3xl font-black text-neutral-900 dark:text-white">₹23,999</span>
                  </div>
                  <span className="text-xs text-neutral-400 font-medium line-through mt-1">₹29,997 total</span>
                </div>
                <button
                  onClick={() => handleSelectPlan("basic-growth-3m")}
                  className="w-full py-2.5 bg-green-500 hover:bg-green-600 text-white text-sm rounded-lg font-bold transition-all shadow-md active:scale-[0.98] mt-auto"
                >
                  Choose 3 Months
                </button>
              </div>
            </div>

            <p className="text-center text-xs text-neutral-400 mt-3 font-semibold flex items-center justify-center gap-1">
              <Shield className="w-3.5 h-3.5" /> Safe & Secure Payment via Paytm
            </p>
          </div>
          
          <div className="p-4 sm:p-8 bg-neutral-50 dark:bg-neutral-900/30 mt-8 flex-grow border-t border-neutral-100 dark:border-neutral-800/50">
            <p className="font-bold text-neutral-900 dark:text-white mb-4 text-sm uppercase tracking-wider">Features Included</p>
            <ul className="space-y-4">
              {basicFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" strokeWidth={3} />
                  <span className="text-neutral-600 dark:text-neutral-300 font-medium text-[15px] leading-snug">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="flex flex-col bg-white dark:bg-[#10101a] rounded-md border-2 border-green-500 shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-green-500/10 hover:-translate-y-1 relative">
          
          <div className="absolute top-0 inset-x-0 h-8 bg-green-500 text-white text-xs font-black uppercase tracking-widest flex items-center justify-center gap-1.5">
            <Zap className="w-4 h-4 fill-white" /> Recommended for max ROI
          </div>

          <div className="p-4 sm:p-8 pb-0 pt-12 sm:pt-16">
            <h3 className="text-2xl font-black text-neutral-900 dark:text-white flex items-center gap-3">
              Premium Growth
            </h3>
            <p className="text-sm text-neutral-500 mt-2 font-medium">Advanced growth solution for maximum scale.</p>
            
            <div className="grid grid-cols-2 gap-4 my-6">
              {/* 1 Month Option */}
              <div className="flex flex-col p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
                <span className="text-sm font-bold text-neutral-500 mb-2">1 Month</span>
                <div className="flex items-end gap-1 mb-4">
                  <span className="text-3xl font-black text-green-600 dark:text-green-500">₹14,999</span>
                </div>
                <button
                  onClick={() => handleSelectPlan("premium-growth-1m")}
                  className="w-full py-2.5 bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-neutral-900 text-sm rounded-lg font-bold transition-all active:scale-[0.98] mt-auto"
                >
                  Choose 1 Month
                </button>
              </div>

              {/* 3 Months Option */}
              <div className="flex flex-col p-4 rounded-xl border-2 border-green-500/50 bg-green-50/50 dark:bg-green-500/5 relative hover:border-green-500 transition-colors">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider whitespace-nowrap shadow-sm">
                  Save ₹8,998
                </div>
                <span className="text-sm font-bold text-neutral-500 mb-2">3 Months</span>
                <div className="flex flex-col mb-4">
                  <div className="flex items-end gap-1">
                    <span className="text-3xl font-black text-green-600 dark:text-green-500">₹35,999</span>
                  </div>
                  <span className="text-xs text-neutral-400 font-medium line-through mt-1">₹44,997 total</span>
                </div>
                <button
                  onClick={() => handleSelectPlan("premium-growth-3m")}
                  className="w-full py-2.5 bg-green-500 hover:bg-green-600 text-white text-sm rounded-lg font-bold transition-all shadow-md active:scale-[0.98] mt-auto"
                >
                  Choose 3 Months
                </button>
              </div>
            </div>

            <p className="text-center text-xs text-neutral-400 mt-3 font-semibold flex items-center justify-center gap-1">
              <Shield className="w-3.5 h-3.5" /> Safe & Secure Payment via Paytm
            </p>
          </div>
          
          <div className="p-4 sm:p-8 bg-green-50/50 dark:bg-green-950/10 mt-8 flex-grow border-t border-green-100 dark:border-green-900/30">
            <p className="font-bold text-neutral-900 dark:text-white mb-4 text-sm uppercase tracking-wider">Features Included</p>
            <ul className="space-y-4">
              {premiumFeatures.map((feature, idx) => {
                const isHighlight = idx === 0;
                return (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 mt-0.5 ${isHighlight ? 'text-blue-500' : 'text-green-500'}`} strokeWidth={3} />
                    <span className={`font-medium text-[15px] leading-snug ${isHighlight ? 'text-blue-600 dark:text-blue-400 font-bold' : 'text-neutral-600 dark:text-neutral-300'}`}>
                      {feature}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
