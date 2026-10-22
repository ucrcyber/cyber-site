import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { BoardData } from "@/data/board";
import ContentLink from "@/components/ContentLink";

interface BoardTileProperties {
  data: BoardData;
}

const BoardTile = ({ data }: BoardTileProperties) => {
  return (
    <ContentLink link={data.link} icon={ChevronRight}>
      <div className="flex w-full items-center gap-4">
        <Image
          src={data.image}
          alt={`${data.name} headshot`}
          className="border-cyber-lightgreen -my-2 -ml-3 h-24 w-24 border object-cover md:my-0 md:ml-0 md:h-20 md:w-20"
        />

        <div className="flex flex-col">
          <div className="text-cyber-white text-lg font-bold md:text-2xl">
            ~/{data.name}
          </div>
          <div className="text-cyber-lightgreen text-sm md:text-lg">
            {data.role}
          </div>
        </div>
      </div>
    </ContentLink>
  );
};

export default BoardTile;
