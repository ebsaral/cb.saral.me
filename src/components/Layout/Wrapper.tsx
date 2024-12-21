import React from "react";
import {Header, Footer} from "@/components"

export default function Wrapper({children}: {children: React.ReactNode}) {

    return (
        <div className="flex flex-col h-screen gap-6">
            <Header />
            {children}
            <Footer />
        </div>
    )

}