import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { Certificate } from "../typings";
import Image from "next/image";
import Link from "next/link";

type Props = {
  certificate: Certificate;
};

const CertificateCard = ({ certificate }: Props) => {
  return (
    <article className="flex flex-col items-center space-y-3 md:space-y-7 flex-shrink-0 lg:flex-1 w-screen md:w-2/5 snap-center text-secondary bg-primary py-6 px-6 2xl:p-12 2xl:py-10 hover:opacity-100 transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative w-full h-72 md:h-48 lg:h-64 2xl:h-96"
      >
        <Image
          className="object-contain"
          layout="fill"
          src={urlFor(certificate.certificateImage).url()}
          alt={certificate.title}
        />
      </motion.div>
      <div className="w-full">
        <div className="md:space-y-2">
          <div className=" md:space-y-2">
            <h4 className="text-lg md:text-xl lg:text-2xl 2xl:text-4xl md:font-light">
              {certificate.title}
            </h4>
            <p className="font-extrabold text-lg lg:text-xl 2xl:text-2xl">
              {certificate.organization}
            </p>
          </div>

          {certificate.technologies && (
            <div className="inline-block">
              <div className="flex space-x-1 md:space-x-2 my-2 bg-secondary py-1 px-3 md:py-3 md:px-4 rounded-full">
                {certificate.technologies?.map((technology) => (
                  <div
                    key={technology._id}
                    className="h-7 w-7 md:h-10 md:w-10 relative text-opacity-5"
                  >
                    <Image
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                      src={urlFor(technology.image).url()}
                      alt=" "
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-2">
          {certificate.credentialURL && (
            <Link href={certificate.credentialURL} passHref>
              <a target="_blank" rel="noopener noreferrer">
                <p className="font-semibold bg-secondary py-2 px-4 my-2 rounded-full text-primary text-xs lg:text-sm">
                  Show credential
                </p>
              </a>
            </Link>
          )}
          <p className="uppercase py-2 md:py-4 text-secondary text-xs lg:text-base">
            - {new Date(certificate.issueDate).toDateString()}
          </p>
        </div>

        {certificate.description && (
          <p className="space-y-2 md:space-y-3 ml-5 text-sm lg:text-lg">
            {certificate.description}
          </p>
        )}
      </div>
    </article>
  );
};

export default CertificateCard;
