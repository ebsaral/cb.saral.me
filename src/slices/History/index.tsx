import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import { MdEditNote } from "react-icons/md";


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
        <div className="divider">History</div>
        <ul className="timeline timeline-vertical">
          <li>
            <div className="timeline-start">{slice.primary.create_date}</div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd" />
                </svg>
              </div>
              <div className="timeline-end timeline-box">Published.</div>
              <hr />
          </li>
          {slice.primary.change_notes.map((note, i)=>{
              return (
                <li key={i}>
                  <div className="timeline-start">{note.change_date}</div>
                  <div className="timeline-middle">
                    <MdEditNote className="text-xl" />
                  </div>
                  <div className="timeline-end timeline-box">{note.change_note}</div>
                  <hr />
                </li>
              )
            })}
        </ul>
      </div>     
    )
  }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {location()}
      {changeNotes()}
    </section>
  );
};

export default History;
