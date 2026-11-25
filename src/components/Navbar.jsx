import React, { useState, useEffect } from "react";
import { soundFX } from "../utils/soundEffects";
import { Scissors, ArrowUpRight } from "lucide-react";

export default function Navbar({ editorInfo, isVisible = true }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    soundFX.playClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      style={{
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? "auto" : "none",
        transform: isVisible ? "translateY(0)" : "translateY(-16px)",
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-[#050508]/92 backdrop-blur-md border-white/10 shadow-2xl py-3"
          : "bg-transparent border-white/[0.04] py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left: Studio Brand */}
        <div className="flex items-center gap-3">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group flex items-center gap-2.5 text-white font-bold tracking-wider text-sm sm:text-base hover:text-[#ff6b00] transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-[#0e1017] border border-white/10 flex items-center justify-center group-hover:border-[#ff6b00]/60 transition-colors shadow-inner">
              <Scissors className="w-4 h-4 text-[#ff6b00] group-hover:rotate-45 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold uppercase tracking-widest text-xs sm:text-sm text-neutral-100 block">
                {editorInfo?.name || "SATWIK PERUGUPALLI"}
              </span>
              <span className="text-[10px] text-neutral-400 font-mono tracking-tight hidden md:inline">
                COLOR & PACING SPECIALIST
              </span>
            </div>
          </a>
        </div>

        {/* Right: Navigation Links & Let's Cut CTA */}
        <div className="flex items-center gap-3 sm:gap-6">
          <nav className="hidden md:flex items-center gap-6 text-xs font-mono uppercase tracking-widest text-neutral-400">
            <button
              onClick={() => handleNavClick("about-section")}
              className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span className="text-[#ff6b00] text-[10px]">01.</span> Timeline
            </button>
            <button
              onClick={() => handleNavClick("projects-section")}
              className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span className="text-[#ff6b00] text-[10px]">02.</span> Selected Cuts
            </button>
            <button
              onClick={() => handleNavClick("contact-section")}
              className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span className="text-[#ff6b00] text-[10px]">03.</span> Wrap Hub
            </button>
          </nav>

          {/* Direct CTA */}
          <button
            onClick={() => handleNavClick("contact-section")}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-gradient-to-r from-[#ff6b00] to-amber-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-orange-950/40 hover:brightness-110 active:scale-95 transition-all cursor-pointer border border-orange-400/30"
          >
            <span>Let's Cut</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
}
