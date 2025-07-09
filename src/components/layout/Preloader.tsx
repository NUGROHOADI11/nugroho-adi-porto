"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const Preloader = ({
  setIsLoading,
}: {
  setIsLoading: (isLoading: boolean) => void;
}) => {
  const preloaderRef = useRef(null);
  const textRef = useRef(null);
  const counterRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setIsLoading(false),
    });

    const dotAnimation = gsap.to(dotRef.current, {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      ease: "power1.inOut",
    });

    tl.to(counterRef.current, {
      textContent: 100,
      duration: 3,
      ease: "power2.out",
      roundProps: "textContent",
      snap: { textContent: 1 },
    });

    tl.to(
      [textRef.current, counterRef.current, dotRef.current],
      {
        y: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power2.in",
        onComplete: () => {
          dotAnimation.kill();
        },
      },
      "-=0.5"
    );

    tl.to(preloaderRef.current, {
      y: "-100%",
      duration: 1,
      ease: "power3.inOut",
    });
  }, [setIsLoading]);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white"
    >
      <div className="flex items-baseline text-6xl md:text-8xl font-bold uppercase">
        <h1 ref={textRef}>Nugroho</h1>
        <span ref={dotRef}>.</span>
      </div>
      <div className="absolute bottom-10 right-10 text-xl font-mono">
        <span ref={counterRef}>0</span>%
      </div>
    </div>
  );
};

export default Preloader;
