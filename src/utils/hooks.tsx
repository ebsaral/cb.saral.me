import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { getBasepath } from "./helpers";

export function useCurrentPath() {
    const locale = useLocale();
    const path = usePathname();
    const currPath = getBasepath(locale, path)
    return currPath;
}