"use client";

import { useEffect } from "react";
import { useTheme } from "@/app/context/theme-context";
import NotFound from "@/components/notFound/404";

export default function NotFoundPage() {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("red");

    return () => setTheme("green");
  }, [setTheme]);

  return <NotFound />;
}
