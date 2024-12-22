import { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { SliceZone } from "@prismicio/react";
import { notFound } from "next/navigation";
import { components } from "@/slices";
import { PrismicSingletonMetadata } from "@/components";
import { createClient } from "@/prismicio";

import Card from "@/slices/Card"

const document = "articles";
const tag = "articles-post";

export default async function Page() {
	const locale = await getLocale();
	const client = createClient();
	const singletonData = await client.getAllByType(document, {lang: locale});
	const singleton = singletonData[0]
	
	if(!singleton) {
		notFound()
	}
	const pages = await client.getAllByTag(tag, {lang: locale});
	
  	return (
		<section className="container max-w-4xl px-10">
			<SliceZone slices={singleton.data.slices} components={components} />
			<div className="divider"></div>
			<div className="text-xl font-bold text-center p-5">Hav menny project? ({pages.length})</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-around gap-6 z-0">
				{[1,2,3,4,5,3,5,6,7,8,9].map(() => {
					return pages.map((page, i)=> {
						return (
							<SliceZone 
							key={i} 
							slices={page.data.slices}
							components={{project_main: Card}}
							context={{href: `/articles/${page.uid}`, locale}}
							/>
						)
					})
				})}
			</div>
		</section>
	)
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return await PrismicSingletonMetadata({document, locale});
}
