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
    <article className="flex flex-col items-center space-y-4 md:space-y-7 flex-shrink-0 md:flex-1 w-screen md:w-[600px] xl:w-[900px] snap-center text-secondary bg-primary py-8 px-6 md:px-16 md:py-14 hover:opacity-100 transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative w-20 h-20 md:w-36 md:h-36"
      >
        <Image
          className="rounded-full object-cover object-center"
          layout="fill"
          objectFit="cover"
          src={urlFor(experience.companyImage).url()}
          alt=" "
        />
      </motion.div>

      <div>
        <div className="space-y-2">
          <div className="space-y-2">
            <h4 className="text-2xl md:text-4xl font-light">
              {experience.jobTitle}
            </h4>
            <p className="font-bold text-xl md:text-2xl mt-1">
              {experience.company}
            </p>
          </div>

          <div className="inline-block">
            <div className="flex space-x-2 my-2 bg-secondary py-2 md:py-3 px-4 rounded-full">
              {experience.technologies.map((technology) => (
                <div
                  key={technology._id}
                  className="h-8 w-8 md:h-10 md:w-10 relative text-opacity-5"
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
          </div>
        </div>

        <p className="uppercase py-5 text-secondary text-sm md:text-base">
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
