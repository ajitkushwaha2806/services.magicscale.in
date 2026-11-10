"use client";
import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

export default function BeforeAfterSlider({
  beforeImage = "/assets/compare/text-only-before.jpg",
  afterImage = "/assets/compare/photo-after.jpg",
  beforeLabel = "Text-Only Menu (Before)",
  afterLabel = "Photo Menu (After)",
  className = "",
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(position);
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  }, [handleMove]);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  return (
    <div
      ref={containerRef}
      onClick={(e) => handleMove(e.clientX)}
      onMouseMove={(e) => isDragging && handleMove(e.clientX)}
      onTouchMove={handleTouchMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className={`relative select-none overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-zinc-200 dark:border-zinc-800 shadow-2xl bg-white dark:bg-zinc-950 aspect-[4/4.5] sm:aspect-[16/11] w-full max-w-2xl mx-auto cursor-ew-resize group touch-pan-y ${className}`}
    >
      {/* After Image (Full Background) */}
      <div className="absolute inset-0 w-full h-full bg-white dark:bg-zinc-900">
        <Image
          src={afterImage}
          alt={afterLabel}
          fill
          sizes="(max-width: 768px) 100vw, 680px"
          className="object-contain object-top"
          priority
        />
        {/* After Badge */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md bg-green-600/95 text-white text-[10px] sm:text-xs font-black uppercase tracking-wider backdrop-blur-md shadow-lg border border-green-400/30 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span>{afterLabel}</span>
        </div>
      </div>

      {/* Before Image (Clipped overlay) */}
      <div
        className="absolute inset-0 overflow-hidden bg-white dark:bg-zinc-900 border-r border-zinc-300 dark:border-zinc-700"
        style={{ width: `${sliderPosition}%` }}
      >
        <div 
          className="relative w-full h-full" 
          style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : "100%" }}
        >
          <Image
            src={beforeImage}
            alt={beforeLabel}
            fill
            sizes="(max-width: 768px) 100vw, 680px"
            className="object-contain object-top"
          />
        </div>
        {/* Before Badge */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-md bg-zinc-900/90 text-zinc-300 text-[10px] sm:text-xs font-black uppercase tracking-wider backdrop-blur-md shadow-lg border border-zinc-700/50">
          <span>{beforeLabel}</span>
        </div>
      </div>

      {/* Slider Line Divider */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.6)] cursor-ew-resize z-20 flex items-center justify-center pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div
          onMouseDown={handleMouseDown}
          onTouchStart={() => setIsDragging(true)}
          className="pointer-events-auto w-9 h-9 sm:w-11 sm:h-11 -ml-0.5 rounded-full bg-white text-zinc-900 border-2 border-green-500 shadow-2xl flex items-center justify-center active:scale-110 hover:scale-105 transition-transform cursor-grab active:cursor-grabbing"
        >
          <MoveHorizontal className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
        </div>
      </div>

      {/* Drag instruction helper */}
      <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-10 px-3 py-1 rounded-full bg-black/75 backdrop-blur-sm text-white text-[10px] sm:text-[11px] font-bold pointer-events-none tracking-wide shadow-md whitespace-nowrap">
        ↔ Drag slider to see before / after
      </div>
    </div>
  );
}
