import React, { useRef } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { PageInfo } from "../typings";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
  preventDefault: any;
};

type Props = {
  pageInfo: PageInfo;
};

const ContactMe = ({ pageInfo }: Props) => {
  const form = useRef<HTMLFormElement>();
  const name = useRef<HTMLInputElement>();
  const email = useRef<HTMLInputElement>();
  const subject = useRef<HTMLInputElement>();
  const message = useRef<HTMLTextAreaElement>();
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        (result) => {
          if (result.status === 200) {
            name.current!.value = "";
            email.current!.value = "";
            subject.current!.value = "";
            message.current!.value = "";
            toast.success("Thank you! I'll reach out to you ASAP!", {
              position: "top-center",
              autoClose: 4000,
              hideProgressBar: true,
              theme: "colored",
              style: {
                backgroundColor: "#d6ff41",
                color: "#171717",
              },
              progress: undefined,
            });
          }
        },
        (error) => {
          if (error) {
            toast.error("Something went wrong! Please try again later.", {
              position: "top-center",
              autoClose: 4000,
              hideProgressBar: true,
              theme: "colored",
              style: {
                backgroundColor: "#d6ff41",
                color: "#171717",
              },
              progress: undefined,
            });
          }
        }
      );
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 -mr-4 uppercase tracking-[20px] text-gray-500 md:text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-6 md:space-y-10 ">
        <h4 className="text-xl md:text-4xl font-semibold text-center px-4">
          I have got just what you need. <br className="md:hidden" />
          <span className="decoration-primary/50 underline">Lets Talk.</span>
        </h4>
        <div className="space-y-2 md:space-y-10">
          <div className="flex items-center space-x-3 md:space-x-5 justify-center">
            <PhoneIcon className="text-primary h-4 w-4 md:h-7 md:w-7 animate-pulse" />
            <p className="text-base md:text-2xl">{pageInfo.phoneNumber}</p>
          </div>
          <div className="flex items-center space-x-3 md:space-x-5 justify-center">
            <EnvelopeIcon className="text-primary h-4 w-4 md:h-7 md:w-7 animate-pulse" />
            <p className="text-base md:text-2xl">{pageInfo.email}</p>
          </div>
          <div className="flex items-center space-x-3 md:space-x-5 justify-center">
            <MapPinIcon className="text-primary h-4 w-4 md:h-7 md:w-7 animate-pulse" />
            <p className="text-base md:text-2xl">{pageInfo.address}</p>
          </div>
        </div>

        <form
          ref={form as React.RefObject<HTMLFormElement>}
          onSubmit={sendEmail}
          className="flex flex-col space-y-4 md:space-y-8 w-full px-6 md:px-16"
        >
          <div className="flex flex-col space-y-1 md:space-y-2 w-full text-sm md:text-base">
            <div className="flex space-x-1 md:space-x-2 w-full">
              <input
                required
                ref={name as React.RefObject<HTMLInputElement>}
                name="name"
                placeholder="Name"
                className="contactInput w-full"
                type="text"
              />
              <input
                required
                ref={email as React.RefObject<HTMLInputElement>}
                name="email"
                placeholder="Email"
                className="contactInput w-full"
                type="email"
              />
            </div>
            <input
              required
              ref={subject as React.RefObject<HTMLInputElement>}
              name="subject"
              placeholder="Subject"
              className="contactInput"
              type="text"
            />
            <textarea
              required
              ref={message as React.RefObject<HTMLTextAreaElement>}
              name="message"
              placeholder="Message"
              className="contactInput"
            />
          </div>

          <button
            type="submit"
            className="bg-primary py-2 px-6 md:py-5 md:px-10 rounded-full text-secondary font-bold text-base md:text-lg hover:ring-2 hover:ring-primary hover:bg-secondary hover:text-primary transition-all duration-200 ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactMe;
