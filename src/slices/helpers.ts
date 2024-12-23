import { Content } from "@prismicio/client";
import { LinkTypeDocument } from "./types";


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
