'use client';

import { CheckCircle2, Send, XCircle } from 'lucide-react';
import { useState } from 'react';

import { ActionButton } from './action-button';
import { Reveal } from './reveal';
import { SectionHeading } from './section-heading';

const styles = [
  'Relaxation',
  'Adventure',
  'Culture',
  'Romance',
  'Gastronomy',
  'Family',
  'Other',
];

const requiredFields = ['name', 'email', 'destination', 'travelers', 'budget', 'style'];

export function TripRequestForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  function handleSubmit(event: { preventDefault: () => void; currentTarget: HTMLFormElement }) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(event.currentTarget);
    const missing = requiredFields.find((field) => {
      const value = form.get(field);
      return typeof value !== 'string' || !value.trim();
    });

    if (missing) {
      setStatus('error');
      setError('Please complete the essential trip details before sending.');
      return;
    }

    const email = form.get('email');
    if (typeof email !== 'string' || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('error');
      setError('Please add a valid email address.');
      return;
    }

    setStatus('loading');
    setError('');

    window.setTimeout(() => {
      setStatus('success');
      formElement.reset();
    }, 850);
  }

  return (
    <section id="contact" className="bg-[#F6F2EA] py-28 sm:py-36">
      <div className="site-container grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
        <Reveal>
          <SectionHeading
            label="Plan your journey"
            title="Tell us about your dream trip."
            text="Share the first pieces of the journey you are imagining. Our travel designers will shape the rest with care."
          />
          <div className="mt-10 border-t border-[#D9C5A5] pt-6 text-sm leading-7 text-[#6E7473]">
            <p className="font-semibold text-[#123B4A]">hello@voyara.travel</p>
            <p>Private consultations available worldwide.</p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form
            className="rounded-md border border-[#D9C5A5]/70 bg-[#FFFDF7] p-5 sm:p-8"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <FormField label="Full Name" name="name" placeholder="Your name" required />
              <FormField label="Email" name="email" placeholder="you@email.com" type="email" required />
              <FormField label="Phone" name="phone" placeholder="+1 555 000 0000" />
              <FormField label="Destination" name="destination" placeholder="Portugal, Japan, Patagonia..." required />
              <FormField label="Travel Dates" name="dates" type="text" placeholder="September 2026" />
              <FormField label="Number of Travelers" name="travelers" placeholder="2 travelers" required />
              <FormField label="Estimated Budget" name="budget" placeholder="$5,000 - $8,000" required />
              <label className="grid gap-2">
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#355C4D]">
                  Travel Style
                </span>
                <select
                  className="min-h-12 rounded-md border border-[#D9C5A5] bg-white px-4 text-sm text-[#1D2528] outline-none transition focus:border-[#235E6F] focus:ring-2 focus:ring-[#235E6F]/20"
                  name="style"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Choose a style
                  </option>
                  {styles.map((style) => (
                    <option key={style}>{style}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 sm:col-span-2">
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#355C4D]">
                  Message
                </span>
                <textarea
                  className="min-h-36 rounded-md border border-[#D9C5A5] bg-white px-4 py-3 text-sm text-[#1D2528] outline-none transition focus:border-[#235E6F] focus:ring-2 focus:ring-[#235E6F]/20"
                  name="message"
                  placeholder="Tell us what would make this trip unforgettable."
                />
              </label>
            </div>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <ActionButton type="submit" variant="primary">
                <Send className="size-4" />
                {status === 'loading' ? 'Planning...' : 'Start Planning'}
              </ActionButton>
              <p className="min-h-6 text-sm" aria-live="polite">
                {status === 'success' ? (
                  <span className="inline-flex items-center gap-2 text-[#355C4D]">
                    <CheckCircle2 className="size-4" />
                    Your request is ready for a travel designer.
                  </span>
                ) : null}
                {status === 'error' ? (
                  <span className="inline-flex items-center gap-2 text-[#A84F39]">
                    <XCircle className="size-4" />
                    {error}
                  </span>
                ) : null}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function FormField({
  label,
  name,
  placeholder,
  type = 'text',
  required = false,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#355C4D]">
        {label}
      </span>
      <input
        className="min-h-12 rounded-md border border-[#D9C5A5] bg-white px-4 text-sm text-[#1D2528] outline-none transition placeholder:text-[#8C918E] focus:border-[#235E6F] focus:ring-2 focus:ring-[#235E6F]/20"
        name={name}
        placeholder={placeholder}
        type={type}
        required={required}
      />
    </label>
  );
}
