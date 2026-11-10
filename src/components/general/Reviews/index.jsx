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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "100px" }}
          className="mx-auto mb-8 max-w-3xl text-center"
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
            description="800+ Restaurants already loved it"
          />
        </motion.div>
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
