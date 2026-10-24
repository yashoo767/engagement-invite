"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const shareWhatsApp = () => {
    const text = encodeURIComponent(
      "You're invited! 💍\n\nAbhay Srivastava & Shivangi Srivastava's Engagement Ceremony\n📅 Wednesday, 18 November 2026\n📍 Rama Resort, Sitapur, Uttar Pradesh\n\nWe would love to have you celebrate with us! ❤️"
    );
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
      const input = document.createElement("input");
      input.value = window.location.href;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <footer
      className="relative py-16 px-6 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0d0600 0%, #1a0800 50%, #0d0600 100%)" }}
    >
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, transparent, #C99A54, #F5B7B1, #C99A54, transparent)" }} />

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Ornament */}
        <div className="flex justify-center mb-6">
          <svg width="160" height="50" viewBox="0 0 160 50" fill="none">
            <line x1="0" y1="25" x2="58" y2="25" stroke="#C99A54" strokeWidth="1" opacity="0.5" />
            <circle cx="65" cy="25" r="4" fill="#C99A54" opacity="0.5" />
            <g transform="translate(80, 25)">
              <circle r="8" fill="none" stroke="#C99A54" strokeWidth="1.5" opacity="0.7" />
              <circle r="3" fill="#C99A54" opacity="0.8" />
            </g>
            <circle cx="95" cy="25" r="4" fill="#C99A54" opacity="0.5" />
            <line x1="102" y1="25" x2="160" y2="25" stroke="#C99A54" strokeWidth="1" opacity="0.5" />
          </svg>
        </div>

        {/* Couple names */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-great-vibes text-5xl sm:text-6xl mb-3"
          style={{ color: "#F5D78E" }}
        >
          Abhay & Shivangi
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-cinzel text-xs tracking-[0.4em] uppercase mb-2"
          style={{ color: "#C99A54" }}
        >
          Engagement Ceremony
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-cormorant text-lg italic mb-10"
          style={{ color: "rgba(245,183,177,0.6)" }}
        >
          Wednesday, 18 November 2026 &bull; Rama Resort, Sitapur
        </motion.p>

        {/* Share buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          {/* WhatsApp share */}
          <motion.button
            onClick={shareWhatsApp}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-cinzel text-xs tracking-[0.2em] uppercase"
            style={{
              background: "linear-gradient(135deg, #128C7E, #25D366)",
              color: "#ffffff",
              border: "1px solid rgba(37,211,102,0.3)",
            }}
            whileHover={{ scale: 1.03, boxShadow: "0 8px 25px rgba(37,211,102,0.3)" }}
            whileTap={{ scale: 0.97 }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.49" />
            </svg>
            Share on WhatsApp
          </motion.button>

          {/* Copy link */}
          <motion.button
            onClick={copyLink}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 font-cinzel text-xs tracking-[0.2em] uppercase"
            style={{
              background: copied ? "linear-gradient(135deg, #183B28, #2d6048)" : "transparent",
              color: copied ? "#F5D78E" : "#C99A54",
              border: `1px solid ${copied ? "rgba(201,154,84,0.4)" : "rgba(201,154,84,0.4)"}`,
              transition: "all 0.3s",
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {copied ? (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Link Copied!
              </>
            ) : (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
                Copy Invitation Link
              </>
            )}
          </motion.button>
        </motion.div>

        {/* Nav links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10">
          {[
            { href: "#hero", label: "Home" },
            { href: "#love-story", label: "Our Story" },
            { href: "#countdown", label: "Countdown" },
            { href: "#ceremony", label: "Ceremony" },
            { href: "#venue", label: "Venue" },
            { href: "#wishes", label: "Wishes" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-cinzel text-xs tracking-[0.2em] uppercase transition-colors duration-200"
              style={{ color: "rgba(201,154,84,0.5)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C99A54")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(201,154,84,0.5)")}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Bottom tagline */}
        <p className="font-great-vibes text-2xl mb-3" style={{ color: "rgba(245,215,142,0.3)" }}>
          Two Hearts, One Beautiful Journey
        </p>
        <p className="font-inter text-xs" style={{ color: "rgba(201,154,84,0.25)" }}>
          Made with ❤️ for Abhay & Shivangi
        </p>
      </div>
    </footer>
  );
}
