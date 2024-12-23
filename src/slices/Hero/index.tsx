import { Main } from "@prismicio/client";
import { PrismicImage, PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Main.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps) => {
  if(!slice.primary.display){
    return <></>
  }
  return (
    <section
      className="flex flex-col sm:flex-row gap-6 items-stretch sm:items-start"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div>
        <PrismicImage className="w-96" field={slice.primary.image} />
      </div>
      <div>
        <div>{slice.primary.title}</div>
        <article className="prose prose-slate prose-p:text-justify prose-p:indent-4"><PrismicRichText field={slice.primary.description} /></article>
      </div>
    </section>
  );
};

export default Hero;
