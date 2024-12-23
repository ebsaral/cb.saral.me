import { Main } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Content`.
 */
export type ContentProps = SliceComponentProps<Main.ContentSlice>;

/**
 * Component for "Content" Slices.
 */
const Content = ({ slice }: ContentProps) => {
  if(!slice.primary.display) {
    return <></>
  }
  return (
    <article
      className="prose prose-slate prose-p:text-justify prose-p:indent-4"
      data-slice-type={slice}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.text} />
      </article>
  );
};

export default Content;
