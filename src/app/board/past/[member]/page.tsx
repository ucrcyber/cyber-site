import { pastBoardData } from "@/data/pastBoard";
import { notFound } from "next/navigation";
import BoardEntry from "@/components/board/boardEntry";

interface BoardMemberPageProps {
  params: Promise<{
    member: string;
  }>;
}

const dynamicParams = false;

const generateStaticParams = async () => {
  return Object.keys(pastBoardData).map((key) => ({
    member: key,
  }));
};

const BoardMemberPage = async ({ params }: BoardMemberPageProps) => {
  const { member } = await params;
  const data = pastBoardData[member];

  if (!data) {
    notFound();
  }

  return (
    <div className="bg-cyber-black/10 border-cyber-lightgreen/80 flex h-full w-full border-collapse items-center rounded-br-3xl border-t-1 backdrop-blur-[26px]">
      <main className="mx-auto my-0 flex flex-col items-center md:my-10 md:w-4/5">
        <BoardEntry {...data} />
      </main>
    </div>
  );
};

export { dynamicParams, generateStaticParams };
export default BoardMemberPage;
