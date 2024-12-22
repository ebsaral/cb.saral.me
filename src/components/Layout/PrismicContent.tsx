import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";
import { getDocument } from "@/prismicio";
import { components } from "@/slices";

import { PrismicParams, PrismicDocument as Document } from "@/components/types";

export async function PrismicContent({document, tag, params}: {document: Document, tag: string, params: Promise<PrismicParams>}) {
    const { uid, locale } = await params;
    const query = await getDocument(document, uid, tag, locale);

    if(query.results.length == 0){
        notFound()
    }
    const page = query.results[0]
    return (
    <section className="container max-w-3xl px-10">
        <SliceZone slices={page.data.slices} components={components} />
    </section>
    )
}