import { useEffect } from "react";
import gsap from "gsap";

/**
 * Custom hook for tab content transition animation.
 * @param activeTabIndex - The index of the currently active tab.
 * @param isLoading - The loading state.
 */
export const useTabAnimation = (
  activeTabIndex: number,
  isLoading: boolean
): void => {
  useEffect(() => {
    if (isLoading) return;

    gsap.fromTo(
      "[data-key='tab-content']",
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
      }
    );
  }, [activeTabIndex, isLoading]);
};
