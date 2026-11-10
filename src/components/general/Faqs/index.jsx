"use client";
import React, { useState } from "react";
import { FAQS } from "./helper/constants";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

export default function Faqs({ onOpenForm }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const mid = Math.ceil(FAQS.length / 2);
  const col1 = FAQS.slice(0, mid).map((item, idx) => ({ ...item, globalIndex: idx }));
  const col2 = FAQS.slice(mid).map((item, idx) => ({ ...item, globalIndex: idx + mid }));

  const renderFaqCard = (faq) => {
    const Icon = faq.icon;
    const isOpen = openIndex === faq.globalIndex;

    return (
      <div
        key={faq.globalIndex}
        className={`rounded-md border transition-all duration-200 overflow-hidden ${
          isOpen
            ? "border-green-500 dark:border-green-500 bg-white dark:bg-[#12121c] shadow-sm ring-1 ring-green-500/20"
            : "border-zinc-200/90 dark:border-zinc-800 bg-white dark:bg-[#101018] hover:border-zinc-300 dark:hover:border-zinc-700 shadow-xs"
        }`}
      >
        <button
          type="button"
          onClick={() => toggle(faq.globalIndex)}
          className="w-full flex items-start justify-between gap-3 p-4 sm:p-4.5 text-left cursor-pointer transition-colors hover:bg-zinc-50/70 dark:hover:bg-zinc-800/30 select-none group"
          aria-expanded={isOpen}
        >
          <div className="flex items-start gap-3 sm:gap-3.5 flex-1 min-w-0">
            {/* Category Icon Badge */}
            <div
              className={`w-9 h-9 rounded-md flex items-center justify-center shrink-0 transition-colors mt-0.5 ${
                isOpen
                  ? "bg-green-600 text-white shadow-xs"
                  : "bg-green-500/10 text-green-700 dark:text-green-300 border border-green-500/20 group-hover:bg-green-500/15"
              }`}
            >
              <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </div>

            {/* Question */}
            <span className="text-sm sm:text-[15px] font-bold text-zinc-900 dark:text-white tracking-tight leading-snug pt-1">
              {faq.question}
            </span>
          </div>

          {/* Chevron Indicator */}
          <div
            className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 transition-all duration-200 mt-0.5 ${
              isOpen
                ? "rotate-180 bg-green-500/10 text-green-700 dark:text-green-300"
                : "text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-200"
            }`}
          >
            <ChevronDown className="w-4 h-4" />
          </div>
        </button>

        {/* Answer Drawer */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
            >
              <div className="px-4 pb-4 sm:pb-5 pt-0 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800/80 sm:pl-12">
                  {faq.answer}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section
      id="faqs"
      className="relative overflow-hidden py-10 sm:py-16 px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8 bg-zinc-50/70 dark:bg-[#09090e] border-t border-zinc-200/80 dark:border-zinc-800/80"
    >
      {/* Background Subtle Grid */}
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "pointer-events-none absolute inset-0 h-full w-full stroke-emerald-600/15 fill-emerald-600/10 dark:stroke-emerald-400/15 dark:fill-emerald-400/10 z-0",
          "[mask-image:linear-gradient(to_bottom,white,transparent_75%)]"
        )}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 flex flex-col items-center">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-green-500/10 text-green-700 dark:text-green-300 text-xs font-bold uppercase tracking-wider border border-green-500/20 mb-3.5 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-green-600 dark:text-green-400 shrink-0" />
            <span>Got Questions? We&apos;ve Got Answers</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tight leading-tight">
            Frequently Asked{" "}
            <span className="text-green-600 dark:text-green-400">Questions</span>
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-zinc-600 dark:text-zinc-400 max-w-lg mx-auto mt-2.5 px-2 font-medium leading-relaxed">
            Everything you need to know about our Swiggy &amp; Zomato menu revamp, photoshoot, and order growth.
          </p>
        </div>

        {/* 2-Column Responsive Accordion Grid (Desktop: 2 columns, Mobile: 1 column) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 items-start">
          <div className="flex flex-col gap-3 sm:gap-4">
            {col1.map(renderFaqCard)}
          </div>
          <div className="flex flex-col gap-3 sm:gap-4">
            {col2.map(renderFaqCard)}
          </div>
        </div>

        {/* Bottom Direct CTA */}
        {onOpenForm && (
          <div className="mt-6 sm:mt-8 p-5 sm:p-6 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#101018] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left w-full sm:max-w-xl">
              <h3 className="text-base sm:text-lg font-black text-zinc-900 dark:text-white tracking-tight">
                Ready to scale your Swiggy &amp; Zomato orders?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1 font-medium">
                Talk directly to our restaurant growth team.
              </p>
            </div>

            <button
              type="button"
              onClick={onOpenForm}
              className="w-full sm:w-auto px-8 h-12 text-sm sm:text-base font-black text-white bg-green-600 hover:bg-green-700 rounded-md shadow-md shadow-green-600/25 flex items-center justify-center gap-2 whitespace-nowrap active:scale-[0.98] transition-all cursor-pointer shrink-0 uppercase tracking-wider"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
