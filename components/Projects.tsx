import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 -mr-4 uppercase tracking-[20px] text-gray-500 md:text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-hidden snap-x snap-mandatory z-20  scrollbar-none scrollbar-track-gray-400/20 scrollbar-thumb-secondary/80">
        {projects.map((project, i) => (
          <div key={project._id} id={`CaseStudy${(i + 1).toString()}`}>
            <div className="w-screen text-secondary flex-shrink-0 snap-center flex flex-col md:flex-row space-y-4 md:space-y-0 items-center justify-center p-6 md:p-20 lg:p-44 h-screen">
              <h3 className="xl:hidden uppercase absolute top-36 w-full text-center tracking-[3px] text-gray-500 text-xs md:text-sm">
                Case Study {i + 1} of {projects.length}
              </h3>
              <div className="text-center space-y-3">
                <motion.div
                  initial={{
                    y: -90,
                    opacity: 0,
                  }}
                  transition={{ duration: 1.2 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  className="relative w-[90vw] h-48 md:w-[400px] md:h-[250px] lg:w-[500px] lg:h-[300px] xl:w-[750px] xl:h-[450px] md:mt-4"
                >
                  <Image
                    src={urlFor(project.image).url()}
                    alt=""
                    layout="fill"
                    objectFit="contain"
                  />
                </motion.div>

                <div className="space-x-4 items-center flex justify-center">
                  <div className="inline-block group">
                    <div className="flex items-center font-bold bg-secondary py-1 px-1 md:py-2 md:px-2 rounded-full mx-auto text-sm md:text-lg select-none">
                      <Link href={project.linkToBuild || "/"} passHref>
                        <a target="_blank" rel="noopener noreferrer">
                          <div className="rounded-full py-2 px-4 md:px-6 md:py-3 bg-primary text-secondary hover:text-primary hover:ring-1 md:hover:ring-2 hover:ring-primary group-hover:text-primary group-hover:bg-secondary transition-all duration-200 ease-in-out cursor-pointer select-none">
                            Live Demo
                          </div>
                        </a>
                      </Link>
                      {project.gitHubRepo ? (
                        <Link
                          href={
                            project.gitHubRepo ||
                            "https://github.com/tanjilrahman"
                          }
                          passHref
                        >
                          <a target="_blank" rel="noopener noreferrer">
                            <div className="rounded-full py-2 px-4 md:px-6 md:py-3 text-white hover:bg-primary hover:text-secondary transition-all duration-200 ease-in-out cursor-pointer select-none">
                              GitHub Repo
                            </div>
                          </a>
                        </Link>
                      ) : (
                        <div
                          onClick={() => {
                            toast.info("Repository is set to private.", {
                              position: "top-center",
                              autoClose: 4000,
                              hideProgressBar: true,
                              theme: "colored",
                              style: {
                                backgroundColor: "#d6ff41",
                                color: "#171717",
                              },
                              progress: undefined,
                            });
                          }}
                          className="rounded-full py-2 px-3 md:px-6 md:py-3 text-white hover:bg-primary hover:text-secondary transition-all duration-200 ease-in-out cursor-pointer select-none"
                        >
                          GitHub Repo
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="hidden md:inline-block group">
                    <div className="flex items-center font-bold bg-secondary py-2 px-2 rounded-full mx-auto md:text-lg">
                      <Link href={`#CaseStudy${i + 2}`}>
                        <div
                          className={`${
                            projects.length == i + 1
                              ? "hidden"
                              : "flex items-center rounded-full px-6 py-3 bg-primary text-secondary hover:text-primary hover:ring-2 hover:ring-primary group-hover:text-primary group-hover:bg-secondary transition-all duration-200 ease-in-out cursor-pointer select-none"
                          }`}
                        >
                          Next <ArrowRightIcon className="w-6 h-6 ml-2" />
                        </div>
                      </Link>
                      <Link href={`#CaseStudy${i}`}>
                        <div
                          className={`${
                            i == 0
                              ? "hidden"
                              : "flex items-center rounded-full px-6 py-3 text-white hover:bg-primary hover:text-secondary transition-all duration-200 ease-in-out cursor-pointer select-none"
                          }`}
                        >
                          <ArrowLeftIcon className="w-6 h-6 mr-2" /> Previous
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: false }}
                className="space-y-3 md:space-y-4 px-0 md:px-4 xl:px-24 max-w-6xl"
              >
                <div className="flex space-x-2 justify-center">
                  {project.technologies.map((technology) => (
                    <div
                      key={technology._id}
                      className="h-8 w-8 md:h-14 md:w-14 relative"
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
                <div className="space-y-1 md:space-y-4 ">
                  <h4 className="text-xl md:text-4xl font-bold text-center">
                    <span className="hidden xl:inline-block underline decoration-secondary/30">
                      Case Study {i + 1} of {projects.length}:
                    </span>{" "}
                    {project.title}
                  </h4>

                  <p className="text-center text-sm md:font-medium md:text-xl mx-auto">
                    {project.summary}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>

      <motion.div
        initial={{ y: 300, skewY: -12 }}
        whileInView={{ y: 0, skewY: -12 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full absolute top-[33%] md:top-[22%] bg-primary left-0 h-[700px] md:h-[600px]"
      />
    </div>
  );
};

export default Projects;
