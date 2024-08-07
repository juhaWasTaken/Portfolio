import initTranslations from "@/app/i18n";
import { Navbar } from "@/components/sections/Navbar";
import { HeaderWorks } from "./components/Header";
import { Works } from "./components/Works";
import { Footer } from "@/components/sections/Footer";
import TranslationsProvider from "@/components/TranslationsProvider";

interface Params {
    locale: string;
}

const i18nNamespaces = ["about", "contact", "projects"];

export default async function Projects({ params }: { params: Params }) {
    const { locale } = params;
    const { t, resources } = await initTranslations({
        locale,
        namespaces: i18nNamespaces
    })
    return (
        <TranslationsProvider resources={resources} locale={locale} namespaces={i18nNamespaces} >
            <Navbar />
            <main className="flex flex-col gap-5 overflow-hidden">
                <HeaderWorks />
                <section>
                    <Works />
                </section>
                <Footer />
            </main>
        </TranslationsProvider>

    )
}