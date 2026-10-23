import Image from "next/image";
import Link from "next/link";
import { footerLinks, FooterLink } from "@/data/Footer";

const Footer = () => {
  return (
    <footer className="mx-auto my-8 flex w-9/10 justify-center gap-[31px] md:justify-end md:gap-2">
      {footerLinks.map(
        ({ href, icon, alt, external }: FooterLink, index: number) => (
          <Link
            key={index}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
          >
            <Image
              src={icon}
              alt={alt}
              className="h-[50px] w-[50px] rounded-[10px] border border-[#9DFFC3] p-2 md:h-auto md:w-auto md:rounded-none md:border-none md:p-0.5"
            />
          </Link>
        ),
      )}
    </footer>
  );
};

export default Footer;
