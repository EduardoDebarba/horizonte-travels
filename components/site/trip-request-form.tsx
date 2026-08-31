'use client';

import { CheckCircle2, XCircle } from 'lucide-react';
import { useState } from 'react';

import { brand } from '@/data/travel';
import { ActionButton } from './action-button';
import { Reveal } from './reveal';
import { SectionHeading } from './section-heading';

const styles = [
  'Relaxamento',
  'Aventura',
  'Cultura',
  'Romance',
  'Gastronomia',
  'Família',
  'Outro',
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
      setError('Preencha os detalhes essenciais da viagem antes de enviar.');
      return;
    }

    const email = form.get('email');
    if (typeof email !== 'string' || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('error');
      setError('Informe um endereço de e-mail válido.');
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
            label="Planeje sua jornada"
            title="Conte sobre a viagem dos seus sonhos."
            text="Compartilhe os primeiros detalhes da jornada que você imagina. Nossos designers de viagem moldarão o restante com cuidado."
          />
          <div className="mt-10 border-t border-[#D9C5A5] pt-6 text-sm leading-7 text-[#6E7473]">
            <p className="font-semibold text-[#123B4A]">{brand.email}</p>
            <p>Consultorias privativas disponíveis em qualquer lugar do mundo.</p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form
            className="rounded-md border border-[#D9C5A5]/70 bg-[#FFFDF7] p-5 sm:p-8"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <FormField label="Nome Completo" name="name" placeholder="Seu nome" required />
              <FormField label="E-mail" name="email" placeholder="seu@email.com" type="email" required />
              <FormField label="Telefone" name="phone" placeholder="+55 11 00000 0000" />
              <FormField label="Destino" name="destination" placeholder="Portugal, Japão, Patagônia..." required />
              <FormField label="Datas da Viagem" name="dates" type="text" placeholder="Setembro de 2026" />
              <FormField label="Número de Viajantes" name="travelers" placeholder="2 viajantes" required />
              <FormField label="Orçamento Estimado" name="budget" placeholder="US$ 5.000 - US$ 8.000" required />
              <label className="grid gap-2">
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#355C4D]">
                  Estilo de Viagem
                </span>
                <select
                  className="min-h-12 rounded-md border border-[#D9C5A5] bg-white px-4 text-sm text-[#1D2528] outline-none transition focus:border-[#235E6F] focus:ring-2 focus:ring-[#235E6F]/20"
                  name="style"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Escolha um estilo
                  </option>
                  {styles.map((style) => (
                    <option key={style}>{style}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 sm:col-span-2">
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#355C4D]">
                  Mensagem
                </span>
                <textarea
                  className="min-h-36 rounded-md border border-[#D9C5A5] bg-white px-4 py-3 text-sm text-[#1D2528] outline-none transition focus:border-[#235E6F] focus:ring-2 focus:ring-[#235E6F]/20"
                  name="message"
                  placeholder="Conte o que tornaria esta viagem inesquecível."
                />
              </label>
            </div>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <ActionButton type="submit" variant="primary">
                {status === 'loading' ? 'Planejando...' : 'Começar Planejamento'}
              </ActionButton>
              <p className="min-h-6 text-sm" aria-live="polite">
                {status === 'success' ? (
                  <span className="inline-flex items-center gap-2 text-[#355C4D]">
                    <CheckCircle2 className="size-4" />
                    Sua solicitação está pronta para um designer de viagem.
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
