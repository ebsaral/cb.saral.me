"use client"

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type DiscussionComment = {
    bodyHTML: string
}

export default function Comment() {
    const pathname = usePathname()
    const [comment, setComment] = useState("")
    const [comments, setComments] = useState<DiscussionComment[]>()

    const apiPath = `/api/comments/${pathname}`;
    
    useEffect(() => {
        fetch(apiPath, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
          }).then((r) => {
            r.json().then(value => {
                if(value.comments.totalCount){
                    setComments(value.comments.nodes)
                }
                
            })
        });
    }, [apiPath])


    const handleSubmit = () => {
        if(!comment) {
            return
        }

        fetch(apiPath, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              message: comment
            }),
          }).then((r) => console.info(r.json()));
    }
    
    return (
        <>
            <div>Total comment(s): {comments ? comments.length: 0}</div>
            <div>
                {comments && comments.map((comment, i: number) => {
                    return (
                        <div key={i}>{comment.bodyHTML}</div>
                    )
                })}
            </div>
            <form method="POST" onSubmit={handleSubmit}>
                <textarea
                    value={comment}
                    onChange={(event) => setComment(event.currentTarget.value)}
                    placeholder="Leave your comment"
                    className="textarea textarea-bordered textarea-sm w-full max-w-xs"></textarea>
                <input className="btn" type="submit" value="Send" />
            </form>
            <div>comments are hosted on discussions of a private repo</div>
        </>
    )
}