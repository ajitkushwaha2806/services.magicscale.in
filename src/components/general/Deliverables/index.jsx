"use client";
import React from "react";
import Title from "../Title";
import { motion } from "framer-motion";
import SectionWrapper from "../SectionWrapper";
import { Highlighter } from "@/components/ui/highlighter";

export default function Deliverables() {
  const features = [
    { title: "Dedicated Account Manager", id: "account-manager", desc: "Your personal expert guiding your restaurant's growth.", img: "/assets/dedicated.png" },
    { title: "Zomato & Swiggy Account Management", id: "account-management", desc: "End-to-end management of your online delivery profiles.", img: "/assets/account-management.png" },
    { title: "Complete Menu Setup", id: "menu-setup", desc: "Structuring your menu for maximum conversions and sales.", img: "/assets/menu-setup.png" },
    { title: "Menu Score Optimization - up to 90%", id: "menu-score", desc: "Boost your algorithmic visibility on food platforms.", img: "/assets/menu-score.png" },
    { title: "Menu Photo Optimization", id: "photo-optimization", desc: "Enhancing existing photos to meet platform standards.", img: "/assets/image-optimisation.png" },
    { title: "Categories & Add-ons Setup", id: "categories-addons", desc: "Strategic categorization to increase average order value.", img: "/assets/addons.png" },
    { title: "Pricing & Discount Strategy", id: "pricing-strategy", desc: "Data-driven pricing to maximize profit margins.", img: "/assets/discount-management.png" },
    { title: "Zomato & Swiggy Ads Management", id: "ads-management", desc: "High-ROI ad campaigns tailored to your target audience.", img: "/assets/ads-management.png" },
    { title: "Customer Review Management", id: "review-management", desc: "Building trust by responding to and managing customer feedback.", img: "/assets/rating-management.png" },
    { title: "Robotic Rating Calls for Live Orders", id: "robotic-calls", desc: "Automated systems to secure 5-star ratings from happy diners.", img: "/assets/ai-feedback-call.png" },
    { title: "Weekly Consultation & Reports", id: "reports", desc: "Regular insights and strategy sessions to track your success.", img: "/assets/weekly-sales-report.png" },
    { title: "Daily Performance Monitoring", id: "monitoring", desc: "Real-time tracking of sales, visibility, and platform health.", img: "/assets/daily-sales-report.png" },
  ];

  return (
    <SectionWrapper
      id="services"
      title={
        <div className="mx-auto mb-16 text-center max-w-4xl">
          <Title
            title={
              <>
                What We Actually <br className="md:hidden" />
                <Highlighter action="highlight" color="#22c55e">
                  <span className="relative z-10 px-2 text-white">Provide</span>
                </Highlighter>
              </>
            }
            description="Professional account management focused on visibility, new customers, ratings, repeat orders and measurable sales improvement."
          />
        </div>
      }
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 relative z-10 mx-auto max-w-7xl">
        {features.map((feature, idx) => {
          const stepNumber = (idx + 1).toString().padStart(2, '0');
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="group relative flex flex-col bg-white dark:bg-[#10101a] p-2 sm:p-3.5 rounded-md border border-neutral-200 dark:border-neutral-800 shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative w-full aspect-[4/3] bg-neutral-100 dark:bg-neutral-900/50 rounded-md overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <span className="text-8xl font-black text-[#ff6b00]/10 dark:text-[#ff6b00]/5 select-none">
                    {stepNumber}
                  </span>
                </div>
                <img
                  src={feature?.img || `/assets/features/${feature.id}.jpg`}
                  alt={feature.title}
                  className="absolute inset-0 w-full h-full object-cover z-10"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
