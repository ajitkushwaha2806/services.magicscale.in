"use client";
import React from "react";
import Title from "../Title";
import { motion } from "framer-motion";
import SectionWrapper from "../SectionWrapper";
import { Store, TrendingUp, Rocket } from "lucide-react";
import { Highlighter } from "@/components/ui/highlighter";

export default function LicenseTypes() {
  const types = [
    {
      level: "ESSENTIAL",
      title: "Menu Optimization",
      turnover: "One-Time Fix",
      detail: "Focuses on menu re-engineering, appetizing descriptions, and high-converting item names.",
      icon: Store,
      popular: false,
    },
    {
      level: "GROWTH",
      title: "CPC Ad Management",
      turnover: "Monthly Management",
      detail: "We run and optimize your ads on Swiggy and Zomato to get the best ROI and maximize visibility.",
      icon: TrendingUp,
      popular: true,
    },
    {
      level: "SCALE",
      title: "Complete Growth Management",
      turnover: "All-Inclusive",
      detail: "End-to-end handling of your profile, ad spend, customer reviews, and organic ranking algorithms.",
      icon: Rocket,
      popular: false,
    },
  ];

  return (
    <SectionWrapper
      title={
        <div className="mx-auto mb-16 text-center">
          <Title
            title={
              <>
                Which Growth Service <br />{" "}
                <Highlighter action="highlight" color={"#f97316"}>
                  <span className="relative z-10 px-2 text-white">
                    Do You Need?
                  </span>
                </Highlighter>
              </>
            }
            description="3 distinct packages based on your restaurant's current stage and goals."
          />
        </div>
      }
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "200px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-6xl"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {types.map((type, i) => {
            const Icon = type.icon;

            return (
              <motion.div
                key={type.level}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "200px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                className={`group relative overflow-hidden rounded-3xl border p-6 transition-all duration-300 ${
                  type.popular
                    ? "border-green-500 bg-gradient-to-br from-green-50/80 to-white shadow-xl"
                    : "border-neutral-200 bg-white hover:shadow-xl"
                }`}
              >
                {type.popular && (
                  <div className="absolute right-4 top-4">
                    <span className="rounded-full bg-green-500 px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-white">
                      Popular
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-600">
                    {type.level}
                  </span>

                  <div className="rounded-2xl bg-green-100 p-3">
                    <Icon className="h-5 w-5 text-green-600" />
                  </div>
                </div>

                <h3 className="mt-5 text-xl font-bold text-neutral-900">
                  {type.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {type.detail}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-600 ring-1 ring-inset ring-green-500/20">
                    Model: {type.turnover}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
