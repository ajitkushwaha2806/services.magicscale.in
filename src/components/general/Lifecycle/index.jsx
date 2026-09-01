"use client";
import React from "react";
import Title from "../Title";
import SectionWrapper from "../SectionWrapper";
import { motion } from "framer-motion";
import { Highlighter } from "@/components/ui/highlighter";
import { TrendingUp, Target, Rocket } from "lucide-react";

export default function Lifecycle() {
  const roadmap = [
    {
      month: "Month 1",
      icon: <Rocket className="w-6 h-6 text-blue-500" />,
      title: "BRANDING + NEW CUSTOMERS",
      description: "Logo, premium photography, complete menu, up to 100% menu score, ads & acquisition.",
      target: "Target: ₹50K-₹60K+",
      color: "blue",
    },
    {
      month: "Month 2",
      icon: <Target className="w-6 h-6 text-green-500" />,
      title: "REPEAT + RATINGS",
      description: "Human-agent calls, feedback, ratings, retention campaigns and repeat-customer strategy.",
      target: "Target: Establish Loyalty Loop",
      color: "green",
    },
    {
      month: "Month 3",
      icon: <TrendingUp className="w-6 h-6 text-green-500" />,
      title: "PROFIT + SCALE",
      description: "Ad/discount cost control, pricing, margins and best-seller analysis.",
      target: "Target: ₹2 Lakh+ monthly",
      color: "green",
    }
  ];

  return (
    <SectionWrapper
      title={
        <div className="mx-auto mb-16 text-center max-w-3xl">
          <Title
            title={
              <>
                The 3-Month Premium <br />
                <Highlighter action="highlight" color="#22c55e">
                  <span className="relative z-10 px-2 text-white">Growth Roadmap</span>
                </Highlighter>
              </>
            }
            description="Our proven lifecycle approach to scaling your restaurant operations systematically over 90 days."
          />
        </div>
      }
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-12 left-[16.6%] right-[16.6%] h-0.5 bg-neutral-200 dark:bg-neutral-800 z-0"></div>

          {roadmap.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="relative z-10 flex flex-col"
            >
              <div className="bg-white dark:bg-[#10101a] border border-neutral-200 dark:border-neutral-800 rounded-3xl p-6 shadow-xl flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center justify-between mb-6">
                  <span className={`px-3 py-1 text-xs font-black uppercase tracking-wider rounded-lg bg-${step.color}-500/10 text-${step.color}-600 dark:text-${step.color}-400`}>
                    {step.month}
                  </span>
                  <div className={`w-12 h-12 rounded-full bg-${step.color}-500/10 flex items-center justify-center shrink-0`}>
                    {step.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 leading-snug">{step.title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6 flex-grow">
                  {step.description}
                </p>
                
                <div className="mt-auto pt-4 border-t border-neutral-100 dark:border-neutral-800/50 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm font-bold text-neutral-900 dark:text-white">{step.target}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 bg-green-50 dark:bg-green-500/5 border border-green-200 dark:border-green-500/20 rounded-2xl p-6 text-center max-w-2xl mx-auto"
        >
          <p className="text-sm font-bold text-green-700 dark:text-green-400 uppercase tracking-widest mb-1">Performance Target</p>
          <p className="text-lg font-medium text-neutral-800 dark:text-neutral-200">
            Existing restaurants: <strong className="text-green-600 dark:text-green-500 font-black">25%-30% improvement target</strong> over previous month's sales.
          </p>
        </motion.div>

      </div>
    </SectionWrapper>
  );
}
