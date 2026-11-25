import React, { useState } from "react";
import { soundFX } from "../utils/soundEffects";
import { 
  MessageSquare, 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  ArrowUpRight 
} from "lucide-react";

function InstagramIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

export default function ContactHub({ contactData }) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e, email) => {
    e.preventDefault();
    e.stopPropagation();
    soundFX.playClick();
    
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email).then(() => {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      });
    }
  };

  const getPrimaryIcon = (id) => {
    switch (id) {
      case "whatsapp":
        return <MessageSquare className="w-6 h-6 text-emerald-400" />;
      case "email":
        return <Mail className="w-6 h-6 text-[#ff6b00]" />;
      case "instagram":
        return <InstagramIcon className="w-6 h-6 text-pink-400" />;
      case "phone":
        return <Phone className="w-6 h-6 text-cyan-400" />;
      default:
        return <Mail className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section
      id="contact-section"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#050508] border-t border-white/[0.08] select-none"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Clean Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-[#ff6b00] uppercase tracking-widest mb-2">
            <span className="w-2 h-2 rounded-full bg-[#ff6b00]" />
            <span>CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-tight">
            GET IN TOUCH
          </h2>
        </div>

        {/* -------------------------------------------------------------
         * PRIMARY ACTION CARDS (SATWIK'S DIRECT CHANNELS)
         * ------------------------------------------------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactData?.primary?.map((card) => (
            <a
              key={card.id}
              href={card.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => soundFX.playScrub()}
              onClick={() => soundFX.playClick()}
              className="group rounded-2xl bg-[#090b12] hover:bg-[#0f121d] border border-white/[0.08] hover:border-[#ff6b00]/60 p-5 transition-all shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#05060a] border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                    {getPrimaryIcon(card.id)}
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-[#ff6b00] transition-colors">
                  {card.title}
                </h3>

                <span className="block mt-1 text-xs font-mono text-neutral-400 truncate">
                  {card.handle}
                </span>
              </div>

              {/* Action Button & Copy */}
              <div className="mt-6 pt-3 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-neutral-300 group-hover:text-white">
                  {card.actionText}
                </span>

                {card.allowCopy && (
                  <button
                    onClick={(e) => handleCopyEmail(e, card.handle)}
                    className="px-2.5 py-1 rounded text-[10px] font-mono transition-all flex items-center gap-1 cursor-pointer bg-white/[0.04] hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400 font-bold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
