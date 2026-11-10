"use client";
import React from "react";
import { 
  Sparkles, 
  Layers, 
  Camera, 
  Send, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";

export default function AuditSolution({ onOpenForm }) {
  const steps = [
    {
      number: "01",
      timeline: "Hour 0 – 12",
      icon: Sparkles,
      title: "AI-Powered Menu Engineering & Descriptions",
      description:
        "We rewrite every dish description using sensory food vocabulary, portion indicators (ml / grams / piece counts), and SEO keywords that platform algorithms favor when customers search.",
      deliverables: [
        "Sensory taste descriptors that trigger immediate cravings",
        "Clear quantity sizing to eliminate customer disputes & refund calls",
        "Keywords injected to capture top platform search rankings"
      ],
      tag: "Appetite Copywriting",
      tagColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    },
    {
      number: "02",
      timeline: "Hour 12 – 24",
      icon: Layers,
      title: "High-Margin Add-On & Category Structuring",
      description:
        "We restructure your categories into high-converting meal combos and configure smart add-ons (beverages, desserts, dips, extra cheese) that pop up smoothly before checkout.",
      deliverables: [
        "Strategic multi-choice sweets, drinks & sides pairings",
        "Category reordering to push bestsellers to the top of the fold",
        "Direct ₹80 – ₹150+ increase in Average Order Value (AOV)"
      ],
      tag: "Cart Upselling",
      tagColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    },
    {
      number: "03",
      timeline: "Hour 24 – 36",
      icon: Camera,
      title: "Professional Food Photography Assets",
      description:
        "No need to spend ₹50,000+ on studio cameras, lighting, and food stylists. We generate and calibrate high-resolution, appetizing food photography that complies 100% with Swiggy and Zomato portal rules.",
      deliverables: [
        "Clean, standardized food presentation styled for mobile screens",
        "Eliminates the cost and delay of traditional studio photoshoots",
        "Approved on first submission without rejections"
      ],
      tag: "Visual Styling",
      tagColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    },
    {
      number: "04",
      timeline: "Hour 36 – 48",
      icon: Send,
      title: "Direct Push to Swiggy & Zomato Account Managers",
      description:
        "We upload and verify the new menu directly on your Swiggy Partner and Zomato Merchant dashboards, coordinating with partner account executives so your updated menu goes live within 48 hours.",
      deliverables: [
        "Direct portal upload and tagging by our operations team",
        "100% Menu Score verification badge achievement",
        "Your new sales-ready menu goes live by the weekend"
      ],
      tag: "Live Execution",
      tagColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-white dark:bg-[#0c0c14] relative overflow-hidden scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-green-500/10 text-green-700 dark:text-green-300 text-xs font-bold uppercase tracking-wider mb-4 border border-green-500/20">
            <Clock className="w-3.5 h-3.5 text-green-600" />
            <span>48-Hour Rapid Turnaround</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tight leading-tight">
            How MagicScale Fixes Your Menu in 48 Hours
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Zero hassle for your kitchen staff. We handle everything from visual styling and sensory copywriting to direct dashboard uploads.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="group relative rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-[#101018] p-6 sm:p-8 hover:border-green-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Step Top Bar */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-md bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center text-xs font-black">
                      {step.number}
                    </span>
                    <span className="text-xs font-bold text-zinc-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-green-600" />
                      {step.timeline}
                    </span>
                  </div>

                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-md border uppercase tracking-wider ${step.tagColor}`}>
                    {step.tag}
                  </span>
                </div>

                {/* Step Title & Desc */}
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight mb-3 group-hover:text-green-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 font-medium">
                  {step.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2.5 pt-2 border-t border-zinc-200/60 dark:border-zinc-800/60">
                  {step.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step Footer Micro-line */}
              <div className="mt-6 pt-4 border-t border-zinc-200/50 dark:border-zinc-800/40 flex items-center justify-between text-[11px] text-zinc-400">
                <span>Phase completed in {step.timeline}</span>
                <span className="font-bold text-green-600 dark:text-green-400 flex items-center gap-1">
                  Guaranteed Live <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenForm}
            className="inline-flex items-center gap-2 h-12 sm:h-14 px-8 text-sm sm:text-base font-bold text-white bg-green-600 hover:bg-green-700 rounded-md shadow-xl shadow-green-600/25 transition-all hover:scale-105 active:scale-[0.98]"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Fix My Menu in 48 Hours</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}

