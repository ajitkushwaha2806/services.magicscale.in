"use client";
import React from "react";
import SectionWrapper from "../SectionWrapper";
import Title from "../Title";
import { Highlighter } from "@/components/ui/highlighter";
import { AlertTriangle, TrendingDown, EyeOff, CheckCircle2, XCircle } from "lucide-react";
import Image from "next/image";

export default function TheProblem() {
  const leaks = [
    {
      icon: EyeOff,
      stat: "68%",
      label: "Customer Drop-off",
      desc: "Hungry customers scroll past text-only items. If they can't see the dish, they won't order it.",
    },
    {
      icon: TrendingDown,
      stat: "₹120+",
      label: "Lost per Order (AOV)",
      desc: "Without strategic add-ons (extra cheese, drinks, combos), you miss high-margin cross-sells.",
    },
    {
      icon: AlertTriangle,
      stat: "< 70%",
      label: "Platform Menu Score",
      desc: "Swiggy & Zomato algorithms rank incomplete profiles lower, giving your impressions to competitors.",
    },
  ];

  return (
    <SectionWrapper id="problem" className="py-16 sm:py-24 bg-zinc-50/50 dark:bg-zinc-950/40 border-y border-zinc-200/60 dark:border-zinc-800/60">
      <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 text-xs font-bold uppercase tracking-wider mb-3">
          <AlertTriangle className="w-3.5 h-3.5" />
          The Invisible Revenue Leak
        </div>
        <Title
          title={
            <>
              Text-Only Menus Are Silently{" "}
              <Highlighter action="highlight" color="#ef4444">
                <span className="text-white relative z-10 px-2">Killing Your Sales</span>
              </Highlighter>
            </>
          }
          description="Most restaurant owners spend heavily on Zomato ads without realizing their menu is failing to convert clicks into paying customers."
        />
      </div>

      {/* Visual Proof Comparison */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
        {/* The Bad: Generic Text Listing */}
        <div className="rounded-2xl border-2 border-rose-200 dark:border-rose-950/60 bg-white dark:bg-[#101018] p-4 sm:p-6 shadow-md relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 bg-rose-500 text-white text-[11px] font-black uppercase px-3 py-1 rounded-bl-xl flex items-center gap-1 z-10">
            <XCircle className="w-3.5 h-3.5" />
            Generic Text Menu
          </div>

          <div>
            <h4 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2 mb-2">
              <span className="text-rose-500 font-black">✕</span> What Customers Skip
            </h4>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4 leading-relaxed">
              No photos, generic item text, zero visual appetite. Customers quickly bounce to competitors.
            </p>

            <div className="relative w-full aspect-[4/4.5] sm:aspect-[4/4.3] rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white shadow-inner">
              <Image
                src="/assets/compare/text-only-before.jpg"
                alt="Text-only menu before MagicScale"
                fill
                sizes="(max-width: 768px) 100vw, 480px"
                className="object-contain object-top"
              />
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-rose-100 dark:border-rose-950/40 text-xs font-semibold text-rose-600 dark:text-rose-400 flex items-center justify-between">
            <span className="font-bold">Result:</span>
            <span className="text-zinc-600 dark:text-zinc-400 font-medium">70% bounce rate & wasted ad budget</span>
          </div>
        </div>

        {/* The Good: Rich Photo Menu */}
        <div className="rounded-2xl border-2 border-green-500/80 bg-white dark:bg-[#101018] p-4 sm:p-6 shadow-xl relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 bg-green-600 text-white text-[11px] font-black uppercase px-3 py-1 rounded-bl-xl flex items-center gap-1 shadow-sm z-10">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Rich Visual Menu
          </div>

          <div>
            <h4 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2 mb-2">
              <span className="text-green-600 font-black">✓</span> What MagicScale Delivers
            </h4>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4 leading-relaxed">
              Vibrant high-res photos, mouthwatering descriptions, and clear portion details.
            </p>

            <div className="relative w-full aspect-[4/4.5] sm:aspect-[4/4.3] rounded-xl overflow-hidden border border-green-200 dark:border-green-900/50 bg-white shadow-inner">
              <Image
                src="/assets/compare/photo-after.jpg"
                alt="MagicScale optimized photo menu"
                fill
                sizes="(max-width: 768px) 100vw, 480px"
                className="object-contain object-top"
              />
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-green-100 dark:border-green-950/40 text-xs font-bold text-green-700 dark:text-green-400 flex items-center justify-between">
            <span className="font-bold">Result:</span>
            <span className="text-zinc-600 dark:text-zinc-400 font-medium">2.8x higher conversions & +35% basket size</span>
          </div>
        </div>
      </div>

      {/* Stat Callout Banner */}
      <div className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-green-600 to-emerald-700 p-6 sm:p-8 text-white text-center shadow-xl mb-12">
        <div className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-2">
          2.8x More Click-Throughs
        </div>
        <p className="text-sm sm:text-base text-green-50 max-w-2xl mx-auto font-medium">
          Swiggy and Zomato customer data proves: food listings with professional dish photography, appetizing descriptions, and customized add-ons capture nearly triple the order volume.
        </p>
      </div>

      {/* Leaks Breakdown Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5">
        {leaks.map((leak, idx) => (
          <div key={idx} className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#101018] shadow-sm">
            <leak.icon className="w-6 h-6 text-rose-500 mb-3" />
            <div className="text-2xl font-black text-zinc-900 dark:text-white mb-1">{leak.stat}</div>
            <div className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">{leak.label}</div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{leak.desc}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
