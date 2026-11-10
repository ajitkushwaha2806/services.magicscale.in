import React, { Suspense } from "react";
import AuditPageClient from "./AuditPageClient";

export const metadata = {
  title: "Free Menu Audit & 3-Dish Preview | MagicScale",
  description:
    "Stop losing 40% of orders to text-only menus on Swiggy and Zomato. Claim your free 3-dish visual preview and see how MagicScale transforms your restaurant menu within 48 hours.",
  openGraph: {
    title: "Free Swiggy & Zomato Menu Audit | MagicScale",
    description:
      "Transform your text-only menu with professional food visuals, sensory copywriting, and smart add-ons in 48 hours.",
    url: "https://magicscale.in/audit",
  },
};

export default function AuditPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0c0c14]">
          <div className="w-8 h-8 border-4 border-green-600 border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <AuditPageClient />
    </Suspense>
  );
}

