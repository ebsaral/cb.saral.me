"use client"

import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";

import { MenuListItems, Dropdown } from "@/components";
import { Language } from "./Language";


export default function Header() {
  const locale = useLocale();
  return (
    <div className="sticky top-0 navbar bg-base-100 z-10">
      <div className="navbar-start">
       <Dropdown />
      </div>
      <div className="navbar-center">
        <Link className="btn btn-ghost text-base sm:text-xl text-red-600" locale={locale} href="/">cb.saral.me</Link>
        <div className="ml-4 sm:ml-10 text-base sm:text-xl text-gray-600 max-sm:hidden">
          <ul className="menu menu-horizontal bg-base-200">
            <MenuListItems />
          </ul>
        </div>
      </div>
      <div className="navbar-end">
        <Language />
      </div>
    </div>
  )
}