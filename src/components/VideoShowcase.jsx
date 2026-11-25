import React, { useState, useRef, useEffect } from "react";
import { soundFX } from "../utils/soundEffects";
import { Play, ArrowUpRight } from "lucide-react";

// Individual 3D Interactive Project Card with Guaranteed Always-On Autoplay Preview
function ProjectCard({ project, onOpenLightbox }) {
  const cardRef = useRef(null);
  const videoRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50 });
  const [isHovered, setIsHovered] = useState(false);

  // Guarantee preview autoplay is ALWAYS on
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay fallback: already muted
      });
    }
  }, [project.videoUrl]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const normX = (x / rect.width) * 2 - 1;
    const normY = (y / rect.height) * 2 - 1;

    setTilt({
      x: -normY * 7,
      y: normX * 7,
      glareX: (x / rect.width) * 100,
      glareY: (y / rect.height) * 100,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    soundFX.playScrub();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => {
        soundFX.playShutterCut();
        onOpenLightbox(project);
      }}
      style={{
        transform: isHovered
          ? `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.02, 1.02, 1.02)`
          : "perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
        transition: isHovered ? "transform 0.1s ease-out" : "transform 0.4s ease-out",
      }}
      className="group relative rounded-2xl bg-[#090b12] border border-white/[0.08] hover:border-[#ff6b00]/60 p-4 sm:p-5 shadow-2xl cursor-pointer flex flex-col justify-between overflow-hidden"
    >
      {/* Dynamic Specular Glare */}
      {isHovered && (
        <div
          style={{
            background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255, 255, 255, 0.08) 0%, transparent 60%)`,
          }}
          className="absolute inset-0 pointer-events-none z-20 rounded-2xl"
        />
      )}

      {/* Video Preview Box (Always Autoplaying Silently) */}
      <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black border border-white/[0.08] mb-4 shadow-inner">
        <video
          ref={videoRef}
          src={project.videoUrl}
          poster={project.posterUrl}
          muted
          loop
          playsInline
          autoPlay
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />

        {/* Viewfinder Brackets */}
        <div className={`absolute inset-3 pointer-events-none transition-all duration-300 ${
          isHovered ? "opacity-100 scale-100" : "opacity-40 scale-[0.98]"
        }`}>
          <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-[#ff6b00]" />
          <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-[#ff6b00]" />
          <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-[#ff6b00]" />
          <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-[#ff6b00]" />
        </div>

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono pointer-events-none z-10">
          <span className="bg-black/85 backdrop-blur-md px-2.5 py-1 rounded text-white font-bold border border-white/15 flex items-center gap-1.5 shadow">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" />
            {project.categoryLabel}
          </span>
          <span className="bg-black/85 backdrop-blur-md px-2 py-1 rounded text-neutral-300 font-mono border border-white/15">
            {project.duration}
          </span>
        </div>

        {/* Center Play Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="flex flex-col items-center gap-2 transform transition-transform duration-300 group-hover:scale-110">
            <div className="w-12 h-12 rounded-full bg-[#ff6b00] text-white flex items-center justify-center shadow-[0_0_25px_rgba(255,107,0,0.6)] pl-0.5">
              <Play className="w-5 h-5 fill-current" />
            </div>
            <span className="px-3 py-0.5 rounded-full bg-black/90 text-white font-mono text-[10px] font-bold tracking-wider border border-[#ff6b00]/50 shadow-xl">
              Tap to Watch
            </span>
          </div>
        </div>
      </div>

      {/* Clean Project Details */}
      <div>
        <span className="text-[11px] font-mono text-amber-400 font-semibold block mb-1">
          {project.client}
        </span>

        <h3 className="text-lg sm:text-xl font-black text-white group-hover:text-[#ff6b00] transition-colors uppercase tracking-tight flex items-center justify-between">
          <span>{project.title}</span>
          <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-[#ff6b00] transition-transform" />
        </h3>

        <p className="mt-2 text-xs sm:text-sm text-neutral-300 line-clamp-2 leading-relaxed">
          {project.synopsis}
        </p>
      </div>
    </div>
  );
}

export default function VideoShowcase({ categories, projects, onOpenLightbox }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const handleTabChange = (catId) => {
    soundFX.playClick();
    setActiveCategory(catId);
  };

  return (
    <section
      id="projects-section"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#050508] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Clean Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#ff6b00] uppercase tracking-widest mb-2">
              <span className="w-2 h-2 rounded-full bg-[#ff6b00]" />
              <span>PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              SELECTED WORK
            </h2>
          </div>
        </div>

        {/* Clean Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar select-none border-b border-white/[0.08]">
          {categories?.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleTabChange(cat.id)}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer border ${
                  isActive
                    ? "bg-[#ff6b00] text-white border-orange-500 font-bold shadow-lg shadow-orange-950/40"
                    : "bg-[#090b12] text-neutral-400 border-white/[0.08] hover:text-white"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? "bg-black/40 text-white" : "bg-white/10 text-neutral-400"
                  }`}
                >
                  {cat.id === "all" ? projects.length : projects.filter(p => p.category === cat.id).length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenLightbox={onOpenLightbox}
            />
          ))}
        </div>

        {/* End Note of the Video Playback Section */}
        <div className="mt-14 pt-8 border-t border-white/[0.08] text-center">
          <p className="text-sm sm:text-base font-mono text-neutral-400 italic tracking-wider flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] animate-ping" />
            <span>"Many more to come......"</span>
          </p>
        </div>

      </div>
    </section>
  );
}
