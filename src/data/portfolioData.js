/**
 * =========================================================================
 * CINEMA POST-PRODUCTION STUDIO CONFIGURATION
 * =========================================================================
 * Engineered for maximum client conversion, aesthetic authority,
 * and high-end commercial post-production standards.
 */

export const PORTFOLIO_CONFIG = {
  // -----------------------------------------------------------------------
  // EDITOR / ARTIST IDENTITY & CONVERSION VALUE PROPOSITION
  // -----------------------------------------------------------------------
  editor: {
    name: "SATWIK PERUGUPALLI",
    title: "Video Editor • Colorist • Motion Designer",
    studio: "SATWIK PERUGUPALLI POST-PRODUCTION",
    tagline: "Turning raw footage into high-retention visual stories.",
    bioParagraph: "Passionate about pacing, atmospheric color grading, and immersive sound design. I shape raw clips into engaging, story-driven edits built to hold attention from the very first frame.",
    availability: "2026 • AVAILABLE",
    location: "Global Remote / Studio Based",
    turnaround: "48-72h Rush Turnaround Available",
    
    // Clapperboard Slate Metadata
    slate: {
      prod: "POST-PRODUCTION & VISUAL STORYTELLING",
      subLabel: "PORTFOLIO • SHOWREEL",
      status: "2026 • AVAILABLE",
      primaryNle: "DAVINCI RESOLVE",
      specialty: "CUT & GRADE",
      workflow: "WORKFLOW: EDIT • SOUND DESIGN • COLOR GRADING • VFX",
      mastering: "MASTERING: REC.709 / D-LOG",
    }
  },

  // -----------------------------------------------------------------------
  // PRIMARY WORKSTATION: DAVINCI RESOLVE (SINGLE ALL-IN-ONE SUITE)
  // -----------------------------------------------------------------------
  davinciSuite: {
    name: "DaVinci Resolve",
    headline: "Primary Workstation • All-In-One Pipeline",
    badge: "Dv",
    badgeColor: "#FF6633",
    description: "Every cut, color grade, audio master, and motion element is crafted natively inside DaVinci Resolve. A unified 32-bit float pipeline with zero lossy round-trips.",
    modules: [
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
    ]
  },

  // -----------------------------------------------------------------------
  // VIDEO SHOWCASE CATEGORIES & PROJECTS (CLEAN, SINGLE PROFESSIONAL TITLES)
  // -----------------------------------------------------------------------
  categories: [
    { id: "all", label: "All Cuts", count: 5 },
    { id: "commercial", label: "Commercial & Brand", count: 2 },
    { id: "reels", label: "Reels & Shorts", count: 2 },
    { id: "event", label: "Aesthetic & Event", count: 1 },
  ],

  projects: [
    {
      id: "proj-d27-sponsor-promo",
      category: "commercial",
      categoryLabel: "Commercial & Brand",
      title: "SPONSORSHIP FILM",
      subtitle: "Executive Brand Sponsorship Film (1-Min Commercial)",
      client: "Major Innovation & Cultural Festival",
      role: "Editor, Sound Design, Match Cuts & Motion Titles",
      duration: "00:55",
      timecode: "00:00:54:22",
      aspectRatio: "16:9",
      aspectRatioName: "16:9 Full HD",
      isFlagship: true,

      videoUrl: "/videos/d27-sponsor-promo.mp4",
      posterUrl: "",

      tags: ["Sponsor Pitch", "Match Cuts", "Animated Typography", "Studio SFX", "DaVinci ACEScc Grade"],

      metrics: [
        { label: "Format", value: "1-Min Commercial Pitch" },
        { label: "Audio", value: "Mastered BGM & SFX" },
        { label: "Technique", value: "Match Cuts & Motion Titles" },
        { label: "Software", value: "DaVinci Resolve" }
      ],

      synopsis: "A high-level corporate and brand sponsorship film structured for screening to enterprise brand sponsors. Paced with an elegant cinematic build, seamless match cuts, dynamic animated typography, and studio SFX mastering to communicate prestige and scale.",

      directorNotes: "Engineered to instill confidence in enterprise brand partners. Paced with majestic cinematic builds, crisp animated metric callouts, and clean acoustic mastering.",

      deliverables: ["Full HD Master Film", "Pitch Deck Video Asset", "Uncompressed Audio Master"]
    },

    {
      id: "proj-paracosmos-promo",
      category: "reels",
      categoryLabel: "Reels & Shorts",
      title: "ESPORTS TOURNAMENT TEASER",
      subtitle: "High-Retention Gaming Promo & Social Reel (15-30s)",
      client: "Competitive Esports League",
      role: "Lead Editor, Sound Design & Motion Transitions",
      duration: "00:29",
      timecode: "00:00:29:05",
      aspectRatio: "16:9",
      aspectRatioName: "16:9 Full HD",
      isFlagship: true,
      
      videoUrl: "/videos/paracosmos-promo.mp4",
      posterUrl: "",
      
      tags: ["Fast Cuts", "3-Second Hook", "Trendy Transitions", "Esports Rhythm", "DaVinci Sound Design"],
      
      metrics: [
        { label: "Format", value: "Short-Form Reel" },
        { label: "Pacing", value: "High-BPM Beat Sync" },
        { label: "Software", value: "DaVinci Resolve" },
        { label: "Hook Rate", value: "First 3s Retention" }
      ],

      synopsis: "High-energy promotional teaser engineered for maximum social media retention. Designed to stop the scroll on Instagram with an aggressive 3-second visual hook, fast cuts, punchy sound design, and flashy trendy transitions tailored to modern digital audiences.",
      
      directorNotes: "Crafted specifically to stop the scroll on social feeds. The first 3 seconds use rapid-fire sensory cuts and sound design to hook viewers, followed by high-cadence gameplay sync.",
      
      deliverables: ["Full HD Master", "Audio Mastered Mix", "Social Promo Cut"]
    },

    {
      id: "proj-paracosmos-highlights",
      category: "reels",
      categoryLabel: "Reels & Shorts",
      title: "EVENT HIGHLIGHTS",
      subtitle: "Rapid-Fire Tournament Highlights (16s Short-Form)",
      client: "Live Esports Event Series",
      role: "Editor, Dynamic Pacing & Audio Design",
      duration: "00:16",
      timecode: "00:00:16:00",
      aspectRatio: "16:9",
      aspectRatioName: "16:9 Full HD",
      isFlagship: true,

      videoUrl: "/videos/paracosmos-highlights.mp4",
      posterUrl: "",

      tags: ["Rapid Cuts", "Instant Hook", "Punchy SFX", "Beat Sync", "Event Momentum"],

      metrics: [
        { label: "Format", value: "16s Highlight Cut" },
        { label: "Pacing", value: "Rapid Cut Cadence" },
        { label: "Audio", value: "Sound FX & Impact Hits" },
        { label: "Software", value: "DaVinci Resolve" }
      ],

      synopsis: "High-octane event highlight cut packing the peak adrenaline of live competition into a concentrated 16-second cut. Features dynamic audio impacts, rapid cut cadence, and seamless visual transitions that amplify the event's excitement.",

      directorNotes: "Distills the best competitive moments into a concentrated adrenaline burst. Every sound effect is timed directly to visual impacts and winner reactions.",

      deliverables: ["Full HD 16s Master", "Clean Social Export"]
    },

    {
      id: "proj-amr-sponsor-promo",
      category: "commercial",
      categoryLabel: "Commercial & Brand",
      title: "BRAND - 3D MOTION SPOTLIGHT",
      subtitle: "Commercial Partner Feature & 3D Title Tracking (20s)",
      client: "Headline Commercial Partner",
      role: "Editor, 3D Typography & Brand Motion",
      duration: "00:21",
      timecode: "00:00:20:20",
      aspectRatio: "16:9",
      aspectRatioName: "16:9 Full HD",
      isFlagship: false,

      videoUrl: "/videos/amr-sponsor-promo.mp4",
      posterUrl: "",

      tags: ["3D Camera Track", "3D Motion Text", "Logo Animations", "Velocity Cuts", "Brand Identity"],

      metrics: [
        { label: "Format", value: "20s Brand Promo" },
        { label: "Graphics", value: "3D Text & Logo Animation" },
        { label: "Transitions", value: "Smooth Velocity Cuts" },
        { label: "Software", value: "DaVinci Resolve" }
      ],

      synopsis: "Focused commercial spotlight crafted for an enterprise brand partner. Seamlessly integrates professional 3D camera-tracked text, custom spatial logo animations placed within the venue environment, and slick velocity cuts to maximize brand exposure.",

      directorNotes: "Seamlessly blends live-action footage with sleek 3D camera-tracked motion graphics, putting brand identity in the hero seat without interrupting narrative flow.",

      deliverables: ["Full HD 20s Cut", "3D Motion Elements Conformed"]
    },

    {
      id: "proj-one-year-dastaan",
      category: "event",
      categoryLabel: "Aesthetic & Event",
      title: "FEST ANNIVERSARY FILM",
      subtitle: "Cinematic Event Retrospective & Narrative Reel (40s)",
      client: "Annual Cultural Festival",
      role: "Lead Editor, Emotional Pacing & Music Direction",
      duration: "00:40",
      timecode: "00:00:40:08",
      aspectRatio: "16:9",
      aspectRatioName: "16:9 Full HD",
      isFlagship: false,

      videoUrl: "/videos/one-year-dastaan.mp4",
      posterUrl: "",

      tags: ["Aesthetic Cut", "Feel-Good Musical Score", "Melodic Cuts", "Emotional Pacing", "Curated Shots"],

      metrics: [
        { label: "Format", value: "40s Celebrative Reel" },
        { label: "Audio", value: "Feel-Good Musical Score" },
        { label: "Pacing", value: "Musical Rhythm Match" },
        { label: "Software", value: "DaVinci Resolve" }
      ],

      synopsis: "An aesthetic anniversary celebration film commemorating a one-year event milestone. Built around an uplifting, feel-good musical score with rhythm-matched cuts and intentional shot curation that balances wide-angle electricity with intimate emotional moments.",

      directorNotes: "A benchmark for celebrative event and function edits. Every cut lands right on melodic cues, balancing wide crowd electricity with intimate emotional expressions.",

      deliverables: ["Full HD 40s Anniversary Cut", "Color Graded Master"]
    }
  ],

  // -----------------------------------------------------------------------
  // DIRECT CONTACT & HIGH-CONVERSION OUTREACH
  // -----------------------------------------------------------------------
  contact: {
    sectionHeadline: "READY TO CUT YOUR NEXT PROJECT?",
    sectionSubtitle: "Work directly with Satwik Perugupalli. Choose your preferred communication channel below.",
    
    primary: [
      {
        id: "whatsapp",
        title: "WhatsApp",
        actionText: "Chat on WhatsApp",
        handle: "+91 8106959520",
        url: "https://wa.me/918106959520?text=Hi%20Satwik!%20Saw%20your%20editing%20portfolio.%20Let's%20discuss%20a%20project.",
        badge: "Fastest Response",
        accent: "emerald",
        icon: "MessageSquare",
      },
      {
        id: "email",
        title: "Direct Email",
        actionText: "Send Project Brief",
        handle: "satwikperugupalli@gmail.com",
        url: "mailto:satwikperugupalli@gmail.com?subject=Video%20Editing%20Project%20Inquiry%20//%20Satwik%20Perugupalli",
        badge: "1-Click Copy Available",
        accent: "orange",
        icon: "Mail",
        allowCopy: true
      },
      {
        id: "instagram",
        title: "Instagram",
        actionText: "View Reels & Edits",
        handle: "@hara.cuts",
        url: "https://instagram.com/hara.cuts",
        badge: "Portfolio & Reels",
        accent: "pink",
        icon: "Instagram",
      },
      {
        id: "phone",
        title: "Direct Call",
        actionText: "Call Studio Line",
        handle: "+91 8106959520",
        url: "tel:+918106959520",
        badge: "Discovery Call",
        accent: "cyan",
        icon: "Phone",
      }
    ]
  }
};
