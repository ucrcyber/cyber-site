import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface ContentLinkProps {
  link: string;
  icon: LucideIcon;
  external?: boolean;
  children: ReactNode;
}

const ContentLink = ({
  link,
  icon: Icon,
  external = false,
  children,
}: ContentLinkProps) => {
  return (
    <Link
      href={link}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="font-cyber-main pointer-events-auto relative flex h-32 w-lg items-stretch gap-1 md:pointer-events-none"
    >
      <div className="bg-cyber-darkgreen border-cyber-lightgreen flex flex-1 items-center rounded-xl border p-6 md:rounded-l-2xl md:rounded-r-none">
        {children}
      </div>
      <div className="text-cyber-white absolute top-1/2 right-6 -translate-y-1/2 text-2xl md:hidden">
        <Icon />
      </div>

      <div className="text-cyber-white hover:text-cyber-neongreen bg-cyber-darkgreen border-cyber-lightgreen hidden h-full w-14 items-center justify-center rounded-r-2xl border p-0.5 text-2xl transition-colors duration-300 md:pointer-events-auto md:flex">
        <Icon />
      </div>
    </Link>
  );
};

export default ContentLink;
