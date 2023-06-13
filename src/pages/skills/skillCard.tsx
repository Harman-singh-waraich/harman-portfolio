import { Skill } from "@/interfaces";

export const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <div className="w-64 border border-white flex flex-col justify-start items-center mr-4 mt-4">
      <div className="text-white text-xl"> {skill.field}</div>
      <div className="min-w-full h-0.1  bg-white "></div>
      {skill.technologies.map((technology: string) => (
        <div className="text-gray-400 text-xl ">{technology}</div>
      ))}
    </div>
  );
};
