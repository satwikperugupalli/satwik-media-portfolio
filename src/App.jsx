import React, { useState } from "react";
import { PORTFOLIO_CONFIG } from "./data/portfolioData";
import Navbar from "./components/Navbar";
import PassThroughClapboardHero from "./components/PassThroughClapboardHero";
import TimelineAbout from "./components/TimelineAbout";
import KineticBanner from "./components/KineticBanner";
import VideoShowcase from "./components/VideoShowcase";
import CinemaLightbox from "./components/CinemaLightbox";
import CtaBanner from "./components/CtaBanner";
import ContactHub from "./components/ContactHub";
import Footer from "./components/Footer";

export default function App() {
  const [activeLightboxProject, setActiveLightboxProject] = useState(null);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const handleOpenLightbox = (project) => {
    setActiveLightboxProject(project);
  };

  const handleCloseLightbox = () => {
    setActiveLightboxProject(null);
  };

  const handleInquireProject = () => {
    setActiveLightboxProject(null);
    const contactSec = document.getElementById("contact-section");
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenFeaturedReel = () => {
    const featured = PORTFOLIO_CONFIG.projects.find(p => p.id === "proj-d27-sponsor-promo") || PORTFOLIO_CONFIG.projects[0];
    if (featured) {
      setActiveLightboxProject(featured);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050508] text-neutral-100 selection:bg-[#ff6b00] selection:text-white film-grain">
      
      {/* Studio Header HUD — Hidden while on clapboard, reveals once passed through */}
      <Navbar
        editorInfo={PORTFOLIO_CONFIG.editor}
        isVisible={isNavbarVisible}
      />

      <main>
        {/* Section 1: Hero — Pinned Full-Frame Clapboard with Pass-Through Zoom & 100% Reversible Snap */}
        <PassThroughClapboardHero
          editorInfo={PORTFOLIO_CONFIG.editor}
          onPassThroughComplete={(passed) => setIsNavbarVisible(passed)}
        />

        {/* Section 2: About, Skills & Editing Toolkit (Clean, Editorial, Tags Removed) */}
        <TimelineAbout
          editorInfo={PORTFOLIO_CONFIG.editor}
          davinciSuite={PORTFOLIO_CONFIG.davinciSuite}
        />

        {/* Section 3: Autoplaying Featured Video Reel Banner */}
        <KineticBanner onOpenFeaturedReel={handleOpenFeaturedReel} />

        {/* Section 4: Video Showcase — 3D Perspective Tilt Cards, Viewfinders & Lightbox */}
        <VideoShowcase
          categories={PORTFOLIO_CONFIG.categories}
          projects={PORTFOLIO_CONFIG.projects}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Section 5: Call-to-Action Transition Banner */}
        <CtaBanner />

        {/* Section 6: Direct Contact & Social Hub (Two-Tier High-Contrast Grid) */}
        <ContactHub
          contactData={PORTFOLIO_CONFIG.contact}
          editorInfo={PORTFOLIO_CONFIG.editor}
        />
      </main>

      {/* Studio Footer */}
      <Footer editorInfo={PORTFOLIO_CONFIG.editor} />

      {/* Cinema Lightbox Player Modal */}
      {activeLightboxProject && (
        <CinemaLightbox
          project={activeLightboxProject}
          onClose={handleCloseLightbox}
          onInquire={handleInquireProject}
        />
      )}
    </div>
  );
}
