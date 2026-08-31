'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

import { testimonials } from '@/data/travel';
import { cn } from '@/lib/utils';
import { Reveal } from './reveal';

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const current = testimonials[active] ?? testimonials[0];

  const goTo = (direction: 1 | -1) => {
    setActive((value) => (value + direction + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-[#EEE7DC] py-28 sm:py-36">
      <div className="site-container">
        <Reveal>
          <div className="mb-14 flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow mb-4 text-[#C56F4D]">Testimonials</p>
              <h2 className="font-heading text-[clamp(3rem,6.5vw,6.8rem)] font-medium leading-[0.92] text-[#123B4A]">
                Stories from the road.
              </h2>
            </div>
            <div className="flex gap-3">
              <button
                className="inline-flex size-12 items-center justify-center rounded-md border border-[#123B4A]/25 text-[#123B4A] transition-colors hover:bg-[#123B4A] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C56F4D]"
                type="button"
                onClick={() => goTo(-1)}
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="size-4" />
              </button>
              <button
                className="inline-flex size-12 items-center justify-center rounded-md border border-[#123B4A]/25 text-[#123B4A] transition-colors hover:bg-[#123B4A] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C56F4D]"
                type="button"
                onClick={() => goTo(1)}
                aria-label="Next testimonial"
              >
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div
            className="grid gap-8 overflow-hidden rounded-md bg-[#FFFDF7] lg:grid-cols-[0.88fr_1.12fr]"
            onTouchStart={(event) => setTouchStart(event.touches[0]?.clientX ?? null)}
            onTouchEnd={(event) => {
              if (touchStart === null) return;
              const distance = touchStart - (event.changedTouches[0]?.clientX ?? touchStart);
              if (Math.abs(distance) > 42) goTo(distance > 0 ? 1 : -1);
              setTouchStart(null);
            }}
          >
            <div className="relative min-h-[340px] lg:min-h-[520px]">
              {current ? (
                <Image
                  src={current.image}
                  alt={current.trip}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              ) : null}
            </div>
            <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-14">
              <p className="font-heading text-[clamp(2.4rem,5vw,5.8rem)] font-medium leading-[0.98] text-[#123B4A]">
                &ldquo;{current?.quote}&rdquo;
              </p>
              <div className="mt-10 flex flex-col justify-between gap-8 border-t border-[#D9C5A5] pt-6 sm:flex-row sm:items-end">
                <div>
                  <p className="font-semibold text-[#123B4A]">{current?.name}</p>
                  <p className="mt-1 text-sm text-[#6E7473]">{current?.trip}</p>
                </div>
                <div className="flex gap-2">
                  {testimonials.map((testimonial, index) => (
                    <button
                      key={testimonial.name}
                      className={cn(
                        'inline-flex size-8 items-center justify-center rounded-md transition-colors',
                        active === index && 'bg-[#C56F4D]/10',
                      )}
                      type="button"
                      onClick={() => setActive(index)}
                      aria-label={`Show testimonial ${index + 1}`}
                    >
                      <span
                        className={cn(
                          'h-2.5 w-6 rounded-full bg-[#D9C5A5]',
                          active === index && 'bg-[#C56F4D]',
                        )}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
