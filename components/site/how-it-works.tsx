import { processSteps } from '@/data/travel';
import { Reveal } from './reveal';
import { SectionHeading } from './section-heading';

export function HowItWorks() {
  return (
    <section className="bg-[#F6F2EA] py-28 sm:py-36">
      <div className="site-container">
        <Reveal>
          <SectionHeading
            align="center"
            label="Your journey"
            title="From dreaming to departure."
          />
        </Reveal>
        <div className="relative mt-16 grid gap-5 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-[#D9C5A5] lg:block" />
          {processSteps.map((step, index) => (
            <Reveal delay={index * 90} key={step}>
              <article className="relative bg-[#F6F2EA] px-2 py-4">
                <div className="mb-8 flex size-24 items-center justify-center rounded-full border border-[#D9C5A5] bg-[#F6F2EA] font-heading text-4xl text-[#C56F4D]">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="max-w-[14rem] font-heading text-4xl font-medium leading-tight text-[#123B4A]">
                  {step}
                </h3>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
