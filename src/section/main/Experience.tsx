"use client";

import React from "react";
import Image from "next/image";
import { SECTION_IDS } from "../../lib/constant";
import CustomLink from "../../components/ui/CustomLink";
import { EXPERIENCE_DATA } from "../../lib/constant";
import { useTabAnimation } from "../../hooks/useTabAnimation";
import { useTabSwitch } from "../../hooks/useTabSwitch";
import TabProgressIndicator from "../../components/ui/Indicator";

export const ExperienceSection: React.FC = () => {
  const activeTabIndex = useTabSwitch(EXPERIENCE_DATA.length);

  useTabAnimation(activeTabIndex, false);
  const activeExperience = EXPERIENCE_DATA[activeTabIndex];

  return (
    <section
      id={SECTION_IDS.EXPERIENCE}
      className="relative overflow-hidden min-h-screen flex items-center"
    >
      <div className="py-20 flex flex-col relative z-10">
        <h2
          data-key="tab-content"
          className="text-5xl sm:text-7xl lg:text-9xl tracking-tight font-semibold leading-none"
        >
          {activeExperience.company_name}
        </h2>
        <h3
          data-key="tab-content"
          className="text-2xl sm:text-5xl lg:text-8xl tracking-tight font-semibold leading-none"
        >
          {activeExperience.date}
        </h3>

        <p className="text-lg mt-4 max-w-[50%] mb-11" data-key="tab-content">
          {activeExperience.points}
        </p>

        <div data-key="tab-content" className="overflow-hidden">
          <CustomLink href="#" label={activeExperience.title} size="lg" />
        </div>
        <div className="">
          <TabProgressIndicator
            totalTabs={EXPERIENCE_DATA.length}
            activeIndex={activeTabIndex}
            duration={5000}
          />
        </div>
      </div>

      <div data-key="tab-content" className="absolute top-[43vh] right-[15vw] overflow-hidden">
        <Image
          src={activeExperience.image}
          alt={activeExperience.company_name}
          width={500}
          height={200}
          className="object-contain h-72 w-auto"
        />
      </div>
    </section>
  );
};
