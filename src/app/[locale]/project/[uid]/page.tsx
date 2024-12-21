import { Metadata } from "next";
import { PrismicMetadata, PrismicPage, PrismicStaticParams } from "@/components";

type Params = { uid: string, locale: string };
const document = "project_post";

export default async function Page({ params }: { params: Promise<Params> }) {
  return await PrismicPage({document, params})
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  return await PrismicMetadata({document, params});
}

export async function generateStaticParams() {
  return await PrismicStaticParams(document);
}