import React from "react";
import {Header, Footer} from "@/components"

export default function Wrapper({children}: {children: React.ReactNode}) {
    return (
        <div className="container max-w-3xl px-10 flex flex-col h-full gap-6">
            <Header />
            {children}
            <Footer />
        </div>
    )

}