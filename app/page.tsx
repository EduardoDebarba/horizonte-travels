import { Header } from '@/components/site/header';
import { About } from '@/components/site/about';
import { ActionButton } from '@/components/site/action-button';
import { CuratedTrips } from '@/components/site/curated-trips';
import { Destinations } from '@/components/site/destinations';
import { EditorialBanner } from '@/components/site/editorial-banner';
import { Experiences } from '@/components/site/experiences';
import { Footer } from '@/components/site/footer';
import { Gallery } from '@/components/site/gallery';
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
      'Bespoke journeys, extraordinary destinations and personalized travel experiences.',
    url: 'https://voyara.travel',
    email: 'hello@voyara.travel',
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
          alt="Turquoise coastline with clear water and a quiet beach"
          className="absolute inset-0 scale-105 object-cover"
          fill
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,59,74,0.78),rgba(18,59,74,0.18)_58%,rgba(18,59,74,0.38)),linear-gradient(0deg,rgba(18,59,74,0.76),rgba(18,59,74,0.04)_45%)]" />
        <div className="site-container relative z-10 grid gap-10 lg:grid-cols-[minmax(0,760px)_1fr] lg:items-end">
          <div className="reveal-up">
            <p className="eyebrow mb-6 text-[#D9C5A5]">
              Curated journeys around the world
            </p>
            <h1 className="max-w-4xl font-heading text-[clamp(4rem,10vw,9.4rem)] font-medium leading-[0.86] text-balance">
              Go where you feel most alive.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/82">
              Bespoke journeys, extraordinary places and unforgettable
              experiences designed around you.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ActionButton href="#contact" variant="secondary">
                Plan Your Journey
              </ActionButton>
              <ActionButton href="#destinations" variant="light">
                Explore Destinations
              </ActionButton>
            </div>
          </div>
          <div className="hidden justify-self-end border-l border-white/24 pl-8 text-sm text-white/72 lg:block">
            <p className="eyebrow mb-4 text-white">Voyara</p>
            <p>{brand.tagline}</p>
            <p className="mt-8 [writing-mode:vertical-rl]">Scroll to discover</p>
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
      <Gallery />
      <PlanningCta />
      <TripRequestForm />
      <Footer />
    </main>
  );
}
