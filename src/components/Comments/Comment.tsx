import { GComment } from "@/server/github/types";

export default function Comment ({comment}: {comment: GComment}) {
    return (
        <div>
            {comment.createdAt}
            {comment.bodyHTML}
        </div>
    )
    
}