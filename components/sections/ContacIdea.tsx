'use client'

import Image from "next/image";
import StickerIdea from '../../assets/images/stickerIdea.webp'
import { ShimmerButtonUI } from "../ui/shimmerBtnUI";
import { useTranslation } from "react-i18next";

export function ContactIdea() {
    const {t} = useTranslation();
    return (
        <section className="flex flex-col items-center justify-center gap-[22px] bg-cardBG border-cardBorder border-[2px] rounded-[14px] px-[32px] py-[40px] sm:px-[42px] sm:py-[60px] overflow-hidden max-h-fit">
            <div className='flex flex-col items-center justify-center gap-[12px] mx-auto text-center'>
                <h2 className="text-[16px] sm:text-[22px] font-semibold z-10 text-center ">{t('contact.title')}</h2>
                <p className='text-textGray text-[14px] sm:text-[18px] max-w-[350px] text-center leading-8 text-balance'>{t('contact.text')} </p>
            </div>

            <div>
                <Image src={StickerIdea} alt='Avatar de Carlos' width='172' height='172' className="transition-all hover:scale-125" loading='eager' quality={100} priority />
            </div>
            <ShimmerButtonUI />
        </section>
    )
}