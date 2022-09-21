import { Skill } from "../typings";

export const fetchSkills = async () => {
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_BASE_URL || "https://portfolio-yt-2-0.vercel.app/"
    }/api/getSkills`
  );

  const data = await res.json();
  const skills: Skill[] = data.skills;

  return skills;
};
