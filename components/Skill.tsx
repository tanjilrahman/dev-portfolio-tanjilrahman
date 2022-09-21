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
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          y: directionLeft ? -90 : 90,
          opacity: 1,
        }}
        transition={{ duration: 0.7 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-full border border-gray-500 w-[72px] h-[72px] md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out relative"
      >
        <Image
          src={urlFor(skill.image).url()}
          alt=" "
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </motion.div>

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-[72px] w-[72px] md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl md:text-3xl font-bold text-black opacity-100 select-none">
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;