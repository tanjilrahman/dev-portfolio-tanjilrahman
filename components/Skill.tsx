import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

const Skill = ({ directionLeft, skill }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="group relative flex cursor-pointer"
    >
      <motion.div
        initial={{
          y: 90,
          opacity: 1,
        }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-full border border-primary/50 w-[60px] h-[60px] md:w-14 md:h-14 lg:w-20 lg:h-20 2xl:w-28 2xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out relative"
      >
        <Image
          src={urlFor(skill.image).url()}
          alt=" "
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </motion.div>

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-primary  h-[60px] w-[60px] md:w-14 md:h-14 lg:w-20 lg:h-20 2xl:w-28 2xl:h-28 rounded-full z-0">
        <div className="flex flex-col items-center justify-center h-full text-center">
          <p className="text-lg md:text-base lg:text-xl 2xl:text-3xl font-bold text-black opacity-100 select-none">
            {skill.progress}%
          </p>
          <p className="text-xs 2xl:text-base font-medium text-black opacity-100 select-none">
            {skill.title}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Skill;
