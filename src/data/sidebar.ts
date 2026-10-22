export interface SidebarLink {
  label: string;
  href: string;
  isExternalSite?: boolean;
}

export interface SidebarConfig {
  pages: SidebarLink[];
  links: SidebarLink[];
}

export const sidebarData: Record<"about" | "resources", SidebarConfig> = {
  about: {
    pages: [
      {
        label: "origins.conf",
        href: "/about/origins",
      },
      {
        label: "goals.conf",
        href: "/about/goals",
      },
      {
        label: "competitions.conf",
        href: "/about/competitions",
      },
      {
        label: "general_meetings.conf",
        href: "/about/generalmeetings",
      },
    ],
    links: [
      {
        label: "resources.csv",
        href: "/resources",
        isExternalSite: true,
      },
      {
        label: "partners.csv",
        href: "/partners",
        isExternalSite: true,
      },
    ],
  },
  resources: {
    pages: [
      {
        label: "networks.log",
        href: "/resources/networks",
      },
      {
        label: "gnu_linux.log",
        href: "/resources/gnu_linux",
      },
      {
        label: "incident_response.log",
        href: "/resources/incident_response",
      },
      {
        label: "windows.log",
        href: "/resources/windows",
      },
      {
        label: "web.log",
        href: "/resources/web",
      },
      {
        label: "CTF.log",
        href: "/resources/CTF",
      },
    ],
    links: [
      {
        label: "Cyber@UCR CTFs.csv",
        href: "https://ctf.ucrcyber.org",
        isExternalSite: true,
      },
    ],
  },
};
