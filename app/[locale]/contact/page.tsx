import initTranslations from "@/app/i18n";
import { Navbar } from "@/components/sections/Navbar";
import TranslationsProvider from "@/components/TranslationsProvider";
import { HeaderContact } from "./components/Header";
import { ContactForm } from "./components/ContactForm";
import { ParticlesDemo } from "./components/Timezone";
import { ContactCard } from "./components/ContactCard";
import { NowPlaying } from "./components/NowPlaying";
import { Socials } from "./components/Socials";
import { Footer } from "@/components/sections/Footer";


interface Params {
    locale: string;
}

const i18nNamespaces = ["about", "contact", "projects"];

export default async function Contact({ params }: { params: Params }) {
    const { locale } = params;
    const { t, resources } = await initTranslations({
        locale,
        namespaces: i18nNamespaces
    })
    return (
        <TranslationsProvider resources={resources} locale={locale} namespaces={i18nNamespaces} >
            <Navbar />
            <main className="flex flex-col gap-5 overflow-hidden">
                <HeaderContact />
                <section className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full h-full">
                    <ContactForm />
                    <div className="flex flex-col flex-grow gap-5">
                        <ContactCard />
                        <Socials />
                        <NowPlaying />
                        <ParticlesDemo />
                    </div>
                </section>
                <Footer />
            </main>
        </TranslationsProvider>

    )
}