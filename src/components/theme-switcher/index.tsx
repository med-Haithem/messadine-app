import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import LanguageSwitcher from "../language-switcher";
const ThemeIconDynamic = dynamic(() => import("../theme-icon"), {
  ssr: false,
});
const LangSwitchDynamic = dynamic(() => import("../language-switcher"), {
  ssr: false,
});

type Props = {
  lang: string;
};
const Button = ({ lang }: Props) => {
  return (
    <div className="z-50 sticky top-0">
      <nav className={`flex justify-between items-center p-4`}>
        <Link href={`/${lang}`} className="text-lg font-bold">
          My Website
        </Link>
        <LangSwitchDynamic lang={lang} />
        <ThemeIconDynamic />
      </nav>
    </div>
  );
};

export default Button;
