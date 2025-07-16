"use client";

import React from "react";
import { motion, MotionValue } from "framer-motion";

interface VerticalTextProps {
  text: string;
  y: MotionValue<string>;
  className?: string;
}

const VerticalText: React.FC<VerticalTextProps> = ({ text, y, className }) => {
  return (
    <motion.p
      style={{ y }}
      className={`text-[12rem] font-medium whitespace-nowrap text-gray-200 [writing-mode:vertical-rl] rotate-180 absolute left-0 top-[150vh] tracking-tight z-10 ${className}`}
    >
      {text}
    </motion.p>
  );
};

export default VerticalText;