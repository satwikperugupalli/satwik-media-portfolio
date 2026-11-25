# 🎬 Cinema Portfolio // Video Editor & Post-Production Artist

A sleek, high-impact, motion-driven portfolio website designed specifically for Video Editors & Post-Production Artists. Built with a dark-mode cinema studio aesthetic, filmmaking-grounded animations, and 60fps hardware-accelerated performance.

---

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build optimized production bundle
npm run build

# 4. Preview production build locally
npm run preview
```

The production preview will run at `http://localhost:4173/`.

---

## 📁 Project Architecture & Components

```
src/
├── data/
│   └── portfolioData.js       # ⭐️ SINGLE CONFIG FILE: Update your name, bio, contacts, and videos here!
├── utils/
│   └── soundEffects.js        # Web Audio API cinema sound synthesizer (clapper, shutter, scrub)
├── components/
│   ├── Navbar.jsx             # Studio HUD, 24fps live timecode, REC badge, SFX mute/unmute toggle
│   ├── HeroClapboard.jsx      # Section 1: 3D vector cinema clapboard slate, real-time timecode & snap-cut
│   ├── TimelineAbout.jsx      # Section 2: Interactive NLE timeline with playhead scrubbing & magnetic clips
│   ├── KineticBanner.jsx      # Section 3: Kinetic typography marquee with 35mm film sprockets
│   ├── VideoShowcase.jsx      # Section 4: Modular style categories, viewfinder brackets, looping previews
│   ├── CinemaLightbox.jsx     # Cinema Lightbox Player (custom controls, aspect ratio switcher, director's cut)
│   ├── CtaBanner.jsx          # Section 5: High-energy transition banner ("That's a wrap")
│   ├── ContactHub.jsx         # Section 6: Direct Contact Hub (Two-tier grid with 1-click copy email)
│   └── Footer.jsx             # Studio footer, 24fps cinema spec seal, back-to-top
├── App.jsx                    # Root application component
└── index.css                  # Tailwind styles + cinema scanline, grain, and glow effects
```

---

## 🛠️ How to Customize (In 2 Minutes)

Open `src/data/portfolioData.js`. All fields are clearly labeled with comments:

### 1. Editor Identity & Bio
```javascript
editor: {
  name: "YOUR NAME",                    // Displayed on the slate and navbar
  title: "Video Editor & Post-Production Artist",
  studio: "YOUR STUDIO // POST-PRODUCTION",
  tagline: "Cutting raw footage into high-retention stories.", // Your 1-line hook
  location: "Remote / Studio Based",
  availability: "AVAILABLE FOR SELECT COMMISSIONS",
  bioLead: "...",
  bioParagraphs: [ ... ]
}
```

### 2. Contact Links (Two-Tier Grid)
```javascript
contact: {
  primary: [
    // 1. WhatsApp
    {
      id: "whatsapp",
      handle: "+1 (555) 000-0000",
      url: "https://wa.me/YOUR_PHONE_NUMBER?text=Hey!%20Saw%20your%20portfolio...",
    },
    // 2. Email with 1-click copy
    {
      id: "email",
      handle: "your.email@example.com",
      url: "mailto:your.email@example.com?subject=Project%20Inquiry",
      allowCopy: true,
    },
    // 3. Instagram
    {
      id: "instagram",
      handle: "@your.handle",
      url: "https://instagram.com/your.handle",
    },
    // 4. Phone
    {
      id: "phone",
      handle: "+1 (555) 000-0000",
      url: "tel:+15550000000",
    }
  ],
  secondary: [
    { name: "Telegram", handle: "@yourhandle", url: "https://t.me/yourhandle" },
    { name: "Upwork", handle: "Top Rated Plus", url: "https://upwork.com" },
    { name: "Fiverr Pro", handle: "Pro Verified", url: "https://fiverr.com" },
    { name: "Behance", handle: "behance.net/...", url: "https://behance.net" },
    { name: "YouTube", handle: "@YourChannel", url: "https://youtube.com" },
    { name: "Vimeo", handle: "vimeo.com/...", url: "https://vimeo.com" },
  ]
}
```

### 3. Adding or Expanding Video Projects
The video showcase component is built with a **modular architecture**. Currently, there is 1 flagship video per style category (`commercial`, `youtube`, `reels`, `documentary`, `music_video`).

To add 2–3 videos to any category, simply duplicate a project object in the `projects` array in `portfolioData.js`:

```javascript
{
  id: "proj-commercial-02",
  category: "commercial",             // Category tag: "commercial" | "youtube" | "reels" | "documentary" | "music_video"
  categoryLabel: "Commercial / Brand",
  title: "PROJECT TITLE",
  subtitle: "Brief Subtitle",
  client: "Client Name",
  role: "Lead Editor & Colorist",
  duration: "00:30",
  aspectRatio: "16:9",               // "16:9", "2.39:1", or "9:16"
  videoUrl: "https://your-video-url.mp4", // Direct MP4 or CDN video link
  posterUrl: "https://your-poster-image.jpg",
  tags: ["Commercial", "Speed Ramps", "Color Grading"],
  metrics: [
    { label: "Cuts", value: "32 Cuts" },
    { label: "Pacing", value: "128 BPM" }
  ],
  synopsis: "Description of the edit...",
  directorNotes: "Editorial challenges and techniques used...",
  deliverables: ["4K Master", "Social Cutdowns"]
}
```

---

## 🚀 Deployment

The site builds into a completely static distribution folder (`dist/`) that can be hosted anywhere:

### Vercel
```bash
npx vercel
```

### Netlify
```bash
npx netlify deploy --prod --dir=dist
```

### GitHub Pages
Set the publish directory to `dist/` in GitHub Actions or your repository settings.

---

## 🎨 Motion & Audio Features
- **Tactile Wooden Clapboard:** Clapper arm snaps shut when scrolling or clicking, triggering an optical shutter flash, audio spike rumble, and hard-cut transition.
- **Scroll-Linked NLE Timeline:** Real-time playhead scrubber tracks user scroll progress with SMPTE timecode readout and dynamic audio waveforms.
- **Cinema Lightbox Player:** Unmuted playback, custom timecode scrubber, aspect ratio switcher (16:9, 2.39:1 scope, 9:16 vertical), and director's cut notes.
- **Web Audio API Procedural Synthesizer:** Authentic claps, blade cuts, and jog ticks synthesized in real time with zero external audio dependencies.
