"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { usePathname } from "next/navigation";
import { PathCommands } from "@/data/pathCommands";

interface WindowContextType {
  command: string;
  setCommand: (command: string) => void;
}

interface WindowProviderType {
  children: ReactNode;
}

const WindowContext = createContext<WindowContextType | null>(null);

export const WindowProvider = ({ children }: WindowProviderType) => {
  const [command, setCommand] = useState<string>("cyberfetch");
  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname);
    if (pathname in PathCommands) {
      setCommand(PathCommands[pathname]);
    } else {
      setCommand("rm -rf /");
    }
  });
  return (
    <WindowContext.Provider value={{ command, setCommand }}>
      {children}
    </WindowContext.Provider>
  );
};

export const useWindow = () => {
  const context = useContext(WindowContext);

  if (!context) {
    throw new Error("useWindow must be used inside Window Provider");
  }
  return context;
};
