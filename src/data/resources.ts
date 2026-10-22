export interface ResourceData {
  title: string;
  subtitle: string;
  body: string[];
  subtle?: string;
}

export const resourcesData: Record<string, ResourceData> = {
  CTF: {
    title: "CTF",
    subtitle: "Capture-The-Flag & other fun red-teaming stuff",
    body: [
      "https://overthewire.org/wargames/bandit/",
      "https://picoctf.com",
      "https://crackmes.one",
      "https://pwnable.kr",
      "https://hackthebox.eu",
      "https://www.malwaretech.com/beginner-malware-reversing-challenges",
      "https://kali.training/downloads/Kali-Linux-Revealed-1st-edition.pdf",
    ],
  },

  gnu_linux: {
    title: "GNU/Linux",
    subtitle: "Unix Design/BSD, file systems, permissions...",
    body: [
      "https://linux-audit.com/",
      "https://linuxjourney.com",
      "https://overthewire.org/wargames/bandit/",
      "https://guide.bash.academy/",
      "https://linuxconfig.org/",
      "https://www.cyberciti.biz/",
    ],

    subtle:
      "I'd just like to interject for a moment. What you're refering to as Linux, is in fact, GNU/Linux, or as I've recently taken to calling it, GNU plus Linux. Linux is not an operating system unto itself, but rather another free component of a fully functioning GNU system made useful by the GNU corelibs, shell utilities and vital system components comprising a full OS as defined by POSIX.  Many computer users run a modified version of the GNU system every day, without realizing it. Through a peculiar turn of events, the version of GNU which is widely used today is often called Linux, and many of its users are not aware that it is basically the GNU system, developed by the GNU Project.  There really is a Linux, and these people are using it, but it is just a part of the system they use. Linux is the kernel: the program in the system that allocates the machine's resources to the other programs that you run. The kernel is an essential part of an operating system, but useless by itself; it can only function in the context of a complete operating system. Linux is normally used in combination with the GNU operating system: the whole system is basically GNU with Linux added, or GNU/Linux. All the so-called Linux distributions are really distributions of GNU/Linux!",
  },

  incident_response: {
    title: "Incident Response",
    subtitle: "LOGS, LOGS, AND MORE LOGS!",
    body: [
      "https://www.splunk.com/en_us/training.html",
      "https://www.elastic.co/guide/index.html",
    ],
  },

  networks: {
    title: "Networks",
    subtitle: "OSI, IPv4/6, DNS...",
    body: [
      "https://docs.paloaltonetworks.com/pan-os/7-1/pan-os-admin.html",
      "https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/",
      "https://www.cloudflare.com/learning/",
    ],
  },

  web: {
    title: "Web",
    subtitle: "Reverse Proxy, fowarding proxy, databases...",
    body: [
      "http://manual-snort-org.s3-website-us-east-1.amazonaws.com/",
      "https://www.digitalocean.com/community/tutorials/how-to-set-up-mod_security-with-apache-on-debian-ubuntu",
      "https://www.owasp.org/index.php/Main_Page",
    ],
  },

  windows: {
    title: "Windows",
    subtitle: "Not Linux",
    body: [
      "https://adsecurity.org/",
      "https://docs.microsoft.com/en-us/sysinternals/downloads/sysinternals-suite",
      "https://ittutorials.net/microsoft/windows-server-2016/active-directory/",
    ],
  },
};
