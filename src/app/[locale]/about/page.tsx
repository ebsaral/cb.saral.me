import { Metadata } from "next";
import { getLocale, setRequestLocale } from "next-intl/server";
import { SliceZone } from "@prismicio/react";
import { notFound } from "next/navigation";
import { components } from "@/slices";
import { PrismicSingletonMetadata } from "@/components";
import { createClient } from "@/prismicio";

const document = "about";

export default async function Page() {
	const locale = await getLocale();
	setRequestLocale(locale);
	const client = createClient();
	const singleton = await client.getSingle(document, {lang: locale});
	
	if(!singleton) {
		notFound()
	}
	
  	return <SliceZone slices={singleton.data.slices} components={components} />
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return await PrismicSingletonMetadata({document, locale});
}
