"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Form from "@/components/ui/Form";
import Header from "@/components/ui/Header";
import VerticalText from "@/components/ui/VerticalText";
import { IMAGES } from "../../lib/constant";
import { useScroll, useTransform } from "framer-motion";
import { LastSection } from "@/components/ui/Last";
import { useHandleScroll } from "@/components/utils/HandleScroll";

const ContactPage = () => {
  const targetRef = useRef(null);
  const handleScroll = useHandleScroll();

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-25%", "80%"]);

  return (
    <div ref={targetRef} className="mx-auto relative">
      <div id="contact">
        <Header title={"Contact"} />
      </div>

      <div className="relative mt-8 flex justify-end">
        <Image
          src={IMAGES.imgProfile}
          alt={"Contact Image"}
          height={500}
          className="object-cover w-[75vw] filter brightness-70"
        />

        <div className="absolute py-36 px-28 w-[60%] -translate-[25%] translate-y-[75%] bg-neutral-900 shadow-2xl">
          <Form />
        </div>
      </div>

      <VerticalText text="Get in Touch" y={y} className="text-white" />

      <div className="h-[100vh]"></div>

      <LastSection onScrollClick={handleScroll} idToScroll="contact" />
    </div>
  );
};

export default ContactPage;
