import React from "react";
import { soundFX } from "../utils/soundEffects";
import { Scissors, ArrowUp } from "lucide-react";

export default function Footer({ editorInfo }) {
  const scrollToTop = () => {
    soundFX.playClap();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#040507] border-t border-white/[0.08] py-8 px-4 sm:px-6 lg:px-8 text-neutral-400 font-mono text-xs select-none">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2 text-white font-bold tracking-wider">
          <Scissors className="w-4 h-4 text-[#ff6b00]" />
          <span className="uppercase">{editorInfo?.name || "SATWIK PERUGUPALLI"}</span>
        </div>

        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-all cursor-pointer text-[11px] font-bold"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3 h-3 text-[#ff6b00] group-hover:-translate-y-0.5 transition-transform" />
        </button>

      </div>
    </footer>
  );
}
