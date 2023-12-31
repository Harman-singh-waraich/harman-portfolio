import { Project } from "@/types";
import Image from "next/image";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="md:w-80 border border-white flex flex-col justify-start items-start">
      <div className="w-full min-h-[160px] relative">
        <Image
          className="object-contain"
          src={project.thumbnail}
          fill={true}
          alt="thumbnail"
        />
      </div>

      {/* techstack */}
      <div className="min-w-full h-0.1  bg-white "></div>
      <div className="text-gray-400 text-sm md:text-base px-2 py-2">
        {project.techstack}
      </div>
      {/* title */}
      <div className="min-w-full h-0.1  bg-white "></div>
      <div className="text-white text-lg md:text-2xl px-2 py-2">
        {" "}
        {project.title}
      </div>

      <div className="text-gray-400 text-sm md:text-base px-2 py-1">
        {project.description}
      </div>

      <div className=" flex flex-row items-center self-baseline py-2">
        {project.liveLink && (
          <a href={project.liveLink} target="_blank" rel="noreferrer">
            <button className="border border-pink-400 p-1 text-white hover:scale-105  hover:bg-pink-400 hover:bg-opacity-10 transition-colors m-2">
              {"Live <~>"}
            </button>
          </a>
        )}
        {project.repo && (
          <a href={project.repo} target="_blank" rel="noreferrer">
            <button className="border border-pink-400 p-1 text-white hover:scale-105  hover:bg-pink-400 hover:bg-opacity-10 transition-colors m-2">
              {"Repo </>"}
            </button>
          </a>
        )}
      </div>
    </div>
  );
};
