import { Experience } from "../typings";

export const fetchExperiences = async () => {
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_BASE_URL || "https://portfolio-yt-2-0.vercel.app/"
    }/api/getExperience`
  );

  const data = await res.json();
  const experiences: Experience[] = data.experiences;

  return experiences;
};
