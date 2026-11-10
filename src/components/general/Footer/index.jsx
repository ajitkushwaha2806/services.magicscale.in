"use client";
import React from "react";
import Link from "next/link";
import { FOOTER_LINKS } from "./helper/constants";
import { Logo } from "@/components/general/logo";

const WEBSITE_NAME =
  process.env.NEXT_PUBLIC_BUSINESS_NAME || "MagicScale";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c14] pt-5 pb-20 sm:pb-24 md:py-6 px-4 sm:px-6 md:px-12 text-sm text-zinc-600 dark:text-zinc-400">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Legal Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <Link href="/" className="inline-flex items-center gap-2 mb-1">
            <Logo />
            <span className="text-lg font-black tracking-tight text-zinc-900 dark:text-white">
              Magicscale
            </span>
          </Link>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            © {currentYear} {WEBSITE_NAME}. All rights reserved.
          </p>
          <p className="text-[11px] text-zinc-400 dark:text-zinc-500">
            A brand of MAGIC SCALE RESTAURANT CONSULTANT / VISHAL KUSHWAHA
          </p>
        </div>

        {/* Links Navigation */}
        <nav className="flex flex-wrap justify-center md:justify-end gap-x-5 gap-y-2.5 max-w-xl text-xs sm:text-sm font-medium">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-zinc-500 hover:text-green-600 dark:text-zinc-400 dark:hover:text-green-400 transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

      </div>
    </footer>
  );
}
