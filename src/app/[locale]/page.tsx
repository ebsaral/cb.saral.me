import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image"

export async function generateMetadata() {
  const t = await getTranslations("Main")
  return {
    title: t("coming_soon"),
    description: "",
    openGraph: {
      images: [
        '/main.png'
      ]
    }
  };
}

export default async function Home() {
  const locale = await getLocale();
  const t = await getTranslations("Main")
  setRequestLocale(locale);
  return (
    <section>
      <div className="container">
        <div className="flex flex-col items-center m-10 gap-10">
          <h1>{t("title")}</h1>
          <div><b>{t("construction")}</b></div>
          <div>{t("info")}</div>
          <div className={"divider"}></div>
          <div>{t("subtitle")}</div>
          <div>
            <Image
                className="rounded-3xl"
                src="/main.png"
                alt="ebs breaking a wall"
                width={350}
                height={350}
                priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
