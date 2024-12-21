"use client"

import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";

import { MenuListItems, Dropdown } from "@/components";


// function basepath(pathname: string) {
//   const p = pathname.split('/', 2).filter((v)=>v.length > 0)[0] || "main"
//   return p
// } 

export default function Header() {
  const locale = useLocale();
  return (
    <div className="sticky top-0 navbar bg-base-100">
      <div className="navbar-start">
       <Dropdown />
      </div>
      <div className="navbar-center">
        <Link className="btn btn-ghost text-base sm:text-xl" locale={locale} href="/">cb.saral.me</Link>
        <div className="ml-4 sm:ml-10 text-base sm:text-xl text-gray-600 max-sm:hidden">
          <ul className="menu menu-horizontal bg-base-200">
            <MenuListItems />
          </ul>
        </div>
      </div>
      <div className="navbar-end"></div>
    </div>
  )
}