import { Metadata } from "next";
import { notFound } from "next/navigation";
import { createClient } from "@/prismicio";

import { PrismicParams, PrismicDocument as Document, PrismicSingletonParams } from "@/components/types";


export async function PrismicMetadata({document, params}: {document: Document, params: Promise<PrismicParams>}): Promise<Metadata> {
    const { uid, locale } = await params;
    const client = createClient();
    const page = await client
    .getByUID(document, uid, {lang: locale})
        .catch(() => notFound());
    
    return {
        title: page.data.meta_title,
        description: page.data.meta_description,
        openGraph: {
            images: [
                {
                    url: page.data.meta_image.url || ""
                }
            ]
        }
    };
}

export async function PrismicStaticParams(tag: string) {
    const client = createClient();
    const pages = await client.getAllByTag(tag);
    return pages.map((page) => {
        return { uid: page.uid };
    });
}

export async function PrismicSingleton(params: PrismicSingletonParams) {
    const client = createClient();
    const pages = await client.getAllByType(params.document, {lang: params.locale});
    return pages[0]
}

export async function PrismicSingletonMetadata(params: PrismicSingletonParams): Promise<Metadata> {
    const client = createClient();
    const pages = await client.getAllByType(params.document, {lang: params.locale});
    if(pages.length == 0) {
        return {title: "/", description: "/"}
    }
    const page = pages[0];
    return {
        title: page.data.meta_title,
        description: page.data.meta_description,
        openGraph: {
            images: [
                {
                    url: page.data.meta_image.url || ""
                }
            ]
        }
    };
}