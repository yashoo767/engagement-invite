"use client";

import { useState, useEffect, useRef } from "react";
import WelcomeScreen from "@/components/WelcomeScreen";
import HeroInvitation from "@/components/HeroInvitation";
import LoveStory from "@/components/LoveStory";
import Countdown from "@/components/Countdown";
import CeremonyDetails from "@/components/CeremonyDetails";
import VenueMap from "@/components/VenueMap";
import GuestWishes from "@/components/GuestWishes";
import Footer from "@/components/Footer";
import MusicController from "@/components/MusicController";
import FloatingPetals from "@/components/FloatingPetals";

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Don't show welcome screen if already opened in this session
  useEffect(() => {
    const opened = sessionStorage.getItem("invitation-opened");
    if (opened) setShowWelcome(false);
  }, []);

  // Scroll progress bar
  useEffect(() => {
    if (showWelcome) return;
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showWelcome]);

  const handleOpen = () => {
    setShowWelcome(false);
    sessionStorage.setItem("invitation-opened", "true");
  };

  return (
    <>
      {/* Scroll progress bar */}
      {!showWelcome && (
        <div
          id="scroll-progress"
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
        />
      )}

      {/* Welcome screen overlay */}
      {showWelcome && <WelcomeScreen onOpen={handleOpen} />}

      {/* Main invitation content */}
      {!showWelcome && (
        <main className="relative">
          <FloatingPetals />
          <MusicController />
          <HeroInvitation />
          <LoveStory />
          <Countdown />
          <CeremonyDetails />
          <VenueMap />
          <GuestWishes />
          <Footer />
        </main>
      )}
    </>
  );
}
