"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

interface Wish {
  id: string;
  name: string;
  message: string;
  timestamp: number;
}

export default function GuestWishes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [showHearts, setShowHearts] = useState(false);
  const [error, setError] = useState("");

  // Load wishes from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("engagement-wishes-abhay-shivangi");
      if (saved) setWishes(JSON.parse(saved));
    } catch {
      // ignore
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedMessage = message.trim();
    if (!trimmedName || !trimmedMessage) {
      setError("Please fill in both your name and message.");
      return;
    }
    if (trimmedMessage.length < 5) {
      setError("Please write a longer message.");
      return;
    }

    const wish: Wish = {
      id: Date.now().toString(),
      name: trimmedName,
      message: trimmedMessage,
      timestamp: Date.now(),
    };

    const updated = [wish, ...wishes];
    setWishes(updated);

    try {
      localStorage.setItem("engagement-wishes-abhay-shivangi", JSON.stringify(updated));
    } catch {
      // localStorage might be unavailable, wishes still shown in memory
    }

    setName("");
    setMessage("");
    setError("");
    setSubmitted(true);
    setShowHearts(true);
    setTimeout(() => { setSubmitted(false); setShowHearts(false); }, 4000);
  };

  return (
    <section
      ref={ref}
      id="wishes"
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #FFF5E6 0%, #FFF0D8 100%)" }}
    >
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, transparent, #C99A54, #F5B7B1, #C99A54, transparent)" }} />

      <div className="relative max-w-2xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="font-cinzel text-xs tracking-[0.5em] uppercase mb-4" style={{ color: "#C99A54" }}>
            Share Your Love
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl italic font-light mb-4" style={{ color: "#2d1b0e" }}>
            Your Presence Is Our<br />
            <span className="font-great-vibes text-5xl sm:text-6xl not-italic" style={{ color: "#B76E79" }}>
              Greatest Gift
            </span>
          </h2>
          <p className="font-cormorant text-lg italic leading-relaxed max-w-lg mx-auto" style={{ color: "#4a2c0e" }}>
            As we begin this beautiful journey together, your love, blessings, and presence will make our celebration truly unforgettable.
          </p>
        </motion.div>

        {/* Wish form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative p-8 sm:p-10 mb-10"
          style={{
            background: "rgba(255,245,230,0.9)",
            border: "1.5px solid rgba(201,154,84,0.4)",
            boxShadow: "0 10px 40px rgba(201,154,84,0.12)",
          }}
        >
          <GoldCorner position="tl" />
          <GoldCorner position="tr" />
          <GoldCorner position="bl" />
          <GoldCorner position="br" />

          <h3 className="font-playfair text-xl italic text-center mb-6" style={{ color: "#2d1b0e" }}>
            Send Your Blessings
          </h3>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="text-center py-8"
              >
                <div className="text-5xl mb-4">💝</div>
                <p className="font-great-vibes text-3xl mb-2" style={{ color: "#B76E79" }}>
                  Thank You!
                </p>
                <p className="font-cormorant text-lg italic" style={{ color: "#4a2c0e" }}>
                  Your blessings have been received with love.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div>
                  <label className="block font-cinzel text-xs tracking-[0.2em] uppercase mb-2" style={{ color: "#8B6914" }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    maxLength={60}
                    className="w-full px-4 py-3 outline-none font-cormorant text-base transition-all duration-200"
                    style={{
                      background: "rgba(255,245,230,0.8)",
                      border: "1px solid rgba(201,154,84,0.35)",
                      color: "#2d1b0e",
                      fontFamily: "Cormorant Garamond, serif",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#C99A54")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(201,154,84,0.35)")}
                  />
                </div>

                <div>
                  <label className="block font-cinzel text-xs tracking-[0.2em] uppercase mb-2" style={{ color: "#8B6914" }}>
                    Your Message *
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your heartfelt wishes..."
                    rows={4}
                    maxLength={300}
                    className="w-full px-4 py-3 outline-none font-cormorant text-base resize-none transition-all duration-200"
                    style={{
                      background: "rgba(255,245,230,0.8)",
                      border: "1px solid rgba(201,154,84,0.35)",
                      color: "#2d1b0e",
                      fontFamily: "Cormorant Garamond, serif",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#C99A54")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(201,154,84,0.35)")}
                  />
                  <div className="text-right mt-1 font-inter text-xs" style={{ color: "rgba(139,105,20,0.5)" }}>
                    {message.length}/300
                  </div>
                </div>

                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-inter text-sm"
                    style={{ color: "#C44569" }}
                  >
                    {error}
                  </motion.p>
                )}

                <motion.button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 font-cinzel text-xs tracking-[0.25em] uppercase"
                  style={{
                    background: "linear-gradient(135deg, #8B6914, #C99A54)",
                    color: "#FFF5E6",
                    border: "1px solid rgba(245,215,142,0.3)",
                  }}
                  whileHover={{ scale: 1.01, boxShadow: "0 8px 25px rgba(201,154,84,0.4)" }}
                  whileTap={{ scale: 0.99 }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                  Send Wishes
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>

          {/* Floating hearts on submit */}
          <AnimatePresence>
            {showHearts && (
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-xl"
                    style={{ left: `${10 + i * 9}%`, bottom: "10%" }}
                    initial={{ y: 0, opacity: 1, scale: 0.5 }}
                    animate={{ y: -200, opacity: 0, scale: 1.2 }}
                    transition={{ duration: 1.5 + Math.random(), delay: i * 0.15, ease: "easeOut" }}
                  >
                    {i % 3 === 0 ? "💕" : i % 3 === 1 ? "💛" : "🌸"}
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Display wishes */}
        {wishes.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="font-playfair text-xl italic text-center mb-6" style={{ color: "#2d1b0e" }}>
              Blessings Received
            </h3>
            <div className="space-y-4 max-h-96 overflow-y-auto pr-1" style={{ scrollbarWidth: "thin", scrollbarColor: "#C99A54 transparent" }}>
              {wishes.map((wish) => (
                <motion.div
                  key={wish.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="p-5"
                  style={{
                    background: "rgba(255,245,230,0.8)",
                    border: "1px solid rgba(201,154,84,0.25)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-sm"
                      style={{ background: "linear-gradient(135deg, rgba(201,154,84,0.3), rgba(183,110,121,0.3))" }}>
                      {wish.name.charAt(0).toUpperCase()}
                    </div>
                    <span className="font-cinzel text-xs tracking-wider" style={{ color: "#8B6914" }}>{wish.name}</span>
                    <span className="font-inter text-xs ml-auto" style={{ color: "rgba(139,105,20,0.4)" }}>
                      {new Date(wish.timestamp).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}
                    </span>
                  </div>
                  <p className="font-cormorant text-base italic leading-relaxed" style={{ color: "#4a2c0e" }}>
                    &ldquo;{wish.message}&rdquo;
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, transparent, #C99A54, #F5B7B1, #C99A54, transparent)" }} />
    </section>
  );
}

function GoldCorner({ position }: { position: "tl" | "tr" | "bl" | "br" }) {
  const positions: Record<string, React.CSSProperties> = {
    tl: { top: -2, left: -2 },
    tr: { top: -2, right: -2 },
    bl: { bottom: -2, left: -2 },
    br: { bottom: -2, right: -2 },
  };
  const rotations: Record<string, string> = { tl: "0", tr: "90", bl: "270", br: "180" };
  return (
    <div className="absolute w-8 h-8 pointer-events-none" style={positions[position]}>
      <svg viewBox="0 0 24 24" fill="none" width="100%" height="100%" style={{ transform: `rotate(${rotations[position]}deg)` }}>
        <path d="M0 0 L12 0 L12 2 Q2 2 2 12 L0 12 Z" fill="#C99A54" opacity="0.6" />
        <circle cx="2" cy="2" r="1.5" fill="#F5D78E" />
      </svg>
    </div>
  );
}
