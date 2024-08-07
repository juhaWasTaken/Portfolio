'use client'

import { ArrowRight } from 'lucide-react'
import portfolio from '@/assets/images/works/portfolio.webp'
import kreatif from '@/assets/images/works/kreatif.webp'
import product from '@/assets/images/works/product.webp'
import az from '@/assets/images/works/az.webp'
import nile from '@/assets/images/works/nile.webp'
import { ReactTSX, NextJS, Typescript, TailwindCSS, Astro, FramerW, Firebase, GitHubIcon } from '@/assets/icons/TechIcons'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

const technologyIcons: { [key: string]: JSX.Element } = {
    'React': <ReactTSX />,
    'Next JS': <NextJS />,
    'Typescript': <Typescript />,
    'Tailwind CSS': <TailwindCSS />,
    'Astro': <Astro />,
    'Framer': <FramerW />,
    'Firebase': <Firebase />
}



export function Works() {
    const {t} = useTranslation()
    const works = [
        {
            title: 'KV MAQUINADOS',
            description: 'projects:works.kv-maquinados.description',
            image: portfolio,
            tags: ['Next JS', 'React', 'Typescript', 'Tailwind CSS'],
            link: 'https://carlosgallaga.framer.website/',
            code: "https://github.com/juhaWasTaken/kv-maquinados"
        },
        {
            title: 'Product Admin Dashboard',
            description: 'projects:works.producto-admin.description',
            image: product,
            tags: ['Next JS', 'React', 'Typescript', 'Tailwind CSS', 'Firebase'],
            link: 'https://product-admin-nextjs-tutorial-ten.vercel.app/',
            code: "https://github.com/juhaWasTaken/Product-admin-nextjs-tutorial"
        },
        {
            title: 'Kreatif Software',
            description: 'projects:works.kreatif.description',
            image: kreatif,
            tags: ['Astro', 'Typescript', 'Tailwind CSS'],
            link: 'https://kreaatif-software.netlify.app/',
            code: "https://github.com/juhaWasTaken/kreatif-software-example"
        },
        {
            title: 'Portfolio',
            description: 'projects:works.portfolio.description',
            image: portfolio,
            tags: ['Next JS', 'React', 'Typescript', 'Tailwind CSS'],
            link: 'https://carlosgallaga.framer.website/',
            code: "https://github.com/juhaWasTaken/Portfolio-Dev"
        },
        {
            title: 'NILE',
            description: 'projects:works.nile.description',
            image: nile,
            tags: ['Framer'],
            link: 'https://nilegymidea.framer.website/'
        },
        {
            title: 'AZ Construcciones',
            description: 'projects:works.az.description',
            image: az,
            tags: ['Framer'],
            link: 'https://azconstrucciones.framer.website/'
        }
    ]
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 overflow-hidden">
            {works.map((work, index) => (
                <div key={index} className="flex flex-col h-full bg-cardBG border-cardBorder border-[2px] rounded-[14px] overflow-hidden">
                    <div className="relative w-full h-40 overflow-hidden">
                        <Image
                            src={work.image}
                            alt={work.title}
                            fill
                            style={{ objectFit: 'cover', objectPosition: 'top' }}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority={true}
                            quality={100}
                        />
                    </div>
                    <div className="flex flex-col flex-grow p-4 ">
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 text-orangePrimary ">{work.title}</h3>
                        <p className="flex-grow text-textGray text-sm md:text-base text-pretty">{t(work.description)}</p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {work.tags.map((tech) => (
                                <div key={tech} className="tag">
                                    {technologyIcons[tech] || tech}
                                </div>
                            ))}
                        </div>
                        <div className='flex gap-3'>
                            <Link
                                href={work.link}
                                target="_blank"
                                rel="noreferrer"
                                className="flex flex-grow items-center gap-3 md:gap-5 bg-pageBG hover:bg-contactBtnHover transition-all hover:border-[1.5px] border border-borderNew/10 rounded-md px-4 py-[6px] text-white text-left justify-between text-xs md:text-sm w-full mt-8 md:w-1/2 group"
                            >
                                {t('projects:works.buttons.view')}
                                <ArrowRight size={16} className="text-white transition-transform transform group-hover:-rotate-45" />
                            </Link>
                            {work.code && (
                                <Link
                                    href={work.code}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex flex-grow items-center gap-3 md:gap-5 bg-pageBG hover:bg-contactBtnHover transition-all hover:border-[1.5px] border border-borderNew/10 rounded-md px-4 py-[6px] text-white text-left justify-between text-xs md:text-sm w-full mt-8 md:w-1/2 group"
                                >
                                    {t('projects:works.buttons.code')}
                                    <GitHubIcon width={16} height={16}  className="text-white transition-transform transform group-hover:scale-125" />
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}