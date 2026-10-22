"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/Cyber_Logo.svg";
import { motion } from "motion/react";

const MotionImage = motion.create(Image);
const MotionLink = motion.create(Link);

const Landing = () => {
  return (
    <motion.div
      className="font-cyber-main lg:bg-cyber-black m-6 mx-auto w-[90%] overflow-hidden rounded-lg py-2 md:pt-4 lg:m-10 lg:w-4/5 lg:py-0 lg:pb-9 lg:backdrop-blur-2xl"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="flex flex-col gap-2 px-4 lg:flex-row">
        <MotionImage
          src={Logo}
          alt="Cyber Logo"
          className="bg-cyber-black self-center rounded-xl py-4 backdrop-blur-2xl lg:max-w-6/10 lg:py-8 lg:backdrop-blur-none"
          whileHover={{ scale: 1.05, rotate: -2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />

        <div className="border-cyber-lightgreen/10 mt-4 flex h-0.5 w-auto rounded-4xl border bg-white/10 backdrop-blur-lg md:mt-8 md:mb-4 lg:hidden"></div>

        <div className="flex flex-col justify-center lg:px-4">
          <h1 className="text-cyber-white hidden font-extrabold lg:flex lg:text-5xl">
            cyber@ucr
          </h1>
          <h2 className="font-md text-cyber-lightgreen mt-4 block text-center text-xl sm:text-2xl lg:text-left lg:text-3xl">
            UC Riverside's Cybersecurity Club. Dedicated to advancing computer
            security knowledge through competitions and experimentation. We go
            by the name, Cyber@UCR!
          </h2>
        </div>
      </div>
      <MotionLink
        href="/about"
        className="from-cyber-black to-cyber-darkgreen m-4 mt-6 flex justify-center justify-items-end rounded-lg border border-[#9DFFC3] bg-linear-to-b py-2 text-lg font-bold md:mt-8 md:py-3 md:text-xl lg:float-right lg:mx-4 lg:px-6 lg:py-1"
        whileHover={{
          scale: 1.05,
          borderColor: "#00ff00",
          boxShadow: "0 0 12px #00ff0080",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        learn more
      </MotionLink>
    </motion.div>
  );
};

export default Landing;
