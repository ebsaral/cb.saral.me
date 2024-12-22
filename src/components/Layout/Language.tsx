"use client"

import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { PiGlobeSimpleDuotone } from "react-icons/pi";


export function getBasepath(path: string) {
    return "/" + (path.split('/', 2).filter((v)=>v.length > 0)[0] || "")
}

export function Language() {
    const locale = useLocale()
    const path = usePathname()

    return (
         <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <PiGlobeSimpleDuotone className="text-xl" />
            </div>
            <ul tabIndex={0} className="menu menu-lg dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow border-2">
                {locale != "tr" && <li><Link href={getBasepath(path)} locale="tr">Türkçe</Link></li>}
                {locale != "en" && <li><Link href={getBasepath(path)} locale="en">English</Link></li>}
            </ul>
        </div>
    )
}