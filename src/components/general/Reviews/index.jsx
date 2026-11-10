"use client";
import React from "react";
import Title from "../Title";
import { motion } from "framer-motion";
import SectionWrapper from "../SectionWrapper";
import { Highlighter } from "@/components/ui/highlighter";
import InstagramReviewEmbed from "./InstagramReviewEmbed";

export default function Testimonials() {
  return (
    <SectionWrapper 
      id="reviews"
      title={
        <Title
          title={
            <span className="text-3xl md:text-5xl font-black tracking-tight">
              Our <span className="text-green-600 dark:text-green-400">Customers</span>
            </span>
          }
          description="800+ Restaurants already loved it"
        />
      }
    >
      {/* Client Reel Review */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-sm mx-auto flex justify-center pb-4"
      >
        <InstagramReviewEmbed />
      </motion.div>
    </SectionWrapper>
  );
}
