"use client";

import { motion, Easing } from "motion/react";

interface MotionDivProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  opacity?: number;
  ease?: Easing | Easing[];
  className?: string;
}

export const MotionDiv: React.FC<MotionDivProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  x = 0,
  y = 0,
  opacity = 1,
  ease = [0.25, 0.1, 0.25, 1],
  className = "",
}) => {
  return (
    <motion.div
      initial={{ x, y, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity }}
      transition={{ duration, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const MotionSpan: React.FC<MotionDivProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  x = 0,
  y = 0,
  opacity = 1,
  ease = [0.25, 0.1, 0.25, 1],
  className = "",
}) => {
  return (
    <motion.span
      initial={{ x, y, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity }}
      transition={{ duration, ease, delay }}
      className={className}
    >
      {children}
    </motion.span>
  );
};

export const MotionButton: React.FC<MotionDivProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  x = 0,
  y = 0,
  opacity = 1,
  ease = [0.25, 0.1, 0.25, 1],
  className = "",
}) => {
  return (
    <motion.button
      initial={{ x, y, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity }}
      transition={{ duration, ease, delay }}
      className={className}
    >
      {children}
    </motion.button>
  );
};

export const MotionLink: React.FC<MotionDivProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  x = 0,
  y = 0,
  opacity = 1,
  ease = [0.25, 0.1, 0.25, 1],
  className = "",
}) => {
  return (
    <motion.a
      initial={{ x, y, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity }}
      transition={{ duration, ease, delay }}
      className={className}
    >
      {children}
    </motion.a>
  );
};

export const MotionImage: React.FC<MotionDivProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  x = 0,
  y = 0,
  opacity = 1,
  ease = [0.25, 0.1, 0.25, 1],
  className = "",
}) => {
  return (
    <motion.img
      initial={{ x, y, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity }}
      transition={{ duration, ease, delay }}
      className={className}
    >
      {children}
    </motion.img>
  );
};

export const MotionSection: React.FC<MotionDivProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  x = 0,
  y = 0,
  opacity = 1,
  ease = [0.25, 0.1, 0.25, 1],
  className = "",
}) => {
  return (
    <motion.section
      initial={{ x, y, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity }}
      transition={{ duration, ease, delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
};