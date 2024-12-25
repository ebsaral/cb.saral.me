import { getTranslations } from "next-intl/server"
import { AllDocumentTypes } from "../../../prismicio-types"
import { notFound } from "next/navigation"
import { getBasepath } from "@/utils/helpers"
import { PAGE_PATHS } from "@/types"
import { MenuItemIcon } from "../helpers"
import { Link } from "@/i18n/routing"

const PAGE_MESSAGE_PATHS = {
    [PAGE_PATHS.HOME]: "Home.title",
    [PAGE_PATHS.PROJECTS]: "Projects.title",
    [PAGE_PATHS.ARTICLES]: "Articles.title",
    [PAGE_PATHS.STORIES]: "Stories.title",
    [PAGE_PATHS.ABOUT]: "About.title",
}

export default async function Breadcrumbs ({page, locale}: {page: AllDocumentTypes, locale: string}) {
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
