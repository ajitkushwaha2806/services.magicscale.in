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
  const [isQuarterly, setIsQuarterly] = useState(false);
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
      
      {/* Toggle */}
      <div className="flex justify-center items-center mb-16">
        <div className="relative flex items-center p-1 bg-neutral-100 dark:bg-neutral-900 rounded-full border border-neutral-200 dark:border-neutral-800 shadow-sm">
          <button
            onClick={() => setIsQuarterly(false)}
            className={`relative w-40 py-2.5 text-sm font-bold rounded-full transition-all duration-300 z-10 ${
              !isQuarterly ? "text-white" : "text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
            }`}
          >
            1 Month
          </button>
          <button
            onClick={() => setIsQuarterly(true)}
            className={`relative w-48 py-2.5 text-sm font-bold rounded-full transition-all duration-300 z-10 flex items-center justify-center gap-2 ${
              isQuarterly ? "text-white" : "text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
            }`}
          >
            3 Months <span className="px-2 py-0.5 rounded bg-green-500/20 text-green-500 text-[10px] uppercase tracking-wider">Save 20%</span>
          </button>
          
          <motion.div
            className="absolute h-[calc(100%-8px)] bg-green-500 rounded-full shadow-md z-0 top-1"
            initial={false}
            animate={{
              left: isQuarterly ? "164px" : "4px",
              width: isQuarterly ? "188px" : "156px"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        
        {/* Basic Plan */}
        <div className="flex flex-col bg-white dark:bg-[#10101a] rounded-md border border-neutral-200 dark:border-neutral-800 shadow-xl overflow-hidden transition-all duration-300 hover:border-green-500/30 hover:shadow-2xl hover:-translate-y-1">
          <div className="p-8 pb-0">
            <h3 className="text-2xl font-black text-neutral-900 dark:text-white">Basic Growth</h3>
            <p className="text-sm text-neutral-500 mt-2 font-medium">For essential visibility & optimization.</p>
            
            <div className="flex flex-col gap-1 my-6">
              <div className="flex items-end gap-2">
                <span className="text-5xl font-black text-neutral-900 dark:text-white tracking-tight">
                  ₹{isQuarterly ? "23,999" : "9,999"}
                </span>
                <span className="text-neutral-500 font-bold mb-1">
                  / {isQuarterly ? "3 months" : "month"}
                </span>
              </div>
              {isQuarterly && (
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm text-neutral-400 line-through font-medium">₹29,997</span>
                  <span className="text-sm text-green-500 font-bold">Save ₹5,998</span>
                </div>
              )}
            </div>

            <button
              onClick={() => handleSelectPlan(isQuarterly ? "basic-growth-3m" : "basic-growth-1m")}
              className="w-full bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-neutral-900 h-14 text-lg rounded-md shadow-lg transition-all font-bold flex items-center justify-center gap-2 group active:scale-[0.98]"
            >
              <span>Choose Basic</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            <p className="text-center text-xs text-neutral-400 mt-3 font-semibold flex items-center justify-center gap-1">
              <Shield className="w-3.5 h-3.5" /> Safe & Secure Payment via Paytm
            </p>
          </div>
          
          <div className="p-8 bg-neutral-50 dark:bg-neutral-900/30 mt-8 flex-grow border-t border-neutral-100 dark:border-neutral-800/50">
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

          <div className="p-8 pb-0 pt-16">
            <h3 className="text-2xl font-black text-neutral-900 dark:text-white flex items-center gap-3">
              Premium Growth
            </h3>
            <p className="text-sm text-neutral-500 mt-2 font-medium">Advanced growth solution for maximum scale.</p>
            
            <div className="flex flex-col gap-1 my-6">
              <div className="flex items-end gap-2">
                <span className="text-5xl font-black text-green-600 dark:text-green-500 tracking-tight">
                  ₹{isQuarterly ? "35,999" : "14,999"}
                </span>
                <span className="text-neutral-500 font-bold mb-1">
                  / {isQuarterly ? "3 months" : "month"}
                </span>
              </div>
              {isQuarterly && (
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm text-neutral-400 line-through font-medium">₹44,997</span>
                  <span className="text-sm text-green-500 font-bold">Save ₹8,998</span>
                </div>
              )}
            </div>

            <button
              onClick={() => handleSelectPlan(isQuarterly ? "premium-growth-3m" : "premium-growth-1m")}
              className="w-full bg-green-500 hover:bg-green-600 text-white h-14 text-lg rounded-md shadow-[0_8px_20px_rgba(34,197,94,0.3)] transition-all font-bold flex items-center justify-center gap-2 group active:scale-[0.98]"
            >
              <span>Choose Premium</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            <p className="text-center text-xs text-neutral-400 mt-3 font-semibold flex items-center justify-center gap-1">
              <Shield className="w-3.5 h-3.5" /> Safe & Secure Payment via Paytm
            </p>
          </div>
          
          <div className="p-8 bg-green-50/50 dark:bg-green-950/10 mt-8 flex-grow border-t border-green-100 dark:border-green-900/30">
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
