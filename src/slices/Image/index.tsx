import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { CustomPrismicImage } from "../components";

/**
 * Props for `Image`.
 */
export type ImageProps = SliceComponentProps<Content.ImageSlice>;

/**
 * Component for "Image" Slices.
 */
const Image = ({ slice }: ImageProps) => {
  if(!slice.primary.display) {
    return <></>
  }
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <CustomPrismicImage field={slice.primary.image} />
    </section>
  );
};

export default Image;
