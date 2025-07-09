import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ANIMATION_CLASSES } from "../lib/constant";

gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook to manage all GSAP page animations.
 * @param isLoading - The loading state of the page.
 */
export const usePageAnimations = (isLoading: boolean): void => {
  useEffect(() => {
    if (isLoading) return;

    gsap.from(`.${ANIMATION_CLASSES.HERO_TEXT}`, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      stagger: 0.2,
      delay: 0.2,
    });

    gsap.set(`.${ANIMATION_CLASSES.SCROLL_ANIMATE}`, { opacity: 0, y: 50 });

    const animationConfig = {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.15,
    };

    ScrollTrigger.batch(`.${ANIMATION_CLASSES.SCROLL_ANIMATE}`, {
      start: "top 90%",
      onEnter: (batch) => gsap.to(batch, animationConfig),
      onEnterBack: (batch) => gsap.to(batch, animationConfig),
      onLeave: (batch) =>
        gsap.to(batch, {
          opacity: 0,
          y: 50,
          duration: 0.5,
          ease: "power3.inOut",
          stagger: 0.1,
        }),
      onLeaveBack: (batch) =>
        gsap.to(batch, {
          opacity: 0,
          y: 50,
          duration: 0.5,
          ease: "power3.inOut",
          stagger: 0.1,
        }),
    });

    const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 500);

    return () => {
      clearTimeout(refreshTimer);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isLoading]);
};
