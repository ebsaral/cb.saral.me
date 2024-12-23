import React from "react";
import {Header, Footer} from "@/components"

export default function Wrapper({children}: {children: React.ReactNode}) {
    return (
        <div className="flex flex-col gap-6">
            <Header />
            <div className="container flex flex-col gap-6 max-w-3xl min-h-screen px-10">
                {children}
            </div>
            <Footer />
        </div>
    )

}