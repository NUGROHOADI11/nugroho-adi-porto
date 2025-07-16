"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useCallback } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const useHandleScroll = () => {
  // Now it's valid to use useCallback here
  const handleScroll = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: section,
        ease: "power2.inOut",
      });
    }
  }, []);

  return handleScroll;
};