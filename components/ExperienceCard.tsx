import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  dayjs.extend(localizedFormat);

  const startDate = dayjs(
    new Date(experience.dateStarted).toDateString()
  ).format("MMM YYYY");
  const endDate = dayjs(new Date(experience.dateEnded).toDateString()).format(
    "MMM YYYY"
  );

  return (
    <article className="flex flex-col items-center flex-shrink-0 w-screen px-6 py-4 space-y-3 overflow-hidden transition-opacity duration-200 2xl:space-y-7 2xl:flex-1 md:w-2/3 snap-center text-secondary bg-primary lg:px-8 2xl:p-12 2xl:py-10 hover:opacity-100">
      <div className="w-full">
        <div className="items-center 2xl:block 2xl:space-x-0 md:flex md:space-x-6 lg:space-x-8">
          {experience.companyImage && (
            <motion.div
              initial={{
                y: -100,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative w-20 h-20 mx-auto mb-4 lg:w-24 lg:h-24 2xl:w-36 2xl:h-36 2xl:mx-auto md:mx-0 md:mb-0 2xl:mb-8"
            >
              <Image
                className="object-cover object-center rounded-full"
                layout="fill"
                objectFit="cover"
                src={urlFor(experience.companyImage).url()}
                alt=" "
              />
            </motion.div>
          )}
          <div className="lg:space-y-2">
            <div className=" lg:space-y-2">
              <h4 className="md:text-xl lg:text-2xl 2xl:text-4xl md:font-light">
                {experience.jobTitle}
              </h4>
              <p className="text-sm font-extrabold lg:text-xl 2xl:text-2xl">
                {experience.company}
              </p>
            </div>

            {experience.technologies && (
              <div className="inline-block">
                <div className="flex px-2 py-[2px] my-1 space-x-1 rounded-full md:space-x-2 lg:my-2 bg-secondary md:py-2 lg:py-3 md:px-3 lg:px-4">
                  {experience.technologies?.map((technology) => (
                    <div
                      key={technology._id}
                      className="relative w-5 h-5 lg:h-6 lg:w-6 2xl:h-8 2xl:w-8 text-opacity-5"
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
        </div>

        <div className="flex items-center space-x-2">
          <p className="uppercase py-1 xl:py-3 text-secondary text-xs font-semibold lg:text-base font-['Helvetica']">
            {startDate} -{" "}
            {experience.isCurrentlyWorkingHere ? "Present" : endDate}
          </p>
        </div>

        <ul className="ml-5 text-sm list-disc md:space-y-1 lg:text-base 2xl:text-lg">
          {experience.points?.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
