import { BadgeCheck, Compass, Headphones, Hotel } from 'lucide-react';

import { benefits } from '@/data/travel';
import { Reveal } from './reveal';
import { SectionHeading } from './section-heading';

const icons = [Compass, Hotel, BadgeCheck, Headphones];

export function WhyUs() {
  return (
    <section id="why" className="bg-[#123B4A] py-28 text-white sm:py-36">
      <div className="site-container">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading
              label="Why Voyara"
              title="Everything taken care of. Every detail considered."
              text="Premium travel design means more than beautiful places. It means precision, calm support and the confidence that every moment has been thought through."
              light
            />
          </Reveal>
          <div className="grid gap-px bg-white/14 sm:grid-cols-2">
            {benefits.map((benefit, index) => {
              const Icon = icons[index];
              return (
                <Reveal delay={index * 80} key={benefit.title}>
                  <article className="min-h-64 bg-[#123B4A] p-7 transition-colors duration-300 hover:bg-[#16495b]">
                    {Icon ? <Icon className="mb-10 size-7 text-[#D9C5A5]" /> : null}
                    <p className="mb-3 text-sm text-white/50">0{index + 1}</p>
                    <h3 className="font-heading text-4xl font-medium">{benefit.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/68">
                      {benefit.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
