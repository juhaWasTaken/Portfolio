'use client';

import { ReactNode, useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import initTranslations from '@/app/i18n';
import { createInstance, i18n as I18nInstance } from 'i18next';

interface TranslationsProviderProps {
    children: ReactNode;
    locale: string;
    namespaces: string[];
    resources?: Record<string, any>;
}

export default function TranslationsProvider({
    children,
    locale,
    namespaces,
    resources,
}: TranslationsProviderProps) {
    const [i18nInstance, setI18nInstance] = useState<I18nInstance | null>(null);

    useEffect(() => {
        async function initializeTranslations() {
            const i18n = createInstance();
            await initTranslations({
                locale,
                namespaces,
                i18nInstance: i18n,
                resources,
            });
            setI18nInstance(i18n);
        }

        initializeTranslations();
    }, [locale, namespaces, resources]);

    if (!i18nInstance) {
        return null; // or a loading spinner
    }

    return <I18nextProvider i18n={ i18nInstance }> { children } </I18nextProvider>;
}
