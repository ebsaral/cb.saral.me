"use client"

import { HiMenuAlt2 } from "react-icons/hi";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { useCurrentPath } from "@/utils/hooks";
import { PAGE_PATHS } from "@/types";
import { getMenuItemIcon } from "../helpers";


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
        <li className={active(PAGE_PATHS.PROJECTS)} onClick={() => closeDropdown()}><Link href={PAGE_PATHS.PROJECTS}>{getMenuItemIcon(PAGE_PATHS.PROJECTS)}{' '}{t("Projects.title")}</Link></li>
        <li className={active(PAGE_PATHS.ARTICLES)} onClick={() => closeDropdown()}><Link href={PAGE_PATHS.ARTICLES}>{getMenuItemIcon(PAGE_PATHS.ARTICLES)}{' '}{t("Articles.title")}</Link></li>
        <li className={active(PAGE_PATHS.STORIES)} onClick={() => closeDropdown()}><Link href={PAGE_PATHS.STORIES}>{getMenuItemIcon(PAGE_PATHS.STORIES)}{' '}{t("Stories.title")}</Link></li>
        <li className={active(PAGE_PATHS.ABOUT)} onClick={() => closeDropdown()}><Link href={PAGE_PATHS.ABOUT}>{getMenuItemIcon(PAGE_PATHS.ABOUT)}{' '}{t("About.title")}</Link></li>
    </>
}

export function Menu() {
    return (
        <div className="ml-4 sm:ml-10 text-base sm:text-xl text-gray-600 max-sm:hidden">
            <ul className="menu menu-horizontal bg-base-200">
            <MenuListItems />
            </ul>
        </div>
    )
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