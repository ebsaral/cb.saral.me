import { Metadata } from "next";
import { notFound } from "next/navigation";
import { createClient } from "@/prismicio";

import { PrismicParams, PrismicDocument as Document } from "@/components/types";


export async function PrismicMetadata({document, params}: {document: Document, params: Promise<PrismicParams>}): Promise<Metadata> {
    const { uid, locale } = await params;
    const client = createClient();
    const page = await client
    .getByUID(document, uid, {lang: locale})
        .catch(() => notFound());
    
    return {
        title: page.data.meta_title,
        description: page.data.meta_description,
    };
}

export async function PrismicStaticParams(document: Document) {
    const client = createClient();
    const pages = await client.getAllByType(document);

    return pages.map((page) => {
        return { uid: page.uid };
    });
}