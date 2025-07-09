"use client";

import { motion } from "framer-motion";

interface TransitionLayer {
  delay: number;
  zIndex: number;
  bgColor: string;
}

const layers: TransitionLayer[] = [
  { delay: 0, zIndex: 50, bgColor: "bg-neutral-800" },
  { delay: 0.2, zIndex: 40, bgColor: "bg-neutral-900" },
  { delay: 0.4, zIndex: 30, bgColor: "bg-black" },
];

const Transition = () => {
  return (
    <>
      {layers.map(({ delay, zIndex, bgColor }, index) => (
        <motion.div
          key={index}
          className={`fixed top-0 bottom-0 right-full w-screen h-screen z-${zIndex} ${bgColor}`}
          initial={{ x: "100%", width: "100%" }}
          animate={{ x: "0%", width: "0%" }}
          transition={{
            delay,
            duration: 0.8,
            ease: [0.42, 0, 0.58, 1], 
          }}
        />
      ))}
    </>
  );
};

export default Transition;
