// 'use client';

// import { ChangeEvent } from 'react';
// import { useRouter } from 'next/navigation';
// import { usePathname } from 'next/navigation';
// import { useTranslation } from 'react-i18next';
// import i18nConfig from '@/i18nConfig';
// import { CircleFlag } from 'react-circle-flags';

// export default function LanguageChanger() {
//     const { i18n } = useTranslation();
//     const currentLocale = i18n.language;
//     const router = useRouter();
//     const currentPathname = usePathname();

//     const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
//         const newLocale = e.target.value;

//         // set cookie for next-i18n-router
//         const days = 30;
//         const date = new Date();
//         date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
//         const expires = date.toUTCString();
//         document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

//         // redirect to the new locale path
//         if (currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
//             router.push('/' + newLocale + currentPathname);
//         } else {
//             router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));
//         }

//         router.refresh();
//     };

//     return (
//         <select onChange={handleChange} value={currentLocale}>
//             <option value="en"><CircleFlag countryCode='en' /></option>
//             <option value="es"><CircleFlag countryCode='es' /></option>
//         </select>
//     );
// }

'use client';

import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '@/i18nConfig';
import { CircleFlag } from 'react-circle-flags';

export default function LanguageChanger() {
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;
    const router = useRouter();
    const currentPathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (newLocale: string) => {
        // set cookie for next-i18n-router
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = date.toUTCString();
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/;SameSite=None;Secure`;

        // redirect to the new locale path
        if (currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
            router.push('/' + newLocale + currentPathname);
        } else {
            router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));
        }

        router.refresh();
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button onClick={() => setIsOpen(!isOpen)} className="flex items-center space-x-2 p-2  rounded focus:outline-none outline-none">
                <CircleFlag countryCode={currentLocale === 'en' ? 'us' : 'es'} style={{ width: '24px', height: '24px' }} />

            </button>
            {isOpen && (
                <div className="absolute bg-white border border-gray-300 mt-2 rounded shadow-lg">
                    <div
                        onClick={() => handleChange('en')}
                        className="flex items-center p-2 hover:bg-gray-200 cursor-pointer bg-pageBG"
                    >
                        <CircleFlag countryCode="us" style={{ width: '24px', height: '24px' }} loading='eager' />

                    </div>
                    <div
                        onClick={() => handleChange('es')}
                        className="flex items-center p-2 hover:bg-gray-200 cursor-pointer bg-pageBG"
                    >
                        <CircleFlag countryCode="es" style={{ width: '24px', height: '24px' }} loading='eager' />

                    </div>
                </div>
            )}
        </div>
    );
}
