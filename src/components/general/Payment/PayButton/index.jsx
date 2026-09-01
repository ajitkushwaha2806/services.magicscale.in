"use client";
import { useState } from "react";
import posthog from "posthog-js";
import { cn } from "@/lib/utils";
import { ArrowRight, Video } from "lucide-react";
import BookDemoModal from "../../BookDemoModal";

export default function PayButton({ className, children, ...props }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <BookDemoModal open={open} onOpenChange={setOpen} />
      <button
        {...props}
        onClick={(e) => {
          posthog?.capture("demo_modal_opened");
          if (typeof window !== "undefined" && window.fbq) {
            window.fbq("track", "InitiateCheckout", { content_name: "Demo Booking Form Opened" });
          }
          setOpen(true);
          if (props.onClick) props.onClick(e);
        }}
        className={cn(
          "group flex-1 w-full rounded-md bg-green-600 px-5 py-2.5 font-bold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:bg-green-700 active:scale-[0.98] text-sm",
          className
        )}
      >
        <div className="flex items-center justify-center gap-2">
          <Video className="w-4 h-4" />
          <span>{children || "Book a Demo"}</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </button>
    </>
  );
}
