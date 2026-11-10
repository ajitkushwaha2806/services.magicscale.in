"use client";
import React from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function AuditFeaturesShowcase() {
  return (
    <section id="features" className="py-12 sm:py-16 bg-zinc-50/70 dark:bg-zinc-950/60 border-b border-zinc-200/60 dark:border-zinc-800/60 scroll-mt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-green-500/10 text-green-700 dark:text-green-300 text-xs font-bold uppercase tracking-wider mb-2.5 border border-green-500/20">
            <Sparkles className="w-3.5 h-3.5 text-green-600" />
            <span>Complete Menu Revamp</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white tracking-tight">
            Solid Descriptions & Smart Upselling
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium">
            We write sensory appetite copy with exact portion sizes and configure high-margin add-ons before checkout.
          </p>
        </div>

        {/* 2 Cards Grid matching the Hero After-Card design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          
          {/* Feature 2 Card: Solid Descriptions */}
          <div className="rounded-md border-2 border-green-500 bg-white dark:bg-[#101018] shadow-xl overflow-hidden flex flex-col">
            <div className="px-3.5 py-2.5 bg-green-50/80 dark:bg-green-950/30 border-b border-green-100 dark:border-green-900/40 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-green-700 dark:text-green-300 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
                02. Solid Descriptions
              </span>
              <span className="text-[10px] sm:text-[11px] font-black text-green-700 dark:text-green-300 whitespace-nowrap bg-green-100 dark:bg-green-900/50 px-2 py-0.5 rounded-md border border-green-300/40">
                100% Clarity
              </span>
            </div>

            <div className="relative w-full aspect-[720/800] bg-white">
              <Image
                src="/assets/menu-work/mouthwatering-descriptions.jpg"
                alt="Solid sensory description for Dal Fry Rice Bowl"
                fill
                sizes="(max-width: 640px) 100vw, 420px"
                className="object-cover object-top"
                priority
              />
            </div>

            <div className="px-3 py-2 bg-green-50/50 dark:bg-zinc-900/60 border-t border-green-100 dark:border-zinc-800 text-center">
              <span className="text-xs font-bold text-green-700 dark:text-green-400 whitespace-nowrap">
                ✓ Sensory copy • Exact 650 ml portion sizing
              </span>
            </div>
          </div>

          {/* Feature 3 Card: Smart Add-Ons & Upselling */}
          <div className="rounded-md border-2 border-green-500 bg-white dark:bg-[#101018] shadow-xl overflow-hidden flex flex-col">
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
                className="object-cover object-top"
                priority
              />
            </div>

            <div className="px-3 py-2 bg-green-50/50 dark:bg-zinc-900/60 border-t border-green-100 dark:border-zinc-800 text-center">
              <span className="text-xs font-bold text-green-700 dark:text-green-400 whitespace-nowrap">
                ✓ High-margin dessert pairings • Boosts cart value
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

