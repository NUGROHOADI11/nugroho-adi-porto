"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { usePageAnimations } from "../hooks/usePageAnimation";
import Preloader from "@/components/layout/Preloader";
import { useHandleScroll } from "@/components/utils/HandleScroll";

const HeroSection = dynamic(() =>
  import("@/section/main/Hero").then((mod) => mod.HeroSection)
);
const ProfileSection = dynamic(() =>
  import("@/section/main/Profile").then((mod) => mod.ProfileSection)
);
const ExperienceSection = dynamic(() =>
  import("@/section/main/Experience").then((mod) => mod.ExperienceSection)
);
const LastSection = dynamic(() =>
  import("@/components/ui/Last").then((mod) => mod.LastSection)
);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  usePageAnimations(isLoading);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleScroll = useHandleScroll();
  if (!isMounted) return null;

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
