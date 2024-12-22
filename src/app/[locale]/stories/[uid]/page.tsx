import { Metadata } from "next";
import { PrismicMetadata, PrismicContent, PrismicGenerateStaticParams } from "@/components";
import { PrismicParams } from "@/components/types";
import { setRequestLocale } from "next-intl/server";

const document = "post";
const tag = `stories-${document}`

export default async function Page({ params }: { params: Promise<PrismicParams> }) {
  const {locale} = await params;
  setRequestLocale(locale);
  return await PrismicContent({document, tag, params})
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PrismicParams>;
}): Promise<Metadata> {
  return await PrismicMetadata({document, tag, params});
}

export async function generateStaticParams() {
  return await PrismicGenerateStaticParams(tag)
}