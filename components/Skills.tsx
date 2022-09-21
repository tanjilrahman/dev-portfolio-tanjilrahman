import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../typings";
import { use100vh } from "react-div-100vh";

type Props = {
  skills: SkillType[];
};

const Skills = ({ skills }: Props) => {
  const height = use100vh();

  return (
    <motion.div
      style={{ height: height || "100vh" }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 -mr-4 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-xs md:text-sm">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-4 gap-5">
        {skills.map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
        {/* {skills.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}

        {skills.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft />
        ))} */}
      </div>
    </motion.div>
  );
};

export default Skills;