import { HiMenuAlt2 } from "react-icons/hi";
import { MdWorkHistory } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { FaPencil } from "react-icons/fa6";
import { LuScanFace } from "react-icons/lu";
import { RiHome9Fill } from "react-icons/ri";

export function MenuListItems() {
    return <>
        <li><a><RiHome9Fill /> Home</a></li>
        <li><a><MdWorkHistory /> Projects</a></li>
        <li><a><GoProjectRoadmap /> Articles</a></li>
        <li><a><FaPencil />Stories</a></li>
        <li><a><LuScanFace /> About</a></li>
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
            className="menu menu-lg dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <MenuListItems />
            </ul>
        </div>
    )
}