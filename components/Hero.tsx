import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
import BackgroundCircles from "./BackgroundCircles";

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  const [text, count] = useTypewriter({
    words: [pageInfo.title1, pageInfo.title2, pageInfo.title3],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <motion.div
        initial={{
          scale: 0.8,
          opacity: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative rounded-full h-28 w-28 md:h-32 md:w-32 top-3 md:top-1 mx-auto object-cover"
      >
        <Image
          className="rounded-full"
          objectFit="cover"
          layout="fill"
          src={urlFor(pageInfo.heroImage).url()}
          alt=" "
        />
      </motion.div>

      <div className="z-20">
        <h2 className="text-xs md:text-sm uppercase text-gray-500 pb-3 tracking-[3px] md:tracking-[10px]">
          {pageInfo.role}
        </h2>
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-semibold px-4 md:px-10">
          <span className="md:mr-2">{text}</span>
          <Cursor cursorColor="#d6ff41" />
        </h1>
        <div className="pt-3 md:pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
