"use client";
import Title from "../Title";
import { Star, MoreVertical } from "lucide-react";
import { motion } from "framer-motion";
import SectionWrapper from "../SectionWrapper";
import { TESTIMONIALS } from "./helper/constants";
import { Highlighter } from "@/components/ui/highlighter";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Testimonials() {
  return (
    <SectionWrapper title={
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "200px" }}
        className="mx-auto mb-12 max-w-3xl text-center"
      >
        <Title
          title={
            <span className="text-3xl md:text-6xl">
              Our <br />
              <Highlighter action="highlight" color="#22c55e">
                <span className="text-white relative z-10 px-2 py-1">Customers</span>
              </Highlighter>
            </span>
          }
          description="800+ Restaurants already loved it "
        />
      </motion.div >
    }>

      <div className="grid md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "200px" }}
            variants={cardVariants}
            className="rounded-lg border border-[#e8eaed] bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-neutral-800 dark:bg-[#10101a]"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-[15px] font-medium text-[#202124] dark:text-neutral-100 leading-tight">
                    {t.name}
                  </span>
                  <span className="text-[13px] text-[#70757a] dark:text-neutral-400 mt-0.5">
                    {t.reviewsCount}
                  </span>
                </div>
              </div>
              <button aria-label="More options" className="p-1 -mr-1 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                <MoreVertical className="w-5 h-5 text-[#70757a] dark:text-neutral-400" />
              </button>
            </div>

            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center gap-0.5 text-[#fbbc04]">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <span className="text-[13px] text-[#70757a] dark:text-neutral-400">
                {t.time}
              </span>
            </div>

            <p className="text-[14px] leading-[1.6] text-[#202124] dark:text-neutral-300 line-clamp-4">
              {t.quote}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
