"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../SectionWrapper";
import Title from "../Title";
import { Highlighter } from "@/components/ui/highlighter";
import { CheckCircle2 } from "lucide-react";

export default function FeatureShowcase() {
  const addons = [
    "Appetizing Item Descriptions",
    "Strategic Categorization",
    "High-Converting Add-ons Setup",
    "Veg/Non-Veg & Tags Configuration",
    "Customizable Options & Variants"
  ];

  return (
    <SectionWrapper id="services">
      <div className="mx-auto mb-8 text-center max-w-4xl">
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

      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Left Side: Phone Mockup */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 0.6 }}
          className="relative w-full max-w-[360px] mx-auto lg:mx-0 flex justify-center"
        >
          {/* Phone Frame */}
          <div className="relative w-full aspect-[1/2.1] bg-black rounded-[2.5rem] border-[8px] border-black shadow-2xl overflow-hidden ring-1 ring-white/10 dark:ring-white/20">
            {/* Dynamic Island / Notch */}
            <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20">
              <div className="w-1/3 h-full bg-black rounded-b-xl"></div>
            </div>
            
            {/* The Screen Content */}
            <div className="relative w-full h-full bg-white dark:bg-neutral-900 overflow-hidden">
              <img 
                src="/assets/menu-screenshot.jpeg" 
                alt="Menu Setup Mockup" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            
            {/* Glare effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 blur-3xl -z-10 rounded-full"></div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400 w-fit text-sm font-semibold tracking-wide uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Step 1
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white leading-tight">
            Complete <br />
            <Highlighter action="highlight" color="#22c55e">
              <span className="relative z-10 px-2 text-white">Menu Setup</span>
            </Highlighter>
          </h2>

          <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            We structure your menu for maximum conversions and sales. From appetizing descriptions to strategic add-ons, we ensure your menu stands out and drives higher average order values.
          </p>

          <div className="mt-4 flex flex-col gap-4">
            {addons.map((addon, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0" />
                <span className="text-neutral-700 dark:text-neutral-300 font-medium text-lg">
                  {addon}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-32">
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 order-2 lg:order-1"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400 w-fit text-sm font-semibold tracking-wide uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Step 2
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white leading-tight">
            90+ <br />
            <Highlighter action="highlight" color="#22c55e">
              <span className="relative z-10 px-2 text-white">Menu Score</span>
            </Highlighter>
          </h2>

          <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Boost your algorithmic visibility on food delivery platforms. Maintaining an excellent menu score is critical for ranking higher in search results and gaining customer trust.
          </p>

          <div className="mt-4 flex flex-col gap-4">
            {[
              "Algorithmic Visibility Boost",
              "Higher Ranking on Search",
              "Trust-building with Customers",
              "Data-driven Improvements"
            ].map((addon, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0" />
                <span className="text-neutral-700 dark:text-neutral-300 font-medium text-lg">
                  {addon}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Widget Mockup */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 0.6 }}
          className="relative w-full mx-auto lg:mx-0 flex justify-center order-1 lg:order-2"
        >
          <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
            <img 
              src="/assets/menu-score-screenshot.png" 
              alt="Menu Score Mockup" 
              className="w-full h-auto object-cover"
            />
            {/* Glare effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"></div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -inset-4 bg-gradient-to-l from-green-500/20 to-emerald-500/20 blur-3xl -z-10 rounded-full"></div>
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center mt-32">
        {/* Left Side: Card Mockup */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 0.6 }}
          className="relative w-full mx-auto lg:mx-0 flex justify-center"
        >
          <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
            <img 
              src="/assets/offers-discount-screenshot.png" 
              alt="Offers and Discounts Mockup" 
              className="w-full h-auto object-cover"
              onError={(e) => {
                e.target.src = "/assets/discount-management.png";
              }}
            />
            {/* Glare effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"></div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 blur-3xl -z-10 rounded-full"></div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400 w-fit text-sm font-semibold tracking-wide uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Step 3
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white leading-tight">
            Offers & <br />
            <Highlighter action="highlight" color="#22c55e">
              <span className="relative z-10 px-2 text-white">Discounts</span>
            </Highlighter>
          </h2>

          <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Implement data-driven pricing and compelling discount strategies. We optimize your promotions to maximize profit margins while driving rapid customer acquisition and repeat orders.
          </p>

          <div className="mt-4 flex flex-col gap-4">
            {[
              "Strategic Coupon Campaigns",
              "Margin-Friendly Discounts",
              "Flash Sale Management",
              "Bundle & Combo Offers"
            ].map((addon, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0" />
                <span className="text-neutral-700 dark:text-neutral-300 font-medium text-lg">
                  {addon}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center mt-32">
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 order-2 lg:order-1"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400 w-fit text-sm font-semibold tracking-wide uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Step 4
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white leading-tight">
            Performance <br />
            <Highlighter action="highlight" color="#22c55e">
              <span className="relative z-10 px-2 text-white">Reports</span>
            </Highlighter>
          </h2>

          <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Stay fully informed with detailed daily and weekly performance metrics. We provide transparent insights into your sales, ratings, and customer trends so you always know how your business is growing.
          </p>

          <div className="mt-4 flex flex-col gap-4">
            {[
              "Daily Sales & Order Tracking",
              "Weekly Growth Summaries",
              "Customer Rating Insights",
              "Actionable Trend Analysis"
            ].map((addon, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0" />
                <span className="text-neutral-700 dark:text-neutral-300 font-medium text-lg">
                  {addon}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Card Mockup */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 0.6 }}
          className="relative w-full mx-auto lg:mx-0 flex justify-center order-1 lg:order-2"
        >
          <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
            <img 
              src="/assets/weekly-sales-report.png" 
              alt="Performance Reports Mockup" 
              className="w-full h-auto object-cover"
              onError={(e) => {
                e.target.src = "/assets/daily-sales-report.png";
              }}
            />
            {/* Glare effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"></div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -inset-4 bg-gradient-to-l from-green-500/20 to-emerald-500/20 blur-3xl -z-10 rounded-full"></div>
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center mt-32">
        {/* Left Side: Card Mockup */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 0.6 }}
          className="relative w-full mx-auto lg:mx-0 flex justify-center"
        >
          <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
            <img 
              src="/assets/ai-feedback-call.png" 
              alt="Feedback Calls Mockup" 
              className="w-full h-auto object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            {/* Glare effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"></div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 blur-3xl -z-10 rounded-full"></div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400 w-fit text-sm font-semibold tracking-wide uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Step 5
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white leading-tight">
            Order <br />
            <Highlighter action="highlight" color="#22c55e">
              <span className="relative z-10 px-2 text-white">Feedback Calls</span>
            </Highlighter>
          </h2>

          <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            We personally call customers after their orders to gather feedback and encourage positive reviews. This proactive approach helps consistently manage and maintain your restaurant's rating well above 4.0+.
          </p>

          <div className="mt-4 flex flex-col gap-4">
            {[
              "Post-Delivery Courtesy Calls",
              "Direct Positive Rating Requests",
              "Maintain 4.0+ Overall Ratings",
              "Boost Customer Retention"
            ].map((addon, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0" />
                <span className="text-neutral-700 dark:text-neutral-300 font-medium text-lg">
                  {addon}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
