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
      transition={{ duration: 2 }}
      className="relative flex flex-col items-center h-screen max-w-full mx-auto overflow-hidden text-left md:flex-row justify-evenly"
    >
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-[72px] md:top-8 -mr-4 uppercase tracking-[20px] md:tracking-[30px] text-gray-500 md:text-lg lg:text-xl"
      >
        Certificates
      </motion.h3>

      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-28 md:hidden lg:top-20 uppercase tracking-[3px] text-gray-500 text-xs lg:text-sm"
      >
        Swipe to view more
      </motion.h3>

      <div className="flex w-full space-x-3 overflow-x-scroll lg:space-x-4 2xl:space-x-5 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-secondary/80 ">
        {certificates.map((certificate) => (
          <CertificateCard key={certificate._id} certificate={certificate} />
        ))}
      </div>
    </motion.div>
  );
};

export default Certificates;
