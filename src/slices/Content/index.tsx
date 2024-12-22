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
    <section
      className="flex flex-col items-center"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div><PrismicImage field={slice.primary.header_image} width={400} /></div>
      <div><PrismicRichText field={slice.primary.content} /></div>
    </section>
  );
};

export default ProjectMain;
