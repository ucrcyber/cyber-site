import { notFound } from "next/navigation";
import ResourceEntry from "@/components/resources/ResourceEntry";
import Sidebar from "@/components/sidebar";
import { resourcesData } from "@/data/resources";

interface PageProps {
  params: Promise<{
    subpage: string;
  }>;
}

const dynamicParams = false;

const generateStaticParams = async () => {
  return Object.keys(resourcesData).map((key) => ({
    subpage: key,
  }));
};

const ResourceSubpage = async ({ params }: PageProps) => {
  const { subpage } = await params;
  const data = resourcesData[subpage];

  if (!data) {
    notFound();
  }

  return (
    <div className="bg-cyber-black/10 border-cyber-neongreen flex min-h-screen w-full border-collapse border-t-1 backdrop-blur-[26px]">
      <Sidebar type="resources" />
      <main className="flex-1 p-8 md:p-12">
        <ResourceEntry data={data} />
      </main>
    </div>
  );
};

export { dynamicParams, generateStaticParams };
export default ResourceSubpage;
