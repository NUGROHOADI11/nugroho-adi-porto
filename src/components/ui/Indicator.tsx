import React from "react";

interface TabProgressIndicatorProps {
  totalTabs: number;
  activeIndex: number;
  duration?: number;
}

const TabProgressIndicator: React.FC<TabProgressIndicatorProps> = ({
  totalTabs,
  activeIndex,
  duration = 4000,
}) => {
  return (
    <div className="flex  space-x-2 mt-8">
      {Array.from({ length: totalTabs }).map((_, index) => (
        <div
          key={index}
          className="relative w-8 h-1 bg-gray-500 overflow-hidden rounded-full"
        >
          <div
            className={`absolute top-0 left-0 h-full bg-white rounded-full transition-all duration-200 ${
              activeIndex === index ? "animate-tab-progress" : ""
            }`}
            style={{
              width: activeIndex === index ? "100%" : "0%",
              animationDuration: `${duration}ms`,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default TabProgressIndicator;
