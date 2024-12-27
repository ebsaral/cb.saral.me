import { getLocale, getTranslations } from "next-intl/server"


function Link({href, children} : {href: string, children: React.ReactNode}){
  return <a className="underline hover:no-underline" href={href} target="_blank">{children}</a>
}

export default async function Footer() {
    const t = await getTranslations("Footer")
    const locale = await getLocale()

    return (
    <footer className="sticky bottom-0 footer footer-center text-base-content border-t-2 p-4 bg-background">
        <aside>
          <p>{t.rich("info", {date: new Date().getFullYear(), owner_link: (chunks) => <Link href={`https://saral.me/${locale}`}>{chunks}</Link>})}</p>
          <p>{t.rich("github", {github_link: (chunks)=> <Link href="https://github.com/ebsaral/cb.saral.me">{chunks}</Link>})}</p>
        </aside>
    </footer>
    )
}