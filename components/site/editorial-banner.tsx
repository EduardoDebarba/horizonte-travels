import Image from 'next/image';

import { images } from '@/data/travel';
import { ActionButton } from './action-button';
import { Reveal } from './reveal';

export function EditorialBanner() {
  return (
    <section className="relative min-h-[76vh] overflow-hidden bg-[#123B4A] py-28 text-white">
      <Image
        src={images.editorial}
        alt="Viajante observando uma paisagem natural cinematográfica"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,59,74,0.86),rgba(18,59,74,0.2)),linear-gradient(0deg,rgba(18,59,74,0.74),rgba(18,59,74,0.02))]" />
      <div className="site-container relative z-10 flex min-h-[58vh] items-end">
        <Reveal className="max-w-3xl">
          <p className="eyebrow mb-5 text-[#D9C5A5]">Vá mais longe</p>
          <h2 className="max-w-4xl font-heading text-[clamp(2.45rem,4.6vw,4.95rem)] font-medium leading-[1.04] text-balance">
            Alguns lugares mudam a forma como você vê o mundo.
          </h2>
          <p className="mt-7 max-w-xl text-lg leading-8 text-white/76">
            Criamos jornadas que permanecem com você muito depois da volta para casa.
          </p>
          <ActionButton className="mt-9" href="#destinations" variant="light">
            Comece a Explorar
          </ActionButton>
        </Reveal>
      </div>
    </section>
  );
}
