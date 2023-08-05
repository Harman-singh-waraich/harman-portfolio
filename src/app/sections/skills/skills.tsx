import * as React from "react";
import { SkillCard } from "../../../components/skillCard";
import { Skill } from "@/types";
import Line from "@/components/Line";
import { achievements, skills } from "@/assets/data";

export default function Skills() {
  return (
    <div id="skills" className="min-h-screen py-28 min-w-full">
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
            skills
          </span>
        </div>
        <div className="text-sm md:text-base text-white py-1 md:py-3">
          What im good at?
        </div>
        {/* content */}
        <div className="flex  flex-row justify-between  items-start gap-1 flex-wrap my-4 lg:mt-10">
          {skills.map((skill: Skill, index: number) => (
            <SkillCard skill={skill} key={index} />
          ))}
          <div className=" w-2/12 h-2/12 self-end ">
            <Line />
          </div>
        </div>
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
