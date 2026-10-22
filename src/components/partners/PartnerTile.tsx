import { ExternalLink } from "lucide-react";
import { PartnerData } from "@/data/partners";
import ContentLink from "@/components/ContentLink";

interface PartnerTileProperties {
  data: PartnerData;
}

const PartnerTile = ({ data }: PartnerTileProperties) => {
  return (
    <ContentLink link={data.link} icon={ExternalLink} external>
      <div className="flex w-full flex-col gap-2 text-center">
        <div className="text-cyber-white text-2xl font-bold">{data.title}</div>
        <div className="text-cyber-lightgreen">{data.description}</div>
      </div>
    </ContentLink>
  );
};

export default PartnerTile;
