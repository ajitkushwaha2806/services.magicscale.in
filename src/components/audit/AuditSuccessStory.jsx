"use client";
import React, { useState } from "react";
import { 
  TrendingUp, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  ChevronDown, 
  FileText, 
  Calendar, 
  UtensilsCrossed,
  Zap 
} from "lucide-react";

const OUTLETS = {
  "dosa-diaries": {
    id: "dosa-diaries",
    name: "Dosa Diaries",
    badgeLabel: "Success Story • Dosa Diaries",
    cuisine: "South Indian Kitchen",
    logoSrc: "/assets/case-studies/dosa-diaries-logo.jpg",
    headlinePre: "₹5K ➔ ",
    headlineAccent: "₹1 Lakh+",
    headlinePost: " in 60 Days",
    before: {
      tag: "No Photos",
      sales: "₹5,139",
      orders: "25 orders",
    },
    after: {
      tag: "20.1x Jump",
      sales: "₹1,03,767",
      orders: "413 orders",
    },
    maxSales: 103767,
    maxOrders: 413,
    data: [
      { month: "May", salesValue: 5139, salesFormatted: "₹5.1K", ordersValue: 25, ordersFormatted: "25", isBefore: true, tag: "Text-Only" },
      { month: "Jun", salesValue: 38385, salesFormatted: "₹38.4K", ordersValue: 164, ordersFormatted: "164", isBefore: false, tag: "+646%" },
      { month: "Jul", salesValue: 103139, salesFormatted: "₹103K", ordersValue: 370, ordersFormatted: "370", isBefore: false, tag: "₹1 Lakh 🎉", isMilestone: true },
      { month: "Aug", salesValue: 75795, salesFormatted: "₹75.8K", ordersValue: 303, ordersFormatted: "303", isBefore: false, tag: "12x" },
      { month: "Sep", salesValue: 81696, salesFormatted: "₹81.7K", ordersValue: 330, ordersFormatted: "330", isBefore: false, tag: "16x" },
      { month: "Oct", salesValue: 103767, salesFormatted: "₹103.8K", ordersValue: 413, ordersFormatted: "413", isBefore: false, tag: "Peak", isPeak: true },
    ],
    reports: {
      monthly: {
        title: "Dosa Diaries • 6-Month Scale (May - Oct)",
        subtitle: "6-Month Growth Report",
        img: "/assets/case-studies/dosa-diaries-growth.png",
        legend: ["1. Sales (₹)", "2. Orders", "3. AOV"],
        stat: "₹5,139 ➔ ₹1,03,767",
        statBadge: "20.1x",
      },
      daily: {
        title: "Dosa Diaries • Daily Run-Rate (01 - 08 Nov)",
        subtitle: "Nov Daily Performance",
        img: "/assets/case-studies/dosa-diaries-daily-growth.png",
        legend: ["1. Daily Sales", "2. Daily Orders", "3. Daily AOV"],
        stat: "Peak: ₹6,878 / day",
        statBadge: "24 Orders",
      },
    },
  },
  "sharma-ji": {
    id: "sharma-ji",
    name: "Sharma Ji Ka Dhaba",
    badgeLabel: "Success Story • Sharma Ji Ka Dhaba",
    cuisine: "North Indian & Dhaba",
    logoSrc: "/assets/case-studies/sharma-ji-dhaba-logo.jpg",
    headlinePre: "₹0 ➔ ",
    headlineAccent: "₹2.36 Lakhs",
    headlinePost: "/Month",
    before: {
      tag: "New Launch",
      sales: "₹0",
      orders: "0 orders (Day 0)",
    },
    after: {
      tag: "604 Orders",
      sales: "₹2,36,172",
      orders: "604 orders/mo",
    },
    maxSales: 236172,
    maxOrders: 629,
    data: [
      { month: "May", salesValue: 152833, salesFormatted: "₹152.8K", ordersValue: 336, ordersFormatted: "336", isBefore: false, tag: "Launch ₹1.52L" },
      { month: "Jun", salesValue: 196244, salesFormatted: "₹196.2K", ordersValue: 465, ordersFormatted: "465", isBefore: false, tag: "+28% Sales" },
      { month: "Jul", salesValue: 184404, salesFormatted: "₹184.4K", ordersValue: 499, ordersFormatted: "499", isBefore: false, tag: "499 Orders" },
      { month: "Aug", salesValue: 158849, salesFormatted: "₹158.8K", ordersValue: 393, ordersFormatted: "393", isBefore: false, tag: "Steady" },
      { month: "Sep", salesValue: 210204, salesFormatted: "₹210.2K", ordersValue: 629, ordersFormatted: "629", isBefore: false, tag: "₹2 Lakh+ 🎉", isMilestone: true },
      { month: "Oct", salesValue: 236172, salesFormatted: "₹236.2K", ordersValue: 604, ordersFormatted: "604", isBefore: false, tag: "Peak ₹2.36L", isPeak: true },
    ],
    reports: {
      monthly: {
        title: "Sharma Ji Ka Dhaba • 6-Month Scale (May - Oct)",
        subtitle: "6-Month Scale (May - Oct)",
        img: "/assets/case-studies/sharma-ji-dhaba-growth.png",
        legend: ["1. Sales (₹)", "2. Orders", "3. AOV"],
        stat: "₹0 ➔ ₹2,36,172",
        statBadge: "New Launch",
      },
      daily: {
        title: "Sharma Ji Ka Dhaba • Daily Performance (31 Oct - 07 Nov)",
        subtitle: "Daily Run-Rate (31 Oct - 07 Nov)",
        img: "/assets/case-studies/sharma-ji-dhaba-daily.png",
        legend: ["1. Daily Sales", "2. Daily Orders", "3. Daily AOV"],
        stat: "Single Day: ₹15,119",
        statBadge: "41 Orders",
      },
    },
  },
};

