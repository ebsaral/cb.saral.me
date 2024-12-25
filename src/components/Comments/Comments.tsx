import Form from "./Form";
import Comment from "./Comment";
import { GComment } from "@/server/github/types";

export default function Comments({data = []}: {data: GComment[]}) {
    return (
        <>
            <Form />
            <div>Total comments: {data.length}</div>
            <div className="flex flex-col gap-6">
                {data.map((comment,i) => <Comment key={i} comment={comment} /> )}
            </div>
            <div>comments are hosted on discussions of a private repo</div>
        </>
    )
}