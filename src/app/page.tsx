"use client";

import gsap from "gsap";
import { useState, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import dynamic from "next/dynamic";
import { usePageAnimations } from "../hooks/usePageAnimation";
import Preloader from "@/components/layout/Preloader";

const HeroSection = dynamic(() => import("@/section/main/Hero").then((mod) => mod.HeroSection));
const ProfileSection = dynamic(() => import("@/section/main/Profile").then((mod) => mod.ProfileSection));
const ExperienceSection = dynamic(() => import("@/section/main/Experience").then((mod) => mod.ExperienceSection));
const LastSection = dynamic(() => import("@/section/main/Last").then((mod) => mod.LastSection));

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  usePageAnimations(isLoading);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const handleScroll = (sectionId: string) => {
    const nextSection = document.getElementById(sectionId);
    if (nextSection) {
      gsap.to(window, {
        duration: 1.8,
        scrollTo: { y: nextSection, offsetY: 0 },
        ease: "power2.inOut",
        onUpdate: () => ScrollTrigger.update(),
        onComplete: () => ScrollTrigger.refresh(),
      });
    }
  };

  return (
    <main>
      {isLoading && <Preloader setIsLoading={setIsLoading} />}

      <div style={{ visibility: isLoading ? "hidden" : "visible" }}>
        <HeroSection onScrollClick={handleScroll} />
        <ProfileSection />
        <ExperienceSection />
        <LastSection onScrollClick={handleScroll} />
      </div>
    </main>
  );
}
