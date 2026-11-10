"use client";
import { Sparkles } from "lucide-react";
import PayButton from "../Payment/PayButton";

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden animate-in slide-in-from-bottom-full duration-500">
      <div className="border-t border-zinc-200/90 dark:border-zinc-800 bg-white/95 dark:bg-[#0c0c14]/95 backdrop-blur-xl">
        <div className="mx-auto max-w-lg px-4 py-2.5 pb-[calc(env(safe-area-inset-bottom)+10px)]">
          <div className="flex items-center justify-between gap-2">
            <div className="flex flex-col min-w-0 pr-2">
              <div className="flex items-center gap-1.5 text-xs font-black text-green-600 dark:text-green-400 whitespace-nowrap">
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                <span>Free Growth Audit</span>
              </div>
              <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium whitespace-nowrap">
                For Swiggy & Zomato
              </span>
            </div>

            <div className="shrink-0">
              <PayButton className="h-10 px-4 text-xs font-bold shadow-md shadow-green-600/25 whitespace-nowrap">
                Enquire Now
              </PayButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
