import React from "react";
import { motion } from "framer-motion";
import CertificateCard from "./CertificateCard";
import { Certificate } from "../typings";

type Props = {
  certificates: Certificate[];
};

const Certificates = ({ certificates }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 md:top-20 2xl:top-24 -mr-4 uppercase tracking-[20px] text-gray-500 md:text-lg lg:text-2xl">
        Certificates
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll mt-3 md:mt-14 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-secondary/80 ">
        {certificates.map((certificate) => (
          <CertificateCard key={certificate._id} certificate={certificate} />
        ))}
      </div>
    </motion.div>
  );
};

export default Certificates;
