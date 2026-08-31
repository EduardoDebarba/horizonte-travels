import { Header } from '@/components/site/header';
import { About } from '@/components/site/about';
import { ActionButton } from '@/components/site/action-button';
import { CuratedTrips } from '@/components/site/curated-trips';
import { Destinations } from '@/components/site/destinations';
import { EditorialBanner } from '@/components/site/editorial-banner';
import { Experiences } from '@/components/site/experiences';
import { Footer } from '@/components/site/footer';
import { HowItWorks } from '@/components/site/how-it-works';
import { PlanningCta } from '@/components/site/planning-cta';
import { Stats } from '@/components/site/stats';
import { Testimonials } from '@/components/site/testimonials';
import { TravelJournal } from '@/components/site/journal';
import { TripRequestForm } from '@/components/site/trip-request-form';
import { TripFinder } from '@/components/site/trip-finder';
import { WhyUs } from '@/components/site/why-us';
import { brand, images } from '@/data/travel';
import Image from 'next/image';

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: brand.name,
    description:
      'Jornadas sob medida, destinos extraordinários e experiências de viagem personalizadas.',
    url: brand.url,
    email: brand.email,
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#F6F2EA] text-[#1D2528]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header />
      <section
        id="home"
        className="relative flex min-h-screen items-end overflow-hidden bg-[#123B4A] pb-28 pt-32 text-white"
      >
        <Image
          src={images.hero}
          alt="Viajante observando uma costa azul-turquesa cercada por montanhas"
          className="absolute inset-0 scale-105 object-cover"
          fill
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,59,74,0.78),rgba(18,59,74,0.18)_58%,rgba(18,59,74,0.38)),linear-gradient(0deg,rgba(18,59,74,0.76),rgba(18,59,74,0.04)_45%)]" />
        <div className="site-container relative z-10 grid -translate-y-6 gap-10 sm:-translate-y-8 lg:-translate-y-10 lg:grid-cols-[minmax(0,760px)_1fr] lg:items-end">
          <div className="reveal-up">
            <p className="eyebrow mb-6 text-[#D9C5A5]">
              Jornadas selecionadas pelo mundo
            </p>
            <h1 className="max-w-3xl font-heading text-[clamp(2.75rem,6.2vw,5.85rem)] font-medium leading-[0.98] text-balance">
              Vá aonde você se sente mais vivo.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/82 sm:text-[1.05rem] sm:leading-8">
              Jornadas sob medida, lugares extraordinários e experiências
              inesquecíveis desenhadas ao seu redor.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ActionButton href="#contact" variant="secondary">
                Planeje Sua Jornada
              </ActionButton>
              <ActionButton href="#destinations" variant="light">
                Explorar Destinos
              </ActionButton>
            </div>
          </div>
        </div>
      </section>
      <TripFinder />
      <About />
      <Destinations />
      <Experiences />
      <EditorialBanner />
      <WhyUs />
      <CuratedTrips />
      <Stats />
      <HowItWorks />
      <Testimonials />
      <TravelJournal />
      <PlanningCta />
      <TripRequestForm />
      <Footer />
    </main>
  );
}
