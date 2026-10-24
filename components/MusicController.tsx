"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MusicController() {
  const [playing, setPlaying] = useState(false);
  const [showLabel, setShowLabel] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Create audio element on mount and attempt autoplay
  useEffect(() => {
    const audio = new Audio("/background-music.mp3");
    audio.loop = true;
    audio.volume = 1.0;
    audioRef.current = audio;

    // Attempt autoplay immediately
    audio.play().then(() => {
      setPlaying(true);
      setShowLabel(false);
    }).catch(() => {
      // Autoplay blocked — show the button so user can click to start
      setPlaying(false);
    });

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  // Hide label after 5s
  useEffect(() => {
    const t = setTimeout(() => setShowLabel(false), 5000);
    return () => clearTimeout(t);
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.volume = 1.0;
      audio.play().catch(() => {});
      setPlaying(true);
      setShowLabel(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {showLabel && !playing && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="font-cinzel text-xs tracking-wider px-3 py-1.5 rounded-full whitespace-nowrap"
            style={{
              background: "rgba(24,59,40,0.9)",
              border: "1px solid rgba(201,154,84,0.4)",
              color: "#F5D78E",
            }}
          >
            Tap to play music 🎵
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.button
        onClick={toggle}
        className="relative w-12 h-12 rounded-full flex items-center justify-center cursor-pointer"
        style={{
          background: "linear-gradient(135deg, #183B28, #2d6048)",
          border: "1.5px solid rgba(201,154,84,0.6)",
          boxShadow: playing ? "0 0 20px rgba(201,154,84,0.4)" : "0 4px 15px rgba(0,0,0,0.3)",
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={playing ? "Pause music" : "Play music"}
      >
        {/* Rotating ring when playing */}
        {playing && (
          <motion.div
            className="absolute inset-0 rounded-full border"
            style={{ borderColor: "rgba(201,154,84,0.4)" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
        )}

        {playing ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#F5D78E">
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#C99A54">
            <path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" />
          </svg>
        )}

        {/* Sound waves when playing */}
        {playing && (
          <div className="absolute -right-8 top-1/2 -translate-y-1/2 flex items-center gap-0.5">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="w-0.5 rounded-full"
                style={{ background: "#C99A54" }}
                animate={{ height: [4, 10 + i * 4, 4] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }}
              />
            ))}
          </div>
        )}
      </motion.button>
    </div>
  );
}
