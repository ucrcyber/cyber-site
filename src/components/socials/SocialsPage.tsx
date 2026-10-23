"use client";

import Link from "next/link";
import Image from "next/image";
import discordLogo from "@/public/Discord.svg";
import linkedinLogo from "@/public/Linkedin.svg";
import instaLogo from "@/public/Instagram.svg";

import { motion } from "motion/react";

const fadeInAnimation = {
  initial: { opacity: 0, y: -10 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.9 },
  viewport: { once: true },
};

const SocialsPage = () => {
  return (
    <motion.div {...fadeInAnimation}>
      <div className="font-cyber-main flex flex-col">
        {/* <div className="flex gap-3">
          <span className="text-cyber-white text-2xl font-extrabold">
            cyber@ucr:~$
          </span>
          <span className="text-cyber-lightgreen text-2xl">
            ip link | grep cyber0
          </span>
        </div> */}

        <div className="text-cyber-white mb-8 text-center text-3xl font-bold md:text-4xl lg:text-left">
          Follow our socials!
        </div>

        <div className="border-cyber-lightgreen/50 mx-auto w-[85%] border-b pt-0 lg:border-b-0"></div>

        <div className="font-cyber-main mt-6 mb-8 ml-6 text-xl md:ml-0 md:text-3xl">
          <div className="flex flex-row">
            <div className="text-cyber-white mr-8"> 1: </div>
            <div>
              <span className="text-cyber-white"> discord: </span>
              <span className="text-cyber-lightgreen">
                Connect and chat with fellow hackers!<br></br>
                <Link
                  href="https://discord.ucrcyber.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden text-[#DFFFFF] underline lg:block"
                >
                  https://discord.ucrcyber.org/
                </Link>
                <Link
                  href="https://discord.ucrcyber.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-cyber-lightgreen mx-auto mt-6 mb-2 flex w-[80%] items-center justify-center gap-3 rounded-2xl border-2 px-4 py-3 whitespace-nowrap lg:hidden"
                >
                  <Image
                    src={discordLogo}
                    alt="discordLogo"
                    className=""
                  ></Image>
                  <div className="justify-self-center">discord</div>
                </Link>
              </span>
            </div>
          </div>
        </div>

        <div className="font-cyber-main mb-8 ml-6 text-xl md:ml-0 md:text-3xl">
          <div className="flex flex-row">
            <div className="text-cyber-white mr-8"> 2: </div>
            <div>
              <span className="text-cyber-white"> linkedin: </span>
              <span className="text-cyber-lightgreen">
                Join our professional network and view our history of events and
                accomplishments.<br></br>
                <Link
                  href="https://linkedin.com/company/cyberucr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden text-[#DFFFFF] underline lg:block"
                >
                  https://linkedin.com/company/cyberucr
                </Link>
                <Link
                  href="https://linkedin.com/company/cyberucr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-cyber-lightgreen mx-auto mt-6 mb-2 flex w-[80%] items-center justify-center gap-3 rounded-2xl border-2 px-4 py-3 whitespace-nowrap lg:hidden"
                >
                  <Image
                    src={linkedinLogo}
                    alt="discordLogo"
                    className=""
                  ></Image>
                  <div className="justify-self-center">linkedin</div>
                </Link>
              </span>
            </div>
          </div>
        </div>

        <div className="font-cyber-main ml-6 text-xl md:ml-0 md:text-3xl">
          <div className="flex flex-row">
            <div className="text-cyber-white mr-8"> 3: </div>
            <div>
              <span className="text-cyber-white"> instagram: </span>
              <span className="text-cyber-lightgreen">
                Meet the board, check out some member spotlights, and ask us
                questions.<br></br>
                <Link
                  href="https://www.instagram.com/cyber_ucr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden text-[#DFFFFF] underline lg:block"
                >
                  https://www.instagram.com/cyber_ucr/
                </Link>
                <Link
                  href="https://www.instagram.com/cyber_ucr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-cyber-lightgreen mx-auto mt-6 mb-2 flex w-[80%] items-center justify-center gap-3 rounded-2xl border-2 px-4 py-3 whitespace-nowrap lg:hidden"
                >
                  <Image src={instaLogo} alt="discordLogo" className=""></Image>
                  <div className="justify-self-center">instagram</div>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SocialsPage;
