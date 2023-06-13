import * as React from "react";
import { SkillCard } from "./skillCard";
import { Skill } from "@/interfaces";
import Line from "@/components/Line";

export function Skills() {
  const skills = [
    {
      field: "Frameworks",
      technologies: [
        "React.js",
        "Next",
        "Express",
        "Ethereum",
        "Kafka",
        "Hardhat",
      ],
    },
    {
      field: "Tools",
      technologies: ["Git", "Postman", "NGINX", "Truffle", "Ganache", "Remix"],
    },
    {
      field: "Languages",
      technologies: [
        "C++",
        "Javascript",
        "Python",
        "Solidity",
        "Typescript",
        "Rust",
      ],
    },
    {
      field: "Databases",
      technologies: ["Mongodb"],
    },
    {
      field: "Others",
      technologies: ["HTML", "CSS", "Node.js", "REST"],
    },
  ];
  return (
    <div id="skills" className="min-h-screen py-28 min-w-full">
      <div className="flex  flex-col relative min">
        <div>
          <span
            className="text-3xl font-bold "
            style={{
              color: "#C778DE",
            }}
          >
            /
          </span>
          <span className="text-3xl font-bold text-white">skills</span>
        </div>
        <div className="text-base text-white py-3"> What im good at?</div>
        {/* content */}
        <div className="flex  flex-row justify-between align-middle items-start flex-wrap mt-10">
          {skills.map((skill: Skill) => (
            <SkillCard skill={skill} />
          ))}
          <div className=" w-2/12 h-2/12 self-end ">
            <Line />
          </div>
        </div>
      </div>
    </div>
  );
}
