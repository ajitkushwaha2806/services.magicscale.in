"use client";
import React, { useState } from "react";
import AuditHero from "@/components/audit/AuditHero";
import AuditSuccessStory from "@/components/audit/AuditSuccessStory";
import Testimonials from "@/components/general/Reviews";
import MasonryGallery from "@/components/general/galllery";
import Faqs from "@/components/general/Faqs";
import BookDemoModal from "@/components/general/BookDemoModal";
import { ArrowRight, Zap } from "lucide-react";

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
        <div className="border-t border-zinc-200/90 dark:border-zinc-800 bg-white/95 dark:bg-[#0c0c14]/95 backdrop-blur-xl px-4 py-2.5 pb-[calc(env(safe-area-inset-bottom)+10px)] shadow-2xl">
          <button
            onClick={handleOpenModal}
            className="w-full h-12 text-sm sm:text-base font-black text-white bg-green-600 hover:bg-green-700 active:scale-[0.98] rounded-md shadow-lg shadow-green-600/30 flex items-center justify-center gap-2 tracking-wide cursor-pointer uppercase transition-all"
          >
            <Zap className="w-4 h-4 text-amber-300 fill-amber-300 shrink-0" />
            <span>Enquire Now</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </button>
        </div>
      </div>
    </div>
  );
}
