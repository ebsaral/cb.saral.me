import axios from "axios";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";
import { getDocument } from "@/prismicio";
import { components } from "@/slices";

import { PrismicParams, PrismicDocument as Document } from "@/components/types";
import Comments from "../Comments/Comments";
import Breadcrumbs from "./Breadcrumbs";
import { GComment } from "@/server/github/types";

type CommentResponse = {
    uid: string,
    locale: string,
    comments: {totalCount: number, nodes: GComment[]}
}
export async function PrismicContent({document, tag, params}: {document: Document, tag: string, params: Promise<PrismicParams>}) {
    const { uid, locale } = await params;
    const query = await getDocument(document, uid, tag, locale);
    const apiPath = `${process.env.HOST}/api/comments/${locale}/${tag.slice(0, tag.length-5)}/${uid}`

    if(query.results.length == 0){
        notFound()
    }
    const page = query.results[0]

    const response = await axios.get<CommentResponse>(apiPath)

    return (<>
        <Breadcrumbs page={page} locale={locale} />
        <SliceZone slices={page.data.slices} components={components} />
        <div className="divider"></div>
        <Comments data={response.data.comments.nodes} />
    </>)
}