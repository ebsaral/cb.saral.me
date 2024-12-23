import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Divider`.
 */
export type DividerProps = SliceComponentProps<Content.DividerSlice>;

/**
 * Component for "Divider" Slices.
 */
const Divider = ({ slice }: DividerProps) => {
  if(!slice.primary.display){
    return null
  }
  return (
    <div className="divider">{slice.primary.text}</div>
  );
};

export default Divider;
