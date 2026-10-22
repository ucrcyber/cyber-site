"use client";
import { ReactNode } from "react";
import { useTheme } from "@/app/context/theme-context";
import { useWindow } from "@/app/context/window-context";

interface WindowProps {
  children: ReactNode;
}

const renderCommand = (command: string) => {
  const hashIndex = command.indexOf("#");
  const main = hashIndex >= 0 ? command.slice(0, hashIndex) : command;
  const comment = hashIndex >= 0 ? command.slice(hashIndex) : "";

  const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/;

  return (
    <>
      {main.split(emailRegex).map((part, i) =>
        emailRegex.test(part) ? (
          <a
            key={i}
            href={`mailto:${part}`}
            className="hover:text-cyber-neongreen underline"
          >
            {part}
          </a>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
      {comment && <span className="opacity-40">{comment}</span>}
    </>
  );
};

const Window = ({ children }: WindowProps) => {
  const { theme } = useTheme();
  const { command } = useWindow();
  const borderColor =
    theme == "red" ? "border-cyber-red" : "border-cyber-neongreen";
  const textColor = theme == "red" ? "text-cyber-red" : "text-cyber-white";

  const glow =
    theme == "red"
      ? "shadow-[0_0_35px_var(--color-cyber-darkred)]"
      : "shadow-[0_0_35px_var(--color-cyber-darkgreen)]";

  return (
    <div className="mx-auto mt-5 flex h-auto w-[90%] flex-col md:block md:h-full md:overflow-hidden">
      <div
        className={`border-[3px] border-b-0 ${borderColor} bg-cyber-black/30 font-cyber-main text-cyber-white flex h-12 shrink-0 items-center justify-start rounded-t-[28px] px-4 text-lg backdrop-blur-md md:justify-center md:px-0 md:text-xl`}
      >
        <span className="mr-2 font-bold md:hidden">cyber@ucr:~$</span>
        <span className={`truncate md:hidden ${textColor}`}>
          {renderCommand(command)}
        </span>

        <span className="hidden md:block">cyberterm - cybersh</span>
      </div>

      <div
        className={`border-3 ${borderColor} ${glow} scrollbar-base bg-cyber-black/45 flex h-auto flex-col overflow-hidden overflow-y-auto rounded-b-[28px] backdrop-blur-md md:h-[calc(100%-3rem)] ${theme == "red" ? "scrollbar-red" : "scrollbar-default"}`}
      >
        <div className="font-cyber-main m-3 hidden shrink-0 text-2xl md:block">
          <span className="text-cyber-white font-bold">cyber@ucr:~$</span>{" "}
          <span className={textColor}>{renderCommand(command)}</span>
        </div>

        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default Window;
