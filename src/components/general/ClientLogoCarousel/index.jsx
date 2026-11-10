"use client";
import React from "react";
import Image from "next/image";

export const CLIENT_LOGOS = [
  {
    name: "La Pino'z Pizza",
    src: "/assets/clients/la-pinoz-pizza-v2.png",
    width: 180,
    height: 80,
  },
  {
    name: "Chai Sutta Bar",
    src: "/assets/clients/chai-sutta-bar-v2.png",
    width: 180,
    height: 80,
  },
  {
    name: "Zorko",
    src: "/assets/clients/zorko-v2.png",
    width: 220,
    height: 80,
  },
  {
    name: "Nagpal's",
    src: "/assets/clients/nagpals-v2.png",
    width: 190,
    height: 80,
  },
  {
    name: "Mr. Sandwich",
    src: "/assets/clients/mr-sandwich-v2.png",
    width: 180,
    height: 80,
  },
  {
    name: "Kulcha Kulture",
    src: "/assets/clients/kulcha-kulture-v2.png",
    width: 200,
    height: 80,
  },
];

export default function ClientLogoCarousel({ className = "" }) {
  // Multiply items to ensure seamless infinite looping
  const loopedLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <div className={`relative w-full max-w-6xl mx-auto overflow-hidden py-1 sm:py-1.5 ${className}`}>
      {/* Left Fade Gradient */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 md:w-36 bg-gradient-to-r from-white via-white/90 dark:from-[#0a0a0c] dark:via-[#0a0a0c]/90 to-transparent z-10" />

      {/* Right Fade Gradient */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 md:w-36 bg-gradient-to-l from-white via-white/90 dark:from-[#0a0a0c] dark:via-[#0a0a0c]/90 to-transparent z-10" />

      {/* Scrolling Row of Individual Client Logo Cards */}
      <div className="animate-marquee-infinite flex items-center gap-3 sm:gap-4 md:gap-5 py-1">
        {loopedLogos.map((client, idx) => (
          <div
            key={idx}
            className="w-36 sm:w-44 md:w-52 h-16 sm:h-20 md:h-22 shrink-0 rounded-md bg-white dark:bg-zinc-900/90 border border-zinc-200/80 dark:border-zinc-800 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center px-4 py-2.5 sm:px-5 sm:py-3.5 select-none group"
            title={client.name}
          >
            <Image
              src={client.src}
              alt={client.name}
              width={client.width}
              height={client.height}
              className="h-9 sm:h-11 md:h-13 w-auto max-w-[110px] sm:max-w-[140px] md:max-w-[160px] object-contain select-none transition-transform group-hover:scale-105 duration-200"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
