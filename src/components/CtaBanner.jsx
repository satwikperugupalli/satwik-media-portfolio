import React from "react";
import { soundFX } from "../utils/soundEffects";
import { ArrowDown, Sparkles } from "lucide-react";

export default function CtaBanner() {
  const handleScrollToContact = () => {
    soundFX.playClap();
    const contactSec = document.getElementById("contact-section");
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#050508] via-[#080b13] to-[#050508] border-t border-b border-white/[0.08] overflow-hidden text-center select-none">
      
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Micro-Pill Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/80 border border-[#ff6b00]/40 text-xs font-mono text-[#ff6b00] uppercase tracking-wider mb-5 shadow-xl backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#ff6b00] animate-ping" />
          <span>NEXT PRODUCTION</span>
        </div>

        {/* Big High-Impact Hero Headline with Green-Yellow Radiant Shading */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight drop-shadow-2xl max-w-3xl text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-lime-300 to-teal-300">
          WANNA BE A PART OF THE NEXT STORY?
        </h2>

        <p className="mt-4 text-xs sm:text-sm text-neutral-400 font-mono max-w-lg">
          Let’s turn raw rushes into an unforgettable, high-retention cut.
        </p>

        {/* Direct Action Button */}
        <button
          onClick={handleScrollToContact}
          className="mt-8 px-8 py-3.5 rounded-full bg-[#ff6b00] hover:bg-orange-600 text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-wider shadow-[0_0_30px_rgba(255,107,0,0.4)] flex items-center gap-2.5 transition-all cursor-pointer border border-orange-400/40 hover:scale-105 active:scale-95"
        >
          <Sparkles className="w-4 h-4 fill-current text-white" />
          <span>Let's Create Together</span>
          <ArrowDown className="w-4 h-4" />
        </button>

      </div>
    </section>
  );
}
