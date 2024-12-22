export function getBasepath(locale: string, pathname: string) {
    const paths = pathname.split("/" + locale, 2).filter((x) => x.length)
    return paths[0] || "/"
}
