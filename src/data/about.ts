export interface AboutSection {
  heading?: string;
  body?: string[];
}

export interface AboutData {
  title: string;
  subtitle?: string;
  sections?: AboutSection[];
  discordLink?: {
    text: string;
    linkText: string;
    href: string;
  };
  subtle?: string;
}

export const aboutData: Record<string, AboutData> = {
  origins: {
    title: "Origins",
    subtitle:
      " Cyber@UCR was founded in 2016 when a group of hackers when Cyber@UCR founder @squelch came to UCR and saw a gap in security education, in spite of the abundance of hackers. He created a group to compete in the Western Regionals Collegiate Cyber Defense Competition. This team placed 3rd in Defense and earned Cyber@UCR a place in the college of engineering! Since then, Cyber@UCR has grown in size and skill every year.",
  },

  goals: {
    title: "Goals",
    subtitle:
      "Since our humble beginning, we've aimed to attract more members and grow our competition rankings.",
    sections: [
      {
        heading: "Some topics we practice",
        body: [
          "Secure System Administration",
          "Web Application Security",
          "Secure Software Development",
          "Offensive Security",
          "Incident Response",
          "Security Awareness Training",
          "Locksport",
          "Ethical Disclosure Practices",
        ],
      },
      {
        heading: "Some competitions we participate in",
        body: [
          "Collegiate Cyber Defense Competition",
          "Collegiate Penetration Testing Competition",
          "UB Lockdown",
          "eCitadel",
          "Information Technology Competition (Cal Poly Pomona)",
          "Hivestorm",
        ],
      },
    ],
  },

  competitions: {
    title: "Competitions",
    subtitle: "Coming soon...",
  },

  generalmeetings: {
    title: "General Meetings",
    subtitle:
      "Cyber@UCR's officers host biweekly general meetings that delve into various cybersecurity topics.",
    discordLink: {
      text: "Looking for slides and resources from our General Meetings?",
      linkText:
        'Check out the "resources-and-slides" channel in our Discord server!',
      href: "https://discord.com/invite/vESWWrm",
    },
  },
};
