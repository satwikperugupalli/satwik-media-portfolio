import React, { useState, useEffect, useRef } from "react";
import { soundFX } from "../utils/soundEffects";
import { 
  X, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  RotateCcw, 
  ChevronRight,
  Sparkles,
  Layers
} from "lucide-react";

export default function CinemaLightbox({ project, onClose, onInquire }) {
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.85);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    soundFX.playClick();
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    soundFX.playClick();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  useEffect(() => {
    soundFX.playShutterCut();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.code === "Space" && e.target.tagName !== "INPUT" && e.target.tagName !== "TEXTAREA") {
        e.preventDefault();
        togglePlay();
      } else if (e.key.toLowerCase() === "m") {
        toggleMute();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPlaying, isMuted, onClose]);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      if (!duration && videoRef.current.duration) {
        setDuration(videoRef.current.duration);
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
      videoRef.current.volume = volume;
      videoRef.current.muted = false;
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {
        if (videoRef.current) {
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
        }
      });
    }
  };

  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (videoRef.current) {
      videoRef.current.volume = val;
      videoRef.current.muted = val === 0;
      setIsMuted(val === 0);
    }
  };

  const handleScrub = (e) => {
    if (!progressRef.current || !videoRef.current || !duration) return;
    const rect = progressRef.current.getBoundingClientRect();
    const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const newTime = pos * duration;
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
    soundFX.playScrub();
  };

  const toggleFullscreen = () => {
    soundFX.playClick();
    if (videoRef.current && videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const formatTimecode = (sec) => {
    if (!sec || isNaN(sec)) return "00:00:00:00";
    const totalFrames = Math.floor(sec * 24);
    const hrs = Math.floor(sec / 3600);
    const mins = Math.floor((sec % 3600) / 60);
    const secs = Math.floor(sec % 60);
    const frames = totalFrames % 24;

    return `${String(hrs).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}:${String(frames).padStart(2, "0")}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-2xl overflow-y-auto">
      <div className="relative z-10 w-full max-w-5xl bg-[#06070a] border border-white/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto">
        
        {/* Top Header Bar (Native Aspect Ratio Only) */}
        <div className="bg-[#0b0d14] px-4 sm:px-6 py-3.5 border-b border-white/[0.08] flex items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2.5 truncate">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff6b00] animate-pulse" />
            <span className="text-white font-black uppercase text-sm tracking-wide truncate">
              {project?.title}
            </span>
            <span className="text-neutral-500 hidden sm:inline">
              • {project?.client}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-black/60 border border-white/10 text-[11px] font-mono text-neutral-300 hidden sm:inline-block">
              16:9 FULL HD MASTER
            </span>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/10 hover:bg-[#ff6b00] text-neutral-300 hover:text-white transition-all cursor-pointer"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Viewport: Strictly Locked to Native 16:9 Aspect Ratio */}
        <div className="relative bg-black flex items-center justify-center p-2 sm:p-4 overflow-hidden">
          <div className="relative w-full aspect-video max-w-5xl shadow-2xl rounded-xl overflow-hidden bg-black border border-white/10">
            <video
              ref={videoRef}
              src={project?.videoUrl}
              poster={project?.posterUrl}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onClick={togglePlay}
              playsInline
              className="w-full h-full object-cover cursor-pointer"
            />

            {!isPlaying && (
              <div 
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center bg-black/45 backdrop-blur-[2px] cursor-pointer"
              >
                <div className="w-16 h-16 rounded-full bg-[#ff6b00] text-white flex items-center justify-center shadow-2xl pl-1 hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 fill-current" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Transport Controls Scrubber */}
        <div className="bg-[#080a10] px-4 sm:px-6 py-3 border-t border-white/[0.08]">
          <div
            ref={progressRef}
            onClick={handleScrub}
            className="group relative h-2.5 bg-neutral-900 rounded-full cursor-pointer overflow-hidden mb-3 border border-white/10"
          >
            <div
              style={{ width: `${(currentTime / (duration || 1)) * 100}%` }}
              className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-[#ff6b00] to-amber-400 transition-all"
            />
          </div>

          <div className="flex items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="w-8 h-8 rounded bg-white/10 hover:bg-[#ff6b00] text-white flex items-center justify-center transition-all cursor-pointer"
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current pl-0.5" />}
              </button>

              <button
                onClick={() => {
                  if (videoRef.current) {
                    videoRef.current.currentTime = 0;
                    setCurrentTime(0);
                    soundFX.playClick();
                  }
                }}
                className="text-neutral-400 hover:text-white transition-colors"
                title="Restart"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <div className="text-neutral-300 font-mono text-[11px] sm:text-xs">
                <span className="text-[#ff6b00] font-bold">{formatTimecode(currentTime)}</span>
                <span className="text-neutral-500 mx-1">/</span>
                <span className="text-neutral-400">{formatTimecode(duration || 45)}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleMute}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  {isMuted || volume === 0 ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-16 sm:w-20 h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#ff6b00]"
                />
              </div>

              <button
                onClick={toggleFullscreen}
                className="text-neutral-400 hover:text-white transition-colors p-1"
                title="Fullscreen"
              >
                <Maximize className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------
         * CLIENT-GRABBING HIGHLIGHTS & CAPTION AREA (PROMINENT & CLEAR)
         * ------------------------------------------------------------- */}
        <div className="bg-[#050609] p-5 sm:p-7 border-t border-white/[0.08] flex flex-col gap-5">
          
          {/* 1. Large, Eye-Catching Caption & Project Scope */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#ff6b00] uppercase tracking-wider mb-2 font-bold">
              <span>{project?.categoryLabel}</span>
              <span className="text-neutral-600">•</span>
              <span className="text-amber-400">{project?.subtitle}</span>
            </div>

            <p className="text-sm sm:text-base text-neutral-100 font-medium leading-relaxed max-w-4xl">
              {project?.synopsis}
            </p>
          </div>

          {/* 2. Button-Style Keyword Badges (What Highlights My Work in This Video) */}
          <div>
            <div className="text-[11px] font-mono text-[#00f0ff] uppercase tracking-wider mb-2.5 font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#00f0ff]" />
              <span>KEY EDIT HIGHLIGHTS & CRAFT STYLES:</span>
            </div>

            {/* Keyword Pills Styled as Interactive Badges */}
            <div className="flex flex-wrap items-center gap-2">
              {project?.tags?.map((tag, idx) => (
                <button
                  key={idx}
                  onClick={() => soundFX.playClick()}
                  className="px-3 py-1.5 rounded-lg bg-[#0b0e17] hover:bg-[#131929] border border-white/10 hover:border-[#ff6b00]/60 text-xs font-mono font-bold text-neutral-200 hover:text-white transition-all shadow-sm flex items-center gap-1.5 cursor-pointer group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] group-hover:scale-125 transition-transform" />
                  <span>{tag}</span>
                </button>
              ))}

              {/* Format & Deliverables Metrics as Button-Style Chips */}
              {project?.metrics?.map((m, idx) => (
                <span
                  key={`m-${idx}`}
                  className="px-3 py-1.5 rounded-lg bg-black/60 border border-white/[0.08] text-xs font-mono text-neutral-400 flex items-center gap-1.5"
                >
                  <span className="text-[#00f0ff] font-bold">{m.label}:</span>
                  <span className="text-white">{m.value}</span>
                </span>
              ))}
            </div>
          </div>

          {/* 3. Action Row: Inquire Button */}
          <div className="pt-3 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono text-neutral-400 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#ff6b00]" />
              <span>Full Post-Production Mastered in DaVinci Resolve</span>
            </div>

            <button
              onClick={() => {
                onClose();
                if (onInquire) {
                  onInquire(project);
                } else {
                  const c = document.getElementById("contact-section");
                  if (c) c.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#ff6b00] to-orange-500 hover:brightness-110 text-white text-xs font-bold font-mono uppercase tracking-wider shrink-0 cursor-pointer flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,107,0,0.4)] transition-all hover:scale-105 active:scale-95"
            >
              <span>Inquire About This Style</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
