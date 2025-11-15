import React from "react";
import Image from "next/image";
import { SECTION_IDS, ANIMATION_CLASSES, IMAGES } from "../../lib/constant";

export const ProfileSection: React.FC = () => {
  return (
    <section
      id={SECTION_IDS.PROFILE}
      className="h-[130vh] flex items-end justify-end"
    >
      <div className="relative w-full md:h-[35vh] xl:h-[100vh]">
        <Image
          src={IMAGES.imgProfile}
          fill priority
          alt="Profile Image"
          className="object-cover filter brightness-60"
        />
        <div className="absolute inset-0 p-4 xl:p-16 flex flex-col justify-between">
          <div className={ANIMATION_CLASSES.SCROLL_ANIMATE}>
            <h2 className="text-7xl sm:text-7xl md:text-6xl lg:text-[9rem] 2xl:text-[12rem] tracking-tight font-medium leading-none text-white absolute inset-0  left-[4%] -top-44">
              Way of <br /> Thinking
            </h2>
          </div>
          <div
            className={`flex justify-between items-end ${ANIMATION_CLASSES.SCROLL_ANIMATE}`}
          >
            <p className="max-w-xl 2xl:max-w-2xl text-lg md:text-base xl:text-xl tracking-tight">
              A results-driven and forward-thinking final-year Informatics
              student at the University of Muhammadiyah Malang with a
              specialized focus on Web and Mobile Development. Proven
              ability to excel in corporate and community settings, demonstrated
              through impactful roles as a Developer at PT Telekomunikasi
              Indonesia (Telkom) and a Mobile Programmer Intern at Venturo. A
              Bangkit Academy 2023 graduate, equipped with hands-on cloud
              computing skills and recognized for adaptability and a
              collaborative spirit. Currently advancing mobile development
              expertise and as a member of the exclusive Digistar Club by Telkom
              Indonesia.
            </p>
            <h1 className="text-5xl md:text-7xl underline underline-offset-0 [text-decoration-skip-ink:none]">
              Profile
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};
