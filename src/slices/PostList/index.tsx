import { Content } from "@prismicio/client";
import { PrismicImage, SliceComponentProps } from "@prismicio/react";
import { Link } from "@/i18n/routing";
import { createClient } from "@/prismicio";
import { getLocale, getTranslations } from "next-intl/server";
import { buildUrl, filterUIDs } from "../helpers";

/**
 * Props for `PostList`.
 */
export type PostListProps = SliceComponentProps<Content.PostListSlice>;

/**
 * Component for "PostList" Slices.
 */
const PostList = async({ slice }: PostListProps) => {
  const locale = await getLocale();
  const t = await getTranslations("Slices.PostList")
  
  if(!slice.primary.display){
    return <></>
  }

  const client = createClient()
  const uidList = filterUIDs(slice)
  const pages = await client.getAllByUIDs("post", uidList, {lang: locale})

  if(slice.primary.posts.length == 0){
    return <section className="text-center">{t("no_post")}</section>
  }

  return (
    <section>
      <div className="divider">{slice.primary.title || t("default_title")}</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-around gap-6 z-0">
        {pages.length == 0 && <div>{t("no_post")}</div>}
        {pages.map((page) => {
          return (
            <div key={page.id} className="card bg-base-100 min-w-72 shadow-xl border-2">
              <figure className="px-10 pt-10">
                <PrismicImage className="rounded-xl" field={page.data.meta_image} />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{page.data.meta_title}</h2>
                <p>{page.data.meta_description}</p>
                <div className="card-actions justify-center">
                <Link className="btn btn-primary" href={buildUrl(page)} locale={locale}>{t("read_now")}</Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
};

export default PostList;
