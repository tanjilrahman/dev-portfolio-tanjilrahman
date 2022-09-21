import { PageInfo } from "../typings";

export const fetchPageInfo = async () => {
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_BASE_URL || "https://portfolio-yt-2-0.vercel.app/"
    }/api/getPageInfo`
  );

  const data = await res.json();
  const pageInfo: PageInfo = data.pageInfo;

  return pageInfo;
};
