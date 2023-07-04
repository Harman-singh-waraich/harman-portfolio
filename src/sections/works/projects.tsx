import * as React from "react";
import { ProjectCard } from "../../components/projectCard";
import { Project } from "@/types";
import { projects, smallProjects } from "@/assets/data";

export default function Projects() {
  return (
    <div id="projects" className="min-h-fit py-28 min-w-full">
      <div className="flex  flex-col relative min">
        <div>
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
        <div className="text-sm md:text-base text-white py-3">
          {"What i've made?"}
        </div>

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
