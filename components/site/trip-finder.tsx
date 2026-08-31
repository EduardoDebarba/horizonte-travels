'use client';

import { Calendar, MapPin, Search, Sparkles, Users } from 'lucide-react';
import type { ReactNode } from 'react';
import { useState } from 'react';

import { ActionButton } from './action-button';

const experiences = ['Beach Escape', 'Culture', 'Adventure', 'Romance', 'Wellness'];

export function TripFinder() {
  const [message, setMessage] = useState('');

  function handleSubmit(event: { preventDefault: () => void; currentTarget: HTMLFormElement }) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const destinationValue = form.get('destination');
    const destination =
      typeof destinationValue === 'string' && destinationValue.trim()
        ? destinationValue.trim()
        : 'your dream destination';
    setMessage(
      `Beautiful choice. ${destination} is ready for a curated journey proposal.`,
    );
  }

  return (
    <form
      className="site-container relative z-20 -mt-16 grid gap-5 rounded-md border border-white/45 bg-[#FFFDF7]/94 p-4 shadow-[0_28px_90px_rgb(18_59_74/18%)] backdrop-blur-md md:grid-cols-[1.1fr_1fr_0.8fr_1fr_auto] md:items-end md:p-5"
      onSubmit={handleSubmit}
      aria-label="Find a curated trip"
    >
      <TripField icon={<MapPin className="size-4" />} label="Destination">
        <input
          className="w-full bg-transparent text-sm text-[#1D2528] outline-none placeholder:text-[#6E7473]"
          name="destination"
          placeholder="Amalfi Coast"
        />
      </TripField>
      <TripField icon={<Calendar className="size-4" />} label="Travel Date">
        <input
          className="w-full bg-transparent text-sm text-[#1D2528] outline-none"
          name="date"
          type="date"
        />
      </TripField>
      <TripField icon={<Users className="size-4" />} label="Travelers">
        <select className="w-full bg-transparent text-sm outline-none" name="travelers">
          <option>2 Travelers</option>
          <option>Solo Traveler</option>
          <option>3-4 Travelers</option>
          <option>Family</option>
          <option>Private Group</option>
        </select>
      </TripField>
      <TripField icon={<Sparkles className="size-4" />} label="Experience">
        <select className="w-full bg-transparent text-sm outline-none" name="experience">
          {experiences.map((experience) => (
            <option key={experience}>{experience}</option>
          ))}
        </select>
      </TripField>
      <ActionButton className="w-full md:w-auto" type="submit" variant="secondary">
        <Search className="size-4" />
        Explore Trips
      </ActionButton>
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
