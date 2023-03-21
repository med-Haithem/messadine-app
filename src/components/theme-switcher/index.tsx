"use client";
import React from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import ThemeIcon from "../theme-icon";
import dynamic from "next/dynamic";
const ThemeIconDynamic = dynamic(() => import("../theme-icon"), {
  ssr: false,
});

const Button = () => {
  const { theme } = useTheme();

  const isDarkMode = theme === "dark";

  return (
    <div className="z-50 sticky top-0">
      <nav
        className={`flex justify-between items-center p-4 bg-${
          isDarkMode ? "gray-800" : "white"
        }`}
      >
        <Link href="/" className="text-lg font-bold">
          My Website
        </Link>
        <ThemeIconDynamic isDarkMode={isDarkMode} />
      </nav>
    </div>
  );
};

export default Button;
