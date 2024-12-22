function split(str: string, value: string) {
    return str.split(value, 2).filter((value) => value)
}

export function getBasepath(locale: string, pathname: string): string {
    const paths = split(pathname, "/" + locale);
    // Homepage
    if(paths.length == 0){
        return "/"
    }
    // Page
    const page = split(paths[0], "/")
    return "/" + page[0]
}
