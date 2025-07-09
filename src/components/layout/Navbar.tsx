'use client';

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";

const Navbar = () => {
  const router = useRouter();

  const handleContactClick = () => {
    router.push("/contact");
  };
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-transparent p-4 ">
      <div className="mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          Nugroho Adi
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>
        <Button
          className="rounded-full ring text-white hover:bg-white hover:text-black font-bold py-2 px-auto"
          type="button"
          onClick={handleContactClick}
        >
          Contact Me
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
