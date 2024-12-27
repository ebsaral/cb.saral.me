import { Content as ContentType, ImageField } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { linkResolver } from "../helpers";
import { LinkTypeDocument, LinkTypeWeb } from "../types";
import { CustomPrismicImage } from "../components";
import Link from "next/link";

/**
 * Props for `Content`.
 */
export type ContentProps = SliceComponentProps<ContentType.ProjectMainSlice>;

/**
 * Component for "Content" Slices.
 */

const components = {
  image: async ({ node }: {node: ImageField }) => {
    const field = node as ImageField & {linkTo: (LinkTypeWeb | LinkTypeDocument)}
    const link = await linkResolver({link: field.linkTo})
    function Image() {
      return <CustomPrismicImage field={field} />
    }

    if(link) {
      return <Link className="no-underline hover:underline" href={link}><Image /></Link>
    }
    return <Image />
  },
}

const Content = ({ slice }: ContentProps) => {
  if(!slice.primary.display) {
    return <></>
  }
  return (
    <article
      className="max-w-full prose prose-slate prose-p:text-justify prose-p:indent-4"
      data-slice-type={slice}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.text} components={components} />
      </article>
  );
};

export default Content;
