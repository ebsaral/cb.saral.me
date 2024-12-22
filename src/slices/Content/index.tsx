import { Content } from "@prismicio/client";
import { PrismicImage, PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ProjectMain`.
 */
export type ProjectMainProps = SliceComponentProps<Content.ProjectMainSlice>;

/**
 * Component for "ProjectMain" Slices.
 */
const ProjectMain = ({ slice }: ProjectMainProps) => {
  return (
    <article
      className="prose prose-slate prose-p:text-justify prose-p:indent-4"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicImage field={slice.primary.header_image} width={400} />
      <PrismicRichText field={slice.primary.content} />
      </article>
  );
};

export default ProjectMain;
