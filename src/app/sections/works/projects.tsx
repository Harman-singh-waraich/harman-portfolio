"use client";
import * as React from "react";
import { ProjectCard } from "../../../components/projectCard";
import { Project } from "@/types";
import { projects, smallProjects } from "@/assets/data";
import { useInView, motion } from "framer-motion";

export default function Projects() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    margin: "0px -100px -50px 0px",
  });
  return (
    <div id="projects" ref={ref} className="min-h-fit py-28 min-w-full">
      <div className="flex  flex-col relative min">
        <div
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <span
            className="text-xl md:text-3xl font-bold "
            style={{
              color: "#C778DE",
            }}
          >
            /
          </span>
          <span className="text-xl md:text-3xl font-bold text-white">
            projects
          </span>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-sm md:text-base text-white py-3"
        >
          {"What i've made?"}
        </motion.div>

        <div className="my-4">
          <span
            className="text-lg md:text-2xl font-bold items-start"
            style={{
              color: "#C778DE",
            }}
          >
            #
          </span>
          <span className="text-lg md:text-xl font-bold text-white">
            complete-apps
          </span>
        </div>
        {/* content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: Project, index: number) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>
        <div className="py-8">
          <span
            className="text-lg md:text-2xl font-bold items-start"
            style={{
              color: "#C778DE",
            }}
          >
            #
          </span>
          <span className="text-lg md:text-xl font-bold text-white">
            small-projects
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-auto gap-8 pt-4">
            {smallProjects.map((project: Project, index: number) => (
              <ProjectCard project={project} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
