import Image from "next/image"
import { Play, Linkedin } from 'lucide-react'
import { XIcon, GitHubIcon, Spotify } from '@/assets/icons/TechIcons'
import blonde from '@/assets/images/music/blonde.webp'
import depCherry from '@/assets/images/music/depCherry.webp'
import enjambre from '@/assets/images/music/enjambre.webp'
import getYou from '@/assets/images/music/getYou.webp'
import lattice from '@/assets/images/music/voluma.webp'
import { BorderBeam } from "@/components/magicui/border-beam"
import Link from "next/link"

const Music = [
    { name: "Frank Ocean", song: "Self Control", img: blonde, href: "https://open.spotify.com/intl-es/track/5GUYJTQap5F3RDQiCOJhrS?si=9d0a4610575e46a5" },
    { name: "Beach House", song: "Days Of Candy", img: depCherry, href: "https://open.spotify.com/intl-es/track/6Jzr32geft80FJxOPGr4uw?si=023fa88dacab48c5" },
    { name: "Daniel Caesar", song: "Blessed", img: getYou, href: "https://open.spotify.com/intl-es/track/0KyzXQhY2yzcb1FYCHkZc2?si=d0426abc09e84ec8" },
    { name: "León Larregui", song: "Lattice", img: lattice, href: "https://open.spotify.com/intl-es/track/5a7l9OYzjATTVg4fgK45Xo?si=b48fc462c65b4484" },
    { name: "Enjambre", song: "Vida En el Espejo", img: enjambre, href: "https://open.spotify.com/intl-es/track/2yThUakfNYwaToGaKJxKEK?si=60c034df3e1640e5" },
];

export function NowPlaying() {
    const musicIndex = 0;
    return (
        <section className="relative flex flex-col items-center gap-10 bg-cardBG border-cardBorder border-[2px] rounded-[14px] px-[20px] py-[15px] sm:px-[40px] sm:py-[15px] overflow-hidden z-20">
            <div className="flex items-center justify-between gap-4 w-full">
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full border-4 border-cardBorder overflow-hidden relative">
                        <Image
                            src={Music[musicIndex].img}
                            alt={Music[musicIndex].song}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            style={{ objectFit: "cover" }}
                            className="animate-spin-slow"
                            priority
                            quality={100}
                        />
                    </div>
                    <div>
                        <Link target="_blank" href={Music[musicIndex].href} className="text-lg font-semibold">{Music[musicIndex].song}</Link>
                        <p className="text-xs text-textGray">{Music[musicIndex].name}</p>
                    </div>
                </div>
                <Link
                    href="https://open.spotify.com/playlist/3enMdm9ziYF7m7RlAVMZ2h?si=3502a554758c40fd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pageBG border border-cardBorder hover:border-textGray transition-all  py-1 px-2 rounded-sm z-20"
                >
                    <Play className="w-4 h-6 text-textGray" stroke="#C0C0C0" />
                </Link>
            </div>
            <div className="absolute inset-0 bg-card-gradient2 z-[-10]"></div>
            <BorderBeam />
        </section>
    )
}