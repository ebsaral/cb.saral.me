import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `History`.
 */
export type HistoryProps = SliceComponentProps<Content.HistorySlice>;

/**
 * Component for "History" Slices.
 */
const History = ({ slice }: HistoryProps) => {
  if(!slice.primary.display){
    return <></>
  }

  const location =() => {
    if(!slice.primary.location.latitude || !slice.primary.location.longitude) {
      return <></>
    }
    return <div>Location: {slice.primary.location.latitude}, {slice.primary.location.longitude}</div>
  }


  const changeNotes = () => {
    if(slice.primary.change_notes.length == 0){
      return <></>
    }
    
    return (
      <div>
          {slice.primary.change_notes.map((note, i)=>{
            return <div key={i}>{i+1}{') '}{note.change_note}</div>
          })}
      </div>
    )
  }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div>Publish date: {slice.primary.create_date}</div>
      <div>Last update date: {slice.primary.last_update_date}</div>
      {location()}
      {changeNotes()}
    </section>
  );
};

export default History;
