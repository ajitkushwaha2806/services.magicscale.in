"use client";
import React from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { Highlighter } from "@/components/ui/highlighter";

export default function AuditFeaturesShowcase() {
  return (
    <section id="features" className="py-14 sm:py-20 bg-gradient-to-b from-zinc-50/80 via-white to-zinc-50/50 dark:from-zinc-950/80 dark:via-[#0c0c14] dark:to-zinc-950/50 border-b border-zinc-200/60 dark:border-zinc-800/60 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-green-500/10 text-green-700 dark:text-green-300 text-xs font-bold uppercase tracking-wider mb-3.5 border border-green-500/20 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-green-600 animate-pulse" />
            <span>Complete Menu Engineering</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tight leading-[1.2] max-w-2xl mx-auto">
            Sensory Copy, Smart Upselling &amp;{" "}
            <span className="inline-block whitespace-nowrap">
              <Highlighter action="highlight" color="#22c55e">
                <span className="relative z-10 px-2 sm:px-3 py-0.5 text-white font-black">
                  90+ Score
                </span>
              </Highlighter>
            </span>
          </h2>

          <p className="mt-3 text-xs sm:text-base text-zinc-600 dark:text-zinc-300 font-medium max-w-xl mx-auto leading-relaxed">
            We write emotion-driven food copy with portion clarity, configure high-margin checkout add-ons, and calibrate your score into the top 10% tier.
          </p>
        </div>

        {/* 3 Cards Grid matching the Hero After-Card design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          
          {/* Feature 2 Card: Solid Descriptions */}
          <div className="rounded-md border-2 border-green-500 bg-white dark:bg-[#101018] shadow-xl overflow-hidden flex flex-col hover:-translate-y-1 transition-all duration-300 group">
            <div className="px-3.5 py-2.5 bg-green-50/80 dark:bg-green-950/30 border-b border-green-100 dark:border-green-900/40 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-green-700 dark:text-green-300 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
                02. Solid Descriptions
              </span>
              <span className="text-[10px] sm:text-[11px] font-black text-green-700 dark:text-green-300 whitespace-nowrap bg-green-100 dark:bg-green-900/50 px-2 py-0.5 rounded-md border border-green-300/40">
                100% Clarity
              </span>
            </div>

            <div className="relative w-full aspect-[720/759] bg-white">
              <Image
                src="/assets/menu-work/mouthwatering-descriptions.jpg"
                alt="Solid sensory description for Dal Fry Rice Bowl"
                fill
                sizes="(max-width: 640px) 100vw, 420px"
                className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                priority
              />
            </div>

            <div className="px-3 py-2.5 bg-green-50/50 dark:bg-zinc-900/60 border-t border-green-100 dark:border-zinc-800 text-center">
              <span className="text-xs font-bold text-green-700 dark:text-green-400 whitespace-nowrap">
                ✓ Sensory copy • 650 ml portion clarity
              </span>
            </div>
          </div>

          {/* Feature 3 Card: Smart Add-Ons & Upselling */}
          <div className="rounded-md border-2 border-green-500 bg-white dark:bg-[#101018] shadow-xl overflow-hidden flex flex-col hover:-translate-y-1 transition-all duration-300 group">
            <div className="px-3.5 py-2.5 bg-green-50/80 dark:bg-green-950/30 border-b border-green-100 dark:border-green-900/40 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-green-700 dark:text-green-300 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
                03. Smart Upselling
              </span>
              <span className="text-[10px] sm:text-[11px] font-black text-green-700 dark:text-green-300 whitespace-nowrap bg-green-100 dark:bg-green-900/50 px-2 py-0.5 rounded-md border border-green-300/40">
                +₹120 AOV
              </span>
            </div>

            <div className="relative w-full aspect-[720/759] bg-white">
              <Image
                src="/assets/menu-work/smart-addons-upselling.jpg"
                alt="Smart add-ons and upselling"
                fill
                sizes="(max-width: 640px) 100vw, 420px"
                className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                priority
              />
            </div>

            <div className="px-3 py-2.5 bg-green-50/50 dark:bg-zinc-900/60 border-t border-green-100 dark:border-zinc-800 text-center">
              <span className="text-xs font-bold text-green-700 dark:text-green-400 whitespace-nowrap">
                ✓ High-margin dessert & beverage upsells
              </span>
            </div>
          </div>

          {/* Feature 4 Card: 90+ Menu Score Optimization */}
          <div className="rounded-md border-2 border-green-500 bg-white dark:bg-[#101018] shadow-xl overflow-hidden flex flex-col sm:col-span-2 lg:col-span-1 max-w-md sm:mx-auto lg:max-w-none w-full hover:-translate-y-1 transition-all duration-300 group">
            <div className="px-3.5 py-2.5 bg-green-50/80 dark:bg-green-950/30 border-b border-green-100 dark:border-green-900/40 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-green-700 dark:text-green-300 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
                04. 90+ Menu Score
              </span>
              <span className="text-[10px] sm:text-[11px] font-black text-green-700 dark:text-green-300 whitespace-nowrap bg-green-100 dark:bg-green-900/50 px-2 py-0.5 rounded-md border border-green-300/40">
                Top 10%
              </span>
            </div>

            <div className="relative w-full aspect-[720/759] bg-[#050505] flex items-center justify-center p-3 sm:p-4">
              <Image
                src="/assets/menu-work/menu-score-optimization.png"
                alt="90+ Menu Score optimization gauge showing 93% Excellent"
                fill
                sizes="(max-width: 640px) 100vw, 420px"
                className="object-contain p-2 sm:p-3 group-hover:scale-[1.02] transition-transform duration-500"
                priority
              />
            </div>

            <div className="px-3 py-2.5 bg-green-50/50 dark:bg-zinc-900/60 border-t border-green-100 dark:border-zinc-800 text-center">
              <span className="text-xs font-bold text-green-700 dark:text-green-400 whitespace-nowrap">
                ✓ 93% Excellent score • Algorithmic boost
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
