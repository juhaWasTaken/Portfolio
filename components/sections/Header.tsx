'use client'

import Image from 'next/image';
import Sticker from '../../assets/images/stickerThumbUp.webp'
import { StatusWork } from '../ui/StatusWork';
import { CopyButton } from '../ui/CopyButton';
import { ContactButton } from '../ui/ContactButton';
import { WordRotateFunction } from '../ui/WordRotate';
import { useTranslation } from 'react-i18next';

export function Header() {
    const isAvailable = true
    const {t} = useTranslation();
    return (
        <header className="flex flex-col gap-[40px] sm:gap-[70px] bg-cardBG border-cardBorder border-[2px] rounded-[14px] px-[32px] py-[40px] sm:px-[42px] sm:py-[60px] overflow-hidden">
            <div className="flex flex-col gap-[15px] sm:flex-row sm:items-center sm:justify-between">
                <StatusWork isAvailable={isAvailable} className="sm:order-last" />
                <h3 className="text-textGray text-[18px] sm:text-2xl">{t('header.roles.design-web')}</h3>
                {/* <WordRotateFunction /> */}
            </div>
            <div className="flex flex-col gap-[30px] sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-[28px] order-last sm:order-first">
                    <div className="flex flex-col gap-[15px] max-w-[319px]">
                        <h1 className="font-semibold text-2xl sm:text-4xl">Carlos Gallaga</h1>
                        <p className="text-textGray text-[16px] sm:text-xl leading-[1.2em] max-w-[319px] text-pretty">{t('header.description')}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-[14px] sm:flex-1 sm:min-w-fit">
                        <ContactButton />
                        <CopyButton />
                    </div>
                </div>
                <div className="flex items-center bg-circleBigBG w-fit rounded-full p-[12px] border-circlesBorder border">
                    <div className="bg-cardBorder w-fit rounded-full border border-circlesBorder p-2">
                        <Image src={Sticker} alt='Carlos Avatar' width='132' height='132' className="transition-all hover:scale-125" loading='eager' quality={100} priority />
                    </div>
                </div>
            </div>
        </header>
    );
}