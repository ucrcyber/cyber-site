import BoardTile from "@/components/board/BoardTile";
import { pastBoardData } from "@/data/pastBoard";
import ContentLink from "@/components/ContentLink";
import { ChevronRight } from "lucide-react";

const Board = () => {
  return (
    <div className="border-cyber-lightgreen/80 mx-auto flex w-full flex-col overflow-hidden border-t-1 px-4 pt-12 pb-4 md:px-0 md:py-10">
      <div className="font-cyber-main text-cyber-white mx-auto flex pb-6 text-center text-4xl font-bold md:mb-8 md:pb-0 md:text-6xl">
        Past Board
      </div>

      <div className="border-cyber-lightgreen/20 border-t-2 border-b-2 p-6 md:border-t-0 md:border-b-0 md:p-0">
        <div className="font-cyber-main flex flex-wrap justify-center gap-4 px-0 py-6 md:gap-8 md:px-5 md:py-10">
          {Object.values(pastBoardData).map((member) => (
            <BoardTile key={member.name} data={member} />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center overflow-visible">
        <div className="shrink-0 origin-center scale-50 md:scale-60 md:[&_*]:!bg-black">
          <ContentLink link="/board" icon={ChevronRight}>
            <p className="text-cyber-white w-full text-center text-3xl font-bold">
              view current board members
            </p>
          </ContentLink>
        </div>
      </div>
    </div>
  );
};

export default Board;
