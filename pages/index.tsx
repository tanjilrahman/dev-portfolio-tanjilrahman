import type { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useInView } from "react-intersection-observer";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5,
  });

  return (
    <div className="bg-secondary text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 overflow-x-hidden md:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-primary/80">
      <Head>
        <title>{`${pageInfo.name} - Portfolio`}</title>
      </Head>

      <Header socials={socials} />

      <section id="hero" className=" snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className=" snap-center">
        <About pageInfo={pageInfo} />
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

      <footer className="sticky bottom-[85px] md:bottom-8 w-full">
        <div className="flex items-center justify-center">
          <Link href="#hero">
            <div className="h-8 w-8 relative">
              <svg
                className={`${
                  inView
                    ? "fill-secondary md:fill-primary"
                    : "fill-primary cursor-crosshair"
                } hover:fill-white`}
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
      </footer>
      <ToastContainer />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },

    revalidate: 60,
  };
};
