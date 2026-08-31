import Image from 'next/image';

import { images } from '@/data/travel';
import { ActionButton } from './action-button';
import { Reveal } from './reveal';

export function PlanningCta() {
  return (
    <section className="relative min-h-[78vh] overflow-hidden bg-[#123B4A] py-28 text-white">
      <Image
        src={images.cta}
        alt="Aerial view of a remote beach and blue ocean"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,59,74,0.84),rgba(18,59,74,0.24)),linear-gradient(0deg,rgba(18,59,74,0.72),rgba(18,59,74,0.08))]" />
      <div className="site-container relative z-10 flex min-h-[58vh] items-center">
        <Reveal className="max-w-3xl">
          <p className="eyebrow mb-5 text-[#D9C5A5]">
            Your next journey starts here
          </p>
          <h2 className="font-heading text-[clamp(4rem,9vw,9rem)] font-medium leading-[0.86] text-balance">
            Where will you go next?
          </h2>
          <p className="mt-7 max-w-xl text-lg leading-8 text-white/78">
            Tell us what you are dreaming of and we will turn it into a journey
            designed just for you.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ActionButton href="#contact" variant="secondary">
              Plan Your Trip
            </ActionButton>
            <ActionButton href="mailto:hello@voyara.travel" variant="light">
              Talk to a Travel Designer
            </ActionButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
