'use client'

import { Plus } from "lucide-react"
import Link from "next/link";
import { useTranslation } from "react-i18next";

export function ContactButton() {
    const {t} = useTranslation();
    return (
        <Link href='/contact' className="bg-orangePrimary hover:bg-orangePrimaryHover border-[1px] shadow-lg shadow-orangePrimary/25 border-contactBtnBG text-white font-bold py-2 px-4 rounded-[7px] flex items-center w-fit min-w-fit">
            {t('header.buttons.contact')}
            <Plus className="ml-2" width="20" height="20" />
        </Link>
    )
}