'use client';

import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

import { brand, navLinks } from '@/data/travel';
import { cn } from '@/lib/utils';
import { ActionButton } from './action-button';
import { BrandLogo } from './brand-logo';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled || open
          ? 'border-b border-white/10 bg-[#123B4A]/92 text-white shadow-[0_16px_40px_rgb(29_37_40/10%)] backdrop-blur-md'
          : 'bg-transparent text-white',
      )}
    >
      <div className="site-container grid h-20 grid-cols-[1fr_auto_1fr] items-center max-lg:flex max-lg:justify-between">
        <a
          className="inline-flex items-center"
          href="#home"
          aria-label={`Página inicial da ${brand.name}`}
        >
          <BrandLogo className="w-[154px] sm:w-[178px]" priority />
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              className="group relative inline-flex min-h-9 items-center text-[0.78rem] font-semibold uppercase tracking-[0.12em] opacity-90 transition-opacity hover:opacity-100"
              href={link.href}
              key={link.href}
            >
              {link.label}
              <span className="absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="hidden justify-end lg:flex">
          <ActionButton href="#contact" variant={scrolled ? 'primary' : 'light'}>
            Planeje Sua Viagem
          </ActionButton>
        </div>

        <button
          className="inline-flex size-11 items-center justify-center rounded-md border border-current/25 transition-colors hover:bg-current/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C56F4D] lg:hidden"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        className={cn(
          'fixed inset-0 top-20 z-40 bg-[#123B4A] text-white transition-all duration-500 lg:hidden',
          open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-4 opacity-0',
        )}
      >
        <div className="site-container flex h-[calc(100vh-5rem)] flex-col justify-between py-10">
          <nav className="grid gap-5" aria-label="Navegação mobile">
            {navLinks.map((link, index) => (
              <a
                className="font-heading text-[clamp(2.15rem,9vw,3.85rem)] leading-[0.98] text-white/92 transition-colors hover:text-[#D9C5A5]"
                href={link.href}
                key={link.href}
                onClick={() => setOpen(false)}
              >
                <span className="mr-4 align-top text-sm font-sans text-[#D9C5A5]">
                  0{index + 1}
                </span>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="grid gap-8 border-t border-white/18 pt-7 sm:grid-cols-[1fr_auto] sm:items-end">
            <div className="space-y-3 text-sm text-white/72">
              <p>{brand.email}</p>
              <p>Desenho de viagens privativas pelo mundo.</p>
              <div className="flex gap-5 pt-2 text-white">
                {['Instagram', 'Pinterest', 'YouTube'].map((item) => (
                  <a className="inline-flex min-h-8 items-center transition-opacity hover:opacity-70" href="#footer" key={item}>
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <ActionButton href="#contact" variant="light" onClick={() => setOpen(false)}>
              Planeje Sua Viagem
            </ActionButton>
          </div>
        </div>
      </div>
    </header>
  );
}
