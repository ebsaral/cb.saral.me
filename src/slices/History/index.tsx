import { Content, TimestampField } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { getFormatter, getTranslations } from "next-intl/server";

import { MdEditNote } from "react-icons/md";


/**
 * Props for `History`.
 */
export type HistoryProps = SliceComponentProps<Content.HistorySlice>;

/**
 * Component for "History" Slices.
 */
const History = async ({ slice }: HistoryProps) => {
  const t = await getTranslations("Slices.History")
  const format = await getFormatter();

  if(!slice.primary.display){
    return <></>
  }

  const location =() => {
    if(!slice.primary.location.latitude || !slice.primary.location.longitude) {
      return <></>
    }
    return <div>Location: {slice.primary.location.latitude}, {slice.primary.location.longitude}</div>
  }


  const formatDate = (field: TimestampField) =>{
    if(!field){
      return <i>{t("date_not_found")}</i>
    }
    return format.dateTime(new Date(field?.toString() || ""), {year: "numeric", month: "long", day: "2-digit", localeMatcher: "best fit", hour: "2-digit", minute: "2-digit"})
  }

  const changeNotes = () => {    
    return (
      <div>
        <div className="divider">{slice.primary.title || t("default_title")}</div>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical text-xs">
          <li>
            <div className="timeline-start">{formatDate(slice.primary.create_date)}</div>
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
              <div className="timeline-end timeline-box">{slice.primary.custom_creation_change_note || t("published")}</div>
              <hr />
          </li>
          {slice.primary.change_notes.map((note, i)=>{
              return (
                <li key={i}>
                  <hr />
                  <div className="timeline-start">{formatDate(note.change_date)}</div>
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
