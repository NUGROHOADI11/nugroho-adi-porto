"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion, Variants } from "framer-motion";
import { IMAGES } from "../../lib/constant";
import Header from "@/components/ui/Header";
import VerticalText from "@/components/ui/VerticalText";
import { LastSection } from "@/components/ui/Last";
import { useHandleScroll } from "@/components/utils/HandleScroll";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.2,
    },
  },
};

const paragraphVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.15,
    },
  },
};

const lineVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const aboutContent = [
  [
    "Welcome to my portfolio! I am a passionate developer with a keen",
    "interest in creating dynamic and responsive web applications. My",
    "journey in web development has been fueled by a desire to learn and",
    "innovate, and I am excited to share my work with you.",
  ],
  [
    "I specialize in building user-friendly interfaces and ensuring a",
    "seamless user experience. My skills include HTML, CSS, JavaScript,",
    "and various frameworks that allow me to bring ideas to life. I am",
    "always eager to take on new challenges and expand my knowledge in",
    "the ever-evolving world of web development.",
  ],
  [
    "Thank you for visiting my portfolio. I hope you enjoy exploring my",
    "projects as much as I enjoyed creating them!",
  ],
];

const AboutPage = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const handleScroll = useHandleScroll();

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-25%", "80%"]);

  return (
    <div ref={targetRef} className="mx-auto relative">
      <div id="about">
        <Header title="About" />
      </div>

      <div className="relative mt-8 flex justify-end">
        <Image
          src={IMAGES.imgProfile}
          alt="About page profile"
          height={400}
          className="object-cover w-[75vw] filter brightness-70"
        />
      </div>

      <div className="flex justify-center">
        <motion.div
          className="py-36 px-28 w-[60%]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          {aboutContent.map((paragraphLines, paragraphIndex) => (
            <motion.p
              key={paragraphIndex}
              className="text-lg mt-4 first:mt-0"
              variants={paragraphVariants}
            >
              {paragraphLines.map((line, lineIndex) => (
                <React.Fragment key={lineIndex}>
                  <motion.span variants={lineVariants} className="inline-block">
                    {line}
                  </motion.span>
                  {lineIndex < paragraphLines.length - 1 && <br />}
                </React.Fragment>
              ))}
            </motion.p>
          ))}
        </motion.div>
      </div>

      <VerticalText text="About Me" y={y} className="" />
      <div className="h-[30vh]"></div>
      <LastSection onScrollClick={handleScroll} idToScroll="about" />
    </div>
  );
};

export default AboutPage;
