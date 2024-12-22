import { Metadata } from "next";
import { PrismicMetadata, PrismicPage, PrismicStaticParams } from "@/components";
import { PrismicParams } from "@/components/types";

const document = "post";

export default async function Page({ params }: { params: Promise<PrismicParams> }) {
  return await PrismicPage({document, params})
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PrismicParams>;
}): Promise<Metadata> {
  return await PrismicMetadata({document, params});
}

export async function generateStaticParams() {
  return await PrismicStaticParams("projects-post");
}