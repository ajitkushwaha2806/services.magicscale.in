"use client";
import { Video, Sparkles } from "lucide-react";
import PayButton from "../Payment/PayButton";

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden animate-in slide-in-from-bottom-full duration-500">
      <div className="border-t border-green-100 dark:border-zinc-800 bg-white/95 dark:bg-[#0c0c14]/95 backdrop-blur-xl">
        <div className="mx-auto max-w-lg px-4 py-3 pb-[calc(env(safe-area-inset-bottom)+12px)]">
          <div className="flex items-center justify-between gap-3">
            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-xs font-extrabold text-green-600 dark:text-green-400">
                <Video className="w-3.5 h-3.5" />
                <span>1-on-1 Strategy Call</span>
              </div>
              <span className="text-[11px] text-zinc-500 font-medium">Free 30-min Google Meet</span>
            </div>

            <div className="w-full max-w-[170px]">
              <PayButton className="w-full text-xs h-10 shadow-lg shadow-green-500/25">
                Book Demo
              </PayButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
