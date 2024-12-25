import { GComment } from "@/server/github/types";
import { getFormatter } from "next-intl/server";

export default async function Comment ({comment}: {comment: GComment}) {

    const format = await getFormatter();


    const formatDate = (text: string) =>{
        return format.dateTime(new Date(text), {year: "numeric", month: "long", day: "2-digit", localeMatcher: "best fit", hour: "2-digit", minute: "2-digit"})
      }

    return (       
        <div className="flex flex-col gap-2">
            <div dangerouslySetInnerHTML={{
                __html: comment.bodyHTML
            }}></div>
            <div className="text-sm">{formatDate(comment.createdAt)}</div>
        </div>
    )
    
}