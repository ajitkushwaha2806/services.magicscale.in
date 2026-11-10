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
    <Suspense fallback={null}>
      <AuditPageClient />
    </Suspense>
  );
}

