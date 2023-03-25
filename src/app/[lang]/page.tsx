import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

type Props = {
  params: { lang: string };
};

import { useTranslation } from "../i18n";

export default async function Home({ params: { lang } }: Props) {
  const { t } = await useTranslation(lang);

  return (
    <div>
      {t('home.title')} : {lang}
      <Link href={`/${lang}/authentication/login`}>Login</Link>
    </div>
  );
}
