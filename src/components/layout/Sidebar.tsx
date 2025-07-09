"use client";

import ShufflingLogo from "../ui/ShuffleLogo";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomLink from "@/components/ui/CustomLink";
import {NAVITEM as navItems, SOCIAL_DATA as socialItems} from "@/lib/constant";

const Sidebar = () => {

  return (
    <aside className="fixed top-0 left-0 z-20 h-screen w-64 shadow-lg p-4">
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
            &copy; {new Date().getFullYear()} Nugroho Adi
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
