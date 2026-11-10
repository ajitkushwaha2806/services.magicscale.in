"use client";
import React, { useState } from "react";
import { FAQS } from "./helper/constants";
import { ChevronDown, HelpCircle, ArrowRight, Zap, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

export default function Faqs({ onOpenForm }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      id="faqs"
      className="relative overflow-hidden py-10 sm:py-14 px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8 bg-zinc-50/70 dark:bg-[#09090e] border-t border-zinc-200/80 dark:border-zinc-800/80"
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

      <div className="relative z-10 mx-auto max-w-3xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12 flex flex-col items-center"
        >
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
        </motion.div>

        {/* FAQ Accordion List */}
        <div className="space-y-3 sm:space-y-3.5">
          {FAQS.map((faq, i) => {
            const Icon = faq.icon;
            const isOpen = openIndex === i;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: Math.min(i * 0.04, 0.25) }}
                className={`rounded-md border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-green-500/50 dark:border-green-500/40 bg-white dark:bg-[#12121c] shadow-md ring-1 ring-green-500/20"
                    : "border-zinc-200/90 dark:border-zinc-800 bg-white/90 dark:bg-[#101018]/90 hover:border-zinc-300 dark:hover:border-zinc-700 shadow-xs"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-3.5 p-3.5 sm:p-4 text-left cursor-pointer transition-colors hover:bg-zinc-50/60 dark:hover:bg-zinc-800/30 select-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3 sm:gap-3.5 flex-1 min-w-0">
                    {/* Icon Badge */}
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-md flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? "bg-green-600 text-white shadow-xs"
                          : "bg-green-500/10 text-green-700 dark:text-green-300 border border-green-500/20"
                      }`}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>

                    {/* Question */}
                    <span className="text-xs sm:text-sm md:text-base font-bold text-zinc-900 dark:text-white tracking-tight leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  {/* Chevron Toggle */}
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-md flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isOpen
                        ? "rotate-180 bg-green-500/10 text-green-700 dark:text-green-300"
                        : "text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-200"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                  </div>
                </button>

                {/* Answer Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-3.5 sm:px-4 pb-4 sm:pb-5 pt-0 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800/80 sm:pl-[52px]">
                          {faq.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Still Have Questions? Card */}
        {onOpenForm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mt-6 sm:mt-8 p-4 sm:p-5 rounded-md border border-green-200 dark:border-green-900/60 bg-gradient-to-br from-green-50/70 via-white to-green-50/40 dark:from-green-950/20 dark:via-[#101018] dark:to-green-950/10 shadow-xs text-center flex flex-col sm:flex-row items-center justify-between gap-3.5"
          >
            <div className="text-left sm:max-w-md">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-green-700 dark:text-green-400 mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Want to see this on your menu?</span>
              </div>
              <h3 className="text-base sm:text-lg font-black text-zinc-900 dark:text-white tracking-tight">
                Get a free 3-dish visual preview for your outlet
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1 font-medium">
                Zero commitment • 48-hour turnaround • No credit card required.
              </p>
            </div>

            <button
              type="button"
              onClick={onOpenForm}
              className="w-full sm:w-auto px-5 py-3 text-xs sm:text-sm font-bold text-white bg-green-600 hover:bg-green-700 rounded-md shadow-md shadow-green-600/25 flex items-center justify-center gap-2 whitespace-nowrap active:scale-[0.98] transition-all cursor-pointer shrink-0"
            >
              <Zap className="w-4 h-4 text-amber-300 fill-amber-300" />
              <span>Claim Free 3-Dish Preview</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
