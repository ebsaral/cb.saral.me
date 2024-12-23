import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { CustomPrismicLink } from "../components";
import { VscReferences } from "react-icons/vsc";


/**
 * Props for `PostReferences`.
 */
export type PostReferencesProps =
  SliceComponentProps<Content.PostReferencesSlice>;

/**
 * Component for "PostReferences" Slices.
 */
const PostReferences = async ({ slice }: PostReferencesProps) => {
  if(!slice.primary.display) {
    return <></>
  }
  const count = slice.primary.references.length;

  const references = () => {
    if(count == 0){
      return <div>--</div>
    }
    return (
      <div className="flex flex-col gap-2">
        {slice.primary.references.map((reference, i)=> {
          return <div key={i} className="py-2"><CustomPrismicLink className="font-bold link" link={reference.link} />: {reference.description}</div>
        })}
      </div>
    )
  }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="bg-base-200 collapse">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-slate-200 peer-checked:bg-slate-200 peer-checked:border-b peer-checked:border-b-black">
          <div className="flex flex-row gap-3 items-center"><VscReferences /> {slice.primary.title} {"(" + count + ")"}</div>
        </div>
        <div
          className="collapse-content bg-slate-200 peer-checked:bg-slate-200">
          {references()}
        </div>
      </div>
    </section>
  );
};

export default PostReferences;
