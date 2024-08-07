'use client'

import ShimmerButton from "@/components/magicui/shimmer-button";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export function ShimmerButtonUI() {
    const { t } = useTranslation();
    return (
        <div className="z-10 flex items-center justify-center">
            <Link href='/contact'>
                <ShimmerButton className="shadow-2xl" >
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                        {t('contact.button')}
                    </span>
                </ShimmerButton>
            </Link>
        </div>
    )
}