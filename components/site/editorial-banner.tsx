import Image from 'next/image';

import { images } from '@/data/travel';
import { ActionButton } from './action-button';
import { Reveal } from './reveal';

export function EditorialBanner() {
  return (
    <section className="relative min-h-[76vh] overflow-hidden bg-[#123B4A] py-28 text-white">
      <Image
        src={images.editorial}
        alt="Traveler looking across a cinematic natural landscape"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,59,74,0.86),rgba(18,59,74,0.2)),linear-gradient(0deg,rgba(18,59,74,0.74),rgba(18,59,74,0.02))]" />
      <div className="site-container relative z-10 flex min-h-[58vh] items-end">
        <Reveal className="max-w-3xl">
          <p className="eyebrow mb-5 text-[#D9C5A5]">Go further</p>
          <h2 className="font-heading text-[clamp(3.6rem,7vw,8rem)] font-medium leading-[0.9] text-balance">
            Some places change the way you see the world.
          </h2>
          <p className="mt-7 max-w-xl text-lg leading-8 text-white/76">
            We create journeys that stay with you long after you return home.
          </p>
          <ActionButton className="mt-9" href="#destinations" variant="light">
            Start Exploring
          </ActionButton>
        </Reveal>
      </div>
    </section>
  );
}
