import Image from 'next/image';
import { Compass, ConciergeBell, Route, ShieldCheck } from 'lucide-react';

import { images } from '@/data/travel';
import { ActionButton } from './action-button';
import { Reveal } from './reveal';
import { SectionHeading } from './section-heading';

const highlights = [
  { label: 'Custom itineraries', icon: Route },
  { label: 'Selected experiences', icon: Compass },
  { label: 'Specialist support', icon: ConciergeBell },
  { label: 'Complete planning', icon: ShieldCheck },
];

export function About() {
  return (
    <section id="about" className="bg-[#F6F2EA] py-28 sm:py-36">
      <div className="site-container grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <SectionHeading
            label="Travel differently"
            title="Journeys designed around the way you want to feel."
            text="From hidden coastlines to iconic cities, we create journeys shaped by your curiosity, pace and passions."
          />
          <div className="mt-7 space-y-5 text-[#4F5A59]">
            <p>
              Voyara brings together private travel designers, local hosts and
              carefully selected stays to craft routes that feel deeply personal.
              Every plan is paced, layered and refined around what matters to you.
            </p>
            <p>
              We take care of the invisible work: logistics, reservations,
              transfers, timing and support, so the experience can feel effortless
              from first idea to final sunset.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {highlights.map(({ label, icon: Icon }) => (
              <div className="flex items-center gap-3 border-t border-[#D9C5A5] pt-4" key={label}>
                <Icon className="size-4 text-[#C56F4D]" />
                <span className="text-sm font-semibold text-[#123B4A]">{label}</span>
              </div>
            ))}
          </div>
          <ActionButton className="mt-9" href="#why" variant="outline">
            Discover Our Story
          </ActionButton>
        </Reveal>

        <Reveal className="relative min-h-[620px] max-md:min-h-[520px]" delay={120}>
          <div className="absolute left-0 top-0 h-[78%] w-[72%] overflow-hidden rounded-md">
            <Image
              src={images.aboutPrimary}
              alt="Mediterranean village descending toward blue water"
              fill
              sizes="(max-width: 768px) 70vw, 520px"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 h-[48%] w-[46%] overflow-hidden rounded-md border-[10px] border-[#F6F2EA] bg-[#EEE7DC]">
            <Image
              src={images.aboutSecondary}
              alt="Boutique hotel terrace prepared for a quiet trip"
              fill
              sizes="(max-width: 768px) 45vw, 340px"
              className="object-cover"
            />
          </div>
          <div className="absolute right-[12%] top-[9%] bg-white px-5 py-4 text-sm text-[#123B4A] shadow-[0_20px_70px_rgb(18_59_74/14%)]">
            <p className="eyebrow text-[#C56F4D]">Private Design</p>
            <p className="mt-1 font-heading text-3xl">12 years</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