export default function AuditSuccessStory({ onOpenForm }) {
  const [selectedOutlet, setSelectedOutlet] = useState("dosa-diaries");
  const [metric, setMetric] = useState("sales"); // "sales" | "orders"
  const [showReports, setShowReports] = useState(false);
  const [activeReportTab, setActiveReportTab] = useState("monthly"); // "monthly" | "daily"

  const outlet = OUTLETS[selectedOutlet] || OUTLETS["dosa-diaries"];

  return (
    <section id="results" className="py-8 sm:py-16 bg-zinc-50/60 dark:bg-[#0c0c14] border-t border-zinc-200/70 dark:border-zinc-800/70 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Outlet Switcher Tabs (Dosa Diaries vs Sharma Ji Ka Dhaba) */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className="w-full max-w-sm sm:max-w-md grid grid-cols-2 p-1 rounded-md bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-xs">
            <button
              type="button"
              onClick={() => {
                setSelectedOutlet("dosa-diaries");
                setShowReports(false);
              }}
              className={`py-2 px-2.5 rounded text-xs font-bold transition-all flex items-center justify-center gap-1.5 truncate cursor-pointer ${
                selectedOutlet === "dosa-diaries"
                  ? "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-xs border border-zinc-200/80 dark:border-zinc-700"
                  : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              <div className="w-4 h-4 rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-700 bg-[#faf4e6] shrink-0">
                <img src="/assets/case-studies/dosa-diaries-logo.jpg" alt="Dosa Diaries" className="w-full h-full object-cover" />
              </div>
              <span className="truncate">Dosa Diaries</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setSelectedOutlet("sharma-ji");
                setShowReports(false);
              }}
              className={`py-2 px-2.5 rounded text-xs font-bold transition-all flex items-center justify-center gap-1.5 truncate cursor-pointer ${
                selectedOutlet === "sharma-ji"
                  ? "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-xs border border-zinc-200/80 dark:border-zinc-700"
                  : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              <div className="w-4 h-4 rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-700 bg-[#faf4e6] shrink-0">
                <img src="/assets/case-studies/sharma-ji-dhaba-logo.jpg" alt="Sharma Ji Ka Dhaba" className="w-full h-full object-cover" />
              </div>
              <span className="truncate">Sharma Ji Ka Dhaba</span>
            </button>
          </div>
        </div>

        {/* Compact Header with Outlet Avatar */}
        <div className="text-center mb-5 sm:mb-7 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-2">
            {outlet.logoSrc ? (
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border-2 border-green-500/40 shadow-sm bg-[#faf4e6] shrink-0 p-0.5">
                <img 
                  src={outlet.logoSrc} 
                  alt={outlet.name} 
                  className="w-full h-full object-cover rounded-full" 
                />
              </div>
            ) : (
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border-2 border-amber-500/40 shadow-sm bg-amber-50 dark:bg-amber-950/40 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0 p-1">
                <UtensilsCrossed className="w-4 h-4" />
              </div>
            )}
            
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-green-500/10 text-green-700 dark:text-green-300 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider border border-green-500/20">
              <Sparkles className="w-3 h-3 text-green-600 dark:text-green-400" />
              <span>{outlet.badgeLabel}</span>
            </div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-zinc-900 dark:text-white tracking-tight">
            {outlet.headlinePre}
            <span className="text-green-600 dark:text-green-400">{outlet.headlineAccent}</span>
            {outlet.headlinePost}
          </h2>
        </div>

        {/* Visual Before vs After Split Pill (Mobile-Optimized) */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-5">
          {/* Before */}
          <div className="p-3 sm:p-4 rounded-md border border-rose-200 dark:border-rose-950/60 bg-rose-50/50 dark:bg-rose-950/20 flex flex-col justify-between">
            <div className="flex items-center justify-between gap-1 mb-2">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-rose-600 dark:text-rose-400 whitespace-nowrap">
                BEFORE
              </span>
              <span className="text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded bg-rose-500/10 text-rose-600 dark:text-rose-400 font-bold whitespace-nowrap">
                {outlet.before.tag}
              </span>
            </div>
            <div>
              <div className="text-base sm:text-2xl font-black text-zinc-900 dark:text-white tracking-tight">
                {outlet.before.sales}
              </div>
              <div className="text-[11px] sm:text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-0.5">
                {outlet.before.orders}
              </div>
            </div>
          </div>

          {/* After */}
          <div className="p-3 sm:p-4 rounded-md border border-green-300 dark:border-green-800 bg-green-50/50 dark:bg-green-950/20 flex flex-col justify-between relative overflow-hidden">
            <div className="flex items-center justify-between gap-1 mb-2">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-green-700 dark:text-green-400 whitespace-nowrap">
                AFTER
              </span>
              <span className="text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded bg-green-500/20 text-green-700 dark:text-green-300 font-black whitespace-nowrap">
                {outlet.after.tag}
              </span>
            </div>
            <div>
              <div className="text-base sm:text-2xl font-black text-green-600 dark:text-green-400 tracking-tight">
                {outlet.after.sales}
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-zinc-800 dark:text-zinc-200 mt-0.5">
                {outlet.after.orders}
              </div>
            </div>
          </div>
        </div>

        {/* Graphical Growth Chart Card */}
        <div className="rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#101018] p-4 sm:p-6 shadow-sm mb-4">
          
          {/* Chart Header & Toggle Switch */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-1.5 min-w-0 pr-2">
              <TrendingUp className="w-4 h-4 text-green-600 shrink-0" />
              <span className="text-xs sm:text-sm font-black text-zinc-900 dark:text-white whitespace-nowrap">
                {metric === "sales" ? "Monthly Sales" : "Monthly Orders"}
              </span>
            </div>

            {/* Toggle Pills */}
            <div className="inline-flex p-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs shrink-0">
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
              {outlet.data.map((item, idx) => {
                const heightPercent = metric === "sales"
                  ? Math.max(8, Math.round((item.salesValue / outlet.maxSales) * 100))
                  : Math.max(8, Math.round((item.ordersValue / outlet.maxOrders) * 100));

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
        <div className="text-center mt-3 mb-4">
          <button
            type="button"
            onClick={() => setShowReports(!showReports)}
            className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-md border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-100 shadow-sm transition-all cursor-pointer group"
          >
            <FileText className="w-4 h-4 text-green-600 shrink-0" />
            <span className="whitespace-nowrap">{showReports ? "Hide Business Reports" : "View Verified Reports"}</span>
            <ChevronDown className={`w-4 h-4 text-zinc-500 shrink-0 transition-transform duration-300 ${showReports ? "rotate-180" : "group-hover:translate-y-0.5"}`} />
          </button>
        </div>

        {/* Expandable Business Reports Content */}
        {showReports && (
          <div className="space-y-3 sm:space-y-4 animate-in fade-in slide-in-from-top-3 duration-300 mb-5">
            
            {/* Perfectly Sized Responsive Tabs (50/50 Grid, No Text Wrapping) */}
            <div className="flex justify-center">
              <div className="w-full max-w-xs sm:max-w-sm grid grid-cols-2 p-1 rounded-md bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-xs">
                <button
                  type="button"
                  onClick={() => setActiveReportTab("monthly")}
                  className={`w-full py-2 px-2 rounded text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 truncate ${
                    activeReportTab === "monthly"
                      ? "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-xs border border-zinc-200/80 dark:border-zinc-700"
                      : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900"
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5 text-green-600 shrink-0" />
                  <span className="truncate">6-Month Scale</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveReportTab("daily")}
                  className={`w-full py-2 px-2 rounded text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 truncate ${
                    activeReportTab === "daily"
                      ? "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-xs border border-zinc-200/80 dark:border-zinc-700"
                      : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900"
                  }`}
                >
                  <TrendingUp className="w-3.5 h-3.5 text-green-600 shrink-0" />
                  <span className="truncate">Daily Breakdown</span>
                </button>
              </div>
            </div>

            {/* Tab 1: 6-Month Monthly Turnover Report (May - Oct) */}
            {activeReportTab === "monthly" && (
              <div className="rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#101018] p-3 sm:p-4 shadow-sm animate-in fade-in duration-200">
                <div className="flex items-center justify-between gap-2 mb-2.5 px-0.5">
                  <div className="flex items-center gap-2 min-w-0">
                    {outlet.logoSrc ? (
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-700 bg-[#faf4e6] shrink-0 p-0.5 shadow-xs">
                        <img 
                          src={outlet.logoSrc} 
                          alt={outlet.name} 
                          className="w-full h-full object-cover rounded-full" 
                        />
                      </div>
                    ) : (
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border border-amber-500/30 bg-amber-50 dark:bg-amber-950/40 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0 p-1 shadow-xs">
                        <UtensilsCrossed className="w-3.5 h-3.5" />
                      </div>
                    )}
                    
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm font-black text-zinc-900 dark:text-white truncate">
                        {outlet.name}
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-zinc-500 dark:text-zinc-400 font-medium truncate">
                        {outlet.reports.monthly.subtitle}
                      </div>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-green-700 dark:text-green-300 bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded shrink-0 whitespace-nowrap">
                    <CheckCircle2 className="w-3 h-3 text-green-600 shrink-0" />
                    <span>Verified</span>
                  </span>
                </div>

                <div className="rounded border border-zinc-200/80 dark:border-zinc-800 overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                  <img 
                    src={outlet.reports.monthly.img} 
                    alt={`${outlet.name} verified monthly merchant report`} 
                    className="w-full h-auto object-contain block"
                    loading="lazy"
                  />
                </div>

                <div className="mt-2.5 pt-2 border-t border-zinc-100 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-[11px]">
                  <div className="flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400 font-medium text-[10px] sm:text-[11px] flex-wrap">
                    {outlet.reports.monthly.legend.map((item, i) => (
                      <React.Fragment key={i}>
                        {i > 0 && <span className="text-zinc-300 dark:text-zinc-700">•</span>}
                        <span>{item}</span>
                      </React.Fragment>
                    ))}
                  </div>
                  <div className="font-bold text-green-600 dark:text-green-400 text-[11px] sm:text-xs whitespace-nowrap flex items-center gap-1.5">
                    <span>{outlet.reports.monthly.stat}</span>
                    <span className="text-[9px] px-1 py-0.2 rounded bg-green-500/15 text-green-700 dark:text-green-300 font-black">
                      {outlet.reports.monthly.statBadge}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Daily Sales Breakdown */}
            {activeReportTab === "daily" && (
              <div className="rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#101018] p-3 sm:p-4 shadow-sm animate-in fade-in duration-200">
                <div className="flex items-center justify-between gap-2 mb-2.5 px-0.5">
                  <div className="flex items-center gap-2 min-w-0">
                    {outlet.logoSrc ? (
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-700 bg-[#faf4e6] shrink-0 p-0.5 shadow-xs">
                        <img 
                          src={outlet.logoSrc} 
                          alt={outlet.name} 
                          className="w-full h-full object-cover rounded-full" 
                        />
                      </div>
                    ) : (
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border border-amber-500/30 bg-amber-50 dark:bg-amber-950/40 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0 p-1 shadow-xs">
                        <UtensilsCrossed className="w-3.5 h-3.5" />
                      </div>
                    )}
                    
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm font-black text-zinc-900 dark:text-white truncate">
                        {outlet.name}
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-zinc-500 dark:text-zinc-400 font-medium truncate">
                        {outlet.reports.daily.subtitle}
                      </div>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-green-700 dark:text-green-300 bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded shrink-0 whitespace-nowrap">
                    <CheckCircle2 className="w-3 h-3 text-green-600 shrink-0" />
                    <span>Verified</span>
                  </span>
                </div>

                <div className="rounded border border-zinc-200/80 dark:border-zinc-800 overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                  <img 
                    src={outlet.reports.daily.img} 
                    alt={`${outlet.name} verified daily merchant report`} 
                    className="w-full h-auto object-contain block"
                    loading="lazy"
                  />
                </div>

                <div className="mt-2.5 pt-2 border-t border-zinc-100 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-[11px]">
                  <div className="flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400 font-medium text-[10px] sm:text-[11px] flex-wrap">
                    {outlet.reports.daily.legend.map((item, i) => (
                      <React.Fragment key={i}>
                        {i > 0 && <span className="text-zinc-300 dark:text-zinc-700">•</span>}
                        <span>{item}</span>
                      </React.Fragment>
                    ))}
                  </div>
                  <div className="font-bold text-green-600 dark:text-green-400 text-[11px] sm:text-xs whitespace-nowrap flex items-center gap-1.5">
                    <span>{outlet.reports.daily.stat}</span>
                    <span className="text-[9px] px-1 py-0.2 rounded bg-green-500/15 text-green-700 dark:text-green-300 font-black">
                      {outlet.reports.daily.statBadge}
                    </span>
                  </div>
                </div>
              </div>
            )}

          </div>
        )}

        {/* Clean Single Action CTA */}
        <div className="text-center mt-6">
          <button
            onClick={onOpenForm}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 h-12 bg-green-600 hover:bg-green-700 text-white font-black rounded-md shadow-lg shadow-green-600/25 text-sm sm:text-base transition-all active:scale-[0.98] cursor-pointer uppercase tracking-wider group"
          >
            <Zap className="w-4 h-4 text-amber-300 fill-amber-300 shrink-0" />
            <span>Enquire Now</span>
            <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
}
