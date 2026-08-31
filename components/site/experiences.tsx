import Image from 'next/image';

import { experiences } from '@/data/travel';
import { Reveal } from './reveal';
import { SectionHeading } from './section-heading';

export function Experiences() {
  return (
    <section id="experiences" className="bg-[#F6F2EA] py-28 sm:py-36">
      <div className="site-container">
        <Reveal>
          <SectionHeading
            label="Find your experience"
            title="Travel your way."
            text="Adventure, romance, culture, wellness or something wonderfully specific. We build the journey around the feeling first."
          />
        </Reveal>
        <div className="mt-16 grid auto-rows-[260px] gap-5 md:grid-cols-4 lg:auto-rows-[300px]">
          {experiences.map((experience, index) => (
            <Reveal
              className={
                index === 0
                  ? 'md:col-span-2 md:row-span-2'
                  : index === 3
                    ? 'md:col-span-2'
                    : ''
              }
              delay={index * 60}
              key={experience.name}
            >
              <article className="group relative h-full overflow-hidden rounded-md bg-[#123B4A] text-white">
                <Image
                  src={experience.image}
                  alt={experience.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,59,74,0.03),rgba(18,59,74,0.82))]" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="mb-2 text-xs uppercase tracking-[0.14em] text-[#D9C5A5]">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="font-heading text-4xl font-medium leading-none">
                    {experience.name}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/78">
                    {experience.description}
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
