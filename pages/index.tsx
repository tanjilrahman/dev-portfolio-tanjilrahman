import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import Certificates from "../components/Certificates";
import {
  Certificate,
  Experience,
  PageInfo,
  Project,
  Skill,
  Social,
} from "../typings";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useInView } from "react-intersection-observer";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { fetchCertificates } from "../utils/fetchCertificates";

type Props = {
  pageInfo: PageInfo;
  certificates: Certificate[];
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({
  pageInfo,
  certificates,
  experiences,
  skills,
  projects,
  socials,
}: Props) => {
  const route = useRouter();
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5,
  });

  const next = () => {
    const num =
      +(route.asPath.match(/\d+/) ? route.asPath.match(/\d+/)![0] : -2) + 1;

    if (num == -1) {
      return 2;
    } else if (num > projects.length) {
      return projects.length;
    } else {
      return num;
    }
  };
  const previous = () => {
    const num =
      +(route.asPath.match(/\d+/) ? route.asPath.match(/\d+/)![0] : 0) - 1;

    if (num < 1) {
      return 1;
    } else {
      return num;
    }
  };

  useEffect(() => {
    console.log(
      route.asPath.match(/\d+/) ? route.asPath.match(/\d+/)![0] : null,
      route.asPath
    );
  }, [route.asPath]);

  return (
    <div className="bg-secondary text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 overflow-x-hidden md:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-primary/80">
      <Head>
        <title>{`${pageInfo.name} - Portfolio`}</title>
        <meta
          name="description"
          content="Hi, I’m Tanjil Rahman working as a software engineer for the last 4 years in web technologies 💻. I have extensive experience with technologies such as NextJS, ReactJS, TailwindCSS, Firebase, Strapi, Sanity, and NodeJS, as well as a strong foundation in the REST API."
        ></meta>
      </Head>

      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="certificate" className="snap-center">
        <Certificates certificates={certificates} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section ref={ref} id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe pageInfo={pageInfo} />
      </section>

      <footer className="sticky bottom-[105px] md:bottom-8 w-full">
        <div className="relative">
          <div className="flex items-center justify-center">
            <Link href="#hero">
              <div className="h-7 w-7 lg:h-8 lg:w-8 relative">
                <svg
                  className={`${
                    inView ? "fill-secondary 2xl:fill-primary" : "fill-primary "
                  } md:hover:fill-white transition-all duration-200 cursor-crosshair`}
                  version="1.2"
                  baseProfile="tiny"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 1080 1080"
                >
                  <path
                    d="M454.1,1079.3H320.1V641.7H44.3V0h991.2v134.1H178.4v373.6h275.8V1079.3z M1035.5,527.7
	c0-151-122.9-273.9-273.9-273.9H296.2v134.1h465.4c77.1,0,139.8,62.7,139.8,139.8s-62.7,139.8-139.8,139.8H558.1l318.1,411.8h158.7
	L811.5,797C938.8,773.4,1035.5,661.6,1035.5,527.7z"
                  />
                </svg>
              </div>
            </Link>
          </div>
          <div
            className={`${
              !inView && "invisible opacity-0"
            } transition-all duration-200 md:hidden`}
          >
            <div className="absolute -top-2 -left-12 flex items-center font-bold bg-secondary py-1 px-1 rounded-full mx-auto">
              <Link href={`#CaseStudy${previous()}`}>
                <div className="flex items-center rounded-full py-1 px-2 pl-16 bg-secondary text-primary hover:text-secondary hover:bg-primary transition-all duration-200 ease-in-out cursor-pointer select-none">
                  <ArrowLeftIcon className="w-6 h-6 mr-2" />
                </div>
              </Link>
            </div>
            <div className="absolute -top-2 -right-12 flex items-center font-bold bg-secondary py-1 px-1 rounded-full mx-auto">
              <Link href={`#CaseStudy${next()}`}>
                <div className="flex items-center rounded-full py-1 px-2 pr-16 bg-secondary text-primary hover:text-secondary hover:bg-primary transition-all duration-200 ease-in-out cursor-pointer select-none">
                  <ArrowRightIcon className="w-6 h-6 ml-2" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <ToastContainer />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const certificates: Certificate[] = await fetchCertificates();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      certificates,
      experiences,
      skills,
      projects,
      socials,
    },

    revalidate: 60,
  };
};
