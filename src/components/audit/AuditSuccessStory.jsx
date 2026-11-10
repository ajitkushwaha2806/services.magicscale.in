"use client";
import React, { useState } from "react";
import { 
  TrendingUp, 
  CheckCircle2, 
  Sparkles, 
  Store, 
  ArrowRight, 
  ShieldCheck, 
  Zap,
  BarChart2,
  ChevronDown,
  FileText,
  Calendar
} from "lucide-react";

export default function AuditSuccessStory({ onOpenForm }) {
  const [metric, setMetric] = useState("sales"); // "sales" | "orders"
  const [showReports, setShowReports] = useState(false);
  const [activeReportTab, setActiveReportTab] = useState("monthly"); // "monthly" | "daily"

  const data = [
    {
      month: "May",
      label: "May 2026",
      salesValue: 5139,
      salesFormatted: "₹5.1K",
      salesFull: "₹5,139",
      ordersValue: 25,
      ordersFormatted: "25",
      aov: "₹206",
      isBefore: true,
      tag: "Text-Only",
    },
    {
      month: "Jun",
      label: "Jun 2026",
      salesValue: 38385,
      salesFormatted: "₹38.4K",
      salesFull: "₹38,385",
      ordersValue: 164,
      ordersFormatted: "164",
      aov: "₹234",
      isBefore: false,
      tag: "+646%",
    },
    {
      month: "Jul",
      label: "Jul 2026",
      salesValue: 103139,
      salesFormatted: "₹103K",
      salesFull: "₹1,03,139",
      ordersValue: 370,
      ordersFormatted: "370",
      aov: "₹279",
      isBefore: false,
      tag: "₹1 Lakh 🎉",
      isMilestone: true,
    },
    {
      month: "Aug",
      label: "Aug 2026",
      salesValue: 75795,
      salesFormatted: "₹75.8K",
      salesFull: "₹75,795",
      ordersValue: 303,
      ordersFormatted: "303",
      aov: "₹250",
      isBefore: false,
      tag: "12x",
    },
    {
      month: "Sep",
      label: "Sep 2026",
      salesValue: 81696,
      salesFormatted: "₹81.7K",
      salesFull: "₹81,696",
      ordersValue: 330,
      ordersFormatted: "330",
      aov: "₹248",
      isBefore: false,
      tag: "16x",
    },
    {
      month: "Oct",
      label: "Oct 2026",
      salesValue: 103767,
      salesFormatted: "₹103.8K",
      salesFull: "₹1,03,767",
      ordersValue: 413,
      ordersFormatted: "413",
      aov: "₹251",
      isBefore: false,
      tag: "Peak",
      isPeak: true,
    },
  ];

  const maxSales = 103767;
  const maxOrders = 413;

  return (
    <section id="results" className="py-8 sm:py-16 bg-zinc-50/60 dark:bg-[#0c0c14] border-t border-zinc-200/70 dark:border-zinc-800/70 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Compact Header with Dosa Diaries Brand Logo */}
        <div className="text-center mb-5 sm:mb-7 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border-2 border-green-500/40 shadow-sm bg-[#faf4e6] shrink-0 p-0.5">
              <img 
                src="/assets/case-studies/dosa-diaries-logo.jpg" 
                alt="Dosa Diaries Logo" 
                className="w-full h-full object-cover rounded-full" 
              />
            </div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-green-500/10 text-green-700 dark:text-green-300 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider border border-green-500/20">
              <Sparkles className="w-3 h-3 text-green-600 dark:text-green-400" />
              <span>Success Story • Dosa Diaries</span>
            </div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-zinc-900 dark:text-white tracking-tight">
            ₹5K ➔ <span className="text-green-600 dark:text-green-400">₹1 Lakh+</span> in 60 Days
          </h2>
        </div>

        {/* Visual Before vs After Split Pill (Mobile-Optimized) */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-5">
          {/* Before */}
          <div className="p-3 sm:p-4 rounded-md border border-rose-200 dark:border-rose-950/60 bg-rose-50/50 dark:bg-rose-950/20 flex flex-col justify-between">
            <div className="flex items-center justify-between gap-1 mb-2">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wide text-rose-600 dark:text-rose-400 truncate">
                Before
              </span>
              <span className="text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded bg-rose-500/10 text-rose-600 dark:text-rose-400 font-bold whitespace-nowrap">
                No Photos
              </span>
            </div>
            <div>
              <div className="text-base sm:text-2xl font-black text-zinc-900 dark:text-white tracking-tight">
                ₹5,139
              </div>
              <div className="text-[11px] sm:text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-0.5">
                25 orders
              </div>
            </div>
          </div>

          {/* After */}
          <div className="p-3 sm:p-4 rounded-md border border-green-300 dark:border-green-800 bg-green-50/50 dark:bg-green-950/20 flex flex-col justify-between relative overflow-hidden">
            <div className="flex items-center justify-between gap-1 mb-2">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wide text-green-700 dark:text-green-400 truncate">
                With MagicScale
              </span>
              <span className="text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded bg-green-500/20 text-green-700 dark:text-green-300 font-black whitespace-nowrap">
                20.1x Jump
              </span>
            </div>
            <div>
              <div className="text-base sm:text-2xl font-black text-green-600 dark:text-green-400 tracking-tight">
                ₹1,03,767
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-zinc-800 dark:text-zinc-200 mt-0.5">
                413 orders
              </div>
            </div>
          </div>
        </div>

        {/* Graphical Growth Chart Card */}
        <div className="rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#101018] p-4 sm:p-6 shadow-sm mb-5">
          
          {/* Chart Header & Toggle Switch */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <span className="text-xs sm:text-sm font-black text-zinc-900 dark:text-white">
                {metric === "sales" ? "Monthly Revenue Growth" : "Monthly Orders Volume"}
              </span>
            </div>

            {/* Toggle Pills */}
            <div className="inline-flex p-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs">
              <button
                type="button"
                onClick={() => setMetric("sales")}
                className={`px-2.5 py-1 rounded text-[11px] font-bold transition-all cursor-pointer ${
                  metric === "sales"
                    ? "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-xs"
                    : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900"
                }`}
              >
                ₹ Sales
              </button>
              <button
                type="button"
                onClick={() => setMetric("orders")}
                className={`px-2.5 py-1 rounded text-[11px] font-bold transition-all cursor-pointer ${
                  metric === "orders"
                    ? "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-xs"
                    : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900"
                }`}
              >
                📦 Orders
              </button>
            </div>
          </div>

          {/* Mobile-Friendly Bar Chart */}
          <div className="relative pt-6 pb-2">
            
            {/* Background Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
              <div className="border-b border-dashed border-zinc-400 dark:border-zinc-600 w-full" />
              <div className="border-b border-dashed border-zinc-400 dark:border-zinc-600 w-full" />
              <div className="border-b border-dashed border-zinc-400 dark:border-zinc-600 w-full" />
            </div>

            {/* 6 Graphical Bars */}
            <div className="relative z-10 grid grid-cols-6 gap-1.5 sm:gap-3 items-end h-40 sm:h-52">
              {data.map((item, idx) => {
                const heightPercent = metric === "sales"
                  ? Math.max(7, Math.round((item.salesValue / maxSales) * 100))
                  : Math.max(7, Math.round((item.ordersValue / maxOrders) * 100));

                const displayValue = metric === "sales" ? item.salesFormatted : item.ordersFormatted;

                return (
                  <div key={idx} className="flex flex-col items-center h-full justify-end group">
                    
                    {/* Top Value Label */}
                    <div className="text-[9px] sm:text-xs font-black text-zinc-800 dark:text-zinc-200 mb-1.5 transition-transform group-hover:scale-110 whitespace-nowrap">
                      {displayValue}
                    </div>

                    {/* The Bar */}
                    <div className="w-full max-w-[42px] bg-zinc-100 dark:bg-zinc-800/80 rounded-t-md overflow-hidden relative flex flex-col justify-end" style={{ height: "100%" }}>
                      <div 
                        className={`w-full rounded-t-md transition-all duration-500 ease-out relative ${
                          item.isBefore 
                            ? "bg-rose-500/80 dark:bg-rose-500/70" 
                            : item.isMilestone || item.isPeak
                            ? "bg-gradient-to-t from-green-600 to-emerald-400 shadow-sm shadow-green-500/30"
                            : "bg-emerald-500/80 dark:bg-emerald-500/60"
                        }`}
                        style={{ height: `${heightPercent}%` }}
                      >
                        {/* Shimmer accent on peak bar */}
                        {(item.isMilestone || item.isPeak) && (
                          <div className="absolute inset-0 bg-white/20 animate-pulse" />
                        )}
                      </div>
                    </div>

                    {/* Month Label */}
                    <div className="mt-2 text-center">
                      <div className={`text-[11px] sm:text-xs font-black ${
                        item.isBefore 
                          ? "text-rose-600 dark:text-rose-400" 
                          : item.isMilestone || item.isPeak
                          ? "text-green-600 dark:text-green-400 font-extrabold"
                          : "text-zinc-700 dark:text-zinc-300"
                      }`}>
                        {item.month}
                      </div>
                      <div className="text-[9px] text-zinc-400 font-medium hidden sm:block">
                        {item.tag}
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>

        </div>

        {/* ─────────────────────────────────────────────────────────────
            "KNOW MORE" EXPANDABLE SECTION
            Hides heavy business reports by default.
            Clicking it reveals the verified 6-Month & Daily reports!
        ────────────────────────────────────────────────────────────── */}
        <div className="text-center mt-4 mb-5">
          <button
            type="button"
            onClick={() => setShowReports(!showReports)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-100 shadow-sm transition-all cursor-pointer group"
          >
            <FileText className="w-4 h-4 text-green-600" />
            <span>{showReports ? "Hide Business Reports" : "Know More: View Official Business Reports"}</span>
            <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform duration-300 ${showReports ? "rotate-180" : "group-hover:translate-y-0.5"}`} />
          </button>
        </div>

        {/* Expandable Business Reports Content */}
        {showReports && (
          <div className="space-y-4 animate-in fade-in slide-in-from-top-3 duration-300 mb-6">
            
            {/* Report Tabs (6-Month Monthly vs November Daily) */}
            <div className="flex justify-center">
              <div className="inline-flex p-1 rounded-md bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs">
                <button
                  type="button"
                  onClick={() => setActiveReportTab("monthly")}
                  className={`px-3 py-1.5 rounded text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeReportTab === "monthly"
                      ? "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-xs"
                      : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900"
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5 text-green-600" />
                  <span>6-Month Monthly Scale</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveReportTab("daily")}
                  className={`px-3 py-1.5 rounded text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeReportTab === "daily"
                      ? "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-xs"
                      : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900"
                  }`}
                >
                  <TrendingUp className="w-3.5 h-3.5 text-green-600" />
                  <span>November Daily Breakdown</span>
                </button>
              </div>
            </div>

            {/* Tab 1: 6-Month Monthly Turnover Report (May - Oct) */}
            {activeReportTab === "monthly" && (
              <div className="rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#101018] p-3 sm:p-4 shadow-sm animate-in fade-in duration-200">
                <div className="flex items-center justify-between mb-2 px-1">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-700 bg-[#faf4e6] shrink-0">
                      <img 
                        src="/assets/case-studies/dosa-diaries-logo.jpg" 
                        alt="Dosa Diaries Logo" 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <span className="text-xs font-black text-zinc-900 dark:text-white">
                      Dosa Diaries • 6-Month Monthly Report
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-green-700 dark:text-green-400 bg-green-500/10 px-2 py-0.5 rounded">
                    <CheckCircle2 className="w-3 h-3 text-green-600" />
                    Verified Data
                  </span>
                </div>

                <div className="rounded border border-zinc-200/80 dark:border-zinc-800 overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                  <img 
                    src="/assets/case-studies/dosa-diaries-growth.png" 
                    alt="Dosa Diaries verified monthly merchant report from ₹5k to ₹1 Lakh+" 
                    className="w-full h-auto object-contain block"
                    loading="lazy"
                  />
                </div>

                <div className="mt-2 text-[11px] text-zinc-500 dark:text-zinc-400 px-1 flex flex-wrap items-center justify-between">
                  <span>Row 1: Gross Sales (₹) • Row 2: Total Orders • Row 3: AOV</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">Scale: ₹5,139 ➔ ₹1,03,767</span>
                </div>
              </div>
            )}

            {/* Tab 2: November Daily Sales Breakdown (01 - 08 Nov) */}
            {activeReportTab === "daily" && (
              <div className="rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#101018] p-3 sm:p-4 shadow-sm animate-in fade-in duration-200">
                <div className="flex items-center justify-between mb-2 px-1">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-700 bg-[#faf4e6] shrink-0">
                      <img 
                        src="/assets/case-studies/dosa-diaries-logo.jpg" 
                        alt="Dosa Diaries Logo" 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <span className="text-xs font-black text-zinc-900 dark:text-white">
                      Dosa Diaries • Daily Performance Run-Rate (01 - 08 Nov)
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-green-700 dark:text-green-400 bg-green-500/10 px-2 py-0.5 rounded">
                    <CheckCircle2 className="w-3 h-3 text-green-600" />
                    Verified Daily Data
                  </span>
                </div>

                <div className="rounded border border-zinc-200/80 dark:border-zinc-800 overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                  <img 
                    src="/assets/case-studies/dosa-diaries-daily-growth.png" 
                    alt="Dosa Diaries verified daily merchant report for November" 
                    className="w-full h-auto object-contain block"
                    loading="lazy"
                  />
                </div>

                <div className="mt-2 text-[11px] text-zinc-500 dark:text-zinc-400 px-1 flex flex-wrap items-center justify-between">
                  <span>Row 1: Gross Sales (₹) • Row 2: Total Orders • Row 3: AOV</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">Peak: ₹6,878/day • Up to 24 orders/day</span>
                </div>
              </div>
            )}

          </div>
        )}

        {/* Clean Single Action CTA */}
        <div className="text-center">
          <button
            onClick={onOpenForm}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 h-11 bg-green-600 hover:bg-green-700 text-white font-bold rounded-md shadow-lg shadow-green-600/20 text-xs sm:text-sm transition-all active:scale-[0.98] cursor-pointer"
          >
            <Zap className="w-4 h-4 fill-white" />
            <span>Claim Free 3-Dish Preview For Your Menu</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <div className="mt-2 text-[10px] text-zinc-500 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-green-600" />
            <span>₹0 Free trial • 48-hr turnaround • No card needed</span>
          </div>
        </div>

      </div>
    </section>
  );
}
