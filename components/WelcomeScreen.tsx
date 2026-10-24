"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WelcomeScreenProps {
  onOpen: () => void;
}

export default function WelcomeScreen({ onOpen }: WelcomeScreenProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);
  const [showButton, setShowButton] = useState(false);
  const [curtainsOpen, setCurtainsOpen] = useState(false);

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: {
      x: number; y: number; vx: number; vy: number;
      size: number; opacity: number; color: string;
    }[] = [];

    const colors = ["#C99A54", "#F5D78E", "#F5B7B1", "#FFD6B5", "#B76E79", "#ffffff"];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: -Math.random() * 0.8 - 0.2,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.7 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();

        // Draw small star sparkles
        if (p.size > 2.5) {
          ctx.globalAlpha = p.opacity * 0.5;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y - p.size * 2);
          ctx.lineTo(p.x, p.y + p.size * 2);
          ctx.moveTo(p.x - p.size * 2, p.y);
          ctx.lineTo(p.x + p.size * 2, p.y);
          ctx.strokeStyle = p.color;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
        ctx.globalAlpha = 1;
      });
      animFrameRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  // Sequence: show names after 1.5s, then button after 3s
  useEffect(() => {
    const t1 = setTimeout(() => setShowButton(true), 3000);
    return () => clearTimeout(t1);
  }, []);

  const handleOpen = () => {
    setCurtainsOpen(true);
    setTimeout(onOpen, 1200);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
        style={{ background: "radial-gradient(ellipse at center, #2d1200 0%, #0d0600 60%, #000000 100%)" }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Particle canvas */}
        <canvas ref={canvasRef} className="absolute inset-0" style={{ pointerEvents: "none" }} />

        {/* Curtains */}
        <motion.div
          className="absolute inset-y-0 left-0 z-10"
          style={{ width: "50%", background: "linear-gradient(135deg, #1a0800 0%, #3d1500 40%, #5c2000 70%, #7a2e00 100%)" }}
          animate={curtainsOpen ? { x: "-100%" } : { x: 0 }}
          transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Curtain fold lines */}
          {[15, 30, 45, 60, 75].map((pct, i) => (
            <div key={i} className="absolute inset-y-0" style={{ left: `${pct}%`, width: "1px", background: "rgba(201,154,84,0.15)" }} />
          ))}
          {/* Gold rope at edge */}
          <div className="absolute right-0 inset-y-0 w-2" style={{ background: "linear-gradient(180deg, #C99A54, #8B6914, #C99A54)" }} />
          {/* Curtain top ornament */}
          <div className="absolute top-0 right-0 w-full h-8" style={{ background: "linear-gradient(90deg, #8B6914, #C99A54, #8B6914)" }} />
        </motion.div>

        <motion.div
          className="absolute inset-y-0 right-0 z-10"
          style={{ width: "50%", background: "linear-gradient(225deg, #1a0800 0%, #3d1500 40%, #5c2000 70%, #7a2e00 100%)" }}
          animate={curtainsOpen ? { x: "100%" } : { x: 0 }}
          transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
        >
          {[15, 30, 45, 60, 75].map((pct, i) => (
            <div key={i} className="absolute inset-y-0" style={{ left: `${pct}%`, width: "1px", background: "rgba(201,154,84,0.15)" }} />
          ))}
          <div className="absolute left-0 inset-y-0 w-2" style={{ background: "linear-gradient(180deg, #C99A54, #8B6914, #C99A54)" }} />
          <div className="absolute top-0 left-0 w-full h-8" style={{ background: "linear-gradient(90deg, #C99A54, #8B6914, #C99A54)" }} />
        </motion.div>

        {/* Palace arch background glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 rounded-full" style={{ background: "radial-gradient(circle, rgba(201,154,84,0.12) 0%, transparent 70%)" }} />
        </div>

        {/* Arch SVG */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg pointer-events-none">
          <svg viewBox="0 0 400 300" className="w-full" fill="none">
            <path
              d="M20 300 L20 120 Q20 20 200 20 Q380 20 380 120 L380 300"
              stroke="#C99A54" strokeWidth="2" fill="none" opacity="0.4"
            />
            <path
              d="M40 300 L40 130 Q40 50 200 50 Q360 50 360 130 L360 300"
              stroke="#F5D78E" strokeWidth="1" fill="none" opacity="0.2"
            />
            {/* Arch ornament top */}
            <circle cx="200" cy="20" r="8" fill="#C99A54" opacity="0.6" />
            <circle cx="200" cy="20" r="4" fill="#F5D78E" opacity="0.8" />
          </svg>
        </div>

        {/* Center content */}
        <div className="relative z-20 text-center px-6 max-w-xl w-full">
          {/* Top ornament */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex justify-center mb-6"
          >
            <svg width="120" height="40" viewBox="0 0 120 40" fill="none">
              <line x1="0" y1="20" x2="45" y2="20" stroke="#C99A54" strokeWidth="1" opacity="0.7" />
              <circle cx="60" cy="20" r="8" stroke="#C99A54" strokeWidth="1.5" fill="none" opacity="0.7" />
              <circle cx="60" cy="20" r="3" fill="#C99A54" opacity="0.9" />
              <line x1="75" y1="20" x2="120" y2="20" stroke="#C99A54" strokeWidth="1" opacity="0.7" />
              <circle cx="52" cy="20" r="2" fill="#C99A54" opacity="0.5" />
              <circle cx="68" cy="20" r="2" fill="#C99A54" opacity="0.5" />
            </svg>
          </motion.div>

          {/* Beginning text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="font-cinzel text-xs tracking-[0.4em] uppercase mb-4"
            style={{ color: "#C99A54" }}
          >
            A Beautiful Beginning...
          </motion.p>

          {/* Couple names */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1.2, ease: "easeOut" }}
            className="font-great-vibes text-5xl sm:text-6xl md:text-7xl leading-tight mb-3"
            style={{ color: "#F5D78E" }}
          >
            Abhay
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="flex items-center justify-center gap-4 my-2"
          >
            <div className="h-px w-16" style={{ background: "linear-gradient(90deg, transparent, #C99A54)" }} />
            <span className="font-cormorant text-xl italic" style={{ color: "#C99A54" }}>&amp;</span>
            <div className="h-px w-16" style={{ background: "linear-gradient(90deg, #C99A54, transparent)" }} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 1.2, ease: "easeOut" }}
            className="font-great-vibes text-5xl sm:text-6xl md:text-7xl leading-tight mb-6"
            style={{ color: "#F5D78E" }}
          >
            Shivangi
          </motion.h1>

          {/* Engagement label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4, duration: 0.8 }}
            className="font-cinzel text-xs tracking-[0.3em] uppercase mb-8"
            style={{ color: "#F5B7B1" }}
          >
            Engagement Ceremony
          </motion.p>

          {/* Open button */}
          <AnimatePresence>
            {showButton && (
              <motion.button
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                onClick={handleOpen}
                className="relative inline-flex items-center gap-3 px-10 py-4 font-cinzel text-sm tracking-[0.2em] uppercase cursor-pointer group overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #8B6914, #C99A54, #8B6914)",
                  border: "1px solid #F5D78E",
                  color: "#FFF5E6",
                  boxShadow: "0 0 30px rgba(201,154,84,0.4), inset 0 0 20px rgba(255,255,255,0.05)",
                }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(201,154,84,0.6)" }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ background: "radial-gradient(circle, #F5D78E, transparent)" }} />
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                Open Our Invitation
              </motion.button>
            )}
          </AnimatePresence>

          {/* Floating lanterns */}
          <div className="absolute -top-20 -left-10 pointer-events-none">
            <motion.div
              animate={{ y: [-5, 5, -5], rotate: [-3, 3, -3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <LanternSVG color="#C99A54" size={40} />
            </motion.div>
          </div>
          <div className="absolute -top-16 -right-10 pointer-events-none">
            <motion.div
              animate={{ y: [5, -5, 5], rotate: [3, -3, 3] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <LanternSVG color="#B76E79" size={32} />
            </motion.div>
          </div>
        </div>

        {/* Bottom floral */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.8, duration: 1.5 }}
          className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 pointer-events-none"
        >
          {["🌸", "🌺", "🌸", "🌺", "🌸"].map((flower, i) => (
            <motion.span key={i} animate={{ y: [0, -4, 0] }} transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }} className="text-xl opacity-60">
              {flower}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function LanternSVG({ color, size }: { color: string; size: number }) {
  return (
    <svg width={size} height={size * 1.5} viewBox="0 0 40 60" fill="none">
      <line x1="20" y1="0" x2="20" y2="8" stroke={color} strokeWidth="1.5" />
      <ellipse cx="20" cy="14" rx="8" ry="5" fill={color} opacity="0.4" />
      <rect x="12" y="14" width="16" height="24" rx="3" fill={color} opacity="0.25" />
      <rect x="14" y="16" width="12" height="20" rx="2" fill="rgba(255,200,100,0.15)" />
      <ellipse cx="20" cy="38" rx="8" ry="5" fill={color} opacity="0.4" />
      <line x1="16" y1="16" x2="16" y2="36" stroke={color} strokeWidth="0.5" opacity="0.5" />
      <line x1="24" y1="16" x2="24" y2="36" stroke={color} strokeWidth="0.5" opacity="0.5" />
      <ellipse cx="20" cy="26" rx="5" ry="6" fill="rgba(255,180,50,0.2)" />
    </svg>
  );
}
