'use client'

import { useTranslation } from 'react-i18next'
import { HtmlIcon, CSSIcon, JSIcon, TSIcon, AstroIcon, NextIcon, ReactIcon, FigmaIcon, FramerIcon, GitIcon } from '../../assets/icons/TechIcons'

export function Stack({className = ""}) {
    
    const {t} = useTranslation()
    return (
        <section className={`flex flex-col gap-[40px] sm:gap-[70px] bg-cardBG border-cardBorder border-[2px] rounded-[14px] px-[32px] sm:px-[50px] py-[50px] overflow-hidden min-w-fit ${className}`}>
            <div className='flex flex-col items-center justify-center gap-[15px] '>
                <h2 className="text-[18px] sm:text-[24px] font-semibold z-10 text-center">{t('stack.title')}</h2>
                <p className='text-textGray text-[16px] sm:text-[18px] max-w-[300px] text-center leading-8'>{t('stack.text')} 
                    <span className='text-orangePrimary text-[16px] sm:text-[18px]'>{t('stack.projects')}</span></p>
            </div>

            <div className='grid grid-cols-[repeat(auto-fill,_minmax(100px,_1fr))] gap-6 place-items-center'>

                <div className='bg-[#4B2A1D] p-2 rounded-full w-fit'>
                    <HtmlIcon width={48} height={48} className="hover:scale-110 transition-transform " />
                </div>
                <div className='bg-[#15314D] p-2 rounded-full w-fit'>
                    <CSSIcon width={48} height={48} className="hover:scale-110 transition-transform" />
                </div>
                <div className='bg-[#47361E] p-2 rounded-full w-fit'>
                    <JSIcon width={48} height={48} className="hover:scale-110 transition-transform" />
                </div>
                <div className='bg-[#15314D] p-2 rounded-full w-fit'>
                    <ReactIcon width={48} height={48} className="hover:scale-110 transition-transform " />
                </div>

                <div className='bg-[#15314D] p-2 rounded-full w-fit'>
                    <TSIcon width={48} height={48} className="hover:scale-110 transition-transform" />
                </div>
                <div className='bg-[#ff5e0146] p-2 rounded-full w-fit'>
                    <AstroIcon width={48} height={48} className="hover:scale-110 transition-transform" />
                </div>
                <div className='bg-[#333333] p-2 rounded-full w-fit'>
                    <NextIcon width={48} height={48} className="hover:scale-110 transition-transform " />
                </div>
                <div className='bg-[#4B2A1D] p-2 rounded-full w-fit'>
                    <GitIcon width={48} height={48} className="hover:scale-110 transition-transform" />
                </div>

                <div className='bg-[#4d2015] p-2 rounded-full w-fit'>
                    <FigmaIcon width={48} height={48} className="hover:scale-110 transition-transform" />
                </div>
                <div className='bg-[#333333] p-2 rounded-full w-fit'>
                    <FramerIcon width={48} height={48} className="hover:scale-110 transition-transform " />
                </div>

            </div>
        </section>
    )
}