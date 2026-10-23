import PartnerTile from "@/components/partners/PartnerTile";
import { partnersData } from "@/data/partners";

const PartnersBoard = () => {
  return (
    <div className="m-10 mx-auto flex w-4/5 flex-col overflow-hidden">
      <div className="font-cyber-main text-cyber-white mx-auto mb-8 flex text-center text-5xl font-bold">
        Partners
      </div>
      <div className="font-cyber-main mx-auto grid grid-cols-2 gap-8">
        {partnersData.map((partner, i) => (
          <PartnerTile data={partner} key={i} />
        ))}
      </div>

      <div className="font-cyber-main text-cyber-lightgreen mx-auto mt-8 text-center text-2xl">
        Cyber@UCR is able to compete throughout the year due to our amazing
        sponsors and partners. They help us with funding, recruitment, and by
        sharing the awesome work that they do!
      </div>
    </div>
  );
};

export default PartnersBoard;

// bg-cyber-neongreen/10 border border-[#9DFFC3]
