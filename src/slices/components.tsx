import { LinkField } from "@prismicio/client"
import {Link} from "@/i18n/routing"
import { LinkTypeDocument, LinkTypeWeb } from "./types"
import { getLocale } from "next-intl/server"
import { createClient } from "@/prismicio"
import { buildUrl } from "./helpers"

export const CustomPrismicLink = async ({link, className="", text=undefined} : {link: LinkField, className?: string, text?: string}) => {
    const locale = await getLocale()
    if (link.link_type == "Web") {
        const l = link as LinkTypeWeb 
        return <Link className={className} key={l.key} href={l.url} locale={locale} target={l.target}>{text || l.text}</Link>
    }
    else {
        const l = link as LinkTypeDocument
        const client = createClient();
        const page = await client.getByUID("post", l.uid, {lang: locale})
        const url = buildUrl(page)
        return <Link className={className} key={l.key} href={url} locale={locale}>{text || page.data.meta_title}</Link>
    }
}