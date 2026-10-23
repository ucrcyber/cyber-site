"use client";

import { navigations } from "@/data/navigation";
import { navigationsMobile } from "@/data/navigation";
import { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/cyberlogo_text.webp";
import { useTheme } from "@/app/context/theme-context";
import MenuLogo from "@/public/Menu_Logo.svg";

const Navbar = () => {
  const [time, setTime] = useState("");
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const boxClasses =
    theme === "red"
      ? "bg-red-500/10 border border-red-500/30 text-red-400"
      : "md:bg-cyber-lightgreen/10 md:border md:border-cyber-lightgreen/30 bg-black/70 text-cyber-lightgreen border-[2px] border-cyber-neongreen/70";

  const mobileBoxClasses =
    theme === "red"
      ? "border border-red-500/30 bg-red-500/5 text-red-400 hover:bg-red-500/20"
      : "border border-cyber-green/50 bg-cyber-neongreen/10 text-cyber-lightgreen";

  useEffect(() => {
    setMounted(true);

    const updateTime = () => {
      const currentTime = new Date().toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
      });

      setTime(currentTime);
    };

    updateTime();

    const interval = setInterval(updateTime, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="relative">
      <div className="flex items-center justify-between px-5 py-5">
        <Link
          href="/"
          className={isOpen ? "hidden md:inline-block" : "inline-block"}
        >
          <div
            className={`flex items-center rounded-sm px-4 py-2 ${boxClasses}`}
          >
            <Image
              src={Logo}
              alt="cyber-logo"
              className={
                theme === "red"
                  ? "[filter:brightness(0)_saturate(100%)_invert(19%)_sepia(90%)_saturate(4156%)_hue-rotate(346deg)_brightness(94%)_contrast(97%)]"
                  : ""
              }
            />
          </div>
        </Link>

        <div
          className={`font-cyber-main hidden items-center rounded-lg px-3 py-1 font-semibold backdrop-blur-sm md:flex ${boxClasses}`}
        >
          {navigations.map(({ link, name }, index) => (
            <Fragment key={link}>
              <Link href={link} className="px-7">
                {name}
              </Link>

              {index < navigations.length - 1 && <span>|</span>}
            </Fragment>
          ))}
        </div>

        <div
          className={`font-cyber-main hidden items-center rounded-lg px-4 py-2 font-extralight md:flex ${boxClasses}`}
        >
          〈 at {mounted ? time : ""}
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className={`font-cyber-main flex items-center font-semibold backdrop-blur-sm md:hidden ${
            isOpen
              ? "w-full justify-between rounded-t-lg px-4 py-3"
              : "gap-4 rounded-lg px-4 py-2.5"
          } ${boxClasses}`}
        >
          <span>menu</span>
          <Image src={MenuLogo} alt="" className="h-8 w-8" />
        </button>
      </div>

      {isOpen && (
        <div className="absolute inset-x-5 top-full z-50 -mt-4 md:hidden">
          <div
            className={`font-cyber-main rounded-b-lg p-4 pb-2 backdrop-blur-sm ${boxClasses}`}
          >
            <div className="grid grid-cols-3 gap-4">
              {navigationsMobile.map(({ link, name, icon: Icon }) => (
                <Link
                  key={link}
                  href={link}
                  onClick={() => setIsOpen(false)}
                  className="flex flex-col items-center gap-2"
                >
                  <div
                    className={`flex aspect-square w-full items-center justify-center rounded-2xl transition-colors ${mobileBoxClasses}`}
                  >
                    <Icon className="h-12 w-12" strokeWidth={1} />
                  </div>
                  <span className="text-sm font-semibold">{name}</span>
                </Link>
              ))}
            </div>

            <div
              aria-hidden="true"
              className="mt-4 flex flex-col items-center gap-0.5"
            >
              <span className="h-px w-20 bg-current opacity-30" />
              <span className="h-px w-20 bg-current opacity-30" />
              <span className="h-px w-20 bg-current opacity-30" />
              <span className="h-px w-20 bg-current opacity-30" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
