import Form from "./Form";
import Comment from "./Comment";
import { GComment } from "@/server/github/types";
import { VscComment } from "react-icons/vsc";
import { getTranslations } from "next-intl/server";


export default async function Comments({data = []}: {data: GComment[]}) {
    const t = await getTranslations("Comment")

    return (
        <section>
            <Form />

            <div className="bg-base-200 collapse">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-slate-200 peer-checked:bg-slate-200 peer-checked:border-b peer-checked:border-b-black">
                <div className="flex flex-row gap-3 items-center"><VscComment /> {t("title")} {"(" + data.length + ")"}</div>
            </div>
            <div className="collapse-content bg-slate-200 peer-checked:bg-slate-200 pt-6">
                <div className="flex flex-col gap-6 divide-y-2">
                    {data.map((comment,i) => <Comment key={i} comment={comment} /> )}
                </div>
            </div>
            </div>
        </section>
    )
}