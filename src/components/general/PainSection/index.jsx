"use client";
import clsx from "clsx";
import Title from "../Title";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Highlighter } from "@/components/ui/highlighter";
import { GridPattern } from "@/components/ui/grid-pattern";

const growthSteps = [
  {
    title: "Deep Menu Analysis",
    description: "We optimize your items, descriptions, and pricing to maximize conversion rates.",
    image: null,
  },
  {
    title: "SEO & Keyword Optimization",
    description: "Ensure your restaurant shows up first when hungry customers search for your cuisine.",
    image: null,
  },
  {
    title: "CPC Ad Management",
    description: "Stop wasting ad spend. We create high-ROI campaigns that drive real orders.",
    image: null,
  },
  {
    title: "Review & Rating Strategy",
    description: "Build trust with automated review management and rating improvement strategies.",
    image: null,
  },
  {
    title: "Algorithmic Ranking Boost",
    description: "Leverage platform algorithms to organically increase your visibility over time.",
    image: null,
  },
];

function StepCard({ title, description, image, index }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className={clsx(
        "group relative overflow-hidden rounded-[12px] h-full flex flex-col",
        "border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-black",
        "shadow-[0_4px_20px_rgba(0,0,0,0.04)]",
        "transition-all duration-300",
      )}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute -top-20 -right-20 h-40 w-40 rounded-lg bg-green-500/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-lg bg-red-500/10 blur-3xl" />
      </div>

      <div
        className={clsx(
          "absolute top-6 right-6 z-20 inline-flex items-center rounded-lg border px-3 py-1 text-[11px] font-bold tracking-wider shadow-sm",
          "bg-green-500 text-white border-green-600 dark:border-green-500 shadow-green-500/20",
        )}
      >
        Step {index + 1}
      </div>

      <div className="relative z-10 px-4 pb-4 pt-4 shrink-0">
        <div
          className="
                        overflow-hidden
                        rounded-[12px]
                        border border-zinc-200 dark:border-zinc-800
                        bg-zinc-100 dark:bg-zinc-900/50
                        aspect-video
                        flex
                        items-center
                        justify-center
                    "
        >
          {image ? (
            <motion.img
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.4 }}
              src={image}
              alt={title}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="h-full w-full flex flex-col items-center justify-center text-zinc-400">
              <span className="text-4xl font-black text-green-500/20 group-hover:text-green-500/40 transition-colors">0{index + 1}</span>
            </div>
          )}
        </div>
      </div>

      <div className="relative z-10 p-7 pt-2 flex flex-col flex-grow">
        <div className="flex items-start justify-between gap-4 flex-grow">
          <div className="w-full">
            <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-green-500 transition-colors">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function RequiredDocumentsSection() {
  return (
    <section
      id="growth-framework"
      className="relative overflow-hidden py-12 bg-zinc-50 dark:bg-[#0A0A0A]"
    >
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "absolute inset-0 h-full w-full stroke-green-600/30 fill-green-600/30 dark:stroke-green-400/30 dark:fill-green-400/30 z-0",
          "[mask-image:linear-gradient(to_bottom,white,transparent_40%)]",
        )}
      />

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "200px" }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <Title
            title={
              <span className="text-3xl md:text-5xl">
                Our Proven <br />{" "}
                <Highlighter action="highlight" color="#f97316">
                  <span className="text-white relative z-10 px-2 py-1">
                    Growth Framework
                  </span>
                </Highlighter>
              </span>
            }
            description="We employ a systematic approach to scale your delivery business across Swiggy and Zomato."
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-center">
          {growthSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "200px" }}
              transition={{ delay: index * 0.1 }}
            >
              <StepCard {...step} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
