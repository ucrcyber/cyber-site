"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { ResourceData } from "@/data/resources";

interface ResourceEntryProperties {
  data: ResourceData;
}

const ResourceEntry = ({ data }: ResourceEntryProperties) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="font-cyber-main"
    >
      <div className="flex flex-col gap-6">
        <div className="text-cyber-white text-5xl font-bold">{data.title}</div>

        <div className="text-cyber-lightgreen text-2xl">{data.subtitle}</div>

        <div className="text-cyber-white flex flex-col text-2xl">
          <br />
          {data.body.map((link, i) => (
            <Link
              href={link}
              key={i}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyber-white hover:text-cyber-neongreen w-fit break-all underline"
            >
              {link}
            </Link>
          ))}
        </div>
      </div>

      {data.subtle && (
        <div className="text-cyber-lightgreen mt-12 text-2xl opacity-5 select-none">
          {data.subtle}
        </div>
      )}
    </motion.div>
  );
};

export default ResourceEntry;
