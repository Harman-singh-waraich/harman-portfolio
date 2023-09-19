import { Skill } from "@/types";
import { motion } from "framer-motion";
export const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className=" w-40 lg:w-64 border border-white flex flex-col justify-start items-center lg:mr-4 mt-4"
    >
      <div className="text-white text-base lg:text-xl"> {skill.field}</div>
      <div className="min-w-full h-0.1  bg-white "></div>
      <div className=" flex flex-wrap">
        {skill.technologies.map((technology: string, index: number) => (
          <div className="text-gray-400 text-sm lg:text-xl px-2 " key={index}>
            {technology}
          </div>
        ))}
      </div>
    </motion.div>
  );
};
