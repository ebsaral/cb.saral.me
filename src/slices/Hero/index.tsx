import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps) => {
  if(!slice.primary.display){
    return <></>
  }
  return (
    <div
      className="hero h-80"
      style={{
        backgroundImage: `url(${slice.primary.image.url})`,
      }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{slice.primary.title}</h1>
          <p className="mb-5">{slice.primary.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
