"use client";
import React, { useState } from "react";
import AuditHero from "@/components/audit/AuditHero";
import AuditSuccessStory from "@/components/audit/AuditSuccessStory";
import Testimonials from "@/components/general/Reviews";
import MasonryGallery from "@/components/general/galllery";
import Faqs from "@/components/general/Faqs";
import BookDemoModal from "@/components/general/BookDemoModal";
import { Zap, Sparkles } from "lucide-react";

export default function AuditPageClient() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  return (
    <div className="w-full text-zinc-900 dark:text-white bg-white dark:bg-[#0c0c14] min-h-screen">
      {/* Enquiry Form Modal */}
      <BookDemoModal open={modalOpen} onOpenChange={setModalOpen} />

      {/* SECTION 1: HERO, COMPARISON & CLIENT LOGOS */}
      <AuditHero onOpenForm={handleOpenModal} />

      {/* SECTION 2: FLAGSHIP SUCCESS STORY (Dosa Diaries ₹5k -> ₹1 Lakh+) */}
      <AuditSuccessStory onOpenForm={handleOpenModal} />

      {/* SECTION 3: OUR CUSTOMERS */}
      <Testimonials />

      {/* SECTION 5: OUR TEAM */}
      <MasonryGallery />

      {/* SECTION 6: FAQS */}
      <Faqs onOpenForm={handleOpenModal} />

      {/* Mobile Sticky Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden animate-in slide-in-from-bottom-full duration-500">
        <div className="border-t border-zinc-200/90 dark:border-zinc-800 bg-white/95 dark:bg-[#0c0c14]/95 backdrop-blur-xl">
          <div className="mx-auto max-w-lg px-4 py-2.5 pb-[calc(env(safe-area-inset-bottom)+10px)]">
            <div className="flex items-center justify-between gap-3">
              <div className="flex flex-col min-w-0 pr-1">
                <div className="flex items-center gap-1.5 text-xs font-black text-green-600 dark:text-green-400 whitespace-nowrap">
                  <Sparkles className="w-3.5 h-3.5 shrink-0" />
                  <span>Free 3-Dish Preview</span>
                </div>
                <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium whitespace-nowrap">
                  Zero risk • 48-hr turnaround
                </span>
              </div>

              <div className="shrink-0">
                <button
                  onClick={handleOpenModal}
                  className="h-10 px-4 text-xs font-bold text-white bg-green-600 hover:bg-green-700 rounded-md shadow-md shadow-green-600/25 flex items-center justify-center gap-1.5 whitespace-nowrap active:scale-[0.98]"
                >
                  <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                  <span>Claim Preview</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
