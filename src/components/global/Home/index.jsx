import React from "react";
import { Hero } from "@/components/general/Hero";
import ClientLogoCarousel from "@/components/general/ClientLogoCarousel";
import StickyMobileCTA from "@/components/general/StickyMobileCTA";
import WhyChooseUs from "@/components/general/WhyChooseUs";
import WhatWeDo from "@/components/general/WhatWeDo";
import Pricing from "@/components/general/Pricing";
import Lifecycle from "@/components/general/Lifecycle";

export default function Home() {
  return (
    <div className="w-full text-neutral-900 transition-colors duration-300 dark:text-white">
      <Hero />
      <ClientLogoCarousel />
      <WhyChooseUs />
      <StickyMobileCTA />
      <WhatWeDo />
      <Pricing />
      <Lifecycle />
    </div>
  );
}
