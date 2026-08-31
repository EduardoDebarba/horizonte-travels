'use client';

import { Calendar, MapPin, Search, Sparkles, Users } from 'lucide-react';
import type { ReactNode } from 'react';
import { useState } from 'react';

const experiences = ['Refúgio de Praia', 'Cultura', 'Aventura', 'Romance', 'Bem-estar'];

export function TripFinder() {
  const [message, setMessage] = useState('');

  function handleSubmit(event: { preventDefault: () => void; currentTarget: HTMLFormElement }) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const destinationValue = form.get('destination');
    const destination =
      typeof destinationValue === 'string' && destinationValue.trim()
        ? destinationValue.trim()
        : 'seu destino dos sonhos';
    setMessage(
      `Excelente escolha. ${destination} está pronto para uma proposta de jornada personalizada.`,
    );
  }

  return (
    <form
      className="site-container relative z-20 -mt-16 grid gap-5 rounded-md border border-white/45 bg-[#FFFDF7]/94 p-4 shadow-[0_28px_90px_rgb(18_59_74/18%)] backdrop-blur-md md:grid-cols-[1.1fr_1fr_0.8fr_1fr_auto] md:items-end md:p-5"
      onSubmit={handleSubmit}
      aria-label="Encontrar uma viagem personalizada"
    >
      <TripField icon={<MapPin className="size-4" />} label="Destino">
        <input
          className="w-full bg-transparent text-sm text-[#1D2528] outline-none placeholder:text-[#6E7473]"
          name="destination"
          placeholder="Costa Amalfitana"
        />
      </TripField>
      <TripField icon={<Calendar className="size-4" />} label="Data da Viagem">
        <input
          className="w-full bg-transparent text-sm text-[#1D2528] outline-none"
          name="date"
          type="date"
        />
      </TripField>
      <TripField icon={<Users className="size-4" />} label="Viajantes">
        <select className="w-full bg-transparent text-sm outline-none" name="travelers">
          <option>2 viajantes</option>
          <option>Viajante solo</option>
          <option>3-4 viajantes</option>
          <option>Família</option>
          <option>Grupo privativo</option>
        </select>
      </TripField>
      <TripField icon={<Sparkles className="size-4" />} label="Experiência">
        <select className="w-full bg-transparent text-sm outline-none" name="experience">
          {experiences.map((experience) => (
            <option key={experience}>{experience}</option>
          ))}
        </select>
      </TripField>
      <button
        className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-md bg-[#C56F4D] px-6 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#af5f40] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C56F4D] md:w-auto"
        type="submit"
      >
        Explorar Viagens
        <Search className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
      <p
        aria-live="polite"
        className="text-sm text-[#235E6F] md:col-span-full"
      >
        {message}
      </p>
    </form>
  );
}

function TripField({
  label,
  icon,
  children,
}: {
  label: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <label className="block border-b border-[#D9C5A5]/70 px-1 pb-3 md:border-b-0 md:border-r md:pb-0 md:pr-5">
      <span className="mb-2 flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[#355C4D]">
        {icon}
        {label}
      </span>
      {children}
    </label>
  );
}
