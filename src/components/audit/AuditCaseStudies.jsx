"use client";
import React from "react";
import { Star, TrendingUp, Quote, CheckCircle2, MapPin, Store } from "lucide-react";

export default function AuditCaseStudies() {
  const cases = [
    {
      name: "Fatkong Chinese",
      location: "Hauz Khas, South Delhi",
      growth: "+124% Orders",
      timeframe: "14 Days",
      scoreBefore: "54%",
      scoreAfter: "98%",
      desc: "Had only plain item names on Zomato. We added high-res bowl visuals, portion tags, and customized momo dips.",
    },
    {
      name: "Biryani & Kebab Street",
      location: "Sector 62, Noida",
      growth: "2.9x Repeat Diners",
      timeframe: "21 Days",
      scoreBefore: "62%",
      scoreAfter: "100%",
      desc: "Configured multi-choice sweet add-ons (phirni & gulab jamun) which lifted average basket value by ₹145 per order.",
    },
    {
      name: "The Crust Pizza Co.",
      location: "DLF Cyber City, Gurugram",
      growth: "+88% Daily Sales",
      timeframe: "9 Days",
      scoreBefore: "48%",
      scoreAfter: "96%",
      desc: "Replaced amateur phone photos with standardized appetizing pizza images, resulting in instant click-through surge.",
    },
  ];

  return (
    <section id="results" className="py-20 sm:py-28 bg-zinc-50/70 dark:bg-zinc-950/60 border-y border-zinc-200/60 dark:border-zinc-800/60 relative overflow-hidden scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-green-500/10 text-green-700 dark:text-green-300 text-xs font-bold uppercase tracking-wider mb-3 border border-green-500/20">
            <Star className="w-3.5 h-3.5 text-green-600 fill-green-600" />
            <span>Proven In Delhi NCR & Beyond</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tight leading-tight">
            Real Quick Wins From Real Kitchens
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            See how neighborhood cloud kitchens and restaurants transformed their order volume within days of a menu revamp.
          </p>
        </div>

        {/* Featured Large Hero Quote Card */}
        <div className="relative rounded-md bg-white dark:bg-[#101018] border-2 border-green-500/30 p-8 sm:p-12 shadow-2xl mb-14 overflow-hidden">
          <Quote className="w-16 h-16 text-green-500/15 absolute top-6 right-6 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="flex justify-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>

            <blockquote className="text-xl sm:text-2xl md:text-3xl font-extrabold text-zinc-900 dark:text-white leading-snug">
              “We had zero item photos for 3 weeks after launch. MagicScale fixed our menu over two days, and orders doubled by the weekend.”
            </blockquote>

            <div className="pt-2 flex flex-col items-center">
              <div className="font-black text-base text-zinc-900 dark:text-white">
                Karan Mehra
              </div>
              <div className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium flex items-center gap-1.5 mt-0.5">
                <Store className="w-3.5 h-3.5 text-green-600" />
                <span>Founder, Cloud Kitchens Collective • Malviya Nagar, South Delhi</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Quick Wins Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c, idx) => (
            <div
              key={idx}
              className="rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#101018] p-6 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-zinc-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-zinc-400" />
                    {c.location}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-green-500/10 text-green-700 dark:text-green-300 font-bold text-[11px]">
                    {c.timeframe}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">
                  {c.name}
                </h4>

                <div className="my-4 p-3 rounded-md bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-bold text-zinc-400 uppercase">Growth</div>
                    <div className="text-lg font-black text-green-600 dark:text-green-400">{c.growth}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-bold text-zinc-400 uppercase">Menu Score</div>
                    <div className="text-sm font-black text-zinc-800 dark:text-zinc-200">
                      {c.scoreBefore} → <span className="text-green-600 dark:text-green-400">{c.scoreAfter}</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                  {c.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center gap-1.5 text-xs text-green-600 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Swiggy/Zomato Listing</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

