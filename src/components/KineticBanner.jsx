import React, { useRef, useEffect } from "react";
import { soundFX } from "../utils/soundEffects";
import { Play } from "lucide-react";

export default function KineticBanner({ onOpenFeaturedReel }) {
  const videoRef = useRef(null);
  const base = import.meta.env.BASE_URL || "/";
  const bannerVideoSrc = base.endsWith("/") ? `${base}videos/d27-sponsor-promo.mp4` : `${base}/videos/d27-sponsor-promo.mp4`;

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback: already muted
      });
    }
  }, []);

  const marqueeItems = [
    "REELS & SHORTS",
    "GAMING & HIGHLIGHTS",
    "COMMERCIAL & SPONSOR",
    "EVENT AFTERMOVIES",
    "3D TEXT & MOTION",
    "SOUND DESIGN & SFX",
    "DAVINCI RESOLVE COLOR",
    "RETENTION CUTTING",
    "MATCH CUTS & FLOW",
    "STORYTELLING",
  ];

  return (
    <div className="relative w-full bg-[#040508] border-t-2 border-b-2 border-white/[0.08] overflow-hidden select-none">
      
      {/* Top 35mm Sprocket Border */}
      <div className="h-3.5 w-full bg-black flex items-center justify-between px-2 overflow-hidden border-b border-white/[0.06] z-20 relative">
        <div className="w-full flex justify-between gap-3 opacity-40">
          {Array.from({ length: 36 }).map((_, i) => (
            <div
              key={i}
              className="w-4 h-2 rounded-[2px] bg-neutral-800 border border-neutral-700/80 shrink-0"
            />
          ))}
        </div>
      </div>

      {/* -------------------------------------------------------------
       * AUTOPLAYING CINEMATIC INTRO / SHOWREEL VIDEO BANNER
       * ------------------------------------------------------------- */}
      <div className="relative w-full h-[300px] sm:h-[420px] lg:h-[500px] overflow-hidden bg-black flex items-center justify-center">
        
        {/* Full-bleed background frame looping Satwik's real video silently */}
        <video
          ref={videoRef}
          src={bannerVideoSrc}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />

        {/* Dark Vignette Overlay for Crisp Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#040508] via-black/45 to-[#040508] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(4,5,8,0.92)_100%)] pointer-events-none" />

        {/* Center Content Overlay */}
        <div className="relative z-10 text-center max-w-4xl px-4 flex flex-col items-center">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/85 border border-[#ff6b00]/50 text-xs font-mono text-[#ff6b00] uppercase tracking-wider mb-3.5 shadow-xl backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#ff6b00] animate-ping" />
            <span className="font-bold">FEATURED EDIT PREVIEW</span>
          </div>

          {/* Center Main Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight drop-shadow-2xl">
            WELCOME TO MY TIMELINE
          </h2>

          {/* Sub-caption */}
          <p className="mt-3 text-xs sm:text-sm font-mono text-neutral-300 max-w-xl drop-shadow">
            A glimpse into my pacing, sound design, and visual storytelling.
          </p>

          {/* Center Action Button */}
          <button
            onClick={() => {
              soundFX.playShutterCut();
              if (onOpenFeaturedReel) {
                onOpenFeaturedReel();
              } else {
                const p = document.getElementById("projects-section");
                if (p) p.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="mt-6 flex items-center gap-2.5 px-7 py-3 rounded-full bg-[#ff6b00] hover:bg-orange-600 text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-wider shadow-[0_0_30px_rgba(255,107,0,0.55)] hover:scale-105 active:scale-95 transition-all cursor-pointer border border-orange-400/40"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>PLAY WITH AUDIO</span>
          </button>
        </div>
      </div>

      {/* -------------------------------------------------------------
       * BOTTOM SCROLLING MARQUEE TICKER (EDITING STYLES & FORMATS)
       * ------------------------------------------------------------- */}
      <div className="py-3 overflow-hidden flex whitespace-nowrap bg-black/95 border-t border-b border-white/[0.06]">
        <div className="animate-marquee flex items-center gap-8 text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-neutral-400">
          {marqueeItems.concat(marqueeItems).map((text, idx) => (
            <div key={idx} className="flex items-center gap-8 shrink-0">
              <span className={idx % 2 === 0 ? "text-white" : "text-[#ff6b00]"}>
                {text}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] shadow-[0_0_8px_#ff6b00] shrink-0" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom 35mm Sprocket Border */}
      <div className="h-3.5 w-full bg-black flex items-center justify-between px-2 overflow-hidden border-t border-white/[0.06] z-20 relative">
        <div className="w-full flex justify-between gap-3 opacity-40">
          {Array.from({ length: 36 }).map((_, i) => (
            <div
              key={i}
              className="w-4 h-2 rounded-[2px] bg-neutral-800 border border-neutral-700/80 shrink-0"
            />
          ))}
        </div>
      </div>

    </div>
  );
}
