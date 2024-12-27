import Form from "./Form";
import Comment from "./Comment";
import { GComment } from "@/server/github/types";
import { VscComment } from "react-icons/vsc";
import { getTranslations } from "next-intl/server";


export default async function Comments({data = []}: {data: GComment[]}) {
    const t = await getTranslations("Comment")

    return (
        <section>
            <div className="bg-base-200 collapse collapse-arrow my-5">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-pink-200 peer-checked:bg-pink-300 peer-checked:border-b peer-checked:border-b-black">
                    <div className="flex flex-row gap-3 items-center"><VscComment /> {t("title")} {"(" + data.length + ")"}</div>
                </div>
                <div className="collapse-content bg-gray-100 peer-checked:bg-gray-200 pt-2">
                    <div className="flex flex-col divide-y divide-gray-600 [&>*]:py-3">
                        {data.map((comment,i) => <Comment key={i} comment={comment} /> )}
                    </div>
                </div>
            </div>
            <Form />
        </section>
    )
}