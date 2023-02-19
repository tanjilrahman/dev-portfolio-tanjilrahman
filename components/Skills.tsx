import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../typings";

type Props = {
  skills: SkillType[];
};

const Skills = ({ skills }: Props) => {
  return (
    <motion.div className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 md:top-20 2xl:top-24 -mr-4 uppercase tracking-[20px] text-gray-500 md:text-lg lg:text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 md:top-32 2xl:top-36 uppercase tracking-[3px] text-gray-500 text-xs lg:text-sm">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-4 gap-4 md:gap-5 md:pt-10">
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
