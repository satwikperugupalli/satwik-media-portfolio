import React, { useState, useEffect, useRef } from "react";
import { soundFX } from "../utils/soundEffects";

export default function PassThroughClapboardHero({ editorInfo, onPassThroughComplete }) {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const soundPlayedRef = useRef(false);

  useEffect(() => {
    const audio = new Audio("/sounds/clapper.mp3");
    audio.preload = "auto";
    audio.load();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
      
      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      // Normalized progress 0.0 to 1.0
      const progress = Math.min(Math.max(currentScroll / totalScrollable, 0), 1);
      setScrollProgress(progress);

      // Snappy clapper snap (fires around 18% scroll)
      if (progress >= 0.18 && !soundPlayedRef.current) {
        soundPlayedRef.current = true;
        soundFX.playClap();
      } else if (progress < 0.12 && soundPlayedRef.current) {
        // Reversible on up-scroll
        soundPlayedRef.current = false;
      }

      if (onPassThroughComplete) {
        onPassThroughComplete(progress >= 0.75);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onPassThroughComplete]);

  // Click to pass through quickly
  const handleClapClick = () => {
    if (!containerRef.current) return;
    soundFX.playClap();
    const targetY = containerRef.current.offsetTop + containerRef.current.offsetHeight - window.innerHeight + 10;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  // -------------------------------------------------------------
  // QUICK, RESPONSIVE 100% REVERSIBLE MATHEMATICS
  // -------------------------------------------------------------
  // Phase 1 (0.0 -> 0.20): Clapper Arm snaps down (-28deg -> 0deg)
  const armProgress = Math.min(scrollProgress / 0.20, 1);
  const armAngle = -28 * (1 - armProgress);

  // Phase 2 (0.20 -> 0.85): Pass-through zoom through the lens
  const zoomProgress = Math.max(0, (scrollProgress - 0.20) / 0.65);
  const boardScale = 1 + Math.pow(zoomProgress, 2) * 8;
  const boardOpacity = Math.max(0, 1 - Math.pow(zoomProgress, 1.6) * 1.4);
  const passThroughBlur = zoomProgress * 14;

  const isCompletelyPassed = scrollProgress >= 0.88;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[130vh] bg-[#050508] z-30"
    >
      {/* STICKY FULL-SCREEN VIEWPORT: ONLY THE CLAPBOARD */}
      <div className={`sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden bg-[#050508] ${
        isCompletelyPassed ? "pointer-events-none opacity-0" : "pointer-events-auto"
      }`}>
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(5,5,8,0.95)_100%)] pointer-events-none" />

        {/* THE FULL-FRAME CINEMA CLAPBOARD */}
        <div
          onClick={handleClapClick}
          style={{
            transform: `scale(${boardScale})`,
            opacity: boardOpacity,
            filter: passThroughBlur > 0.5 ? `blur(${passThroughBlur}px)` : "none",
            transformOrigin: "center 42%",
            transition: "filter 0.05s ease-out",
          }}
          className="relative w-[92vw] max-w-[740px] cursor-pointer select-none rounded-2xl bg-[#0a0c13] border-2 border-neutral-700/80 shadow-[0_0_80px_rgba(0,0,0,0.95)] p-3 sm:p-5 flex flex-col justify-between"
          title="Scroll or click to enter"
        >
          {/* Top Clapper Arm & Stick */}
          <div className="relative mb-3">
            <div className="absolute -top-1 left-2 sm:left-4 z-30 w-6 h-6 rounded-full bg-gradient-to-b from-neutral-200 to-neutral-600 border border-neutral-900 shadow-xl flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-neutral-950" />
            </div>

            {/* Top Arm */}
            <div
              style={{
                transformOrigin: "16px 50%",
                transform: `rotate(${armAngle}deg)`,
                transition: "transform 0.04s linear",
              }}
              className="relative z-20 h-11 sm:h-14 w-full rounded-t-xl bg-neutral-900 border-2 border-neutral-600 shadow-2xl overflow-hidden flex items-center"
            >
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    -45deg,
                    #ffffff,
                    #ffffff 26px,
                    #0a0b10 26px,
                    #0a0b10 52px
                  )`,
                }}
              />
            </div>

            {/* Bottom Stationary Stick */}
            <div className="relative z-10 h-8 sm:h-10 w-full -mt-1 rounded-sm bg-neutral-900 border-x-2 border-b-2 border-neutral-600 overflow-hidden flex items-center shadow-md">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    -45deg,
                    #ffffff,
                    #ffffff 26px,
                    #0a0b10 26px,
                    #0a0b10 52px
                  )`,
                }}
              />
            </div>
          </div>

          {/* Slate Board */}
          <div className="relative z-10 rounded-xl bg-[#06080e] border border-neutral-800 p-5 sm:p-7 text-neutral-200 shadow-inner">
            
            {/* 1. Top Row (Header Bar inside Slate) */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-800 text-xs font-mono">
              <div className="text-left">
                <span className="text-[10px] text-neutral-500 uppercase tracking-widest block">
                  PORTFOLIO • SHOWREEL
                </span>
                <span className="font-bold text-white text-sm sm:text-base tracking-wide uppercase">
                  POST-PRODUCTION & VISUAL STORYTELLING
                </span>
              </div>
            </div>

            {/* 2. Middle Row (Two-Column Split) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 py-3 border-b border-neutral-800 items-center">
              {/* Left Column: Identity Block */}
              <div className="md:col-span-6 flex flex-col justify-center text-left">
                <span className="text-[10px] text-neutral-500 uppercase font-mono tracking-wider">
                  EDITOR / CREATOR
                </span>
                <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
                  {editorInfo?.name || "SATWIK PERUGUPALLI"}
                </h1>
                <span className="text-xs sm:text-sm text-[#00f0ff] font-medium mt-0.5">
                  Video Editor • Colorist • Motion Designer
                </span>
              </div>

              {/* Right Column: Value Proposition Box */}
              <div className="md:col-span-6 flex flex-col justify-center text-left bg-white/[0.02] p-3 rounded-lg border border-white/5">
                <span className="text-[10px] text-neutral-500 uppercase font-mono tracking-wider mb-1">
                  THE VISION
                </span>
                <p className="text-xs sm:text-sm text-white font-medium italic leading-relaxed">
                  "Turning raw footage into high-retention visual stories."
                </p>
              </div>
            </div>

            {/* 3. Lower Grid (2-Box Metadata Row — PRIMARY NLE & SPECIALTY) */}
            <div className="grid grid-cols-2 gap-3 pt-4 text-center font-mono">
              {/* Box 1: PRIMARY NLE */}
              <div className="bg-[#0b0e17] p-3 rounded-lg border border-neutral-800 flex flex-col justify-center items-center">
                <span className="block text-[10px] text-neutral-500 uppercase tracking-wider">PRIMARY NLE</span>
                <span className="text-lg sm:text-2xl font-bold text-[#ff6b00]">DAVINCI RESOLVE</span>
              </div>

              {/* Box 2: SPECIALTY */}
              <div className="bg-[#0b0e17] p-3 rounded-lg border border-neutral-800 flex flex-col justify-center items-center">
                <span className="block text-[10px] text-neutral-500 uppercase tracking-wider">SPECIALTY</span>
                <span className="text-lg sm:text-2xl font-bold text-[#00f0ff]">CUT & GRADE</span>
              </div>
            </div>

            {/* 4. Technical Specs Strip (Single centered horizontal line above bottom bar) */}
            <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-center text-center text-[10px] sm:text-[11px] font-mono text-neutral-500 tracking-wider">
              <span>WORKFLOW: EDIT • SOUND DESIGN • COLOR GRADING • VFX</span>
            </div>
          </div>

          {/* 5. Bottom Action Bar (Full-width footer strip inside slate) */}
          <div className="mt-3 py-2 px-3 rounded-lg bg-neutral-900/60 border border-white/5 flex items-center justify-between text-xs font-mono text-neutral-400">
            <span className="flex items-center gap-2 text-white font-bold">
              <span className={`w-2 h-2 rounded-full ${scrollProgress >= 0.18 ? "bg-[#ff6b00] animate-ping" : "bg-[#ff6b00]"}`} />
              <span>
                {scrollProgress < 0.18 ? "SCROLL TO CUT" : "PASSING THROUGH..."}
              </span>
            </span>
            <span className="text-neutral-500 text-[10px] font-mono">
              [TAP OR SCROLL TO ENTER]
            </span>
          </div>
        </div>

        {/* Scroll down indicator */}
        {scrollProgress < 0.15 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-xs font-mono text-neutral-400 pointer-events-none transition-opacity duration-300">
            <div className="w-5 h-9 rounded-full border border-neutral-700 flex items-start justify-center p-1">
              <div className="w-1.5 h-2.5 rounded-full bg-[#ff6b00] animate-bounce mt-1" />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-neutral-500">
              Scroll
            </span>
          </div>
        )}

      </div>
    </div>
  );
}
