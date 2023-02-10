import { Certificate } from "../typings";

export const fetchCertificates = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getCertificates`
  );

  const data = await res.json();
  const certificates: Certificate[] = data.certificates;

  return certificates;
};
