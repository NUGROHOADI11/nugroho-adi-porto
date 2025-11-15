"use client";

import { useState } from "react";
import ShufflingLogo from "../ui/ShuffleLogo";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomLink from "@/components/ui/CustomLink";
import {
  NAVITEM as navItems,
  SOCIAL_DATA as socialItems,
} from "@/lib/constant";
import { MotionDiv } from "../utils/Motion";

const DesktopSidebar = () => {
  return (
    <aside className="hidden xl:block fixed top-0 left-0 z-20 h-screen w-64 shadow-lg p-4">
      <div className="flex flex-col h-full">
        <div className="p-6">
          <Link
            href="/"
            className="text-2xl hover:text-blue-600 transition-colors"
          >
            <ShufflingLogo />
          </Link>
        </div>

        <nav className="flex-grow p-4">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <CustomLink
                  key={item.href}
                  href={item.href}
                  label={item.name}
                />
              </li>
            ))}
          </ul>
        </nav>

        <div className="px-6">
          <ul className="flex items-center space-x-4">
            {socialItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition-colors"
                  aria-label={item.name}
                >
                  <FontAwesomeIcon icon={item.icon} className="text-2xl" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Nugroho Adi. All rights reserved.
          </p>
        </div>
      </div>
    </aside>
  );
};

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="block xl:hidden fixed top-0 left-0 right-0 z-30 shadow-lg px-4 py-2 ">
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl hover:text-blue-600 transition-colors"
        >
          <ShufflingLogo />
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-3xl z-40 transition-all"
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {isOpen && (
        <MotionDiv
          x={300}
          duration={0.6}
          ease={[0.25, 0.1, 0.25, 1]}
          className="absolute top-0 left-0 right-0 h-screen p-4 pt-20 bg-black z-30"
        >
          <div className="flex flex-col h-full">
            <nav className="flex-grow p-4">
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.name} onClick={() => setIsOpen(false)}>
                    <CustomLink
                      key={item.href}
                      href={item.href}
                      label={item.name}
                      size="sm"
                    />
                  </li>
                ))}
              </ul>
            </nav>

            <div className="px-6 py-4">
              <ul className="flex items-center space-x-6">
                {socialItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-white transition-colors"
                      aria-label={item.name}
                    >
                      <FontAwesomeIcon icon={item.icon} className="text-3xl" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6">
              <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Nugroho Adi. All rights
                reserved.
              </p>
            </div>
          </div>
        </MotionDiv>
      )}
    </header>
  );
};

const Sidebar = () => {
  return (
    <>
      <DesktopSidebar />
      <MobileHeader />
    </>
  );
};

export default Sidebar;
