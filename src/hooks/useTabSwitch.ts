import { useState, useEffect } from "react";

/**
 * Custom hook to manage auto-switching tabs.
 * @param totalTabs - The total number of tabs.
 * @param interval - The interval in milliseconds to switch tabs.
 * @param isPaused - Flag to pause the timer.
 * @returns The index of the active tab.
 */
export const useTabSwitch = (
  totalTabs: number,
  interval: number = 4000,
  isPaused: boolean = false
): number => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  useEffect(() => {
    if (isPaused) return;

    const timer = setTimeout(() => {
      setActiveTabIndex((prevIndex) => (prevIndex + 1) % totalTabs);
    }, interval);

    return () => clearTimeout(timer);
  }, [activeTabIndex, totalTabs, interval, isPaused]);

  return activeTabIndex;
};
