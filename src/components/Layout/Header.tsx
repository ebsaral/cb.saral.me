"use client"

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";

import { HiMenuAlt2 } from "react-icons/hi";
import { RiHome9Fill } from "react-icons/ri";
import { MdWorkHistory } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { FaPencil } from "react-icons/fa6";
import { LuScanFace } from "react-icons/lu";


function basepath(pathname: string) {
  const p = pathname.split('/', 2).filter((v)=>v.length > 0)[0] || "main"
  return p
} 

export default function Header() {
  const locale = useLocale();
  const pathname = usePathname();
  return (
    <div className="sticky top-0 navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <HiMenuAlt2 className="text-xl" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-lg dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><a><RiHome9Fill /> Home</a></li>
            <li><a><MdWorkHistory /> Projects</a></li>
            <li><a><GoProjectRoadmap /> Articles</a></li>
            <li><a><FaPencil />Stories</a></li>
            <li><a><LuScanFace /> About</a></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link className="btn btn-ghost text-base sm:text-xl" locale={locale} href="/"><RiHome9Fill /> cb.saral.me</Link>
        <div className="ml-4 sm:ml-10 text-base sm:text-xl text-gray-600">{basepath(pathname)}</div>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </div>
  )
}