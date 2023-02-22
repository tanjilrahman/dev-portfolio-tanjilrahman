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
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center"
    >
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-24 md:top-8 -mr-4 uppercase tracking-[20px] md:tracking-[30px] text-gray-500 md:text-lg lg:text-xl"
      >
        Certificates
      </motion.h3>

      <div className="w-full flex space-x-3 lg:space-x-4 2xl:space-x-5 overflow-x-scroll snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-secondary/80 ">
        {certificates.map((certificate) => (
          <CertificateCard key={certificate._id} certificate={certificate} />
        ))}
      </div>
    </motion.div>
  );
};

export default Certificates;
