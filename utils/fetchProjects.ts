import { Project } from "../typings";

export const fetchProjects = async () => {
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_BASE_URL || "https://portfolio-yt-2-0.vercel.app/"
    }/api/getProjects`
  );

  const data = await res.json();
  const projects: Project[] = data.projects;

  return projects;
};
