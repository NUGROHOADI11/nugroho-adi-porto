"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Header from "@/components/ui/Header";
import { LastSection } from "@/components/ui/Last";
import { useHandleScroll } from "@/components/utils/HandleScroll";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.1,
    },
  },
};

const projectVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const projectsData = [
  {
    id: 101,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution built with Next.js and Node.js. Features include user authentication, payment integration, product management, and real-time inventory tracking.",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
    image: "/api/placeholder/600/400",
    link: "https://github.com/example/ecommerce",
    demo: "https://ecommerce-demo.com",
  },
  {
    id: 102,
    title: "Task Management App",
    description:
      "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features. Built with React and Firebase.",
    technologies: ["React", "Firebase", "Material-UI", "Redux", "WebSocket"],
    image: "/api/placeholder/600/400",
    link: "https://github.com/example/taskmanager",
    demo: "https://taskmanager-demo.com",
  },
  {
    id: 103,
    title: "Weather Dashboard",
    description:
      "A responsive weather application that provides detailed forecasts, interactive maps, and weather alerts. Integrated with multiple weather APIs for accurate data.",
    technologies: ["Vue.js", "OpenWeather API", "Chart.js", "Tailwind CSS"],
    image: "/api/placeholder/600/400",
    link: "https://github.com/example/weather",
    demo: "https://weather-demo.com",
  },
  {
    id: 104,
    title: "Social Media Analytics",
    description:
      "An analytics dashboard for social media managers to track engagement, growth metrics, and content performance across multiple platforms.",
    technologies: ["React", "D3.js", "Express.js", "MongoDB", "JWT"],
    image: "/api/placeholder/600/400",
    link: "https://github.com/example/analytics",
    demo: "https://analytics-demo.com",
  },
  {
    id: 105,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution built with Next.js and Node.js. Features include user authentication, payment integration, product management, and real-time inventory tracking.",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
    image: "/api/placeholder/600/400",
    link: "https://github.com/example/ecommerce",
    demo: "https://ecommerce-demo.com",
  },
  {
    id: 106,
    title: "Task Management App",
    description:
      "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features. Built with React and Firebase.",
    technologies: ["React", "Firebase", "Material-UI", "Redux", "WebSocket"],
    image: "/api/placeholder/600/400",
    link: "https://github.com/example/taskmanager",
    demo: "https://taskmanager-demo.com",
  },
  {
    id: 107,
    title: "Weather Dashboard",
    description:
      "A responsive weather application that provides detailed forecasts, interactive maps, and weather alerts. Integrated with multiple weather APIs for accurate data.",
    technologies: ["Vue.js", "OpenWeather API", "Chart.js", "Tailwind CSS"],
    image: "/api/placeholder/600/400",
    link: "https://github.com/example/weather",
    demo: "https://weather-demo.com",
  },
  {
    id: 108,
    title: "Social Media Analytics",
    description:
      "An analytics dashboard for social media managers to track engagement, growth metrics, and content performance across multiple platforms.",
    technologies: ["React", "D3.js", "Express.js", "MongoDB", "JWT"],
    image: "/api/placeholder/600/400",
    link: "https://github.com/example/analytics",
    demo: "https://analytics-demo.com",
  },
  {
    id: 109,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution built with Next.js and Node.js. Features include user authentication, payment integration, product management, and real-time inventory tracking.",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
    image: "/api/placeholder/600/400",
    link: "https://github.com/example/ecommerce",
    demo: "https://ecommerce-demo.com",
  },
  {
    id: 110,
    title: "Task Management App",
    description:
      "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features. Built with React and Firebase.",
    technologies: ["React", "Firebase", "Material-UI", "Redux", "WebSocket"],
    image: "/api/placeholder/600/400",
    link: "https://github.com/example/taskmanager",
    demo: "https://taskmanager-demo.com",
  },
  {
    id: 111,
    title: "Weather Dashboard",
    description:
      "A responsive weather application that provides detailed forecasts, interactive maps, and weather alerts. Integrated with multiple weather APIs for accurate data.",
    technologies: ["Vue.js", "OpenWeather API", "Chart.js", "Tailwind CSS"],
    image: "/api/placeholder/600/400",
    link: "https://github.com/example/weather",
    demo: "https://weather-demo.com",
  },
  {
    id: 112,
    title: "Social Media Analytics",
    description:
      "An analytics dashboard for social media managers to track engagement, growth metrics, and content performance across multiple platforms.",
    technologies: ["React", "D3.js", "Express.js", "MongoDB", "JWT"],
    image: "/api/placeholder/600/400",
    link: "https://github.com/example/analytics",
    demo: "https://analytics-demo.com",
  },
];

const ProjectPage = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const handleScroll = useHandleScroll();

  return (
    <div ref={targetRef} id="projects" className="mx-auto relative">
      <Header title="Projects" />

      <motion.div
        className=" mx-auto px-8 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              className="bg-neutral-900 rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300"
              variants={projectVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                className="relative h-64 overflow-hidden"
                variants={imageVariants}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gray-300 bg-opacity-20 hover:bg-opacity-10 transition-all duration-300" />
              </motion.div>

              <div className="p-8">
                <motion.h3
                  className="text-2xl font-bold text-white mb-4"
                  variants={projectVariants}
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  className="text-gray-300 mb-6 leading-relaxed"
                  variants={projectVariants}
                >
                  {project.description}
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-2 mb-6"
                  variants={projectVariants}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-neutral-800 text-white text-sm rounded-full border border-neutral-700"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>

                <motion.div className="flex gap-4" variants={projectVariants}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200"
                  >
                    View Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 border border-white text-white rounded-lg font-medium hover:bg-white hover:text-black transition-colors duration-200"
                  >
                    Live Demo
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="h-[30vh]"></div>
      <LastSection onScrollClick={handleScroll} idToScroll="projects" />
    </div>
  );
};

export default ProjectPage;
