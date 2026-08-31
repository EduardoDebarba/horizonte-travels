import { ArrowUpRight, CalendarDays, Map } from 'lucide-react';
import Image from 'next/image';

import { journeys } from '@/data/travel';
import { Reveal } from './reveal';
import { SectionHeading } from './section-heading';

export function CuratedTrips() {
  return (
    <section className="bg-[#F6F2EA] py-28 sm:py-36">
      <div className="site-container">
        <Reveal>
          <SectionHeading
            label="Jornadas selecionadas"
            title="Comece com um pouco de inspiração."
            text="Rotas autorais para viajantes que querem um início refinado e liberdade para tornar cada detalhe pessoal."
          />
        </Reveal>
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {journeys.map((journey, index) => (
            <Reveal delay={index * 90} key={journey.title}>
              <article className="group overflow-hidden rounded-md border border-[#D9C5A5]/70 bg-[#FFFDF7]">
                <div className="relative aspect-[1.08] overflow-hidden">
                  <Image
                    src={journey.image}
                    alt={journey.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 390px"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                  />
                  <div className="absolute left-5 top-5 bg-[#123B4A] px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white">
                    {journey.country}
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-5 flex items-center gap-4 text-xs uppercase tracking-[0.12em] text-[#6E7473]">
                    <span className="inline-flex items-center gap-2">
                      <CalendarDays className="size-4 text-[#C56F4D]" />
                      {journey.days}
                    </span>
                  </div>
                  <h3 className="font-heading text-[clamp(2rem,7vw,2.65rem)] font-medium leading-[1.06] text-[#123B4A]">
                    {journey.title}
                  </h3>
                  <p className="mt-5 flex items-start gap-3 text-sm leading-7 text-[#4F5A59]">
                    <Map className="mt-1 size-4 shrink-0 text-[#C56F4D]" />
                    {journey.route}
                  </p>
                  <div className="mt-7 flex items-center justify-between border-t border-[#D9C5A5]/70 pt-5">
                    <p className="text-sm font-semibold text-[#123B4A]">{journey.price}</p>
                    <a
                      className="inline-flex min-h-8 items-center gap-2 text-sm font-semibold text-[#C56F4D] transition-transform hover:translate-x-1"
                      href="#contact"
                    >
                      Ver Jornada <ArrowUpRight className="size-4" />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
