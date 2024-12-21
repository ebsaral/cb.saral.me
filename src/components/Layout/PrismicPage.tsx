import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";

import { PrismicParams, PrismicDocument as Document } from "@/components/types";

export default async function PrismicPage({document, params}: {document: Document, params: Promise<PrismicParams>}) {
    const { uid, locale } = await params;
    const client = createClient();
    const page = await client
        .getByUID(document, uid, {lang: locale})
        .catch(() => notFound());

    return (
    <article className="prose prose-slate prose-p:text-justify prose-p:indent-4 container max-w-3xl px-10">
        <SliceZone slices={page.data.slices} components={components} />
    </article>
    )
}