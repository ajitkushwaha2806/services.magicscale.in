"use client";
import React from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Sparkles, ArrowRight } from "lucide-react";
import ClientLogoCarousel from "@/components/general/ClientLogoCarousel";

export default function AuditHero({ onOpenForm }) {
  const searchParams = useSearchParams();
  const rawName = searchParams.get("name") || searchParams.get("restaurant");
  const rawArea = searchParams.get("area") || searchParams.get("city");

  const restaurantName = rawName ? decodeURIComponent(rawName) : "";
  const area = rawArea ? decodeURIComponent(rawArea) : "Delhi NCR";

  return (
    <div className="relative w-full px-4 sm:px-6 lg:px-8 text-center pt-24 sm:pt-32 pb-10 sm:pb-16 overflow-hidden flex flex-col items-center bg-gradient-to-b from-green-500/5 via-transparent to-transparent">
      {/* Social Proof Badge */}
      <div className="inline-flex items-center gap-2 rounded-md bg-green-500/10 border border-green-500/20 px-3.5 py-1.5 text-xs sm:text-sm font-bold text-green-700 dark:text-green-300 shadow-sm mb-6 animate-in fade-in slide-in-from-top-3 duration-500">
        <Sparkles className="w-4 h-4 text-green-600 dark:text-green-400 shrink-0 animate-pulse" />
        <span className="whitespace-nowrap">Worked with Over 1,000+ Restaurants</span>
      </div>

      {/* Main Headline */}
      <h1 className="w-full max-w-4xl mx-auto text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.18] sm:leading-[1.15] text-zinc-900 dark:text-white animate-in fade-in slide-in-from-top-4 duration-700">
        Stop losing <span className="text-rose-600 underline decoration-rose-500/30 decoration-wavy">40% of orders</span> to text-only menus on Swiggy & Zomato.
      </h1>

      {/* Subheadline */}
      <p className="mt-4 sm:mt-5 text-sm sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl font-medium leading-relaxed mx-auto px-2">
        Hungry diners order with their eyes. We engineer appetizing photos, high-converting descriptions, and profitable add-ons within <span className="text-green-600 dark:text-green-400 font-bold">48 hours</span>.
      </p>

      {/* Single Focused Primary Action Button */}
      <div className="mt-6 sm:mt-7 mb-4 flex justify-center w-full max-w-md sm:max-w-none">
        <button
          onClick={onOpenForm}
          className="w-full sm:w-auto h-12 sm:h-14 px-10 sm:px-14 text-base sm:text-lg font-black text-white bg-green-600 hover:bg-green-700 rounded-md shadow-xl shadow-green-600/25 transition-all hover:scale-105 active:scale-[0.98] flex items-center justify-center gap-2 group whitespace-nowrap cursor-pointer uppercase tracking-wider"
        >
          <span>Enquire Now</span>
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 shrink-0" />
        </button>
      </div>

      {/* Client Logo Carousel */}
      <div className="w-full my-2 sm:my-3 relative z-10">
        <ClientLogoCarousel />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          MENU TRANSFORMATION SHOWCASE
          Clean, consistent gap (gap-4 on mobile, gap-5/6 on desktop)
          between every card.
      ────────────────────────────────────────────────────────────── */}
      <div className="w-full max-w-6xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10 mt-3 sm:mt-4">
        
        {/* ROW 1: Comparison Cards (Before: Text-Only vs After: Photo Menu) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

          {/* Card 1: Before Text-Only */}
          <div className="rounded-md border-2 border-rose-200 dark:border-rose-900/60 bg-white dark:bg-[#101018] shadow-md overflow-hidden flex flex-col">
            <div className="px-3.5 py-2.5 bg-rose-50/70 dark:bg-rose-950/20 border-b border-rose-100 dark:border-rose-900/40 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-rose-700 dark:text-rose-400 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0" />
                Before: Text-Only
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold text-rose-600 dark:text-rose-400 whitespace-nowrap bg-rose-100/70 dark:bg-rose-950/60 px-2 py-0.5 rounded-md">
                Low Orders
              </span>
            </div>

            <div className="relative w-full aspect-[720/844] bg-white">
              <Image
                src="/assets/compare/text-only-before.jpg"
                alt="Text-only menu before MagicScale"
                fill
                sizes="(max-width: 640px) 100vw, 420px"
                className="object-cover object-top"
                priority
              />
            </div>

            <div className="px-3 py-2 bg-rose-50/40 dark:bg-zinc-900/60 border-t border-rose-100 dark:border-zinc-800 text-center">
              <span className="text-xs font-bold text-rose-600 dark:text-rose-400 whitespace-nowrap">
                ✕ Zero photos • 68% scroll past
              </span>
            </div>
          </div>

          {/* Card 2: After Photo Menu */}
          <div className="rounded-md border-2 border-green-500 bg-white dark:bg-[#101018] shadow-xl overflow-hidden flex flex-col">
            <div className="px-3.5 py-2.5 bg-green-50/80 dark:bg-green-950/30 border-b border-green-100 dark:border-green-900/40 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-green-700 dark:text-green-300 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
                After: Photo Menu
              </span>
              <span className="text-[10px] sm:text-[11px] font-black text-green-700 dark:text-green-300 whitespace-nowrap bg-green-100 dark:bg-green-900/50 px-2 py-0.5 rounded-md border border-green-300/40">
                +2.8x Clicks
              </span>
            </div>

            <div className="relative w-full aspect-[718/874] bg-white">
              <Image
                src="/assets/compare/photo-after.jpg"
                alt="MagicScale optimized photo menu"
                fill
                sizes="(max-width: 640px) 100vw, 420px"
                className="object-cover object-top"
                priority
              />
            </div>

            <div className="px-3 py-2 bg-green-50/50 dark:bg-zinc-900/60 border-t border-green-100 dark:border-zinc-800 text-center">
              <span className="text-xs font-bold text-green-700 dark:text-green-400 whitespace-nowrap">
                ✓ Rich visuals • Instant add-to-carts
              </span>
            </div>
          </div>

        </div>

        {/* ROW 2: Features 02, 03, 04 with exact same consistent gap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-6">
          
          {/* Card 02: Solid Descriptions */}
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

          {/* Card 03: Smart Upselling */}
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

          {/* Card 04: 90+ Menu Score Optimization */}
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

    </div>
  );
}
