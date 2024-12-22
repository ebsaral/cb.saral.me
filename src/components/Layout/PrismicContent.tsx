import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";

import { PrismicParams, PrismicDocument as Document, PrismicSingletonParams } from "@/components/types";
import { PrismicSingleton } from "../prismic";

export async function PrismicContent({document, params}: {document: Document, params: Promise<PrismicParams>}) {
    const { uid, locale } = await params;
    const client = createClient();
    const page = await client
        .getByUID(document, uid, {lang: locale})
        .catch(() => notFound());

    return (
    <section className="container max-w-3xl px-10">
        <SliceZone slices={page.data.slices} components={components} />
    </section>
    )
}

export async function PrismicSingletonContent(params: PrismicSingletonParams) {
    const page = await PrismicSingleton(params);
    if(!page) {
        notFound()
    }
    return (
    <section className="container max-w-3xl px-10">
        <SliceZone slices={page.data.slices} components={components} />
    </section>
    )
}