"use client";
import React from "react";
import Title from "../Title";
import { motion } from "framer-motion";
import SectionWrapper from "../SectionWrapper";
import { Highlighter } from "@/components/ui/highlighter";
import { FileUp, PhoneCall, KeyRound, MailCheck } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Sign Up",
      description: "Select a package & complete payment.",
      icon: FileUp,
    },
    {
      num: "02",
      title: "Audit & Strategy",
      description: "Our experts analyze your current profiles.",
      icon: PhoneCall,
    },
    {
      num: "03",
      title: "Optimization",
      description: "We update menus, keywords & launch ads.",
      icon: KeyRound,
    },
    {
      num: "04",
      title: "Watch Sales Grow",
      description: "Receive bi-weekly performance reports.",
      icon: MailCheck,
    }
  ];

  return (
    <SectionWrapper
      title={
        <div className="mx-auto mb-16 text-center">
          <Title
            title={
              <>
                Simple Process. <br />{" "}
                <Highlighter action="highlight" color={"#f97316"}>
                  <span className="relative z-10 px-2 text-white">
                    Zero Hassle.
                  </span>
                </Highlighter>
              </>
            }
            description="How we skyrocket your Swiggy and Zomato sales in 4 simple steps."
          />
        </div>
      }
    >
      <div className="mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-6 md:gap-4 lg:gap-6 justify-between items-stretch">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === steps.length - 1;
            return (
              <React.Fragment key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "200px" }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                  className="flex-1 relative bg-white rounded-lg border-2 border-zinc-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] p-5 text-center hover:border-green-500/30 hover:shadow-[0_8px_30px_rgb(249,115,22,0.12)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
                >
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white text-[11px] font-black tracking-widest px-4 py-1.5 rounded-full shadow-md border-4 border-white">
                    STEP {step.num}
                  </div>

                  <div className="mx-auto w-20 h-20 rounded-lg bg-gradient-to-b from-green-50 to-white border border-green-500/10 flex items-center justify-center mb-6 mt-4 shadow-sm">
                    <Icon className="w-9 h-9 text-green-500" />
                  </div>

                  <h3 className="text-xl font-extrabold text-zinc-900 mb-3">{step.title}</h3>
                  <p className="text-[14px] text-zinc-500 font-medium leading-relaxed px-1 mt-auto">
                    {step.description}
                  </p>
                </motion.div>

                {!isLast && (
                  <div className="hidden md:flex items-center justify-center shrink-0">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-50 flex items-center justify-center shadow-sm">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}

                {!isLast && (
                  <div className="md:hidden flex justify-center -my-2 z-10 relative">
                    <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center shadow-sm border-2 border-white">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="rotate-90">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
