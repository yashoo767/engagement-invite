"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function CeremonyDetails() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Rama+Resort+Tedwa+Chilaula+SH-21+Sitapur+Lakhimpur+Rd+Sitapur+Uttar+Pradesh+261001";

  const calendarUrl = () => {
    const start = "20261118T000000";
    const end = "20261118T230000";
    const title = encodeURIComponent("Abhay & Shivani Engagement Ceremony");
    const location = encodeURIComponent("Rama Resort, Tedwa Chilaula SH-21, Sitapur - Lakhimpur Rd, Sitapur, Uttar Pradesh 261001");
    const details = encodeURIComponent("You are cordially invited to the engagement ceremony of Abhay Srivastava & Shivani Srivastava.");
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&location=${location}&details=${details}`;
  };

  return (
    <section
      ref={ref}
      id="ceremony"
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #FFF5E6 0%, #FFF0D8 100%)" }}
    >
      {/* Decorative background arches */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-5">
        <svg viewBox="0 0 600 400" className="w-full max-w-2xl">
          <path d="M100 400 L100 200 Q100 50 300 50 Q500 50 500 200 L500 400" stroke="#C99A54" strokeWidth="3" fill="none" />
          <path d="M150 400 L150 220 Q150 100 300 100 Q450 100 450 220 L450 400" stroke="#C99A54" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="relative max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="font-cinzel text-xs tracking-[0.5em] uppercase mb-4" style={{ color: "#C99A54" }}>
            Event Details
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-light italic mb-2" style={{ color: "#2d1b0e" }}>
            Ceremony Details
          </h2>
        </motion.div>

        {/* Main invitation card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative p-8 sm:p-12 text-center"
          style={{
            background: "linear-gradient(135deg, #FFF5E6 0%, #FFF8F0 50%, #FFF5E6 100%)",
            border: "2px solid #C99A54",
            boxShadow: "0 0 0 6px rgba(201,154,84,0.1), 0 20px 60px rgba(201,154,84,0.2)",
          }}
        >
          {/* Gold corner ornaments */}
          <GoldCorner position="tl" />
          <GoldCorner position="tr" />
          <GoldCorner position="bl" />
          <GoldCorner position="br" />

          {/* Top floral */}
          <div className="flex justify-center mb-6">
            <svg width="180" height="40" viewBox="0 0 180 40" fill="none">
              <line x1="0" y1="20" x2="70" y2="20" stroke="#C99A54" strokeWidth="1" opacity="0.6" />
              {[45, 65, 85, 95, 115, 135].map((x, i) => (
                <circle key={i} cx={x} cy="20" r={i === 2 || i === 3 ? "4" : "2.5"} fill="#C99A54" opacity="0.7" />
              ))}
              <line x1="110" y1="20" x2="180" y2="20" stroke="#C99A54" strokeWidth="1" opacity="0.6" />
              {/* Small flowers */}
              <g transform="translate(90, 20)">
                <circle r="6" fill="none" stroke="#C99A54" strokeWidth="1" />
                <circle r="2" fill="#C99A54" />
              </g>
            </svg>
          </div>

          {/* Invitation heading */}
          <p className="font-cinzel text-xs tracking-[0.6em] uppercase mb-6" style={{ color: "#8B6914" }}>
            You Are Cordially Invited
          </p>

          <h3 className="font-playfair text-2xl sm:text-3xl italic font-light mb-2" style={{ color: "#2d1b0e" }}>
            Engagement Ceremony
          </h3>

          {/* Names */}
          <div className="my-6">
            <p className="font-great-vibes text-4xl sm:text-5xl" style={{ color: "#C99A54" }}>Abhay Srivastava</p>
            <div className="flex items-center justify-center gap-4 my-2">
              <div className="h-px w-12" style={{ background: "linear-gradient(90deg, transparent, #B76E79)" }} />
              <span className="font-cormorant text-xl italic" style={{ color: "#B76E79" }}>&amp;</span>
              <div className="h-px w-12" style={{ background: "linear-gradient(90deg, #B76E79, transparent)" }} />
            </div>
            <p className="font-great-vibes text-4xl sm:text-5xl" style={{ color: "#B76E79" }}>Shivani Srivastava</p>
          </div>

          {/* Divider */}
          <div className="my-6">
            <svg width="120" height="20" viewBox="0 0 120 20" fill="none" className="mx-auto">
              <line x1="0" y1="10" x2="48" y2="10" stroke="#C99A54" strokeWidth="0.8" opacity="0.5" />
              <path d="M54 5 L57 10 L60 5 Q60 2 57 2 Q54 2 54 5Z" fill="#C99A54" opacity="0.7" />
              <line x1="72" y1="10" x2="120" y2="10" stroke="#C99A54" strokeWidth="0.8" opacity="0.5" />
              <circle cx="50" cy="10" r="2" fill="#C99A54" opacity="0.5" />
              <circle cx="70" cy="10" r="2" fill="#C99A54" opacity="0.5" />
            </svg>
          </div>

          {/* Date */}
          <div className="mb-6">
            <p className="font-cinzel text-sm tracking-[0.25em] uppercase mb-1" style={{ color: "#8B6914" }}>
              Wednesday
            </p>
            <p className="font-playfair text-2xl sm:text-3xl font-semibold" style={{ color: "#2d1b0e" }}>
              18 November 2026
            </p>
          </div>

          {/* Venue */}
          <div className="mb-8 p-5 rounded-sm" style={{ background: "rgba(201,154,84,0.06)", border: "1px solid rgba(201,154,84,0.2)" }}>
            <div className="flex items-center justify-center gap-2 mb-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C99A54" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
              </svg>
              <p className="font-cinzel text-base tracking-wider" style={{ color: "#8B6914" }}>Rama Resort</p>
            </div>
            <p className="font-cormorant text-lg leading-relaxed" style={{ color: "#4a2c0e" }}>
              Tedwa Chilaula SH-21,<br />
              Sitapur - Lakhimpur Rd,<br />
              Sitapur, Uttar Pradesh 261001
            </p>
          </div>

          {/* Bottom floral */}
          <div className="flex justify-center mb-8">
            <svg width="180" height="40" viewBox="0 0 180 40" fill="none" style={{ transform: "scaleY(-1)" }}>
              <line x1="0" y1="20" x2="70" y2="20" stroke="#C99A54" strokeWidth="1" opacity="0.6" />
              <circle cx="90" cy="20" r="6" fill="none" stroke="#C99A54" strokeWidth="1" />
              <circle cx="90" cy="20" r="2" fill="#C99A54" />
              <line x1="110" y1="20" x2="180" y2="20" stroke="#C99A54" strokeWidth="1" opacity="0.6" />
            </svg>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-cinzel text-xs tracking-[0.2em] uppercase transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #183B28, #2d6048)",
                color: "#F5D78E",
                border: "1px solid rgba(201,154,84,0.4)",
              }}
              whileHover={{ scale: 1.03, boxShadow: "0 8px 25px rgba(24,59,40,0.4)" }}
              whileTap={{ scale: 0.97 }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
              </svg>
              Get Directions
            </motion.a>

            <motion.a
              href={calendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-cinzel text-xs tracking-[0.2em] uppercase transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #8B6914, #C99A54)",
                color: "#FFF5E6",
                border: "1px solid rgba(201,154,84,0.4)",
              }}
              whileHover={{ scale: 1.03, boxShadow: "0 8px 25px rgba(201,154,84,0.4)" }}
              whileTap={{ scale: 0.97 }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Add to Calendar
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function GoldCorner({ position }: { position: "tl" | "tr" | "bl" | "br" }) {
  const transforms: Record<string, string> = {
    tl: "translate(0,0) rotate(0)",
    tr: "translate(100%,0) rotate(90deg)",
    bl: "translate(0,100%) rotate(270deg)",
    br: "translate(100%,100%) rotate(180deg)",
  };
  const positions: Record<string, React.CSSProperties> = {
    tl: { top: -2, left: -2 },
    tr: { top: -2, right: -2 },
    bl: { bottom: -2, left: -2 },
    br: { bottom: -2, right: -2 },
  };
  return (
    <div className="absolute w-10 h-10 pointer-events-none" style={positions[position]}>
      <svg viewBox="0 0 30 30" fill="none" width="100%" height="100%">
        <path d="M0 0 L15 0 L15 3 Q5 3 3 15 L0 15 Z" fill="#C99A54" />
        <circle cx="3" cy="3" r="2" fill="#F5D78E" />
      </svg>
    </div>
  );
}
