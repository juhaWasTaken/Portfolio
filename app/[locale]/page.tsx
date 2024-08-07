
import { Header } from "@/components/sections/Header";
import { RecentWork } from "@/components/sections/RecentWork";
import { Socials } from "@/components/sections/Socials";
import { WorkExample } from "@/components/sections/WorkExample";
import { Services } from "@/components/sections/Services";
import { Stack } from "@/components/sections/Stack";
import { ContactIdea } from "@/components/sections/ContacIdea";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";

interface Params {
  locale: string;
}

const i18nNamespaces = ["about", "contact", "projects"];

export default async function Home({ params }: { params: Params }) {
  const { locale } = params;
  const { t, resources } = await initTranslations({
    locale,
    namespaces: i18nNamespaces
  });

  return (
    <TranslationsProvider resources={resources} locale={locale} namespaces={i18nNamespaces}>
      <Navbar />
      <main className="flex flex-col gap-5 overflow-hidden">
        <Header />
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full h-full">
          <div className="grid grid-rows-[auto_auto_1fr] gap-5 self-start h-full">
            <RecentWork className="max-h-fit" />
            <Socials className="max-h-fit" />
            <WorkExample className="h-full w-full" />
          </div>
          <div className="flex flex-col flex-grow gap-5">
            <Services />
            <Stack /> {/*  */}
            <ContactIdea />
          </div>
        </section>
        <Footer />
      </main>
    </TranslationsProvider>
  );
}
