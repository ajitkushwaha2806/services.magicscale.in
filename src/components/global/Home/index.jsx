import React from "react";
import { Hero } from "@/components/general/Hero";
import StickyMobileCTA from "@/components/general/StickyMobileCTA";
import WhyChooseUs from "@/components/general/WhyChooseUs";
import Deliverables from "@/components/general/Deliverables";
import Pricing from "@/components/general/Pricing";
import Lifecycle from "@/components/general/Lifecycle";
import MasonryGallery from "@/components/general/galllery";
import Testimonials from "@/components/general/Reviews";
import Faqs from "@/components/general/Faqs";

export default function Home() {
  return (
    <div className="w-full pb-16 text-neutral-900 transition-colors duration-300 dark:text-white">
      <Hero />
      <WhyChooseUs />
      <StickyMobileCTA />
      <Deliverables />
      <Pricing />
      <Lifecycle />
      <MasonryGallery />
      <Testimonials />
      <Faqs />
    </div>
  );
}