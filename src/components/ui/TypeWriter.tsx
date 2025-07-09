"use client";

import Typewriter from "typewriter-effect";

const TEXTS_TO_TYPE = [
  "Developer",
  "Traveller",
  "Researcher",
  "Part of Digistar",
  "Cloud Computing",
];

const TypeWriter = () => {
  return (
    <Typewriter
      options={{
        strings: TEXTS_TO_TYPE,
        autoStart: true,
        loop: true,
        delay: 100,
        deleteSpeed: 75,
        // cursor: "",
      }}
    />
  );
};

export default TypeWriter;
