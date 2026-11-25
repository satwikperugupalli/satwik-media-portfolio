import React from "react";
import { soundFX } from "../utils/soundEffects";

export default function TimelineAbout({ editorInfo, davinciSuite }) {
  const modules = davinciSuite?.modules || [
    {
      name: "Edit & Cut",
      code: "ED",
      role: "Rhythm & Pacing",
      description: "Timeline assembly, beat-matched cuts & surgical hook retention.",
      badgeColor: "#FF6B00",
    },
    {
      name: "Color Science",
      code: "CO",
      role: "ACEScc Look Dev",
      description: "Node-based color grading, Kodak film print emulation & HDR.",
      badgeColor: "#FFA726",
    },
    {
      name: "Fairlight Audio",
      code: "FL",
      role: "Sound Design & Mix",
      description: "16-track spatial foley, sub-bass impacts & -14 LUFS mastering.",
      badgeColor: "#00F0FF",
    },
    {
      name: "Fusion VFX",
      code: "FS",
      role: "3D Motion & Titles",
      description: "Planar camera tracking, 3D text & kinetic typography.",
      badgeColor: "#D291FF",
    },
  ];

  return (
    <section
      id="about-section"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#050508] border-t border-b border-white/[0.06] select-none"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* EDITORIAL BIO & 4 CORE CRAFT PILLARS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* 1. Left Column (Hero Bio & Headline — Left-aligned) */}
          <div className="lg:col-span-6 text-left">
            {/* Top Eyebrow Tag */}
            <div className="text-xs font-mono text-[#ff6b00] uppercase tracking-widest mb-3 font-semibold">
              • VIDEO EDITOR & VISUAL STORYTELLER
            </div>

            {/* Main Display Headline (3-line stacked, bold uppercase) */}
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-tight">
              <span className="block text-white">
                {editorInfo?.name || "SATWIK PERUGUPALLI"}
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] via-amber-400 to-[#ffa726]">
                CRAFTING RHYTHM
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-teal-300 to-[#00f0ff]">
                FRAME BY FRAME.
              </span>
            </h2>

            {/* Bio Description Paragraph */}
            <p className="mt-4 text-neutral-300 text-sm sm:text-base leading-relaxed max-w-xl">
              Passionate about pacing, atmospheric color grading, and immersive sound design. I shape raw clips into engaging, story-driven edits built to hold attention from the very first frame.
            </p>
          </div>

          {/* 2. Right Column (4-Box Core Craft Grid — 4 Core Editing Pillars) */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
              {/* Box 1: PACING */}
              <div className="bg-[#090b12] p-4 rounded-xl border border-white/[0.08] text-center flex flex-col justify-center items-center">
                <span className="block text-xl sm:text-2xl font-black text-white">
                  PACING
                </span>
                <span className="text-[10px] text-neutral-400 uppercase mt-1 block tracking-wider">
                  STORY & RHYTHM
                </span>
              </div>

              {/* Box 2: COLOR */}
              <div className="bg-[#090b12] p-4 rounded-xl border border-white/[0.08] text-center flex flex-col justify-center items-center">
                <span className="block text-xl sm:text-2xl font-black text-[#ff6b00]">
                  COLOR
                </span>
                <span className="text-[10px] text-neutral-400 uppercase mt-1 block tracking-wider">
                  MOOD & GRADING
                </span>
              </div>

              {/* Box 3: SOUND */}
              <div className="bg-[#090b12] p-4 rounded-xl border border-white/[0.08] text-center flex flex-col justify-center items-center">
                <span className="block text-xl sm:text-2xl font-black text-amber-400">
                  SOUND
                </span>
                <span className="text-[10px] text-neutral-400 uppercase mt-1 block tracking-wider">
                  SFX & MIXING
                </span>
              </div>

              {/* Box 4: MOTION */}
              <div className="bg-[#090b12] p-4 rounded-xl border border-white/[0.08] text-center flex flex-col justify-center items-center">
                <span className="block text-xl sm:text-2xl font-black text-[#00f0ff]">
                  MOTION
                </span>
                <span className="text-[10px] text-neutral-400 uppercase mt-1 block tracking-wider">
                  TITLES & FLOW
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------
         * 3. SINGLE POST-PRODUCTION SUITE: DAVINCI RESOLVE STUDIO
         * ------------------------------------------------------------- */}
        <div className="rounded-2xl bg-[#090b12] border border-white/[0.08] p-6 sm:p-8 relative overflow-hidden shadow-2xl">
          {/* Subtle Orange Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#ff6b00]/10 via-transparent to-transparent pointer-events-none rounded-full blur-3xl" />

          {/* Suite Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 border-b border-white/[0.06] pb-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-black border border-orange-500/40 flex items-center justify-center font-black text-2xl font-mono text-[#ff6633] shadow-[0_0_25px_rgba(255,102,51,0.25)] shrink-0">
                Dv
              </div>
              <div>
                <div className="text-[11px] font-mono text-[#ff6b00] uppercase tracking-wider font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" />
                  <span>PRIMARY WORKSTATION • ALL-IN-ONE PIPELINE</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mt-0.5">
                  {davinciSuite?.name || "DAVINCI RESOLVE"}
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 max-w-xl leading-relaxed">
              {davinciSuite?.description || "Every cut, color grade, audio master, and motion element is crafted natively inside DaVinci Resolve. A unified pipeline with zero lossy round-trips."}
            </p>
          </div>

          {/* 4 Dedicated Resolve Internal Modules */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {modules.map((mod, idx) => (
              <div
                key={idx}
                onMouseEnter={() => soundFX.playScrub()}
                className="bg-[#05060b] rounded-xl p-4 border border-white/[0.06] hover:border-[#ff6b00]/50 transition-all flex flex-col justify-between group cursor-pointer shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      style={{ color: mod.badgeColor }}
                      className="text-xs font-mono font-black px-2.5 py-0.5 rounded bg-black/80 border border-white/10 group-hover:scale-105 transition-transform"
                    >
                      {mod.code}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                      {mod.role}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-[#ff6b00] transition-colors mb-1.5">
                    {mod.name}
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {mod.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
