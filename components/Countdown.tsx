"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const EVENT_DATE = new Date("2026-11-18T00:00:00+05:30");

function getTimeLeft() {
  const now = new Date();
  const diff = EVENT_DATE.getTime() - now.getTime();

  if (diff <= 0) return null;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { label: "Days", value: timeLeft?.days ?? 0 },
    { label: "Hours", value: timeLeft?.hours ?? 0 },
    { label: "Minutes", value: timeLeft?.minutes ?? 0 },
    { label: "Seconds", value: timeLeft?.seconds ?? 0 },
  ];

  return (
    <section
      ref={ref}
      id="countdown"
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #183B28 0%, #0d2318 50%, #183B28 100%)" }}
    >
      {/* Stars/particles bg */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 3 === 0 ? "#C99A54" : "#F5D78E",
            }}
            animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.5, 1] }}
            transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 pointer-events-none opacity-30">
        <svg viewBox="0 0 100 100" fill="none">
          <path d="M0 0 Q50 0 50 50 Q0 50 0 0" stroke="#C99A54" strokeWidth="1" fill="none" />
          <circle cx="25" cy="25" r="3" fill="#C99A54" />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="font-cinzel text-xs tracking-[0.5em] uppercase mb-4"
          style={{ color: "#C99A54" }}
        >
          Counting Down To
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-playfair text-3xl sm:text-4xl md:text-5xl font-light italic mb-4"
          style={{ color: "#FFF5E6" }}
        >
          Our Beautiful Day
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <div className="h-px w-16" style={{ background: "linear-gradient(90deg, transparent, #C99A54)" }} />
          <span className="font-cinzel text-sm tracking-widest" style={{ color: "#F5D78E" }}>
            18 · 11 · 2026
          </span>
          <div className="h-px w-16" style={{ background: "linear-gradient(90deg, #C99A54, transparent)" }} />
        </motion.div>

        {timeLeft === null ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-12"
          >
            <p className="font-great-vibes text-5xl sm:text-6xl mb-4" style={{ color: "#F5D78E" }}>
              Our Beautiful Day Has Arrived!
            </p>
            <p className="font-cormorant text-xl italic" style={{ color: "#F5B7B1" }}>
              Wishing Abhay & Shivani a lifetime of happiness ❤️
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {units.map((unit, i) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
              >
                <CountdownCard value={unit.value} label={unit.label} index={i} />
              </motion.div>
            ))}
          </div>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-cormorant text-lg italic mt-10"
          style={{ color: "rgba(245,183,177,0.7)" }}
        >
          &ldquo;Every moment brings us closer to our beautiful beginning&rdquo;
        </motion.p>
      </div>
    </section>
  );
}

function CountdownCard({ value, label, index }: { value: number; label: string; index: number }) {
  const [prevValue, setPrevValue] = useState(value);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    if (value !== prevValue) {
      setFlipping(true);
      const t = setTimeout(() => {
        setPrevValue(value);
        setFlipping(false);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [value, prevValue]);

  const displayValue = String(value).padStart(2, "0");

  return (
    <div
      className="relative flex flex-col items-center justify-center p-5 sm:p-6 rounded-sm"
      style={{
        background: "rgba(255,245,230,0.06)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(201,154,84,0.35)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.2), inset 0 0 20px rgba(201,154,84,0.05)",
      }}
    >
      {/* Inner glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(201,154,84,0.08), transparent 70%)" }} />

      {/* Corner accents */}
      <div className="absolute top-1 left-1 w-3 h-3 border-t border-l" style={{ borderColor: "rgba(201,154,84,0.5)" }} />
      <div className="absolute top-1 right-1 w-3 h-3 border-t border-r" style={{ borderColor: "rgba(201,154,84,0.5)" }} />
      <div className="absolute bottom-1 left-1 w-3 h-3 border-b border-l" style={{ borderColor: "rgba(201,154,84,0.5)" }} />
      <div className="absolute bottom-1 right-1 w-3 h-3 border-b border-r" style={{ borderColor: "rgba(201,154,84,0.5)" }} />

      {/* Number */}
      <motion.div
        animate={flipping ? { scaleY: [1, 0, 1] } : {}}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="font-playfair text-5xl sm:text-6xl font-light tabular-nums leading-none"
        style={{ color: "#F5D78E" }}
      >
        {displayValue}
      </motion.div>

      {/* Separator line */}
      <div className="w-8 h-px my-2" style={{ background: "rgba(201,154,84,0.4)" }} />

      {/* Label */}
      <div className="font-cinzel text-xs tracking-[0.25em] uppercase" style={{ color: "rgba(201,154,84,0.8)" }}>
        {label}
      </div>
    </div>
  );
}
