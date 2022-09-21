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
      <div className="relative rounded-full h-32 w-32 mx-auto object-cover">
        <Image
          className="rounded-full"
          width="130px"
          height="130px"
          src={urlFor(pageInfo.heroImage).url()}
          alt=" "
        />
      </div>

      {/* <img
        className=" relative rounded-full h-32 w-32 mx-auto object-cover "
        src=" https://cdn.sanity.io/images/ltuexkre/production/a766c574c295f2103c63c2dfdf675557c664d016-600x600.png "
        alt=" "
      /> */}
      <div className="z-20">
        <h2 className="text-xs md:text-sm uppercase text-gray-500 pb-3 tracking-[3px] md:tracking-[10px]">
          {pageInfo.role}
        </h2>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold px-4 md:px-10">
          <span className="md:mr-2">{text}</span>
          <Cursor cursorColor="#0366ff" />
        </h1>
        <div className="pt-5">
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
