import { PAGE_PATHS } from "@/types";
import { FaPencil } from "react-icons/fa6";
import { GoProjectRoadmap } from "react-icons/go";
import { LuScanFace } from "react-icons/lu";
import { MdWorkHistory } from "react-icons/md";
import { RiHome9Fill } from "react-icons/ri";

export const MenuItemIcons = {
    [PAGE_PATHS.HOME]: <RiHome9Fill />,
    [PAGE_PATHS.PROJECTS]: <MdWorkHistory />,
    [PAGE_PATHS.ARTICLES]: <GoProjectRoadmap />,
    [PAGE_PATHS.STORIES]: <FaPencil />,
    [PAGE_PATHS.ABOUT]: <LuScanFace />,
}

export function getMenuItemIcon(path: PAGE_PATHS) : React.ReactNode {
    return MenuItemIcons[path]
}