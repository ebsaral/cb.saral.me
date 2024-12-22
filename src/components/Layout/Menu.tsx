import { HiMenuAlt2 } from "react-icons/hi";
import { MdWorkHistory } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { FaPencil } from "react-icons/fa6";
import { LuScanFace } from "react-icons/lu";
import { RiHome9Fill } from "react-icons/ri";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export function MenuListItems() {
    const t = useTranslations("Pages")
    return <>
        <li><Link href="/"><RiHome9Fill />{' '}{t("Home.title")}</Link></li>
        <li><Link href="/projects"><MdWorkHistory />{' '}{t("Projects.title")}</Link></li>
        <li><Link href="/articles"><GoProjectRoadmap />{' '}{t("Articles.title")}</Link></li>
        <li><Link href="/stories"><FaPencil />{' '}{t("Stories.title")}</Link></li>
        <li><Link href="/about"><LuScanFace />{' '}{t("About.title")}</Link></li>
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