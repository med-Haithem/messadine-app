"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const ThemeIcon = () => {
  const { setTheme, theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <button
      className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700"
      onClick={() => (isDarkMode ? setTheme("light") : setTheme("dark"))}
    >
      {isDarkMode ? (
        <SunIcon className="w-5 h-5 text-gray-300 dark:text-yellow-300" />
      ) : (
        <MoonIcon className="w-5 h-5 text-gray-800 dark:text-white" />
      )}
    </button>
  );
};
export default ThemeIcon;
