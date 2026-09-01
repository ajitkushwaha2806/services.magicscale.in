"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/ui/grid-pattern";
import { ArrowRight, TrendingUp, Video, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BookDemoModal from "../BookDemoModal";

export const Hero = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="relative w-full px-4 sm:px-6 lg:px-8 text-center pt-20 sm:pt-28 md:pt-36 pb-12 sm:pb-16 md:pb-20 overflow-hidden flex flex-col items-center">
      {/* Subtle Background Pattern */}
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "absolute inset-0 h-full w-full stroke-zinc-200/70 fill-zinc-100/40 dark:stroke-zinc-800/40 dark:fill-zinc-900/20 z-0",
          "[mask-image:linear-gradient(to_bottom,white,transparent_90%)]",
        )}
      />

      {/* Book Demo Modal */}
      <BookDemoModal open={demoOpen} onOpenChange={setDemoOpen} />

      {/* Top Badge */}
      <div className="relative z-10 flex justify-center mb-4 sm:mb-6 animate-in fade-in slide-in-from-top-3 duration-500">
        <div className="inline-flex items-center gap-2 rounded-md bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800/50 px-3 py-1 text-xs sm:text-sm font-bold text-green-700 dark:text-green-400 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span>Zomato & Swiggy Growth Agency</span>
        </div>
      </div>

      {/* Hero Headline */}
      <h1 className="relative z-10 w-full mx-auto pb-1 sm:pb-2 animate-in fade-in slide-in-from-top-4 duration-700">
        <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.2] md:leading-[1.15] text-zinc-900 dark:text-white max-w-4xl mx-auto">
          <span>Not getting orders on </span>
          <span className="inline-block whitespace-nowrap">
            <span className="text-[#FC8019]">Swiggy</span>
            <span className="text-zinc-400 font-normal mx-1.5 sm:mx-2">&</span>
            <span className="text-[#E23744]">Zomato?</span>
          </span>
          
          <div className="mt-3 sm:mt-5 flex flex-wrap justify-center items-center gap-x-2.5 sm:gap-x-3 gap-y-2">
            <span className="text-zinc-900 dark:text-white">We know</span>
            <span className="bg-[#22c55e] text-white px-3 sm:px-5 py-1 rounded-md inline-block font-black shadow-sm tracking-normal">
              Exactly Why
            </span>
          </div>
        </div>
      </h1>

      {/* Subheadline */}
      <p className="relative z-10 mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl font-medium leading-relaxed mx-auto px-2 animate-in fade-in slide-in-from-bottom-3 duration-700 delay-150">
        We optimize your menu ranking, fix high-cost ads, and boost daily order volume systematically.
      </p>

      {/* CTA Buttons */}
      <div className="relative z-10 mt-6 sm:mt-8 mb-5 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-sm sm:max-w-none animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
        <button
          onClick={() => setDemoOpen(true)}
          className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base font-bold text-white bg-green-600 hover:bg-green-700 rounded-md shadow-lg shadow-green-600/25 transition-all hover:scale-105 active:scale-[0.98] flex items-center justify-center gap-2 group whitespace-nowrap"
        >
          <Video className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0" />
          <span>Book Free Strategy Call</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 shrink-0" />
        </button>

        <Link
          href="#pricing"
          className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base font-bold text-zinc-800 dark:text-zinc-200 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md shadow-sm transition-all hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:scale-105 flex items-center justify-center gap-2 whitespace-nowrap"
        >
          <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 shrink-0" />
          <span>View Growth Plans</span>
        </Link>
      </div>

      {/* Dashboard Image Showcase */}
      <div className="w-full max-w-5xl mx-auto px-2 sm:px-4 relative z-10 animate-in fade-in zoom-in-[0.99] duration-1000 delay-500 fill-mode-both">
        <div className="group relative rounded-xl sm:rounded-2xl p-2 sm:p-2.5 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl shadow-zinc-900/10 dark:shadow-black/40">

          <div className="relative overflow-hidden rounded-lg sm:rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white">
            {/* Window Bar */}
            <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <div className="flex items-center justify-center px-3 py-0.5 rounded-md bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 text-[11px] text-zinc-600 dark:text-zinc-400 font-semibold truncate max-w-[220px] sm:max-w-xs">
                <span>zomato.com/merchant/sales-overview</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-bold text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-950/60 px-2.5 py-0.5 rounded-md">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Live Client Growth (+38%)
              </div>
            </div>

            {/* Real Merchant Report Image - Zoomed on Right Revenue & Growth Metrics */}
            <div className="relative w-full bg-white p-1 sm:p-2 overflow-hidden">
              <div className="relative w-full h-[210px] sm:h-[320px] md:h-[440px] overflow-hidden rounded-md">
                <Image
                  src="/assets/live-sales-growth.png"
                  alt="Zomato Real Sales Growth Overview"
                  fill
                  priority
                  className="object-cover object-right sm:object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll prompt */}
        <div className="mt-8 flex flex-col items-center justify-center gap-1 text-xs text-zinc-400 font-semibold animate-bounce">
          <span>Scroll to explore our growth roadmap</span>
          <ChevronDown className="w-4 h-4 text-green-600" />
        </div>
      </div>
    </div>
  );
};
