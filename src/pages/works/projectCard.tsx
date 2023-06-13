import { Project } from "@/interfaces";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className=" w-80 border border-white flex flex-col justify-start items-start">
      <img className="cover object-contain" src={project.thumbnail} />
      <div className="min-w-full h-0.1  bg-white "></div>
      <div className="text-gray-400 text-lg px-2 py-1">{project.techstack}</div>
      <div className="min-w-full h-0.1  bg-white "></div>
      <div className="text-white text-2xl px-2 py-2"> {project.title}</div>
      <div className="text-gray-400 text-lg px-2">{project.description}</div>
      <a href={project.liveLink} target="_blank" rel="noreferrer">
        <button className="border border-pink-400 p-1 text-white hover:scale-105  hover:bg-pink-400 hover:bg-opacity-10 transition-colors m-2">
          {"Live <~>"}
        </button>
      </a>
    </div>
  );
};
