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
    <article className="flex flex-col items-center space-y-3 2xl:space-y-7 flex-shrink-0 2xl:flex-1 w-screen md:w-2/3 snap-center text-secondary bg-primary py-6 px-6 lg:px-8 2xl:p-12 2xl:py-10 hover:opacity-100 transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative w-20 h-20 lg:w-24 lg:h-24 2xl:w-36 2xl:h-36"
      >
        <Image
          className="object-cover rounded-full object-center"
          layout="fill"
          objectFit="cover"
          src={urlFor(experience.companyImage).url()}
          alt=" "
        />
      </motion.div>

      <div className="w-full">
        <div className="lg:space-y-2">
          <div className=" lg:space-y-2">
            <h4 className="text-lg md:text-xl lg:text-2xl 2xl:text-4xl md:font-light">
              {experience.jobTitle}
            </h4>
            <p className="font-extrabold text-lg lg:text-xl 2xl:text-2xl">
              {experience.company}
            </p>
          </div>

          {experience.technologies && (
            <div className="inline-block">
              <div className="flex space-x-1 md:space-x-2 my-2 bg-secondary py-1 px-3 md:py-3 md:px-4 rounded-full">
                {experience.technologies?.map((technology) => (
                  <div
                    key={technology._id}
                    className="h-7 w-7 md:h-5 md:w-5 lg:h-7 lg:w-7 2xl:h-10 2xl:w-10 relative text-opacity-5"
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
          )}
        </div>

        <div className="flex items-center space-x-2">
          <p className="uppercase py-2 xl:py-4 text-secondary text-xs lg:text-base">
            {new Date(experience.dateStarted).toDateString()} -{" "}
            {experience.isCurrentlyWorkingHere
              ? "Present"
              : new Date(experience.dateEnded).toDateString()}
          </p>
        </div>

        <ul className="list-disc space-y-2 md:space-y-3 ml-5 text-sm lg:text-lg">
          {experience.points?.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
