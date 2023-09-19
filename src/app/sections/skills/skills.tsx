"use client";
import * as React from "react";
import { SkillCard } from "../../../components/skillCard";
import { Skill } from "@/types";
import Line from "@/components/Line";
import { achievements, skills } from "@/assets/data";
import { inView, motion, stagger, useAnimate, useInView } from "framer-motion";

export default function Skills() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {
    margin: "0px -100px -50px 0px",
  });
  const [scope, animate] = useAnimate();

  React.useEffect(() => {
    animate("div", { opacity: isInView ? 1 : 0 }, { delay: stagger(0.02) });
  }, [isInView, animate]);

  return (
    <div id="skills" ref={ref} className="min-h-screen py-28 min-w-full">
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
            skills
          </span>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-sm md:text-base text-white py-1 md:py-3"
        >
          What im good at?
        </motion.div>
        {/* content */}
        <motion.div
          ref={scope}
          className="flex  flex-row justify-between  items-start gap-1 flex-wrap my-4 lg:mt-10"
        >
          {skills.map((skill: Skill, index: number) => (
            <SkillCard skill={skill} key={index} />
          ))}
          <div className=" w-2/12 h-2/12 self-end ">
            <Line />
          </div>
        </motion.div>
        <div>
          <span
            className="text-xl md:text-3xl font-bold "
            style={{
              color: "#C778DE",
            }}
          >
            #
          </span>
          <span className="text-xl md:text-2xl font-bold text-white">
            achievements
          </span>
        </div>
        <div className="flex flex-row flex-wrap gap-2 mt-4 w-full md:w-2/3">
          {achievements.map((achievement: string, index: number) => (
            <div
              className="border border-white p-1 md:p-2 text-gray-400 text-sm md:text-base"
              key={index}
            >
              {achievement}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
