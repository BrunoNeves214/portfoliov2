"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { FaCircleNotch } from "react-icons/fa";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="cursor-pointer p-3 bg-blue-500/20 dark:bg-blue-500/20 hover:bg-blue-500/40 hover:dark:bg-blue-500/40 rounded-[50%] w-fit animate-spin">
        <FaCircleNotch size={25} />
      </div>
    );
  }
  return (
    <div className="cursor-pointer p-3 bg-blue-500/20 dark:bg-blue-500/20 hover:bg-blue-500/40 hover:dark:bg-blue-500/40 rounded-[50%] w-fit">
      {theme === "dark" ? (
        <BsMoonStarsFill onClick={() => setTheme("light")} size={25} />
      ) : (
        <BsFillSunFill onClick={() => setTheme("dark")} size={25} />
      )}
    </div>
  );
}
