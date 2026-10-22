"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { usePathname } from "next/navigation";
import Logo from "@/public/Cyber_Logo.svg";
import { sidebarData } from "@/data/sidebar";

interface SidebarProperties {
  type: "about" | "resources";
}

const Sidebar = ({ type }: SidebarProperties) => {
  const currentData = sidebarData[type];
  const pathname = usePathname();

  return (
    <aside
      style={{ borderColor: "#00ff00" }}
      className="font-cyber-main sticky top-0 hidden h-screen w-80 flex-col justify-between rounded-b-2xl border font-extrabold md:flex"
    >
      <div className="flex h-full w-full flex-col">
        {currentData.pages.map((page, index) => {
          const isActive = pathname === page.href;
          return (
            <Link
              key={index}
              href={page.href}
              style={{
                borderColor: "#9dffc3",
                backgroundColor: isActive
                  ? "rgba(0, 255, 0, 0.2)"
                  : "transparent",
              }}
              className="flex w-full items-center justify-between overflow-hidden border-b p-3"
            >
              <span className="truncate pr-2">{page.label}</span>
              <span className="shrink-0">›</span>
            </Link>
          );
        })}

        <div className="flex-grow" />

        {currentData.links.map((link, index) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={index}
              href={link.href}
              target={link.isExternalSite ? "_blank" : undefined}
              rel={link.isExternalSite ? "noopener noreferrer" : undefined}
              style={{
                borderColor: "#9dffc3",
                backgroundColor: isActive
                  ? "rgba(0, 255, 0, 0.2)"
                  : "transparent",
              }}
              className="flex w-full items-center justify-between overflow-hidden border p-3"
            >
              <span className="truncate pr-2">{link.label}</span>
              <span className="flex shrink-0 items-center justify-center">
                {link.isExternalSite && (
                  <ExternalLink size={14} className="stroke-[3]" />
                )}
              </span>
            </Link>
          );
        })}

        {}
        <div className="w-full pt-4">
          <Image
            src={Logo}
            alt="cyber-logo"
            className="h-auto w-full object-contain p-6"
          />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
