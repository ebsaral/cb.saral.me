import { Metadata } from "next";
import { notFound } from "next/navigation";
import { createClient, getDocument } from "@/prismicio";
import { PrismicParams, PrismicDocument as Document, PrismicSingletonParams } from "@/components/types";


export async function PrismicMetadata({document, tag, params}: {document: Document, tag: string, params: Promise<PrismicParams>}): Promise<Metadata> {
    const { uid, locale } = await params;
    const query = await getDocument(document, uid, tag, locale)

    if(query.results.length == 0){
        notFound()
    }
    const page = query.results[0]
    
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

export async function PrismicSingletonMetadata(params: PrismicSingletonParams): Promise<Metadata> {
    const client = createClient();
    const page = await client.getSingle(params.document, {lang: params.locale});
    if(!page) {
        return {title: "/", description: "/"}
    }
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

export async function PrismicGenerateStaticParams(tag: string) {
    const client = createClient();
    const pages = await client.getAllByTag(tag, {
        lang: "*",
    });
    return pages.map((page) => {
        return {
            uid: page.uid,
            locale: page.lang
        } as PrismicParams
    })
}