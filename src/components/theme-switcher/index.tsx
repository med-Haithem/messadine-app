"use client";
import React from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const Button = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDarkMode = currentTheme == "dark";

  return (
    <nav
      className={`flex justify-between items-center p-4 bg-${
        isDarkMode ? "gray-800" : "white"
      } text-${isDarkMode ? "white" : "gray-800"}`}
    >
      <a href="/" className="text-lg font-bold">
        My Website
      </a>
      <button
        className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700"
        onClick={() =>
          currentTheme == "dark" ? setTheme("light") : setTheme("dark")
        }
      >
        {isDarkMode ? (
          <SunIcon className="w-5 h-5 text-gray-300 dark:text-yellow-300" />
        ) : (
          <MoonIcon className="w-5 h-5 text-gray-800 dark:text-white" />
        )}
      </button>
    </nav>
  );
};

export default Button;
