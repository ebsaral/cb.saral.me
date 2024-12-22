import { Metadata } from "next";
import { PrismicSingletonContent } from "@/components/Layout/PrismicContent";
import { getLocale } from "next-intl/server";
import { PrismicSingletonMetadata } from "@/components";

const document = "projects";

export default async function Page() {
  const locale = await getLocale();
  return await PrismicSingletonContent({document, locale})
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return await PrismicSingletonMetadata({document, locale});
}
