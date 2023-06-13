import { Skill } from "@/interfaces";

export const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <div className=" w-40 md:w-64 border border-white flex flex-col justify-start items-center md:mr-4 mt-4">
      <div className="text-white text-base md:text-xl"> {skill.field}</div>
      <div className="min-w-full h-0.1  bg-white "></div>
      <div className=" flex flex-wrap">
        {skill.technologies.map((technology: string) => (
          <div className="text-gray-400 text-sm md:text-xl px-2 ">
            {technology}
          </div>
        ))}
      </div>
    </div>
  );
};
