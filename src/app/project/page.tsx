import React from "react";
import Header from "@/components/ui/Header";

const ProjectPage = () => {
  return (
    <div className="mx-auto">
      <Header title={"Projects"} />
      <p className="text-lg text-gray-700">
        Here are some of the projects I have worked on:
      </p>
      <ul className="mt-8 space-y-4">
        <li className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Project One</h2>
          <p className="text-gray-600">Description of project one.</p>
        </li>
        <li className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Project Two</h2>
          <p className="text-gray-600">Description of project two.</p>
        </li>
        <li className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Project Three</h2>
          <p className="text-gray-600">Description of project three.</p>
        </li>
      </ul>
    </div>
  );
};

export default ProjectPage;
