'use client';

import { ArrowUpRight, BookOpen, X } from 'lucide-react';
import Image from 'next/image';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
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
              <Dialog>
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
                  <DialogTrigger
                    render={
                      <button
                        className="mt-5 inline-flex min-h-8 items-center gap-2 text-sm font-semibold text-[#C56F4D] transition-transform hover:translate-x-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C56F4D]"
                        type="button"
                        aria-label={`Ler matéria: ${article.title}`}
                      />
                    }
                  >
                    Ler Revista <ArrowUpRight className="size-4" />
                  </DialogTrigger>
                </article>

                <DialogContent
                  className="travel-scrollbar max-h-[92vh] max-w-none overflow-y-auto rounded-md border border-[#D9C5A5]/70 bg-[#FFFDF7] p-0 text-[#1D2528] ring-0 [scrollbar-gutter:stable] sm:max-w-none"
                  showCloseButton={false}
                  style={{
                    width: 'min(calc(100vw - 48px), 1120px)',
                    maxWidth: 'none',
                  }}
                >
                  <article className="grid lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="relative min-h-[320px] overflow-hidden bg-[#123B4A] lg:min-h-full">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 48vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,59,74,0.08),rgba(18,59,74,0.72))]" />
                      <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                        <p className="eyebrow mb-3 text-[#D9C5A5]">{article.category}</p>
                        <DialogTitle className="font-heading text-[clamp(2.3rem,6vw,4rem)] font-medium leading-[1]">
                          {article.title}
                        </DialogTitle>
                        <DialogDescription className="mt-5 text-sm leading-7 text-white/78">
                          {article.excerpt}
                        </DialogDescription>
                      </div>
                    </div>

                    <div className="relative p-6 sm:p-8 lg:p-10">
                      <DialogClose
                        render={
                          <button
                            className="absolute right-4 top-4 inline-flex size-10 items-center justify-center rounded-md border border-[#D9C5A5] text-[#123B4A] transition-colors hover:bg-[#123B4A] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C56F4D]"
                            type="button"
                            aria-label="Fechar matéria"
                          />
                        }
                      >
                        <X className="size-4" />
                        <span className="sr-only">Fechar matéria</span>
                      </DialogClose>

                      <div className="pr-10">
                        <p className="eyebrow mb-3 text-[#C56F4D]">Leitura editorial</p>
                        <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#123B4A]">
                          <BookOpen className="size-4 text-[#C56F4D]" />
                          {article.readTime}
                        </p>
                      </div>

                      <div className="mt-8 space-y-5 text-base leading-8 text-[#4F5A59]">
                        {article.body.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>

                      <div className="mt-8 rounded-md bg-[#EEE7DC] p-5">
                        <p className="eyebrow mb-4 text-[#355C4D]">Destaques</p>
                        <div className="grid gap-3">
                          {article.highlights.map((highlight) => (
                            <p className="flex items-start gap-3 text-sm leading-7 text-[#4F5A59]" key={highlight}>
                              <span className="mt-3 h-px w-7 shrink-0 bg-[#C56F4D]" />
                              {highlight}
                            </p>
                          ))}
                        </div>
                      </div>

                      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <a
                          className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[#123B4A] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#235E6F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C56F4D]"
                          href="#contact"
                        >
                          Planejar uma viagem parecida
                          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                        </a>
                        <DialogClose
                          render={
                            <button
                              className="inline-flex min-h-12 items-center justify-center rounded-md border border-[#123B4A]/25 px-6 text-sm font-semibold text-[#123B4A] transition-colors hover:bg-[#123B4A] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C56F4D]"
                              type="button"
                              aria-label="Voltar à revista"
                            />
                          }
                        >
                          Voltar à revista
                        </DialogClose>
                      </div>
                    </div>
                  </article>
                </DialogContent>
              </Dialog>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
