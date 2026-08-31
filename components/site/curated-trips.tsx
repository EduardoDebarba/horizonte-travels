'use client';

import { ArrowUpRight, CalendarDays, Check, Map, X } from 'lucide-react';
import Image from 'next/image';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
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
              <Dialog>
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
                    <div className="mt-7 flex items-center justify-between gap-4 border-t border-[#D9C5A5]/70 pt-5">
                      <p className="text-sm font-semibold text-[#123B4A]">{journey.price}</p>
                      <DialogTrigger
                        render={
                          <button
                            className="inline-flex min-h-8 items-center gap-2 text-sm font-semibold text-[#C56F4D] transition-transform hover:translate-x-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C56F4D]"
                            type="button"
                            aria-label={`Ver roteiro de ${journey.title}`}
                          />
                        }
                      >
                        Ver Roteiro <ArrowUpRight className="size-4" />
                      </DialogTrigger>
                    </div>
                  </div>
                </article>
                <DialogContent
                  className="travel-scrollbar max-h-[92vh] max-w-none overflow-y-auto rounded-md border border-[#D9C5A5]/70 bg-[#FFFDF7] p-0 text-[#1D2528] ring-0 [scrollbar-gutter:stable] sm:max-w-none"
                  showCloseButton={false}
                  style={{
                    width: 'min(calc(100vw - 48px), 1320px)',
                    maxWidth: 'none',
                  }}
                >
                  <div className="grid lg:grid-cols-[0.95fr_1.25fr]">
                    <div className="relative min-h-[300px] overflow-hidden bg-[#123B4A] lg:min-h-full">
                      <Image
                        src={journey.image}
                        alt={`${journey.title}, ${journey.country}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 460px"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,59,74,0.05),rgba(18,59,74,0.72))]" />
                      <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                        <p className="eyebrow mb-3 text-[#D9C5A5]">{journey.country}</p>
                        <DialogTitle className="font-heading text-[clamp(2.4rem,7vw,4.1rem)] font-medium leading-[1]">
                          {journey.title}
                        </DialogTitle>
                        <DialogDescription className="mt-5 text-sm leading-7 text-white/78">
                          {journey.summary}
                        </DialogDescription>
                      </div>
                    </div>
                    <div className="relative p-6 sm:p-8">
                      <DialogClose
                        render={
                          <button
                            className="absolute right-4 top-4 inline-flex size-10 items-center justify-center rounded-md border border-[#D9C5A5] text-[#123B4A] transition-colors hover:bg-[#123B4A] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C56F4D]"
                            type="button"
                            aria-label="Fechar roteiro"
                          />
                        }
                      >
                        <X className="size-4" />
                        <span className="sr-only">Fechar roteiro</span>
                      </DialogClose>
                      <div className="pr-10">
                        <p className="eyebrow mb-3 text-[#C56F4D]">Roteiro proposto</p>
                        <p className="text-sm font-semibold text-[#123B4A]">
                          {journey.days} | {journey.route}
                        </p>
                        <p className="mt-3 font-heading text-3xl font-medium text-[#123B4A]">
                          {journey.price}
                        </p>
                      </div>

                      <div className="mt-8 space-y-5">
                        {journey.itinerary.map((item) => (
                          <div
                            className="grid gap-3 border-t border-[#D9C5A5]/70 pt-5 sm:grid-cols-[96px_1fr]"
                            key={`${journey.title}-${item.day}`}
                          >
                            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#C56F4D]">
                              {item.day}
                            </p>
                            <div>
                              <h4 className="font-heading text-2xl font-medium leading-tight text-[#123B4A]">
                                {item.title}
                              </h4>
                              <p className="mt-2 text-sm leading-7 text-[#5E6867]">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 rounded-md bg-[#EEE7DC] p-5">
                        <p className="eyebrow mb-4 text-[#355C4D]">Inclui</p>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {journey.includes.map((item) => (
                            <p className="flex items-start gap-2 text-sm text-[#4F5A59]" key={item}>
                              <Check className="mt-0.5 size-4 shrink-0 text-[#C56F4D]" />
                              {item}
                            </p>
                          ))}
                        </div>
                      </div>

                      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                        <a
                          className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[#123B4A] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#235E6F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C56F4D]"
                          href="#contact"
                        >
                          Solicitar Este Roteiro
                          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                        </a>
                        <DialogClose
                          render={
                            <button
                              className="inline-flex min-h-12 items-center justify-center rounded-md border border-[#123B4A]/25 px-6 text-sm font-semibold text-[#123B4A] transition-colors hover:bg-[#123B4A] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C56F4D]"
                              type="button"
                              aria-label="Voltar às jornadas"
                            />
                          }
                        >
                          Voltar às jornadas
                        </DialogClose>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
