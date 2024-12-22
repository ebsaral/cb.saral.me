import { Metadata } from "next";
import { PrismicMetadata, PrismicContent, PrismicStaticParams } from "@/components";
import { PrismicParams } from "@/components/types";

const document = "post";

export default async function Page({ params }: { params: Promise<PrismicParams> }) {
  return await PrismicContent({document, params})
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PrismicParams>;
}): Promise<Metadata> {
  return await PrismicMetadata({document, params});
}

export async function generateStaticParams() {
  return await PrismicStaticParams(`projects-${document}`);
}