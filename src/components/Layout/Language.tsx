"use client"

import { Link } from "@/i18n/routing";
import { useCurrentPath } from "@/utils/hooks";
import { useLocale } from "next-intl";
import { PiGlobeSimpleDuotone } from "react-icons/pi";


export function Language() {
    const locale = useLocale()
    const currPath = useCurrentPath()

    return (
         <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost">
            {locale} <PiGlobeSimpleDuotone className="text-xl" />
            </div>
            <ul tabIndex={0} className="menu menu-lg dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow border-2">
                {locale != "tr" && <li><Link href={currPath} locale="tr">Türkçe</Link></li>}
                {locale != "en" && <li><Link href={currPath} locale="en">English</Link></li>}
            </ul>
        </div>
    )
}