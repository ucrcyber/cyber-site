interface NavLink {
  name: string;
  link: string;
}

import { Info, User, Link2, Calendar, Map, Flag } from "lucide-react";

export const navigations: NavLink[] = [
  { name: "About", link: "/about" },
  { name: "Board", link: "/board" },
  { name: "Socials", link: "/socials" },
  { name: "Calendar", link: "/calendar" },
  { name: "Resources", link: "/resources" },
];

export const navigationsMobile = [
  { name: "About", link: "/about", icon: Info },
  { name: "Board", link: "/board", icon: User },
  { name: "Socials", link: "/socials", icon: Link2 },
  { name: "Calendar", link: "/calendar", icon: Calendar },
  { name: "Resources", link: "/resources", icon: Map },
  { name: "CTF", link: "/ctf", icon: Flag },
];
