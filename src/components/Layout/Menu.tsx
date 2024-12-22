"use client"

import { HiMenuAlt2 } from "react-icons/hi";
import { MdWorkHistory } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { FaPencil } from "react-icons/fa6";
import { LuScanFace } from "react-icons/lu";
import { RiHome9Fill } from "react-icons/ri";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { useCurrentPath } from "@/utils/hooks";

enum PAGE_PATHS {
    HOME="/",
    PROJECTS="/projects",
    ARTICLES="/articles",
    STORIES="/stories",
    ABOUT="/about"
}

export function MenuListItems() {
    const closeDropdown = () => {
        const elem = document.activeElement as HTMLElement;
        if (elem) {
          elem?.blur();
        }
    };
    
    const t = useTranslations("Pages")
    const currPath = useCurrentPath();

    function active(page: PAGE_PATHS) {
        return currPath == page ? "text-red-600 sm:border-b-2 border-b-red-600 text-red-600" :""
    }

    return <>
        <li className={active(PAGE_PATHS.HOME) + " sm:hidden"} onClick={() => closeDropdown()}><Link href={PAGE_PATHS.HOME}><RiHome9Fill />{' '}{t("Home.title")}</Link></li>
        <li className={active(PAGE_PATHS.PROJECTS)} onClick={() => closeDropdown()}><Link href={PAGE_PATHS.PROJECTS}><MdWorkHistory />{' '}{t("Projects.title")}</Link></li>
        <li className={active(PAGE_PATHS.ARTICLES)} onClick={() => closeDropdown()}><Link href={PAGE_PATHS.ARTICLES}><GoProjectRoadmap />{' '}{t("Articles.title")}</Link></li>
        <li className={active(PAGE_PATHS.STORIES)} onClick={() => closeDropdown()}><Link href={PAGE_PATHS.STORIES}><FaPencil />{' '}{t("Stories.title")}</Link></li>
        <li className={active(PAGE_PATHS.ABOUT)} onClick={() => closeDropdown()}><Link href={PAGE_PATHS.ABOUT}><LuScanFace />{' '}{t("About.title")}</Link></li>
    </>
}

export function Dropdown () {
    return (
         <div className="dropdown sm:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <HiMenuAlt2 className="text-xl" />
            </div>
            <ul
            tabIndex={0}
            className="menu menu-lg dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow border-2">
            <MenuListItems />
            </ul>
        </div>
    )
}