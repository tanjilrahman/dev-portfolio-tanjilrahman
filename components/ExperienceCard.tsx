import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";
import Link from "next/link";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="flex flex-col items-center space-y-3 md:space-y-7 flex-shrink-0 md:flex-1 w-screen md:w-[600px] xl:w-[900px] snap-center text-secondary bg-primary py-6 px-6 md:p-12 md:py-10 hover:opacity-100 transition-opacity duration-200 overflow-hidden">
      {!experience.isCertificate && (
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
            className="object-cover rounded-full object-center"
            layout="fill"
            objectFit="cover"
            src={urlFor(experience.companyImage).url()}
            alt=" "
          />
        </motion.div>
      )}

      {experience.isCertificate && (
        <motion.div
          initial={{
            y: -100,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-36 h-28 md:w-52 md:h-40"
        >
          <Image
            className="object-cover object-center"
            layout="fill"
            objectFit="cover"
            src={urlFor(experience.companyImage).url()}
            alt=" "
          />
        </motion.div>
      )}

      <div>
        <div className="md:space-y-2">
          <div className=" md:space-y-2">
            <h4 className="text-lg md:text-4xl md:font-light">
              {experience.jobTitle}
            </h4>
            <p className="font-extrabold text-lg md:text-2xl">
              {experience.company}
            </p>
          </div>

          {experience.technologies && (
            <div className="inline-block">
              <div className="flex space-x-1 md:space-x-2 my-2 bg-secondary py-1 px-3 md:py-3 md:px-4 rounded-full">
                {experience.technologies?.map((technology) => (
                  <div
                    key={technology._id}
                    className="h-7 w-7 md:h-10 md:w-10 relative text-opacity-5"
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
          {experience.certificateLink && (
            <Link href={experience.certificateLink} passHref>
              <a target="_blank" rel="noopener noreferrer">
                <p className="font-semibold italic bg-secondary py-2 px-4 my-2 rounded-full text-primary text-xs md:text-sm">
                  View Certificate
                </p>
              </a>
            </Link>
          )}
          <p className="uppercase py-2 md:py-4 text-secondary text-xs md:text-base">
            {experience.dateStarted &&
              new Date(experience.dateStarted).toDateString()}{" "}
            -{" "}
            {experience.isCurrentlyWorkingHere
              ? "Present"
              : new Date(experience.dateEnded).toDateString()}
          </p>
        </div>

        <ul className="list-disc space-y-2 md:space-y-3 ml-5 text-sm md:text-lg">
          {experience.points?.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
