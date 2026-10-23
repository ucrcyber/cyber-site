import { boardData } from "@/data/board";
import { pastBoardData } from "@/data/pastBoard";
import { resourcesData } from "@/data/resources";

interface Configuration {
  [key: string]: string; // Any string key will return a string or number
}

export const PathCommands: Configuration = {
  "/": "cyberfetch",
  "/board": "cat /etc/passwd",
  "/board/past": "cat /etc/passwd.old",
  "/socials": "ip link | grep cyber0",
  "/calendar": "cal",
  "/partners": "cat thank_you.service",

  "/about": "man cyber",
  "/about/origins": "man -k cyber-origins",
  "/about/goals": "man -k cyber-goals",
  "/about/competitions": "man -k cyber-competitions",
  "/about/generalmeetings": "man -k cyber-gms",

  "/resources": "tree 'resources/'",

  ...Object.fromEntries(
    Object.keys(resourcesData).map((slug) => [
      `/resources/${slug}`,
      `grep “resources/${slug === "ctf" ? "CTF" : slug}.log”`,
    ]),
  ),

  ...Object.fromEntries(
    Object.values(boardData)
      .filter((member) => member.email)
      .map((member) => [
        `/board/${member.name}`,
        `id ${member.email}      # click to email ${member.name}`,
      ]),
  ),

  ...Object.fromEntries(
    Object.values(pastBoardData)
      .filter((member) => member.email)
      .map((member) => [
        `/board/past/${member.name}`,
        `id ${member.email}      # click to email ${member.name}`,
      ]),
  ),
};
