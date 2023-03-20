"use client";
import React from "react";
import { ThemeProvider } from "next-themes";

type Props = {
  children: React.ReactNode,
};

 const CommonThemeProvider = ({ children }: Props) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default CommonThemeProvider
