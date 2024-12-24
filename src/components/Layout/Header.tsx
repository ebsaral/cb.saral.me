"use client"

import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";

import { Dropdown, Language, Menu } from "@/components";
import { useCurrentPath } from "@/utils/hooks";
import { getMenuItemIcon } from "../helpers";
import { PAGE_PATHS } from "@/types";


export default function Header() {
  const locale = useLocale();
  const path = useCurrentPath();

  return (
    <div className="sticky top-0 navbar bg-base-100 z-10 border-b-2">
      <div className="navbar-start">
       <Dropdown />
      </div>
      <div className="navbar-center">
        <Link className="btn btn-ghost text-base sm:text-xl text-red-600" locale={locale} href="/">
          <span className={`${path != "/" && "text-foreground"}`}>{getMenuItemIcon(PAGE_PATHS.HOME)}</span> cb.saral.me
        </Link>
        <Menu />
      </div>
      <div className="navbar-end">
        <Language />
      </div>
    </div>
  )
}