import * as React from "react";
import { ProjectCard } from "./projectCard";
import { Project } from "@/interfaces";

export function Projects() {
  const projects: Project[] = [
    {
      title: "Docthereum",
      thumbnail: "images/docthereum.png",
      description: "A medical app",
      techstack: "React Ethereum",
      liveLink: "https://docthereum.web.app/",
      repo: "https://docthereum.web.app/",
    },
    {
      title: "Docthereum",
      thumbnail: "images/docthereum.png",
      description: "A medical app",
      techstack: "React Ethereum",
      liveLink: "https://docthereum.web.app/",
      repo: "https://docthereum.web.app/",
    },
    {
      title: "Docthereum",
      thumbnail: "images/docthereum.png",
      description: "A medical app",
      techstack: "React Ethereum",
      liveLink: "https://docthereum.web.app/",
      repo: "https://docthereum.web.app/",
    },

    {
      title: "Docthereum",
      thumbnail: "images/docthereum.png",
      description: "A medical app",
      techstack: "React Ethereum",
      liveLink: "https://docthereum.web.app/",
      repo: "https://docthereum.web.app/",
    },
    {
      title: "Docthereum",
      thumbnail: "images/docthereum.png",
      description: "A medical app",
      techstack: "React Ethereum",
      liveLink: "https://docthereum.web.app/",
      repo: "https://docthereum.web.app/",
    },
  ];
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
          {" "}
          What i've made?
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project: Project) => (
            <ProjectCard project={project} />
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
          <div className="grid grid-cols-1 md:grid-cols-3 m-auto gap-8 pt-4">
            {projects.map((project: Project) => (
              <ProjectCard project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
