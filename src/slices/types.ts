import { PrismicDocument } from "@/components/types"

export type LinkTypeDocument = {
    id: string,
    type: PrismicDocument,
    tags: string[],
    lang: string,
    slug: string,
    uid: string,
    url: string,
    link_type: string,
    first_publication_date: string,
    last_publication_date: string,
    key: string,
    isBroken: boolean
}

export type LinkTypeWeb = {
    link_type: "Web",
    url: string,
    text: string
    key: string,
    target: string,
}