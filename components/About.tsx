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
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-4 md:px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 -mr-4 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        About
      </h3>

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
        className="-mb-32 md:mb-0 flex-shrink-0 w-48 h-48 md:w-64 md:h-96 xl:w-[400px] xl:h-[500px] relative"
      >
        <Image
          src={urlFor(pageInfo.profilePic).url()}
          layout="fill"
          objectFit="cover"
          alt=""
          className="rounded-full md:rounded-lg"
        />
      </motion.div>

      <div className="space-y-5 md:space-y-10 px-0 md:px-16">
        <h4 className="text-2xl md:text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-primary/50">little</span>{" "}
          background
        </h4>
        <p className="text-base md:text-lg md:leading-loose">
          {pageInfo.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
};

export default About;
