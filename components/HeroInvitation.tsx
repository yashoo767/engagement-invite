"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroInvitation() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #1a0800 0%, #2d1200 30%, #3d1800 60%, #1a0800 100%)" }}
    >
      {/* Parallax background layer */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y }}>
        {/* Radial glow */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,154,84,0.08) 0%, transparent 70%)" }} />

        {/* Top floral garland */}
        <div className="absolute top-0 left-0 right-0 h-24 flex items-start justify-center overflow-hidden">
          <svg viewBox="0 0 800 80" className="w-full" fill="none" preserveAspectRatio="xMidYMin slice">
            <path d="M0 40 Q100 10 200 40 Q300 70 400 40 Q500 10 600 40 Q700 70 800 40" stroke="#C99A54" strokeWidth="1.5" fill="none" opacity="0.4" />
            <path d="M0 50 Q100 20 200 50 Q300 80 400 50 Q500 20 600 50 Q700 80 800 50" stroke="#B76E79" strokeWidth="1" fill="none" opacity="0.3" />
            {[0, 100, 200, 300, 400, 500, 600, 700, 800].map((x, i) => (
              <g key={i} transform={`translate(${x}, ${i % 2 === 0 ? 40 : 50})`}>
                <circle r="4" fill="#C99A54" opacity="0.6" />
                <circle r="2" fill="#F5D78E" opacity="0.8" />
              </g>
            ))}
          </svg>
        </div>

        {/* Bottom floral garland */}
        <div className="absolute bottom-0 left-0 right-0 h-24 flex items-end justify-center overflow-hidden">
          <svg viewBox="0 0 800 80" className="w-full" fill="none" preserveAspectRatio="xMidYMax slice">
            <path d="M0 40 Q100 70 200 40 Q300 10 400 40 Q500 70 600 40 Q700 10 800 40" stroke="#C99A54" strokeWidth="1.5" fill="none" opacity="0.4" />
          </svg>
        </div>

        {/* Corner ornaments */}
        <CornerOrnament position="top-left" />
        <CornerOrnament position="top-right" />
        <CornerOrnament position="bottom-left" />
        <CornerOrnament position="bottom-right" />

        {/* Hanging lanterns */}
        <HangingLantern left="8%" delay={0} />
        <HangingLantern left="18%" delay={0.5} />
        <HangingLantern left="82%" delay={0.3} />
        <HangingLantern left="92%" delay={0.8} />
      </motion.div>

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center px-6 py-16 max-w-4xl w-full"
        style={{ opacity }}
      >
        {/* Pre-heading */}
        <motion.p
          {...fadeUp}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-cinzel text-xs tracking-[0.5em] uppercase mb-6"
          style={{ color: "#C99A54" }}
        >
          Together Begins a Beautiful Journey
        </motion.p>

        {/* Ornamental line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 1.2 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-px flex-1 max-w-[120px]" style={{ background: "linear-gradient(90deg, transparent, #C99A54)" }} />
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#C99A54" opacity="0.8">
            <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
          </svg>
          <div className="h-px flex-1 max-w-[120px]" style={{ background: "linear-gradient(90deg, #C99A54, transparent)" }} />
        </motion.div>

        <motion.p
          {...fadeUp}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-cinzel text-xs tracking-[0.35em] uppercase mb-8"
          style={{ color: "#F5B7B1" }}
        >
          You Are Cordially Invited to the
        </motion.p>

        <motion.h2
          {...fadeUp}
          transition={{ delay: 0.7, duration: 0.9 }}
          className="font-playfair text-3xl sm:text-4xl md:text-5xl font-light italic mb-10 tracking-wide"
          style={{ color: "#FFF5E6" }}
        >
          Engagement Ceremony
        </motion.h2>

        {/* Couple Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 1.2, ease: "easeOut" }}
          className="flex justify-center mb-10"
        >
          <div className="relative drop-shadow-2xl">
            <Image
              src="/couple.png"
              alt="Abhay & Shivani"
              width={340}
              height={320}
              priority
              className="object-contain"
              style={{ maxWidth: "min(340px, 85vw)", height: "auto" }}
            />
          </div>
        </motion.div>

        {/* Groom name */}
        <motion.h1
          {...fadeUp}
          transition={{ delay: 1.1, duration: 1 }}
          className="font-great-vibes text-6xl sm:text-7xl md:text-8xl leading-none mb-3"
          style={{ color: "#F5D78E" }}
        >
          Abhay Srivastava
        </motion.h1>

        {/* Ampersand divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, duration: 0.7 }}
          className="flex items-center justify-center gap-6 my-4"
        >
          <div className="h-px w-20 sm:w-28" style={{ background: "linear-gradient(90deg, transparent, #C99A54)" }} />
          <div className="relative">
            <div className="w-14 h-14 rounded-full flex items-center justify-center border"
              style={{ borderColor: "#C99A54", background: "rgba(201,154,84,0.1)" }}>
              <span className="font-great-vibes text-3xl" style={{ color: "#C99A54" }}>&amp;</span>
            </div>
          </div>
          <div className="h-px w-20 sm:w-28" style={{ background: "linear-gradient(90deg, #C99A54, transparent)" }} />
        </motion.div>

        {/* Bride name */}
        <motion.h1
          {...fadeUp}
          transition={{ delay: 1.6, duration: 1 }}
          className="font-great-vibes text-6xl sm:text-7xl md:text-8xl leading-none mb-8"
          style={{ color: "#F5D78E" }}
        >
          Shivani Srivastava
        </motion.h1>

        {/* Tagline */}
        <motion.p
          {...fadeUp}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="font-cormorant text-xl italic tracking-widest mb-6"
          style={{ color: "#F5B7B1" }}
        >
          Two Hearts &bull; One Beautiful Journey
        </motion.p>

        {/* Date */}
        <motion.div
          {...fadeUp}
          transition={{ delay: 2.0, duration: 0.8 }}
          className="inline-flex items-center gap-4 px-8 py-3 rounded-none mb-8"
          style={{
            border: "1px solid rgba(201,154,84,0.5)",
            background: "rgba(201,154,84,0.08)",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C99A54" strokeWidth="1.5">
            <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span className="font-cinzel text-sm tracking-[0.25em] uppercase" style={{ color: "#F5D78E" }}>
            Wednesday, 18 November 2026
          </span>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-cinzel text-xs tracking-[0.3em] uppercase" style={{ color: "#C99A54", opacity: 0.6 }}>
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" stroke="#C99A54" strokeWidth="1.5" opacity="0.6">
              <rect x="1" y="1" width="14" height="22" rx="7" />
              <circle cx="8" cy="7" r="2" fill="#C99A54" opacity="0.6" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Rose petals static decoration */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none text-2xl"
          style={{
            left: `${10 + i * 11}%`,
            top: `${20 + (i % 3) * 25}%`,
            opacity: 0.15,
          }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 360],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 5 + i * 0.8,
            repeat: Infinity,
            delay: i * 0.6,
            ease: "easeInOut",
          }}
        >
          🌸
        </motion.div>
      ))}
    </section>
  );
}

