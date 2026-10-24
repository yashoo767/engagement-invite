"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function LoveStory() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      ref={sectionRef}
      id="love-story"
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #FFF5E6 0%, #FFF0D8 50%, #FFF5E6 100%)" }}
    >
      {/* Background floral pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <FloralBg />
      </div>

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, transparent, #C99A54, #F5B7B1, #C99A54, transparent)" }} />

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Section label */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.7 }}
          className="font-cinzel text-xs tracking-[0.5em] uppercase mb-4"
          style={{ color: "#C99A54" }}
        >
          Our Story
        </motion.p>

        {/* Main heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-playfair text-3xl sm:text-4xl md:text-5xl italic font-light mb-6"
          style={{ color: "#2d1b0e" }}
        >
          Every Love Story Has a<br />
          <span className="font-great-vibes text-5xl sm:text-6xl not-italic" style={{ color: "#B76E79" }}>
            Beautiful Beginning
          </span>
        </motion.h2>

        {/* Ornamental divider */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <div className="h-px w-20" style={{ background: "linear-gradient(90deg, transparent, #C99A54)" }} />
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M14 3 L16 10 L24 10 L18 14.5 L20 21.5 L14 17 L8 21.5 L10 14.5 L4 10 L12 10 Z" fill="#C99A54" opacity="0.8" />
          </svg>
          <div className="h-px w-20" style={{ background: "linear-gradient(90deg, #C99A54, transparent)" }} />
        </motion.div>

        {/* Main message */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="font-cormorant text-xl sm:text-2xl leading-relaxed mb-10 italic"
          style={{ color: "#4a2c0e" }}
        >
          With love in our hearts and blessings from our families, we are beginning a beautiful new chapter together. We would be delighted to have you join us as we celebrate our engagement.
        </motion.p>

        {/* Three pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
          {[
            {
              icon: "💛",
              title: "Family Blessings",
              text: "Joined together with the love and blessings of both our families.",
              delay: 0.4,
            },
            {
              icon: "💍",
              title: "A New Chapter",
              text: "Two hearts, one journey — beginning our story of togetherness.",
              delay: 0.55,
            },
            {
              icon: "🌸",
              title: "Celebrate With Us",
              text: "Your presence will make our special day truly unforgettable.",
              delay: 0.7,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.8, delay: item.delay }}
              className="flex flex-col items-center gap-3 p-6 rounded-sm"
              style={{
                border: "1px solid rgba(201,154,84,0.25)",
                background: "rgba(255,245,230,0.8)",
                boxShadow: "0 4px 20px rgba(201,154,84,0.08)",
              }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-2xl"
                style={{ background: "linear-gradient(135deg, rgba(201,154,84,0.15), rgba(183,110,121,0.15))" }}
              >
                {item.icon}
              </div>
              <h3 className="font-cinzel text-sm tracking-wider uppercase" style={{ color: "#8B6914" }}>
                {item.title}
              </h3>
              <p className="font-cormorant text-base leading-relaxed text-center" style={{ color: "#5a3a1a" }}>
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Couple names calligraphy */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex flex-col items-center"
        >
          <div className="flex items-center gap-6">
            <span className="font-great-vibes text-4xl sm:text-5xl" style={{ color: "#C99A54" }}>
              Abhay
            </span>
            <div className="flex flex-col items-center gap-1">
              <div className="h-px w-8" style={{ background: "#C99A54" }} />
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#B76E79" opacity="0.8">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <div className="h-px w-8" style={{ background: "#C99A54" }} />
            </div>
            <span className="font-great-vibes text-4xl sm:text-5xl" style={{ color: "#B76E79" }}>
              Shivangi
            </span>
          </div>
          <p className="font-cinzel text-xs tracking-[0.3em] uppercase mt-3" style={{ color: "#C99A54", opacity: 0.7 }}>
            18 · 11 · 2026
          </p>
        </motion.div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, transparent, #C99A54, #F5B7B1, #C99A54, transparent)" }} />
    </section>
  );
}

function FloralBg() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 800 600"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      opacity="0.06"
    >
      {/* Large rose left */}
      <g transform="translate(60, 100)">
        <circle r="60" fill="#B76E79" />
        <circle r="45" fill="#C44569" />
        <circle r="30" fill="#B76E79" />
        <circle r="15" fill="#C44569" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <ellipse key={i} cx={Math.cos(angle * Math.PI / 180) * 52} cy={Math.sin(angle * Math.PI / 180) * 52} rx="18" ry="10"
            transform={`rotate(${angle}, ${Math.cos(angle * Math.PI / 180) * 52}, ${Math.sin(angle * Math.PI / 180) * 52})`}
            fill="#C44569" />
        ))}
      </g>
      {/* Large rose right */}
      <g transform="translate(740, 150)">
        <circle r="50" fill="#C99A54" />
        <circle r="36" fill="#8B6914" />
        <circle r="22" fill="#C99A54" />
      </g>
      {/* Scattered petals */}
      {[...Array(12)].map((_, i) => (
        <ellipse
          key={i}
          cx={100 + i * 60}
          cy={300 + (i % 3) * 80}
          rx="15"
          ry="8"
          transform={`rotate(${i * 30})`}
          fill={i % 2 === 0 ? "#B76E79" : "#C99A54"}
        />
      ))}
    </svg>
  );
}
