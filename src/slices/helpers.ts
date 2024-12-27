import { Content } from "@prismicio/client";
import { LinkTypeDocument, LinkTypeWeb } from "./types";
import { LinkField } from "@prismicio/client"
import { createClient } from "@/prismicio"

export function filterUIDs(slice: Content.PostListSlice) {
    return slice.primary.posts.filter((post) => 
        !(post.post as LinkTypeDocument).isBroken 
    ).map((post) => { 
        return (post.post as LinkTypeDocument).uid}
    )
}

export function buildUrl(page: Content.PostDocument<string>) {
    return `/${page.data.category}/${page.uid}`
}


export const linkResolver = async ({link} : {link: LinkField}): Promise<string> => {
    if(!link){
        return ""
    }
    if (link.link_type == "Web") {
        const l = link as LinkTypeWeb 
        return l.url
    }
    else {
        const l = link as LinkTypeDocument
        const client = createClient();
        const page = await client.getByUID("post", l.uid, {lang: l.lang})
        const url = buildUrl(page)
        return  `/${l.lang}/${url}`
    }
}
