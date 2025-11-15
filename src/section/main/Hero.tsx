import React from "react";
import { TABS_DATA, SECTION_IDS, ANIMATION_CLASSES } from "../../lib/constant";
import { useTabSwitch } from "../../hooks/useTabSwitch";
import { useTabAnimation } from "../../hooks/useTabAnimation";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TypeWriter from "../../components/ui/TypeWriter";
import TabProgressIndicator from "../../components/ui/Indicator";

interface HeroSectionProps {
  onScrollClick: (id: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollClick }) => {
  const activeTabIndex = useTabSwitch(TABS_DATA.length);
  useTabAnimation(activeTabIndex, false);

  return (
    <section
      id={SECTION_IDS.HERO}
      className="relative h-screen flex flex-col py-4 md:py-8 px-6 md:px-12 lg:px-20 xl:px-32 pt-24 md:pt-0"
    >
      <div className="flex-grow flex flex-col ">
        <h1
          className={`text-6xl sm:text-7xl md:text-8xl tracking-tight xl:text-[8.3rem] 2xl:text-[12rem] font-medium leading-none ${ANIMATION_CLASSES.HERO_TEXT}`}
        >
          A canvas for tomorrow&apos;s chapters.
        </h1>
        <h2 className="flex items-baseline text-xl md:text-2xl font-medium mt-6 md:mt-10 opacity-75 max-w-4xl hero-text-once">
          <span className="mr-2">Nugroho Adi - </span>
          <TypeWriter />
        </h2>
        <p className="text-sm md:text-base mt-4 opacity-75 max-w-sm md:max-w-md xl:max-w-xl hero-text-once">
          I build systems that feel simple, perform reliably, and scale with
          clarity. As a developer, I believe that the best technology
          disappears, leaving only the experience behind.
        </p>

        <div className="absolute bottom-[12vh] right-5 overflow-hidden">
          <div key={activeTabIndex} className="text-right">
            <p data-key="tab-content" className="text-lg font-medium">
              {TABS_DATA[activeTabIndex].date}
            </p>
            <p data-key="tab-content" className="text-base text-gray-600">
              {TABS_DATA[activeTabIndex].content}
            </p>
            <div className="flex justify-end">
              <TabProgressIndicator
                totalTabs={TABS_DATA.length}
                activeIndex={activeTabIndex}
                duration={5000}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 scroll-down-btn">
        <button
          onClick={() => onScrollClick(SECTION_IDS.PROFILE)}
          aria-label="Scroll to next section"
          className="animate-bounce p-2 rounded-full text-gray-500 hover:text-gray-300 transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faAnglesDown} size="2x" />
        </button>
      </div>
    </section>
  );
};
