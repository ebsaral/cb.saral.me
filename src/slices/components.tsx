import { LinkField } from "@prismicio/client"
import {Link} from "@/i18n/routing"
import { LinkTypeDocument, LinkTypeWeb } from "./types"
import { getLocale } from "next-intl/server"
import { createClient } from "@/prismicio"
import { buildUrl } from "./helpers"

export const CustomPrismicLink = async ({link, className="", text=undefined, fullDisplay} : {link: LinkField, className?: string, text?: string, fullDisplay?: boolean}) => {
    const locale = await getLocale()
    if (link.link_type == "Web") {
        const l = link as LinkTypeWeb 
        const t = fullDisplay ? l.url : text || l.text
        return <Link className={className} key={l.key} href={l.url} locale={locale} target={l.target}>{t}</Link>
    }
    else {
        const l = link as LinkTypeDocument
        const client = createClient();
        const page = await client.getByUID("post", l.uid, {lang: l.lang})
        const url = buildUrl(page)
        const t = fullDisplay ? url : text || page.data.meta_title
        return <Link className={className} key={l.key} href={url} locale={l.lang}>{t}</Link>
    }
}
