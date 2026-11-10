"use client";
import { useState } from "react";
import posthog from "posthog-js";
import { cn } from "@/lib/utils";
import { ArrowRight, Send } from "lucide-react";
import BookDemoModal from "../../BookDemoModal";

export default function PayButton({ className, children, ...props }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <BookDemoModal open={open} onOpenChange={setOpen} />
      <button
        {...props}
        onClick={(e) => {
          posthog?.capture("enquiry_modal_opened");
          if (typeof window !== "undefined" && window.fbq) {
            window.fbq("track", "InitiateCheckout", { content_name: "Enquiry Form Opened" });
          }
          setOpen(true);
          if (props.onClick) props.onClick(e);
        }}
        className={cn(
          "group inline-flex items-center justify-center rounded-md bg-green-600 px-4 py-2 font-bold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:bg-green-700 active:scale-[0.98] text-sm whitespace-nowrap",
          className
        )}
      >
        <span className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap">
          <Send className="w-3.5 h-3.5 shrink-0" />
          <span className="whitespace-nowrap">{children || "Enquire Now"}</span>
          <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </button>
    </>
  );
}
