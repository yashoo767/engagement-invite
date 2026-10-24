"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function VenueMap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Rama+Resort+Tedwa+Chilaula+SH-21+Sitapur+Lakhimpur+Rd+Sitapur+Uttar+Pradesh+261001";

  return (
    <section
      ref={ref}
      id="venue"
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #1a0f04 0%, #2d1800 50%, #1a0f04 100%)" }}
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, transparent, #C99A54, #F5B7B1, #C99A54, transparent)" }} />

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="font-cinzel text-xs tracking-[0.5em] uppercase mb-4" style={{ color: "#C99A54" }}>
            Venue
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl italic font-light mb-4" style={{ color: "#FFF5E6" }}>
            Find Us Here
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16" style={{ background: "linear-gradient(90deg, transparent, #C99A54)" }} />
            <div className="w-2 h-2 rounded-full" style={{ background: "#C99A54" }} />
            <div className="h-px w-16" style={{ background: "linear-gradient(90deg, #C99A54, transparent)" }} />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Venue info card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex flex-col justify-center p-8 sm:p-10"
            style={{
              background: "rgba(255,245,230,0.05)",
              border: "1px solid rgba(201,154,84,0.3)",
              backdropFilter: "blur(8px)",
            }}
          >
            {/* Venue icon */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(201,154,84,0.2)", border: "1px solid rgba(201,154,84,0.4)" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C99A54" strokeWidth="1.5">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9,22 9,12 15,12 15,22" />
                </svg>
              </div>
              <p className="font-cinzel text-xs tracking-[0.3em] uppercase" style={{ color: "#C99A54" }}>Venue</p>
            </div>

            <h3 className="font-playfair text-2xl sm:text-3xl mb-2" style={{ color: "#F5D78E" }}>
              Rama Resort
            </h3>
            <p className="font-cormorant text-lg italic mb-6" style={{ color: "rgba(245,183,177,0.7)" }}>
              A beautiful celebration awaits
            </p>

            <div className="space-y-3 mb-8">
              {[
                { icon: "📍", text: "Tedwa Chilaula SH-21" },
                { icon: "🛣️", text: "Sitapur - Lakhimpur Rd" },
                { icon: "🏙️", text: "Sitapur, Uttar Pradesh 261001" },
                { icon: "🇮🇳", text: "India" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-sm">{item.icon}</span>
                  <span className="font-cormorant text-base" style={{ color: "rgba(255,245,230,0.7)" }}>{item.text}</span>
                </div>
              ))}
            </div>

            <motion.a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3.5 font-cinzel text-xs tracking-[0.2em] uppercase w-full"
              style={{
                background: "linear-gradient(135deg, #8B6914, #C99A54)",
                color: "#FFF5E6",
                border: "1px solid rgba(245,215,142,0.3)",
              }}
              whileHover={{ scale: 1.02, boxShadow: "0 8px 25px rgba(201,154,84,0.4)" }}
              whileTap={{ scale: 0.98 }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
              </svg>
              Open in Google Maps
            </motion.a>
          </motion.div>

          {/* Map embed */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="relative overflow-hidden"
            style={{
              border: "1px solid rgba(201,154,84,0.3)",
              minHeight: "320px",
            }}
          >
            {/* Map frame decorations */}
            <div className="absolute top-0 left-0 w-6 h-6 z-10 pointer-events-none">
              <svg viewBox="0 0 20 20" fill="none"><path d="M0 0 L10 0 L10 2 Q2 2 2 10 L0 10 Z" fill="#C99A54" opacity="0.7" /></svg>
            </div>
            <div className="absolute top-0 right-0 w-6 h-6 z-10 pointer-events-none" style={{ transform: "scaleX(-1)" }}>
              <svg viewBox="0 0 20 20" fill="none"><path d="M0 0 L10 0 L10 2 Q2 2 2 10 L0 10 Z" fill="#C99A54" opacity="0.7" /></svg>
            </div>
            <div className="absolute bottom-0 left-0 w-6 h-6 z-10 pointer-events-none" style={{ transform: "scaleY(-1)" }}>
              <svg viewBox="0 0 20 20" fill="none"><path d="M0 0 L10 0 L10 2 Q2 2 2 10 L0 10 Z" fill="#C99A54" opacity="0.7" /></svg>
            </div>
            <div className="absolute bottom-0 right-0 w-6 h-6 z-10 pointer-events-none" style={{ transform: "scale(-1)" }}>
              <svg viewBox="0 0 20 20" fill="none"><path d="M0 0 L10 0 L10 2 Q2 2 2 10 L0 10 Z" fill="#C99A54" opacity="0.7" /></svg>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3544.123456789!2d80.65!3d27.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRama+Resort%2C+Tedwa+Chilaula+SH-21%2C+Sitapur!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px", filter: "sepia(30%) saturate(80%) hue-rotate(10deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rama Resort location on Google Maps"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, transparent, #C99A54, #F5B7B1, #C99A54, transparent)" }} />
    </section>
  );
}