function CornerOrnament({ position }: { position: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) {
  const styles: Record<string, React.CSSProperties> = {
    "top-left": { top: 0, left: 0, transform: "rotate(0deg)" },
    "top-right": { top: 0, right: 0, transform: "rotate(90deg)" },
    "bottom-left": { bottom: 0, left: 0, transform: "rotate(270deg)" },
    "bottom-right": { bottom: 0, right: 0, transform: "rotate(180deg)" },
  };
  return (
    <div className="absolute w-28 h-28 pointer-events-none" style={styles[position]}>
      <svg viewBox="0 0 80 80" fill="none" width="100%" height="100%">
        <path d="M0 0 L40 0 L40 5 Q20 5 5 20 L0 20 Z" fill="#C99A54" opacity="0.3" />
        <path d="M0 0 L5 0 L5 40 Q5 20 20 5 L0 5 Z" fill="#C99A54" opacity="0.3" />
        <circle cx="5" cy="5" r="3" fill="#C99A54" opacity="0.5" />
        <circle cx="20" cy="5" r="1.5" fill="#C99A54" opacity="0.4" />
        <circle cx="5" cy="20" r="1.5" fill="#C99A54" opacity="0.4" />
        <path d="M8 2 Q14 8 8 14 Q2 8 8 2Z" fill="#B76E79" opacity="0.3" />
      </svg>
    </div>
  );
}

function HangingLantern({ left, delay }: { left: string; delay: number }) {
  return (
    <motion.div
      className="absolute top-0 pointer-events-none"
      style={{ left }}
      animate={{ rotate: [-4, 4, -4] }}
      transition={{ duration: 3 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <svg width="30" height="70" viewBox="0 0 30 70" fill="none">
        <line x1="15" y1="0" x2="15" y2="12" stroke="#C99A54" strokeWidth="1.5" />
        <ellipse cx="15" cy="17" rx="8" ry="4" fill="#8B6914" opacity="0.7" />
        <rect x="7" y="17" width="16" height="26" rx="4" fill="#C99A54" opacity="0.2" />
        <rect x="9" y="19" width="12" height="22" rx="3" fill="rgba(255,180,50,0.15)" />
        <ellipse cx="15" cy="43" rx="8" ry="4" fill="#8B6914" opacity="0.7" />
        <line x1="11" y1="17" x2="11" y2="43" stroke="#C99A54" strokeWidth="0.5" opacity="0.6" />
        <line x1="19" y1="17" x2="19" y2="43" stroke="#C99A54" strokeWidth="0.5" opacity="0.6" />
        <ellipse cx="15" cy="30" rx="4" ry="5" fill="rgba(255,160,30,0.25)" />
        <line x1="13" y1="43" x2="11" y2="52" stroke="#C99A54" strokeWidth="1" opacity="0.4" />
        <line x1="17" y1="43" x2="19" y2="52" stroke="#C99A54" strokeWidth="1" opacity="0.4" />
      </svg>
    </motion.div>
  );
}

// SVG illustration removed — replaced with real couple image
function _noop() {
  return (
    <div className="relative inline-block">
      <svg width="280" height="320" viewBox="0 0 280 320" fill="none" className="drop-shadow-2xl">
        {/* Decorative ring/halo behind couple */}
        <ellipse cx="140" cy="160" rx="110" ry="130" stroke="#C99A54" strokeWidth="1" opacity="0.2" />
        <ellipse cx="140" cy="160" rx="100" ry="120" stroke="#F5D78E" strokeWidth="0.5" opacity="0.15" />

        {/* === GROOM (LEFT) === */}
        {/* Body - Sherwani */}
        <path d="M55 260 L55 180 Q55 165 75 160 L100 155 L105 260 Z" fill="#183B28" />
        {/* Sherwani details */}
        <path d="M78 160 L78 220" stroke="#C99A54" strokeWidth="0.8" opacity="0.5" />
        <line x1="68" y1="175" x2="88" y2="175" stroke="#C99A54" strokeWidth="0.5" opacity="0.4" />
        <line x1="68" y1="185" x2="88" y2="185" stroke="#C99A54" strokeWidth="0.5" opacity="0.4" />
        <line x1="68" y1="195" x2="88" y2="195" stroke="#C99A54" strokeWidth="0.5" opacity="0.4" />
        {/* Groom neck */}
        <rect x="73" y="145" width="14" height="20" rx="4" fill="#D4956A" />
        {/* Groom face */}
        <circle cx="80" cy="130" r="28" fill="#D4956A" />
        {/* Groom curly hair */}
        <path d="M52 115 Q54 95 70 88 Q80 84 90 88 Q106 93 108 108 Q102 100 96 98 Q90 96 84 98 Q77 100 72 108 Q65 105 58 112 Z" fill="#2d1a00" />
        {/* Curly texture */}
        <path d="M55 112 Q58 105 65 110" stroke="#1a0d00" strokeWidth="1.5" fill="none" />
        <path d="M62 106 Q67 100 74 105" stroke="#1a0d00" strokeWidth="1.5" fill="none" />
        <path d="M72 102 Q79 97 86 102" stroke="#1a0d00" strokeWidth="1.5" fill="none" />
        <path d="M85 100 Q92 97 98 103" stroke="#1a0d00" strokeWidth="1.5" fill="none" />
        <path d="M97 105 Q103 101 107 108" stroke="#1a0d00" strokeWidth="1.5" fill="none" />
        {/* Groom beard */}
        <path d="M62 140 Q65 155 80 158 Q95 155 98 140 Q92 148 80 150 Q68 148 62 140 Z" fill="#2d1a00" opacity="0.8" />
        {/* Groom eyes */}
        <circle cx="72" cy="128" r="4" fill="#1a0d00" />
        <circle cx="88" cy="128" r="4" fill="#1a0d00" />
        <circle cx="73" cy="127" r="1.5" fill="white" />
        <circle cx="89" cy="127" r="1.5" fill="white" />
        {/* Eyebrows */}
        <path d="M68 122 Q72 120 76 122" stroke="#2d1a00" strokeWidth="1.5" fill="none" />
        <path d="M84 122 Q88 120 92 122" stroke="#2d1a00" strokeWidth="1.5" fill="none" />
        {/* Groom smile */}
        <path d="M73 140 Q80 146 87 140" stroke="#b5724a" strokeWidth="1.5" fill="none" />
        {/* Groom dupatta/stole */}
        <path d="M55 175 Q65 168 75 178 Q80 183 75 195 L60 210 Z" fill="#C99A54" opacity="0.6" />
        {/* Groom arms */}
        <path d="M55 180 Q45 200 50 230 L60 228 Q58 205 68 190 Z" fill="#183B28" />
        <path d="M105 180 Q118 195 125 220 L115 222 Q110 202 100 192 Z" fill="#183B28" />
        {/* Groom hands */}
        <ellipse cx="52" cy="232" rx="7" ry="5" fill="#D4956A" />
        <ellipse cx="117" cy="223" rx="7" ry="5" fill="#D4956A" />
        {/* Groom legs/bottom */}
        <rect x="62" y="255" width="14" height="40" rx="4" fill="#122a1d" />
        <rect x="80" y="255" width="14" height="40" rx="4" fill="#122a1d" />

        {/* === BRIDE (RIGHT) === */}
        {/* Lehenga skirt */}
        <path d="M165 210 Q165 195 175 185 L215 185 Q225 185 225 195 L235 260 L155 260 Z" fill="#B76E79" />
        {/* Lehenga flare bottom */}
        <path d="M155 260 Q165 275 195 278 Q225 275 235 260 Z" fill="#C4788a" />
        {/* Skirt embroidery border */}
        <path d="M158 238 Q195 248 232 238" stroke="#F5D78E" strokeWidth="1.5" fill="none" opacity="0.6" />
        <path d="M160 248 Q195 258 230 248" stroke="#C99A54" strokeWidth="1" fill="none" opacity="0.5" />
        {/* Blouse/top */}
        <path d="M165 185 L165 155 Q165 145 175 142 L215 142 Q225 142 225 152 L225 185 Z" fill="#C44569" />
        {/* Dupatta */}
        <path d="M160 145 Q150 165 145 200 Q148 205 155 195 Q165 170 175 155 Z" fill="#F5B7B1" opacity="0.7" />
        <path d="M230 145 Q242 165 245 200 Q242 205 236 198 Q226 175 215 155 Z" fill="#F5B7B1" opacity="0.5" />
        {/* Bride neck */}
        <rect x="187" y="132" width="16" height="18" rx="4" fill="#D4956A" />
        {/* Bride face */}
        <circle cx="195" cy="115" r="26" fill="#D4956A" />
        {/* Bride long wavy hair */}
        <path d="M169 110 Q170 85 185 78 Q195 74 205 78 Q220 83 221 98 Q215 90 208 88 Q200 86 192 89 Q184 92 180 100 Z" fill="#1a0d00" />
        {/* Hair sides flowing down */}
        <path d="M169 110 Q165 130 163 160 Q167 165 170 155 Q172 135 174 120 Z" fill="#1a0d00" />
        <path d="M221 110 Q225 130 227 160 Q223 165 220 155 Q218 135 216 120 Z" fill="#1a0d00" />
        {/* Hair waves */}
        <path d="M165 125 Q168 133 165 140" stroke="#0d0700" strokeWidth="1" fill="none" />
        <path d="M224 125 Q221 133 224 140" stroke="#0d0700" strokeWidth="1" fill="none" />
        {/* Bridal bindi */}
        <circle cx="195" cy="103" r="2.5" fill="#C44569" />
        {/* Bride eyes */}
        <circle cx="187" cy="113" r="3.5" fill="#1a0d00" />
        <circle cx="203" cy="113" r="3.5" fill="#1a0d00" />
        <circle cx="188" cy="112" r="1.2" fill="white" />
        <circle cx="204" cy="112" r="1.2" fill="white" />
        {/* Eyelashes */}
        <path d="M183 109 Q187 107 191 109" stroke="#0d0700" strokeWidth="1" fill="none" />
        <path d="M199 109 Q203 107 207 109" stroke="#0d0700" strokeWidth="1" fill="none" />
        {/* Bride smile */}
        <path d="M188 126 Q195 131 202 126" stroke="#b5724a" strokeWidth="1.5" fill="none" />
        {/* Bride jewelry - necklace */}
        <path d="M178 142 Q195 150 212 142" stroke="#C99A54" strokeWidth="1.5" fill="none" />
        <circle cx="195" cy="152" r="3" fill="#C99A54" opacity="0.8" />
        {/* Bride earrings */}
        <line x1="169" y1="115" x2="169" y2="128" stroke="#C99A54" strokeWidth="1.5" />
        <circle cx="169" cy="129" r="3" fill="#C99A54" opacity="0.8" />
        <line x1="221" y1="115" x2="221" y2="128" stroke="#C99A54" strokeWidth="1.5" />
        <circle cx="221" cy="129" r="3" fill="#C99A54" opacity="0.8" />
        {/* Bangles */}
        <circle cx="160" cy="215" r="6" stroke="#C99A54" strokeWidth="1.5" fill="none" />
        <circle cx="160" cy="215" r="4" stroke="#F5D78E" strokeWidth="1" fill="none" />
        {/* Bride arms */}
        <path d="M165 180 Q150 195 155 220 L163 218 Q161 198 170 185 Z" fill="#C44569" />
        <path d="M225 180 Q238 195 233 218 L225 216 Q227 196 220 185 Z" fill="#C44569" />
        {/* Bride hands */}
        <ellipse cx="157" cy="221" rx="7" ry="5" fill="#D4956A" />
        <ellipse cx="231" cy="219" rx="7" ry="5" fill="#D4956A" />

        {/* === ENGAGEMENT RINGS TRAY === */}
        {/* Decorative tray */}
        <ellipse cx="140" cy="258" rx="35" ry="12" fill="#8B6914" opacity="0.5" />
        <ellipse cx="140" cy="255" rx="33" ry="10" fill="#C99A54" opacity="0.3" />
        <ellipse cx="140" cy="255" rx="30" ry="8" fill="#FFF5E6" opacity="0.2" />
        {/* Rose on tray */}
        <circle cx="130" cy="253" r="5" fill="#B76E79" opacity="0.8" />
        <circle cx="130" cy="253" r="3" fill="#C44569" opacity="0.9" />
        {/* Ring 1 */}
        <circle cx="145" cy="252" r="5" fill="none" stroke="#C99A54" strokeWidth="2" />
        <circle cx="145" cy="252" r="3" fill="none" stroke="#F5D78E" strokeWidth="1" />
        <circle cx="145" cy="247" r="2" fill="#B76E79" opacity="0.9" />
        {/* Ring 2 */}
        <circle cx="155" cy="252" r="5" fill="none" stroke="#C99A54" strokeWidth="2" />
        <circle cx="155" cy="252" r="3" fill="none" stroke="#F5D78E" strokeWidth="1" />
        <circle cx="155" cy="247" r="2" fill="#4a90d9" opacity="0.9" />
        {/* Interlocking indicator */}
        <line x1="148" y1="252" x2="152" y2="252" stroke="#C99A54" strokeWidth="1" opacity="0.6" />

        {/* Tray handle / petals around */}
        <circle cx="112" cy="255" r="3" fill="#B76E79" opacity="0.5" />
        <circle cx="168" cy="255" r="3" fill="#B76E79" opacity="0.5" />
        <circle cx="120" cy="262" r="2" fill="#C99A54" opacity="0.5" />
        <circle cx="160" cy="262" r="2" fill="#C99A54" opacity="0.5" />

        {/* Groom holding hand towards tray */}
        <line x1="117" y1="223" x2="135" y2="250" stroke="#D4956A" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
        {/* Bride holding hand towards tray */}
        <line x1="157" y1="219" x2="148" y2="248" stroke="#D4956A" strokeWidth="3" strokeLinecap="round" opacity="0.5" />

        {/* Floating hearts */}
        <motion.g opacity="0.7">
          <path d="M130 85 L133 89 L136 85 Q136 81 133 81 Q130 81 130 85Z" fill="#B76E79" />
        </motion.g>
        <path d="M148 75 L151 79 L154 75 Q154 71 151 71 Q148 71 148 75Z" fill="#C44569" opacity="0.6" />
        <path d="M160 88 L163 92 L166 88 Q166 84 163 84 Q160 84 160 88Z" fill="#C99A54" opacity="0.5" />
      </svg>
    </div>
  );
}
