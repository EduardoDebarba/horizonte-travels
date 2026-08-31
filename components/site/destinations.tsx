import { MapPin } from 'lucide-react';
import Image from 'next/image';

import { destinations } from '@/data/travel';
import { Reveal } from './reveal';
import { SectionHeading } from './section-heading';

export function Destinations() {
  return (
    <section id="destinations" className="bg-[#EEE7DC] py-28 sm:py-36">
      <div className="site-container">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <Reveal>
            <SectionHeading
              label="Explore o mundo"
              title="Lugares onde vale a pena se perder."
              text="Uma curadoria de litorais, cidades, ilhas e paisagens selvagens, cada uma pronta para se tornar algo inteiramente seu."
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-md text-sm leading-7 text-[#6E7473] lg:ml-auto">
              Cada destino começa como inspiração e se transforma em uma rota
              privativa precisa, guiada por inteligência sazonal, acesso local e
              o seu ritmo pessoal.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination, index) => (
            <Reveal delay={index * 70} key={destination.name}>
              <article className="group relative min-h-[500px] overflow-hidden rounded-md bg-[#123B4A] text-white">
                <Image
                  src={destination.image}
                  alt={`${destination.name}, ${destination.country}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 390px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,59,74,0.08),rgba(18,59,74,0.88))]" />
                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 text-xs">
                  <span className="rounded-sm bg-white/16 px-3 py-2 uppercase tracking-[0.12em] backdrop-blur-sm">
                    {destination.tag}
                  </span>
                  <span className="text-white/75">0{index + 1}</span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 pb-7 sm:pb-8">
                  <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-[#D9C5A5]">
                    <MapPin className="size-3.5" />
                    {destination.country}
                  </div>
                  <h3 className="font-heading text-[clamp(2rem,8vw,2.65rem)] font-medium leading-[1.05]">
                    {destination.name}
                  </h3>
                  <p className="mt-4 min-h-14 text-sm leading-7 text-white/78">
                    {destination.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
