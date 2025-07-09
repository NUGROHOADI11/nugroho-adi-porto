"use client";
import React from "react";
import { MotionDiv } from "@/components/utils/Motion";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="h-[80vh] w-full overflow-hidden ">
      <div className="mx-auto flex justify-end items-center h-full">

        <MotionDiv x={100} delay={0.5}>
          <h1 className="text-[20rem]">{title}</h1>
        </MotionDiv>
      </div>
    </header>
  );
};

export default Header;
