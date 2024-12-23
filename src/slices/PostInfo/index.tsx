import { Link } from "@/i18n/routing";
import { Main } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `PostReferences`.
 */
export type PostReferencesProps =
  SliceComponentProps<Main.PostReferencesSlice>;

/**
 * Component for "PostReferences" Slices.
 */
const PostReferences = ({ slice }: PostReferencesProps) => {
  if(!slice.primary.display) {
    return <></>
  }

  const references = () => {
    if(slice.primary.references.length == 0){
      return <div>There is no reference in this post.</div>
    }
    return (
      <div>
        {slice.primary.references.map((reference, i)=> {
          console.log(reference.link)
          return <div key={i}><Link href={""}>{reference.link.text}</Link>: {reference.description}</div>
        })}
      </div>
    )
  }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div>{slice.primary.title}</div>
      {references()}
    </section>
  );
};

export default PostReferences;
