import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import { use100vh } from "react-div-100vh";
import Image from "next/image";
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

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin md:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-primary/80">
        {projects.map((project, i) => (
          <div key={project._id}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="w-screen text-secondary flex-shrink-0 snap-center flex flex-col md:flex-row space-y-4 md:space-y-0 items-center justify-center p-6 md:p-20 lg:p-44 h-screen"
            >
              <h3 className="uppercase absolute top-36 w-full text-center tracking-[3px] text-gray-500 text-xs md:text-sm">
                Case Study {i + 1} of {projects.length}:
              </h3>
              <div className="text-center space-y-3">
                <motion.div
                  initial={{
                    y: -90,
                    opacity: 0,
                  }}
                  transition={{ duration: 1.2 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative w-96 h-48 md:w-[750px] md:h-[450px] md:mt-4"
                >
                  <Image
                    src={urlFor(project.image).url()}
                    alt=""
                    layout="fill"
                    objectFit="contain"
                  />
                </motion.div>

                <div className="inline-block group">
                  <div className="flex items-center font-bold bg-secondary py-1 px-1 md:py-2 md:px-2 rounded-full mx-auto md:text-lg">
                    <Link href={project.linkToBuild || "/"} passHref>
                      <a target="_blank" rel="noopener noreferrer">
                        <div className="rounded-full py-2 px-4 md:px-6 md:py-3 bg-primary text-secondary hover:text-primary hover:ring-1 md:hover:ring-2 hover:ring-primary group-hover:text-primary group-hover:bg-secondary transition-all duration-200 ease-in-out cursor-pointer">
                          Live Demo
                        </div>
                      </a>
                    </Link>
                    <Link
                      href={
                        project.gitHubRepo || "https://github.com/tanjilrahman"
                      }
                      passHref
                    >
                      <a target="_blank" rel="noopener noreferrer">
                        <div className="rounded-full py-2 px-4 md:px-6 md:py-3 text-white hover:bg-primary hover:text-secondary transition-all duration-200 ease-in-out cursor-pointer">
                          GitHub Repo
                        </div>{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="space-y-2 md:space-y-3 px-0 md:px-16 max-w-6xl">
                <div className="flex space-x-2 justify-center">
                  {project.technologies.map((technology) => (
                    <div
                      key={technology._id}
                      className="h-10 w-10 md:h-14 md:w-14 relative"
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
                <div className="space-y-2 md:space-y-4 ">
                  <h4 className="text-2xl md:text-4xl font-semibold text-center">
                    {project.title}
                  </h4>

                  <p className="text-center text-base md:font-medium md:text-xl mx-auto">
                    {project.summary}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] md:top-[22%] bg-primary left-0 h-[470px] md:h-[600px] -skew-y-12" />
    </div>
  );
};

export default Projects;
