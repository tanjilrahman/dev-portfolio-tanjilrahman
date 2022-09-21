import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import { use100vh } from "react-div-100vh";
import Image from "next/image";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  const height = use100vh();
  return (
    <div
      style={{ height: height || "100vh" }}
      className="relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 -mr-4 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Projects
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-xs md:text-sm">
        Click to preview the build
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin md:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-primary/80">
        {projects.map((project, i) => (
          <div key={project._id}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-3 md:space-y-5 items-center justify-center p-6 md:p-20 lg:p-44 h-screen"
            >
              <motion.div
                initial={{
                  y: -90,
                  opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative w-96 h-48 md:w-[600px] md:h-[350px] md:mt-4 cursor-pointer"
              >
                <Link href={project.linkToBuild || "/"} passHref>
                  <a target="_blank" rel="noopener noreferrer">
                    <Image
                      src={urlFor(project.image).url()}
                      alt=""
                      layout="fill"
                      objectFit="contain"
                    />{" "}
                  </a>
                </Link>
              </motion.div>
              <div className="flex justify-center space-x-2 my-2">
                {project.technologies.map((technology) => (
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
              <div className="space-y-4 md:space-y-8 px-0 md:px-10 max-w-6xl">
                <h4 className="text-2xl md:text-4xl font-semibold text-center">
                  <span className="underline decoration-primary/50">
                    Case Study {i + 1} of {projects.length}:
                  </span>{" "}
                  <Link href={project.linkToBuild || "/"} passHref>
                    <a target="_blank" rel="noopener noreferrer">
                      <span className="hover:underline cursor-pointer">
                        {project.title}
                        <ArrowTopRightOnSquareIcon className="text-white h-6 w-6 md:h-7 md:w-7 animate-pulse inline-block ml-2 mb-1" />
                      </span>
                    </a>
                  </Link>
                </h4>

                <p className="text-center text-base md:text-lg">
                  {project.summary}
                </p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-primary/10 left-0 h-[500px] -skew-y-12" />
    </div>
  );
};

export default Projects;
