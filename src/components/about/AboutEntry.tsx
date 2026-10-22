import Link from "next/link";
import { AboutData } from "@/data/about";

interface AboutEntryProperties {
  data: AboutData;
}

const AboutEntry = ({ data }: AboutEntryProperties) => {
  return (
    <div className="font-cyber-main w-full text-center md:text-left">
      <div className="flex flex-col gap-6 md:gap-8">
        <div className="border-b border-white/20 pb-6 md:border-none md:pb-0">
          <div className="text-cyber-white text-3xl font-bold md:text-5xl">
            {data.title}
          </div>
        </div>

        {data.subtitle && (
          <div className="text-cyber-lightgreen border-b border-white/20 pb-6 text-lg leading-relaxed md:border-none md:pb-0 md:text-2xl">
            {data.subtitle}
          </div>
        )}

        {data.discordLink && (
          <div className="text-cyber-lightgreen mt-2 flex flex-col items-center text-lg md:items-start md:text-2xl">
            <p>{data.discordLink.text}</p>
            <Link
              href={data.discordLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyber-white hover:text-cyber-neongreen w-fit break-all underline"
            >
              {data.discordLink.linkText}
            </Link>
          </div>
        )}

        {data.sections && data.sections.length > 0 && (
          <div className="mt-4 flex flex-col gap-8">
            {data.sections.map((section, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-4 border-b border-white/20 pb-8 md:border-none md:pb-0"
              >
                {section.heading && (
                  <div className="text-cyber-white text-2xl font-bold md:text-3xl">
                    {section.heading}
                  </div>
                )}

                {section.body && section.body.length > 0 && (
                  <div className="text-cyber-lightgreen flex flex-col items-center pl-0 text-base leading-relaxed md:items-start md:pl-4 md:text-2xl">
                    {section.body.map((item, i) => (
                      <p key={i}>{item}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {data.subtle && (
        <div className="text-cyber-lightgreen mt-12 text-xl opacity-5 select-none md:text-2xl">
          {data.subtle}
        </div>
      )}
    </div>
  );
};

export default AboutEntry;
