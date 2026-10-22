import Image from "next/image";
import type { BoardData } from "@/data/board";

const BoardEntry = ({ name, fullName, role, image, bio }: BoardData) => {
  const firstName = name.trim().split(/\s+/)[0]?.toLowerCase() ?? "";

  return (
    <div className="font-cyber-main text-cyber-lightgreen mx-auto flex w-full flex-col md:gap-8">
      <div className="flex flex-col items-stretch gap-4 md:flex-row md:gap-4">
        <div className="flex md:w-2/5 md:gap-4">
          <div className="flex flex-1 flex-col md:gap-1">
            <div className="md:border-cyber-lightishgreen bg-cyber-black/10 overflow-hidden md:rounded-t-2xl md:border-2">
              <div className="md:p-5">
                <div className="border-cyber-lightishgreen relative aspect-square border-1">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    sizes="40vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="border-cyber-lightishgreen bg-cyber-neongreen/10 hidden flex-col items-center justify-center rounded-b-2xl border-2 p-4 text-center md:block">
              <p className="text-2xl font-bold text-white">{firstName}</p>
              <p className="text-2xl font-light">{role}</p>
            </div>
            <div className="border-cyber-lightishgreen bg-cyber-neongreen/10 flex h-18 flex-row items-center justify-center border-1 text-center whitespace-pre md:hidden md:h-32 md:rounded-b-2xl md:border-2 md:p-4">
              <p className="text-xl font-bold text-white">{firstName}</p>
              <p className="text-xl font-bold text-white"> • </p>
              <p className="text-xl font-light">{role}</p>
            </div>
          </div>

          <span className="border-cyber-lightishgreen/50 my-20 hidden w-1.5 rounded-full border-2 md:block" />
        </div>

        <div className="md:border-cyber-lightishgreen md:bg-cyber-neongreen/10 flex-1 p-6 text-center md:rounded-2xl md:border-2 md:px-12 md:py-10 md:text-left md:backdrop-blur-sm">
          <h2 className="text-4xl font-bold text-white md:text-6xl">
            {fullName}
          </h2>
          <p className="mt-4 text-lg md:mt-8 md:text-2xl">{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default BoardEntry;
