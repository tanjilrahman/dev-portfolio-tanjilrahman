import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-6 md:px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 md:top-20 2xl:top-24 -mr-4 uppercase tracking-[20px] text-gray-500 md:text-lg lg:text-2xl">
        About
      </h3>

      <div className="flex flex-col md:flex-row items-center space-y-40 md:space-y-0">
        <div className="relative md:ml-10">
          <motion.div
            initial={{
              x: -200,
              opacity: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="-mb-32 md:mb-0 flex-shrink-0 w-36 h-36 md:w-52 md:h-72 lg:w-64 lg:h-96 2xl:w-[400px] 2xl:h-[500px] relative z-20"
          >
            <Image
              src={urlFor(pageInfo.profilePic).url()}
              layout="fill"
              objectFit="cover"
              alt=" "
              className="rounded-full md:rounded-none"
            />
          </motion.div>
          <motion.div
            initial={{
              scale: 0.5,
              opacity: 0,
            }}
            transition={{
              delay: 0.8,
              duration: 1.2,
            }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute -top-2 -left-2 rounded-full md:rounded-none md:top-6 md:-left-6 lg:top-8 lg:-left-8 2xl:top-10 2xl:-left-10 z-10 w-40 h-40 md:w-52 md:h-72 lg:w-64 lg:h-96 2xl:w-[400px] 2xl:h-[500px] bg-primary"
          />
        </div>

        <div className="space-y-2 md:space-y-4 lg:space-y-8 2xl:space-y-10 pl-0 md:pl-14 lg:pl-16 2xl:pl-20">
          <h1 className="text-2xl md:text-5xl lg:text-6xl 2xl:text-7xl font-extrabold uppercase">
            Here is a{" "}
            <span className="underline decoration-primary/50">little</span>{" "}
            background
          </h1>
          <p className="text-sm lg:text-base 2xl:text-lg leading-normal  lg:leading-loose 2xl:leading-loose">
            {pageInfo.backgroundInformation}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
