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
      data-slice-type={slice}
      data-slice-variation={slice.variation}
    >
      <h1>{slice.primary.title}</h1>
      <PrismicRichText field={slice.primary.description} />
      <PrismicImage field={slice.primary.header_image} width={400} />
      <PrismicRichText field={slice.primary.content} />
      </article>
  );
};

export default ProjectMain;
