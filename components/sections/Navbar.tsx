'use client';

import Link from 'next/link';
import { CycleIcon } from "@/assets/icons/CycleIcon";
import { usePathname } from 'next/navigation';  // Usa usePathname de next/navigation en lugar de useRouter
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageChanger from '../LanguajeChanger';

const NavLinks = [
    { name: 'nav.home', href: '/' },
    { name: 'nav.projects', href: '/projects' },
    { name: 'nav.contact', href: '/contact' },
]

export function Navbar() {
    const { t, i18n } = useTranslation();
    const pathname = usePathname();  // Obtén la ruta actual
    const isActive = (path: string) => pathname === path;
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className="flex flex-col gap-5 items-center justify-center">
            <div className='flex w-full'>
                <div className="bg-cardBG border-cardBorder border-[2px] rounded-full p-[10px]">
                    {/* <CycleIcon /> */}
                    <LanguageChanger />
                </div>
                <div className="justify-end py-5 px-[32px] flex flex-grow min-h-[64px] items-center sm:justify-between bg-cardBG border-cardBorder border-[2px] sm:py-4 sm:px-[66px] rounded-[48px]">
                    <div className="hidden sm:flex sm:flex-grow sm:justify-between">
                        {/* <Link className={`text-xl hover:text-orangePrimary ${isActive('/') ? 'text-orangePrimary' : ''}`} href="/">Home</Link>
                        <Link className={`text-xl hover:text-orangePrimary ${isActive('/projects') ? 'text-orangePrimary' : ''}`} href="/projects">Projects</Link>
                        <Link className={`text-xl hover:text-orangePrimary ${isActive('/contact') ? 'text-orangePrimary' : ''}`} href="/contact">Contact</Link> */}
                        {NavLinks.map((link) => {
                            const isActive =
                                pathname === link.href ||
                                pathname === `/${i18n.language}${link.href}` ||
                                (link.href === '/' && pathname === `/${i18n.language}`);
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                                >
                                    {t(link.name)}
                                </Link>
                            )
                        })
                        }
                    </div>
                    <div className="block sm:hidden" onClick={toggleMenu}>
                        <div className={`w-[22px] h-[2px] bg-white rounded-[1px] transition-all mb-1 ${isMenuOpen ? 'transform rotate-45 translate-x-[-5px] translate-y-[6px]' : ''}`}></div>
                        <div className={`w-[22px] h-[2px] bg-white rounded-[1px] transition-all mb-1 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                        <div className={`w-[22px] h-[2px] bg-white rounded-[1px] transition-all ${isMenuOpen ? 'transform -rotate-45 translate-x-[-5px] translate-y-[-6px]' : ''}`}></div>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className='flex flex-col items-center gap-5 sm:hidden bg-cardBG border-cardBorder border-[2px] rounded-[14px] p-4 overflow-hidden w-full'>
                    {/* <Link className={`text-xl hover:text-orangePrimary ${isActive('/') ? 'text-orangePrimary' : ''}`} href="/">Home</Link>
                    <Link className={`text-xl hover:text-orangePrimary ${isActive('/projects') ? 'text-orangePrimary' : ''}`} href="/projects">Projects</Link>
                    <Link className={`text-xl hover:text-orangePrimary ${isActive('/contact') ? 'text-orangePrimary' : ''}`} href="/contact">Contact</Link> */}
                    {NavLinks.map((link) => {
                        const isActive =
                            pathname === link.href ||
                            pathname === `/${i18n.language}${link.href}` ||
                            (link.href === '/' && pathname === `/${i18n.language}`);
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                            >
                                {t(link.name)}
                            </Link>
                        )
                    })
                    }
                </div>
            )}
        </nav>
    );
}