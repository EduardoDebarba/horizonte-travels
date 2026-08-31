import { ArrowUpRight, MapPin } from 'lucide-react';
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
              label="Explore the world"
              title="Places worth getting lost in."
              text="A considered edit of coastlines, cities, islands and wild edges, each ready to become something entirely yours."
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-md text-sm leading-7 text-[#6E7473] lg:ml-auto">
              Each destination begins as inspiration and becomes a precise private
              route, shaped through seasonal intelligence, local access and your
              personal rhythm.
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
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-[#D9C5A5]">
                    <MapPin className="size-3.5" />
                    {destination.country}
                  </div>
                  <h3 className="font-heading text-5xl font-medium leading-none">
                    {destination.name}
                  </h3>
                  <p className="mt-4 min-h-14 text-sm leading-7 text-white/78">
                    {destination.description}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-white/22 pt-5 text-xs text-white/66">
                    <span>{destination.coordinates}</span>
                    <a
                      className="inline-flex min-h-8 items-center gap-2 font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 focus-visible:opacity-100"
                      href="#contact"
                    >
                      View escape <ArrowUpRight className="size-4" />
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
