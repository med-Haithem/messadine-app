"use client";
import i18next from "i18next";

import { useTranslation } from "../../app/i18n/client";
import { languages, fallbackLng } from "../../app/i18n/settings";
import { useState } from "react";
import router from "next/dist/client/router";
import { usePathname, useRouter } from "next/navigation";

const LanguageSwitcher = ({ lang }: any) => {
  const { push } = useRouter();
  const pathname = usePathname();
  const { t } = useTranslation(lang);
  return (
    <div className="flex justify-center">
      <div className="mb-3 xl:w-96">
        <select
          data-te-select-init
          value={lang}
          onChange={(e) => {
            const newPath = pathname.replace(
              `/${lang}`,
              `/${e.target.value}/`
            );
            push(newPath);
          }}
        >
          {languages.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
        <p>{t("to-second-page")}</p>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
