import React from "react";
import Header from "@/components/ui/Header";
const AboutPage = () => {
  return (
    <div className="">
      <Header title={"About"} />

      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg text-gray-700">
        This is the about page for our Next.js application. We are using a
        structured file system to keep everything organized and scalable.
      </p>
    </div>
  );
};

export default AboutPage;
