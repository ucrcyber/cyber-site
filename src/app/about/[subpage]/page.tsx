import { notFound } from "next/navigation";
import AboutEntry from "@/components/about/AboutEntry";
import Sidebar from "@/components/sidebar";
import { aboutData } from "@/data/about";

interface PageProps {
  params: Promise<{
    subpage: string;
  }>;
}

const dynamicParams = false;

const generateStaticParams = async () => {
  return Object.keys(aboutData).map((key) => ({
    subpage: key,
  }));
};

const AboutSubpage = async ({ params }: PageProps) => {
  const { subpage } = await params;
  const data = aboutData[subpage];

  if (!data) {
    notFound();
  }

  return (
    <div className="bg-cyber-black/10 border-cyber-neongreen flex w-full border-collapse flex-col border-t-1 backdrop-blur-[26px] md:flex-row">
      <Sidebar type="about" />
      <main className="relative z-10 w-full flex-1 p-4 md:p-12">
        <AboutEntry data={data} />
      </main>
    </div>
  );
};

export { dynamicParams, generateStaticParams };
export default AboutSubpage;
