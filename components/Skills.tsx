import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../typings";

type Props = {
  skills: SkillType[];
};

const Skills = ({ skills }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center"
    >
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-24 md:top-8 -mr-4 uppercase tracking-[20px] text-gray-500 md:text-lg lg:text-2xl"
      >
        Skills
      </motion.h3>

      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-36 md:top-16 lg:top-20 uppercase tracking-[3px] text-gray-500 text-xs lg:text-sm"
      >
        Hover over a skill for current proficiency
      </motion.h3>

      <div className="grid grid-cols-4 md:grid-cols-6 2xl:grid-cols-4 gap-4 md:gap-5">
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
