"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const sizeStyles = {
  sm: {
    text: "text-xl",
    padding: " py-0.5",
    underline: "h-[2px]",
    bottom: "bottom-2",
  },
  md: {
    text: "text-3xl",
    padding: " py-1",
    underline: "h-[3px]",
    bottom: "bottom-2",
  },
  lg: {
    text: "text-6xl",
    padding: " py-3",
    underline: "h-[6px]",
    bottom: "bottom-3.5",
  },
  xl: {
    text: "text-7xl",
    padding: " py-4",
    underline: "h-[8px]",
    bottom: "bottom-4.5",
  },
  xxl: {
    text: "text-8xl",
    padding: " py-5",
    underline: "h-[8px]",
    bottom: "bottom-6",
  },
  xxxl: {
    text: "text-9xl",
    padding: " py-6",
    underline: "h-[13px]",
    bottom: "bottom-7",
  },
};

interface CustomLinkProps {
  href: string;
  label: string;
  size?: keyof typeof sizeStyles;
  linkColor?: string;
  activeColor?: string;
  hoverColor?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export default function AnimatedNavLink({
  href,
  label,
  size = "md",

  linkColor = "gray-600",
  activeColor = "white",
  hoverColor = "white",
  onClick,
}: CustomLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const currentSize = sizeStyles[size];

  const linkColorClass = `text-${linkColor}`;
  const activeColorClass = `text-${activeColor}`;
  const underlineColorClass = `bg-${hoverColor}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      e.preventDefault();

      onClick(e);
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`relative ${
        isActive ? activeColorClass : linkColorClass
      } ${currentSize.text} ${currentSize.padding} inline-block group tracking-tight underline underline-offset-0 [text-decoration-skip-ink:none]`}
    >
      <span>{label}</span>

      <span
        className={`
        absolute inset-0 ${currentSize.text} ${currentSize.padding}
        text-${hoverColor} opacity-0
        transition-all duration-500 ease-out
        group-hover:opacity-100
        pointer-events-none
      `}
        aria-hidden="true"
      >
        {label}
      </span>

      <span
        className={`
          absolute left-0 ${currentSize.bottom} ${currentSize.underline} ${underlineColorClass} w-0
          transition-all duration-500 ease-out
          group-hover:w-full
        `}
      />
    </Link>
  );
}
