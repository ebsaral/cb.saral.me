import { Content } from "@prismicio/client";
import { Simplify } from "../../../prismicio-types";
import { CustomPrismicLink } from "../components";
import { FiLink2 } from "react-icons/fi";

export default function Refecence ({reference}: {reference: Simplify<Content.PostReferencesSliceDefaultPrimaryReferencesItem>}) {
    return (
        <div className="flex flex-row items-start gap-3 [&>*]:py-2">
            <div className="flex flex-col gap-2">
                <div>
                    <CustomPrismicLink className="font-bold link" link={reference.link} />: {reference.description}
                </div>
                <div className="text-sm flex flex-row gap-2 items-center hover:underline">
                    <FiLink2 /> <CustomPrismicLink link={reference.link} fullDisplay={true} />
                </div>
            </div>
        </div>
    )
}