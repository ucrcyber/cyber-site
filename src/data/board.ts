import { StaticImageData } from "next/image";
import Kiana from "@/public/board/kiana.webp";
import Siddharth from "@/public/board/siddharth.webp";
import Felicia from "@/public/board/felicia.webp";
import Shantel from "@/public/board/shantel.webp";
import Jacob from "@/public/board/jacob.webp";
import Celso from "@/public/board/celso.webp";
import Burro from "@/public/board/past/burro.webp";

export interface BoardData {
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

export const boardData: Record<string, BoardData> = {
  kiana: {
    name: "kiana",
    fullName: "Kiana Hosseinzadeh",
    years: "2025–",
    email: "khoss010@ucr.edu",
    role: "president",
    image: Kiana,
    link: "/board/president",
    bio: "Hi! I'm the President of Cyber@UCR and a Computer Science with Business Applications student. I enjoy organizing events and helping grow the club, while creating opportunities for members to get involved. I'm especially interested in Windows systems and cybersecurity, and I'm always looking to expand my knowledge and bring more hands-on projects into the club. Feel free to reach out if you have any questions or want to get involved!",
  },

  siddharth: {
    name: "siddharth",
    fullName: "Siddharth Chillarige",
    years: "2025–",
    email: "schil024@ucr.edu",
    role: "vice president",
    image: Siddharth,
    link: "/board/vice-president",
    bio: "Hello! I’m Siddharth, a third-year computer engineering major at UCR and vice president of Cyber. I spend my time within Cyber managing our infrastructure (such as our servers, website, etc), preparing demonstrations, creating resources, and readying for competitions. Usually, I participate on the Linux subteam during competitions. If you ever want to chat, you can find me through the Cyber Discord server!",
    secret: "it's always dns...",
  },

  felicia: {
    name: "felicia",
    fullName: "Felicia Ong",
    years: "2025–",
    email: "fong002@ucr.edu",
    role: "secretary",
    image: Felicia,
    link: "/board/secretary",
    bio: "Nice to meet you! As the secretary of Cyber@UCR, I hope you have a great experience being a part of this club. Most of the time, I take care of administrative tasks and club documents, but feel free to reach out for anything. Let’s make this a great experience for all! ᕦ(ò_óˇ)ᕤ.",
  },

  shantel: {
    name: "shantel",
    fullName: "Shantel Bermudez Tellez",
    years: "2026–",
    email: "sberm029@ucr.edu",
    role: "ethics director",
    image: Shantel,
    link: "/board/ethics-director",
    bio: "Hii, I'm super excited to be the new Ethics Director! I’m a Computer Science student who loves cybersecurity and ethical leadership. I’m excited to serve you all and help the club grow in a responsible, ethical way...hope to see you at cyber club events! Feel free to reach out to me if you have any questions or concerns about ethics in our club or cybersecurity in general!",
  },

  jacob: {
    name: "jacob",
    fullName: "Jacob Kantor",
    years: "2025–",
    email: "jkant006@ucr.edu",
    role: "treasurer",
    image: Jacob,
    link: "/board/treasurer",
    bio: "Hi, I'm Jacob! I am a fourth-year Computer Science major and the treasurer for cyber@ucr. I manage the funds for our social events, and merch. If you have any questions about the club, reach out to me on Instagram!",
  },

  celso: {
    name: "celso",
    fullName: "Celso Lopez",
    years: "2025–",
    email: "clope375@ucr.edu",
    role: "outreach director",
    image: Celso,
    link: "/board/outreach-director",
    bio: "Hello, my name is Celso Lopez. I am a second year computer science major. I specialize in Linux systems and am currently interested in Cloud Security. Feel free out to reach out to me on Discord @compscilopez!",
  },

  elisa: {
    name: "elisa",
    fullName: "Elisa Zhang",
    years: "2026–",
    email: "ezhan084@ucr.edu",
    role: "social media director",
    image: Burro,
    link: "/board/social-media-director",
    bio: "No bio yet! Computer security (also cybersecurity, digital security, or information technology (IT) security) is a subdiscipline within the field of information security. It focuses on protecting computer software, systems, and networks from threats that can lead to unauthorized information disclosure, theft, or damage to hardware, software, or data, as well as to the disruption or misdirection of the services they provide.",
  },
};
