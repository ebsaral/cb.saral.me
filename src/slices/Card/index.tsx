import { Link } from "@/i18n/routing";
import { Content } from "@prismicio/client";
import { PrismicImage, PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Card`.
 */
export type CardProps = SliceComponentProps<Content.CardSlice>;

/**
 * Component for "Card" Slices.
 */
const Card = ({ slice, context }: CardProps) => {
  const {href, locale} = context as {href: string, locale: string}
  return (

    <div className="card bg-base-100 min-w-72 shadow-xl border-2">
      <figure className="px-10 pt-10">
        <PrismicImage className="rounded-xl" field={slice.primary.header_image} />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{slice.primary.title}</h2>
        <PrismicRichText field={slice.primary.description} />
        <div className="card-actions justify-center">
        <Link className="btn btn-primary" href={href} locale={locale}>
          Read Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
