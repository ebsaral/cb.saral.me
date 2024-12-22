import { HiMenuAlt2 } from "react-icons/hi";
import { MdWorkHistory } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { FaPencil } from "react-icons/fa6";
import { LuScanFace } from "react-icons/lu";
import { RiHome9Fill } from "react-icons/ri";
import { useTranslations } from "next-intl";

export function MenuListItems() {
    const t = useTranslations("Pages")
    return <>
        <li><a><RiHome9Fill />{' '}{t("Home.title")}</a></li>
        <li><a><MdWorkHistory />{' '}{t("Projects.title")}</a></li>
        <li><a><GoProjectRoadmap />{' '}{t("Articles.title")}</a></li>
        <li><a><FaPencil />{' '}{t("Stories.title")}</a></li>
        <li><a><LuScanFace />{' '}{t("About.title")}</a></li>
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