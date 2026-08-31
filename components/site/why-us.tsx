import { BadgeCheck, Compass, Headphones, Hotel } from 'lucide-react';

import { benefits, brand } from '@/data/travel';
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
              label={`Por que ${brand.name}`}
              title="Tudo cuidado. Cada detalhe considerado."
              text="Design de viagem premium significa mais do que lugares bonitos. Significa precisão, suporte tranquilo e a confiança de que cada momento foi pensado."
              light
            />
          </Reveal>
          <div className="grid sm:grid-cols-2">
            {benefits.map((benefit, index) => {
              const Icon = icons[index];
              return (
                <Reveal className="h-full" delay={index * 80} key={benefit.title}>
                  <article className="h-full min-h-64 border border-white/12 bg-[#123B4A] p-7 transition-colors duration-300 hover:bg-[#16495b]">
                    {Icon ? <Icon className="mb-10 size-7 text-[#D9C5A5]" /> : null}
                    <p className="mb-3 text-sm text-white/50">0{index + 1}</p>
                    <h3 className="font-heading text-[2.05rem] font-medium leading-[1.08]">{benefit.title}</h3>
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
