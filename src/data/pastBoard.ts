import { StaticImageData } from "next/image";
import Burro from "@/public/board/past/burro.webp";
import Nolan from "@/public/board/past/nolan.webp";
import Mario from "@/public/board/past/mario.webp";
import Danny from "@/public/board/past/danny.webp";
import Kareem from "@/public/board/past/kareem.webp";

export interface PastBoardData {
  name: string;
  fullName: string;
  years?: string;
  email: string;
  role: string;
  image: StaticImageData;
  link: string;
  bio: string;
  secret?: string;
}

export const pastBoardData: Record<string, PastBoardData> = {
  nolan: {
    name: "nolan",
    fullName: "Nolan Vernon",
    years: "–2026",
    email: "nvern003@ucr.edu",
    role: "president",
    image: Nolan,
    link: "/board/past/nolan",
    bio: "Nolan is the President for Cyber@UCR. He is in charge of nominating captains for cybersecurity competitions, acting as the club spokesperson, being the principal organizer for conferences and meetings, tiebreaking votes, and other administrative and ethical tasks. He is primarily focused on Windows Systems, with an interest in system and network forensics.",
  },

  mario: {
    name: "mario",
    fullName: "Mario Cuaya",
    years: "–2026",
    email: "mcuay001@ucr.edu",
    role: "president/vice president",
    image: Mario,
    link: "/board/past/mario",
    bio: "Mario serves as the President and former Vice President for Cyber@UCR. His duty is helping maintain the club's official standing, organizing the club's official documents, and assisting in administrative tasks. Majoring in Computer Science, he is looking to further expand his knowledge of cybersecurity to use in his future careers in the software industry.",
  },

  danny: {
    name: "danny",
    fullName: "Danny Topete",
    years: "–2026",
    email: "dtope004@ucr.edu",
    role: "secretary",
    image: Danny,
    link: "/board/past/danny",
    bio: "Danny is the Secretary for Cyber@UCR. He is responsible for record keeping and maintaining documents. He also assists with administrative tasks to ensure smooth operation. He is also in charge of the clubs social media, growing the clubs online presence, and promoting events.",
  },

  kareem: {
    name: "kareem",
    fullName: "Kareem Shehada",
    years: "–2025",
    email: "ksheh002@ucr.edu",
    role: "president/secretary",
    image: Kareem,
    link: "/board/past/kareem",
    bio: "Kareem is the President for Cyber@UCR. He is in charge of nominating captains for cybersecurity competitions, acting as the club spokesperson, being the principal organizer for conferences and meetings, tiebreaking votes, and other administrative and ethical tasks. He is primarily focused on Unix Systems, Virtualization, and Networks.",
  },

  /*
More people will be added to this list later (Thomas, Adil, Liam, Anphu, Mark, Chloe, Gryphon, Justin, Joshua, etc.).

To do so:
1) Add the person's photo to @/public/board/past/ as a ".webp" file
2) Import the image (as demonstrated at the top of this file).
3) Copy and paste an entry from this section, replacing data appropriately.
*/

  burro: {
    name: "burro",
    fullName: "Burro Cyburro",
    years: "1842–2025",
    email: "unavailable",
    role: "tyrant",
    image: Burro,
    link: "/board/past/burro",
    bio: " I'd just like to interject for a moment. What you're refering to as Linux, is in fact, GNU/Linux, or as I've recently taken to calling it, GNU plus Linux. Linux is not an operating system unto itself, but rather another free component of a fully functioning GNU system made useful by the GNU corelibs, shell utilities and vital system components comprising a full OS as defined by POSIX. Many computer users run a modified version of the GNU system every day, without realizing it. Through a peculiar turn of events, the version of GNU which is widely used today is often called Linux, and many of its users are not aware that it is basically the GNU system, developed by the GNU Project. There really is a Linux, and these people are using it, but it is just a part of the system they use. Linux is the kernel: the program in the system that allocates the machine's resources to the other programs that you run. The kernel is an essential part of an operating system, but useless by itself; it can only function in the context of a complete operating system. Linux is normally used in combination with the GNU operating system: the whole system is basically GNU with Linux added, or GNU/Linux. All the so-called Linux distributions are really distributions of GNU/Linux!",
  },
};
