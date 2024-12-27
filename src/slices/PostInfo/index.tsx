import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { VscReferences } from "react-icons/vsc";
import Reference from "./Reference";


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

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="bg-base-200 collapse collapse-arrow">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-orange-200 peer-checked:bg-orange-300 peer-checked:border-b peer-checked:border-b-black">
          <div className="flex flex-row gap-3 items-center"><VscReferences /> {slice.primary.title} {"(" + count + ")"}</div>
        </div>
        <div
          className="collapse-content bg-gray-100 peer-checked:bg-gray-200">
          <div className="flex flex-col gap-2 divide-y divide-gray-600">
            {slice.primary.references.map((reference, i)=> {
              return <Reference key={i} reference={reference} />
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostReferences;
