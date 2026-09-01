"use client";
import React from "react";
import Title from "../Title";
import SectionWrapper from "../SectionWrapper";
import { motion } from "framer-motion";
import { Highlighter } from "@/components/ui/highlighter";
import { TrendingUp, Target, Rocket, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";

export default function Lifecycle() {
  const roadmap = [
    {
      step: "01",
      month: "Month 1",
      phase: "Phase 1: Foundation",
      title: "Branding & Acquisition",
      badge: "Weeks 1 – 4",
      icon: Rocket,
      accent: "from-emerald-500 to-green-600",
      pillBg: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
      deliverables: [
        "Professional Menu Setup & Addons",
        "Complete Menu Setup & 100% Score",
        "High-Conversion SEO Descriptions",
        "Targeted Launch Ads on Zomato & Swiggy"
      ],
      target: "₹30K – ₹40K+ First Month Base",
      targetLabel: "Target Revenue",
    },
    {
      step: "02",
      month: "Month 2",
      phase: "Phase 2: Retention",
      title: "Repeat Orders & Ratings",
      badge: "Weeks 5 – 8",
      icon: Target,
      accent: "from-green-500 to-teal-600",
      pillBg: "bg-green-50 text-green-700 dark:bg-green-950/50 dark:text-green-300 border-green-200 dark:border-green-800",
      deliverables: [
        "Human-Agent / AI Calls on Live Orders",
        "Automated 5-Star Rating Collection",
        "Customer Retention & Loyalty Campaigns",
        "Festive & Weekend Discount Tuning"
      ],
      target: "Establish 35%+ Repeat Rate",
      targetLabel: "Retention Goal",
    },
    {
      step: "03",
      month: "Month 3",
      phase: "Phase 3: Scale",
      title: "Profit & Scaling",
      badge: "Weeks 9 – 12",
      icon: TrendingUp,
      accent: "from-emerald-600 to-green-500",
      pillBg: "bg-teal-50 text-teal-700 dark:bg-teal-950/50 dark:text-teal-300 border-teal-200 dark:border-teal-800",
      deliverables: [
        "Ad & Discount Cost Control (ROAS Audit)",
        "High-Margin Best-Seller Pushing",
        "Top-3 Category Organic Placement",
        "Multi-Outlet / Cloud Kitchen Expansion"
      ],
      target: "₹70-80k Monthly Run-Rate",
      targetLabel: "Scaling Target",
    }
  ];

  return (
    <SectionWrapper
      id="roadmap"
      title={
        <div className="mx-auto mb-16 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-green-500/10 border border-green-500/20 text-green-700 dark:text-green-300 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-green-500" />
            Proven 90-Day System
          </div>
          <Title
            title={
              <>
                The 3-Month Premium <br />
                <Highlighter action="highlight" color="#22c55e">
                  <span className="relative z-10 px-3 text-white">Growth Roadmap</span>
                </Highlighter>
              </>
            }
            description="Our step-by-step lifecycle blueprint to scale your restaurant's digital presence, customer loyalty, and daily revenues."
          />
        </div>
      }
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 relative">

          {roadmap.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "80px" }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="group relative flex flex-col"
              >
                {/* Glow Background */}
                <div className="absolute -inset-1 rounded-md bg-gradient-to-b from-green-500/20 via-emerald-500/5 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                <div className="relative h-full flex flex-col bg-white dark:bg-[#0c0c14] border border-neutral-200 dark:border-neutral-800 rounded-md p-4 sm:p-7 shadow-lg dark:shadow-2xl transition-all duration-300 hover:border-green-500/50 hover:-translate-y-1.5">

                  {/* Top Bar with Step & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2.5">
                      <span className="text-3xl font-black tracking-tight text-neutral-900 dark:text-white">
                        {item.step}
                      </span>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-green-600 dark:text-green-400 uppercase tracking-wider">
                          {item.month}
                        </span>
                        <span className="text-[11px] font-medium text-neutral-500">
                          {item.badge}
                        </span>
                      </div>
                    </div>

                    <div className="w-11 h-11 rounded-md bg-green-50 dark:bg-green-950/60 border border-green-200/60 dark:border-green-800/60 flex items-center justify-center text-green-600 dark:text-green-400 shadow-sm group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Phase */}
                  <div className="mb-6">
                    <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-1">
                      {item.phase}
                    </p>
                    <h3 className="text-xl font-extrabold text-neutral-900 dark:text-white tracking-tight leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  {/* Deliverables List */}
                  <div className="space-y-2.5 mb-8 flex-grow">
                    {item.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 leading-tight">
                          {del}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Target Box */}
                  <div className="mt-auto pt-4 border-t border-neutral-100 dark:border-neutral-800/80">
                    <div className="flex flex-col bg-neutral-50 dark:bg-zinc-900/60 rounded-md p-3.5 border border-neutral-200/70 dark:border-neutral-800">
                      <span className="text-[11px] font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-0.5">
                        {item.targetLabel}
                      </span>
                      <span className="text-base font-extrabold text-green-700 dark:text-green-400 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-ping inline-block" />
                        {item.target}
                      </span>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Performance Target Milestone Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 relative overflow-hidden rounded-md bg-gradient-to-r from-green-500/10 via-emerald-500/15 to-green-500/10 border border-green-500/30 p-6 sm:p-7 text-center shadow-lg"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
            <div className="w-12 h-12 rounded-md bg-green-500 text-white flex items-center justify-center shadow-md shadow-green-500/30 shrink-0">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-xs font-black text-green-700 dark:text-green-400 uppercase tracking-widest mb-1">
                Guaranteed Target Benchmark
              </p>
              <p className="text-base sm:text-lg font-medium text-neutral-800 dark:text-neutral-200">
                Existing Restaurants: Target of <strong className="text-green-600 dark:text-green-400 font-black">25% – 30% month-on-month growth</strong> in net order revenue.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </SectionWrapper>
  );
}
