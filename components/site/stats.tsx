'use client';

import { useEffect, useRef, useState } from 'react';

import { stats } from '@/data/travel';

export function Stats() {
  return (
    <section className="bg-[#235E6F] py-20 text-white sm:py-24">
      <div className="site-container grid gap-px bg-white/18 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <CounterCard key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}

function CounterCard({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;

        const start = performance.now();
        const duration = 1200;
        const frame = (time: number) => {
          const progress = Math.min((time - start) / duration, 1);
          const eased = 1 - (1 - progress) ** 3;
          setCount(Math.round(value * eased));
          if (progress < 1) requestAnimationFrame(frame);
        };
        requestAnimationFrame(frame);
        observer.unobserve(node);
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="bg-[#235E6F] p-8 text-center">
      <p className="font-heading text-[clamp(2.8rem,4vw,4.25rem)] font-medium leading-none text-white">
        {count.toLocaleString('pt-BR')}
        {suffix}
      </p>
      <p className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#D9C5A5]">
        {label}
      </p>
    </div>
  );
}
