"use client"

import axios from "axios"
import { useLocale, useTranslations } from "next-intl"
import { usePathname } from "next/navigation"
import { useRef, useState } from "react"

import ReCAPTCHA from "react-google-recaptcha"

export default function Form ({onSuccess}: {onSuccess?: () => void}) {
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const locale = useLocale();
    const [token, setToken] = useState<string | null>();
    const [value, setValue] = useState("")
    const [disabled, setDisabled] = useState(true);
    const [sent, setSent] = useState(false);
    const t = useTranslations("Comment")

    const pathname = usePathname()


    const apiPath = `/api/comments/${pathname}`;
    
    function showErrorDialog () {
        (document.getElementById('form-error') as HTMLDialogElement).showModal()
    }

    const handleSubmit = () => {
        if(!value) {
            return
        }
        if(!token) {
            showErrorDialog()
            return
        }
        console.info("Sending comment")
        setDisabled(true)

        axios.post(apiPath, {message: value, token}).catch(() => {
            showErrorDialog()
            recaptchaRef.current?.reset()
        }).then((data) => {
            console.info(data)
            setSent(true)
            onSuccess?.()
        }).finally(() => {
            setDisabled(false)
        })
    }

    if(sent) {
        return (
        <div>
            <div>{t("success")}</div>
        </div>
        )
    }

    return (
        <div className="form flex flex-col items-center gap-6">
            <dialog id="form-error" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{t("modal.title")}</h3>
                    <p className="py-4">{t("modal.text")}</p>
                    <div className="modal-action">
                    <form method="dialog">
                        <button className="btn">{t("modal.close")}</button>
                    </form>
                    </div>
                </div>
            </dialog>
            <textarea
                value={value}
                onChange={(event) => {
                    const value = event.currentTarget.value.trim()
                    if(value.length > 0) {
                        setDisabled(false)
                        setValue(value)
                    }
                    else {
                        setDisabled(true)
                    }
                }}
                placeholder={t("placeholder")}
                className="textarea textarea-bordered textarea-lg w-full max-w-lg" />
                <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY || ""}   
                    onChange={(token) => setToken(token)}
                    hl={locale}
                />
            <button disabled={disabled} className={`btn`} onClick={() => handleSubmit()}>{t("submit")}</button>
        </div>
    )
}