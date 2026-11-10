"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Camera, 
  FileText, 
  TrendingUp, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Eye, 
  UtensilsCrossed, 
  ShoppingBag,
  Zap,
  Gauge,
  Award
} from "lucide-react";
import SectionWrapper from "../SectionWrapper";
import Title from "../Title";
import { Highlighter } from "@/components/ui/highlighter";
import PayButton from "../Payment/PayButton";

export default function WhatWeDo() {
  const steps = [
    {
      stepNumber: "01",
      badge: "High-Impact Visuals",
      icon: Camera,
      tagColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
      accentGlow: "from-emerald-500/20 to-green-500/20",
      metric: "+68% Click-Through Rate",
      metricIcon: Eye,
      title: "1. High-Resolution Photo Uploading",
      headline: "Eye-Catching Dish Photos That Make Diners Stop & Order",
      description:
        "Text-only items are practically invisible on food delivery apps. When we onboard your outlet, we upload standardized, vibrant, appetizing food photos that trigger immediate hunger and stop users from scrolling past your restaurant.",
      image: "/assets/menu-work/photo-uploading.jpg",
      imageAlt: "Photo Uploading on Swiggy and Zomato - Gulab Jamun and Jalebi with Dahi",
      deliverables: [
        "100% compliant with Swiggy & Zomato strict image guidelines",
        "Appetite-driven styling that highlights food texture & color",
        "Clear veg / non-veg and portion indicators on every dish",
        "Proven 2.8x increase in click-to-cart conversion"
      ],
      reverse: false,
    },
    {
      stepNumber: "02",
      badge: "Sensory Copywriting",
      icon: FileText,
      tagColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
      accentGlow: "from-blue-500/20 to-cyan-500/20",
      metric: "+42% Conversion Rate",
      metricIcon: UtensilsCrossed,
      title: "2. Mouthwatering Sensory Descriptions",
      headline: "Descriptive Copy That Eliminates Doubt & Makes Diners Crave It",
      description:
        "Most menus have zero descriptions or just a dry list of raw ingredients. We write emotion-driven, mouthwatering descriptions specifying exact portion sizes (e.g. 650 ml, 2 pcs), aromatic spices, and taste notes so customers know exactly what they're paying for.",
      image: "/assets/menu-work/mouthwatering-descriptions.jpg",
      imageAlt: "Adding Mouthwatering Descriptions - Dal Fry Rice Bowl with desi ghee vibes",
      deliverables: [
        "Portion clarity (650 ml, bowl sizes, serve counts) to prevent customer complaints",
        "Sensory taste words: 'tempered with garlic, jeera & desi ghee vibes'",
        "SEO keyword optimization to rank in platform search queries",
        "Builds instant diner trust, especially for new customers trying your food"
      ],
      reverse: true,
    },
    {
      stepNumber: "03",
      badge: "Revenue Maximization",
      icon: TrendingUp,
      tagColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
      accentGlow: "from-amber-500/20 to-orange-500/20",
      metric: "+₹120 Avg. Order Value",
      metricIcon: ShoppingBag,
      title: "3. Smart Add-Ons & Automated Upselling",
      headline: "Strategic Customizations Engineered for Maximum Basket Value",
      description:
        "The fastest way to increase restaurant profit isn't just getting more orders—it's getting customers to spend more per order. We configure high-margin add-ons (sweets, drinks, extra toppings) that pop up smoothly at checkout, prompting diners to upgrade their cart automatically.",
      image: "/assets/menu-work/smart-addons-upselling.jpg",
      imageAlt: "Smart Add-Ons & Upselling - Choose Your Sweets Kesar Phirni, Gulab Jamun",
      deliverables: [
        "Smart multi-select dessert pairings (Kesar Phirni, Gulab Jamun, Jalebi)",
        "Zero-friction popup customization before checkout",
        "Strategically priced add-ons that diners add without second thoughts",
        "Boosts Average Order Value (AOV) by ₹80 to ₹160+ per bill"
      ],
      reverse: false,
    },
    {
      stepNumber: "04",
      badge: "Algorithmic Placement",
      icon: Gauge,
      tagColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
      accentGlow: "from-emerald-500/20 to-teal-500/20",
      metric: "90%+ 'Excellent' Tier",
      metricIcon: Award,
      title: "4. 90+ Menu Score Optimization",
      headline: "Hit a 90%+ 'Excellent' Score & Dominate Platform Feeds",
      description:
        "Swiggy and Zomato algorithms directly reward high Menu Scores with top placement in search results and home feeds. We audit and calibrate all 12+ scoring parameters—photos, descriptions, dietary tags, add-ons, and pricing completeness—to catapult your restaurant into the elite 90%+ tier above competing outlets.",
      image: "/assets/menu-work/menu-score-optimization.png",
      imageAlt: "90+ Menu Score Optimization - Excellent 93% rating on Swiggy and Zomato",
      imageBg: "bg-[#111116] dark:bg-[#09090d]",
      imageFit: "object-contain",
      imagePosition: "object-center",
      deliverables: [
        "Calibrated across all 12+ Swiggy & Zomato quality ranking metrics",
        "Pushes your score from mediocre (40–60%) into the top tier (90%+)",
        "Unlocks free organic reach and priority placement across your delivery zone",
        "Outranks text-only competitors without burning money on continuous ads"
      ],
      reverse: true,
    },
  ];

  return (
    <SectionWrapper id="services" className="relative py-20 sm:py-28 overflow-hidden">
      
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-green-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="mx-auto mb-16 sm:mb-24 text-center max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-700 dark:text-green-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4"
        >
          <Sparkles className="w-4 h-4 text-green-600 dark:text-green-400 shrink-0" />
          <span className="sm:hidden">What We Do • Menu Engineering</span>
          <span className="hidden sm:inline">What We Actually Do When Onboarding Your Restaurant</span>
        </motion.div>

        <Title
          title={
            <>
              How We Turn Your Menu Into A{" "}
              <br className="hidden sm:inline" />
              <Highlighter action="highlight" color="#22c55e">
                <span className="relative z-10 px-2 text-white">High-Converting Sales Machine</span>
              </Highlighter>
            </>
          }
          description="We do 4 critical things on your Swiggy and Zomato menu that immediately double appetite appeal, boost conversions, maximize bill value, and rank you in the top 10% algorithmically."
        />
      </div>

      {/* 4 Pillars Showcase */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-32">
        {steps.map((step, idx) => {
          return (
            <div
              key={idx}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center ${
                step.reverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content Column (5 cols or 7 cols) */}
              <motion.div
                initial={{ opacity: 0, x: step.reverse ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`flex flex-col gap-5 ${
                  step.reverse ? "lg:col-span-6 lg:order-2" : "lg:col-span-6 lg:order-1"
                }`}
              >
                {/* Step badge + Step number */}
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-md bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center text-sm font-black tracking-tight shadow-md">
                    {step.stepNumber}
                  </span>
                  <div
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md border text-xs font-bold uppercase tracking-wider ${step.tagColor}`}
                  >
                    <step.icon className="w-3.5 h-3.5" />
                    <span>{step.badge}</span>
                  </div>
                </div>

                {/* Headline */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-zinc-900 dark:text-white tracking-tight leading-snug">
                  {step.headline}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-medium leading-relaxed">
                  {step.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="mt-2 space-y-2.5">
                  {step.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5">
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-200 leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Floating Metric Pill */}
                <div className="mt-2 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center gap-3">
                  <div className="px-3.5 py-1.5 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center gap-2">
                    <step.metricIcon className="w-4 h-4 text-green-600 dark:text-green-400 shrink-0" />
                    <span className="text-xs font-black text-zinc-900 dark:text-white">
                      Impact: <span className="text-green-600 dark:text-green-400 font-black">{step.metric}</span>
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Visual Showcase Column (Mockup Card with Image) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`relative flex justify-center ${
                  step.reverse ? "lg:col-span-6 lg:order-1" : "lg:col-span-6 lg:order-2"
                }`}
              >
                {/* Glowing Ambient Behind */}
                <div
                  className={`absolute -inset-4 bg-gradient-to-tr ${step.accentGlow} blur-2xl -z-10 rounded-md opacity-80`}
                />

                {/* Phone / Device Style App Frame */}
                <div className="relative w-full max-w-[390px] sm:max-w-[420px] rounded-md border-2 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0e0e16] p-3 sm:p-4 shadow-2xl overflow-hidden group hover:border-green-500/40 transition-colors duration-500">
                  
                  {/* Mockup Header Bar */}
                  <div className="flex items-center justify-between px-2 pb-3 mb-2 border-b border-zinc-100 dark:border-zinc-800/80 text-[11px] font-bold text-zinc-400">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-zinc-700 dark:text-zinc-300 font-extrabold uppercase tracking-wide">
                        Live Partner Menu
                      </span>
                    </div>
                    <span className="text-[10px] uppercase font-bold text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded-md">
                      Swiggy & Zomato
                    </span>
                  </div>

                  {/* Actual Real Menu Asset Image */}
                  <div className={`relative w-full aspect-[4/4.5] sm:aspect-[4/4.8] rounded-md overflow-hidden border border-zinc-200 dark:border-zinc-800/70 ${step.imageBg || "bg-zinc-50 dark:bg-zinc-900"} shadow-inner flex items-center justify-center p-2`}>
                    <Image
                      src={step.image}
                      alt={step.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, 420px"
                      className={`${step.imageFit || "object-contain"} ${step.imagePosition || "object-top"} group-hover:scale-[1.02] transition-transform duration-500`}
                    />

                    {/* Gradient Overlay at Bottom for depth */}
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

                    {/* Floating Proof Tag */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 flex items-center justify-between gap-1">
                      <div className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-black/85 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-black tracking-wide border border-white/10 flex items-center gap-1 shadow-lg truncate">
                        <Zap className="w-3 h-3 text-amber-400 fill-amber-400 shrink-0" />
                        <span className="truncate">MagicScale Optimized</span>
                      </div>
                      <span className="px-2 py-0.5 sm:py-1 rounded-md bg-green-600 text-white text-[9px] sm:text-[10px] font-black uppercase tracking-wider shadow-md shrink-0 whitespace-nowrap">
                        100% Score
                      </span>
                    </div>
                  </div>

                </div>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Bottom Conversion Action Strip */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20 sm:mt-28 max-w-4xl mx-auto px-4"
      >
        <div className="relative rounded-md bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 p-6 sm:p-10 text-white text-center shadow-2xl overflow-hidden">
          {/* Subtle Glow Circle */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          
          <h4 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight mb-3">
            Want us to revamp your menu this week?
          </h4>
          <p className="text-xs sm:text-sm text-green-100 max-w-xl mx-auto mb-6 leading-relaxed">
            Fill in your restaurant details. We'll audit your current Swiggy & Zomato score and show you a preview of how your dishes will look.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="w-full sm:w-auto">
              <PayButton className="w-full sm:w-auto h-12 px-8 text-sm font-bold bg-white text-green-700 hover:bg-zinc-100 shadow-xl shadow-black/10">
                Enquire for Your Restaurant
              </PayButton>
            </div>
          </div>
        </div>
      </motion.div>

    </SectionWrapper>
  );
}
