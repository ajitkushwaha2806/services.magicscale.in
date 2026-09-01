import { cn } from "@/lib/utils";
import { Highlighter } from "@/components/ui/highlighter";
import { GridPattern } from "@/components/ui/grid-pattern";

export const Hero = () => {
  return (
    <div className="relative w-full px-4 sm:px-6 lg:px-8 text-center pt-20 md:pt-32 pb-8 md:pb-12 overflow-hidden flex flex-col items-center">
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "absolute inset-0 h-full w-full stroke-green-600/30 fill-green-600/30 dark:stroke-green-400/30 dark:fill-green-400/30 z-0",
          "[mask-image:linear-gradient(to_bottom,white,transparent_90%)]",
        )}
      />
      <h1
        className="relative z-10 w-full mx-auto pb-4 animate-in fade-in slide-in-from-top-4 duration-700"
      >
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center rounded-full bg-green-100/80 dark:bg-green-900/30 px-4 py-1.5 text-sm font-medium text-green-800 dark:text-green-300 ring-1 ring-inset ring-green-600/20 shadow-sm">
            🚀 Skyrocket Your Restaurant's Revenue
          </span>
        </div>

        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.2] md:leading-[1.1] text-gray-900 dark:text-white">
          10x Your Orders on{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-green-600 drop-shadow-sm">
            Zomato & Swiggy
          </span>
          <br />
          <span className="mt-2 md:mt-4 flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
            <span>Guaranteed Results</span>
            <span className="inline-block -rotate-2 transform transition-transform hover:rotate-0 duration-300">
              <Highlighter action="highlight" color="#f97316">
                <span className="text-white relative z-10 px-4 py-1 rounded-md">
                  In 30 Days
                </span>
              </Highlighter>
            </span>
          </span>
        </div>
      </h1>

      <p
        className="relative z-10 mt-6 text-sm md:text-lg lg:text-xl text-gray-500 dark:text-gray-400 max-w-3xl font-normal leading-relaxed mx-auto px-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-both"
      >
        Expert menu optimization, CPC ad management, and organic ranking strategies designed to maximize your visibility and sales.
      </p>

      <div className="relative z-10 mt-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
        <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 bg-green-50 dark:bg-green-900/20 px-6 py-3 rounded-2xl border border-green-100 dark:border-green-800/30">
          <span className="text-green-700 dark:text-green-400 font-semibold text-lg flex items-center gap-2">
            <span className="text-2xl font-black">₹999</span> /month
          </span>
          <span className="hidden sm:block text-green-300">|</span>
          <span className="text-green-600 dark:text-green-500 font-medium text-sm sm:text-base">
            Cancel Anytime • Transparent Reporting
          </span>
        </div>
      </div>

      <div
        className="relative hidden z-10 md:flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-12 mb-12 text-sm font-medium text-gray-500 dark:text-gray-400 animate-in fade-in duration-700 delay-500 fill-mode-both"
      >
        <span className="flex items-center gap-1.5"><span className="text-green-500 bg-green-100 dark:bg-green-900/40 rounded-full p-0.5">✓</span> Data-Driven Menu Curation</span>
        <span className="flex items-center gap-1.5"><span className="text-green-500 bg-green-100 dark:bg-green-900/40 rounded-full p-0.5">✓</span> Optimized Ad Spend</span>
        <span className="flex items-center gap-1.5"><span className="text-green-500 bg-green-100 dark:bg-green-900/40 rounded-full p-0.5">✓</span> 24/7 Account Manager</span>
      </div>

      <div className="w-full max-w-6xl mx-auto animate-in fade-in zoom-in-95 duration-700 delay-700 ">
        <div className="group relative overflow-hidden rounded-2xl md:rounded-[24px] border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-black shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] p-2 sm:p-4">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-green-500/10 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-red-500/10 blur-3xl" />
          </div>

          <div className="relative z-10 overflow-hidden rounded-xl md:rounded-[16px] border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 flex items-center justify-center p-8 md:p-16 min-h-[300px] md:min-h-[500px]">
             {/* Placeholder for a generic growth dashboard image or generic illustration */}
             <div className="text-center">
               <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Your Revenue Dashboard</h3>
               <p className="text-gray-500 dark:text-gray-400">Placeholder for Swiggy/Zomato Growth Metrics</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
