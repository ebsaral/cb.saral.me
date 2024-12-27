import { ImageField, LinkField } from "@prismicio/client"
import {Link} from "@/i18n/routing"
import { LinkTypeDocument, LinkTypeWeb } from "./types"
import { getLocale } from "next-intl/server"
import { createClient } from "@/prismicio"
import { buildUrl } from "./helpers"
import { PrismicImage } from "@prismicio/react"

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
        const t = fullDisplay ? `/${l.lang}/${url}` : text || page.data.meta_title
        return <Link className={className} key={l.key} href={url} locale={l.lang}>{t}</Link>
    }
}

export const CustomPrismicImage = async ({field}: {field: ImageField}) => {
    return (
        <div className="flex flex-col">
            <PrismicImage className="max-w-full mb-0 mt-4" field={field} />
            <div className="flex flex-col bg-gray-200 p-2 text-foreground">
                {field.alt && <div>{field.alt}</div>}
                {field.copyright && <div className="text-xs">© {field.copyright}</div>}
            </div>
        </div>
    )
    
    
}