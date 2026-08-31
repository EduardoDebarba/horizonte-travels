import Image from 'next/image';

import { gallery } from '@/data/travel';
import { Reveal } from './reveal';

export function Gallery() {
  return (
    <section className="bg-[#EEE7DC] py-24 sm:py-32">
      <div className="site-container">
        <Reveal>
          <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow mb-4 text-[#C56F4D]">@voyara.travel</p>
              <h2 className="font-heading text-[clamp(3rem,6vw,6rem)] font-medium leading-none text-[#123B4A]">
                Postcards from around the world.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-[#6E7473]">
              Follow our journey through islands, mountains, markets, hotels and
              small moments worth crossing oceans for.
            </p>
          </div>
        </Reveal>
        <div className="grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:auto-rows-[240px]">
          {gallery.map((item, index) => (
            <Reveal
              className={
                index === 0
                  ? 'lg:col-span-2 lg:row-span-2'
                  : index === 3
                    ? 'lg:col-span-2'
                    : 'lg:col-span-1'
              }
              delay={index * 55}
              key={item.alt}
            >
              <figure className="group relative h-full overflow-hidden rounded-md bg-[#123B4A]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 220px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                />
                <figcaption className="absolute inset-0 grid place-items-center bg-[#123B4A]/0 opacity-0 transition-all duration-300 group-hover:bg-[#123B4A]/22 group-hover:opacity-100">
                  <span className="eyebrow text-white">Voyara</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
