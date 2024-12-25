import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";
import { getDocument } from "@/prismicio";
import { components } from "@/slices";

import { PrismicParams, PrismicDocument as Document } from "@/components/types";
import { PAGE_PATHS } from "@/types";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { getBasepath } from "@/utils/helpers";
import { AllDocumentTypes } from "../../../prismicio-types";
import { MenuItemIcon } from "../helpers";
import {Comment} from "@/components"

const PAGE_MESSAGE_PATHS = {
    [PAGE_PATHS.HOME]: "Home.title",
    [PAGE_PATHS.PROJECTS]: "Projects.title",
    [PAGE_PATHS.ARTICLES]: "Articles.title",
    [PAGE_PATHS.STORIES]: "Stories.title",
    [PAGE_PATHS.ABOUT]: "About.title",
}

async function Breadcrumbs ({page, locale}: {page: AllDocumentTypes, locale: string}) {
    const t = await getTranslations("Pages")
    const postTag = page.tags.find((value) => value.endsWith("-post"))
    
    if(!postTag) {
        notFound()
    }

    const postType = postTag.replace('-post', '')
    const currPath = getBasepath(locale, `/${locale}/${postType}`)
    const pagePath = "/" + postType as PAGE_PATHS

    return (
        <div className="breadcrumbs text-sm">
            <ul>
                <li>
                    <Link className="link" href="/" locale={locale}>
                    <div className="flex flex-row gap-2 items-center">
                        <div><MenuItemIcon path={PAGE_PATHS.HOME} /></div>
                        <div>{t(`${PAGE_MESSAGE_PATHS[PAGE_PATHS.HOME]}`)}</div>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link className="link" href={currPath} locale={locale}>
                    <div className="flex flex-row gap-2 items-center">
                        <div><MenuItemIcon path={pagePath} /></div>
                        <div>{t(`${PAGE_MESSAGE_PATHS[pagePath]}`)}</div>
                        </div>
                    </Link>
                </li>
                <li>{page.data.meta_title}</li>
            </ul>
        </div>
    )
}

export async function PrismicContent({document, tag, params}: {document: Document, tag: string, params: Promise<PrismicParams>}) {
    const { uid, locale } = await params;
    const query = await getDocument(document, uid, tag, locale);

    if(query.results.length == 0){
        notFound()
    }
    const page = query.results[0]

    return (<>
        <Breadcrumbs page={page} locale={locale} />
        <SliceZone slices={page.data.slices} components={components} />
        <Comment />
    </>)
}