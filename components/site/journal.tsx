import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

import { journal } from '@/data/travel';
import { Reveal } from './reveal';
import { SectionHeading } from './section-heading';

export function TravelJournal() {
  return (
    <section id="journal" className="bg-[#F6F2EA] py-28 sm:py-36">
      <div className="site-container">
        <Reveal>
          <SectionHeading
            label="A revista"
            title="Histórias, lugares e inspiração."
            text="Uma curadoria mais tranquila de notas sazonais, rotas escondidas e ideias de viagem para o próximo lugar que chama por você."
          />
        </Reveal>
        <div className="mt-16 grid gap-6 lg:grid-cols-[1.2fr_0.9fr_0.9fr]">
          {journal.map((article, index) => (
            <Reveal delay={index * 90} key={article.title}>
              <article className="group border-t border-[#D9C5A5] pt-5">
                <div
                  className={
                    index === 0
                      ? 'relative aspect-[1.35] overflow-hidden rounded-md'
                      : 'relative aspect-[0.92] overflow-hidden rounded-md lg:aspect-[0.78]'
                  }
                >
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                  />
                </div>
                <div className="mt-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#6E7473]">
                  <span>{article.category}</span>
                  <span className="h-px w-8 bg-[#D9C5A5]" />
                  <span>{article.readTime}</span>
                </div>
                <h3 className="mt-4 font-heading text-[2.15rem] font-medium leading-[1.1] text-[#123B4A]">
                  {article.title}
                </h3>
                <a
                  className="mt-5 inline-flex min-h-8 items-center gap-2 text-sm font-semibold text-[#C56F4D] transition-transform hover:translate-x-1"
                  href="#contact"
                >
                  Ler Revista <ArrowUpRight className="size-4" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
