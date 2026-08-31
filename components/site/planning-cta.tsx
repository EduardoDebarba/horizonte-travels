import Image from 'next/image';

import { brand, images } from '@/data/travel';
import { ActionButton } from './action-button';
import { Reveal } from './reveal';

export function PlanningCta() {
  return (
    <section className="relative min-h-[78vh] overflow-hidden bg-[#123B4A] py-28 text-white">
      <Image
        src={images.cta}
        alt="Vista aérea de uma praia remota e oceano azul"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,59,74,0.84),rgba(18,59,74,0.24)),linear-gradient(0deg,rgba(18,59,74,0.72),rgba(18,59,74,0.08))]" />
      <div className="site-container relative z-10 flex min-h-[58vh] items-center">
        <Reveal className="max-w-3xl">
          <p className="eyebrow mb-5 text-[#D9C5A5]">
            Sua próxima jornada começa aqui
          </p>
          <h2 className="max-w-4xl font-heading text-[clamp(2.65rem,5.2vw,5.35rem)] font-medium leading-[1.02] text-balance">
            Para onde você vai agora?
          </h2>
          <p className="mt-7 max-w-xl text-lg leading-8 text-white/78">
            Conte o que você está sonhando e transformaremos isso em uma jornada
            desenhada especialmente para você.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ActionButton href="#contact" variant="secondary">
              Planeje Sua Viagem
            </ActionButton>
            <ActionButton href={`mailto:${brand.email}`} variant="light">
              Fale com um Designer de Viagem
            </ActionButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
