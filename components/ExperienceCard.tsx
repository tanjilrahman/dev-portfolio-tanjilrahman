import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-4 md:space-y-7 flex-shrink-0 w-screen md:w-[600px] xl:w-[900px] snap-center bg-tertiary py-8 px-6 md:p-20 hover:opacity-100 transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="hidden md:block">
          <Image
            className="rounded-full object-cover object-center"
            width="120px"
            height="120px"
            src={urlFor(experience.companyImage).url()}
            alt=" "
          />
        </div>
        <div className="md:hidden">
          <Image
            className="rounded-full object-cover object-center"
            width="90px"
            height="90px"
            src={urlFor(experience.companyImage).url()}
            alt=" "
          />
        </div>
      </motion.div>

      <div>
        <h4 className="text-2xl md:text-4xl font-light">
          {experience.jobTitle}
        </h4>
        <p className="font-bold text-xl md:text-2xl mt-1">
          {experience.company}
        </p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <div
              key={technology._id}
              className="h-8 w-8 md:h-10 md:w-10 relative"
            >
              <Image
                layout="fill"
                objectFit="cover"
                className="rounded-full"
                src={urlFor(technology.image).url()}
                alt=" "
              />
            </div>
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300 text-sm md:text-base">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul className="list-disc space-y-2 md:space-y-4 ml-5 text-base md:text-lg">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
