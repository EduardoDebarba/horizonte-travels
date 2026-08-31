import { Send } from 'lucide-react';

import { brand } from '@/data/travel';

const columns = [
  {
    title: 'Explore',
    links: ['Destinations', 'Experiences', 'Journeys', 'Journal'],
  },
  {
    title: 'Company',
    links: ['About', 'Contact', 'Careers', 'Partners'],
  },
  {
    title: 'Support',
    links: ['FAQ', 'Travel Information', 'Privacy', 'Terms'],
  },
];

export function Footer() {
  return (
    <footer id="footer" className="bg-[#07191f] py-16 text-white sm:py-20">
      <div className="site-container">
        <div className="grid gap-12 border-b border-white/12 pb-12 lg:grid-cols-[1.1fr_1.3fr_1fr]">
          <div>
            <a className="font-heading text-5xl font-semibold" href="#home">
              {brand.name}
            </a>
            <p className="mt-4 max-w-xs text-sm leading-7 text-white/62">
              {brand.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-5 text-sm text-white/74">
              {['Instagram', 'Pinterest', 'YouTube', 'Facebook'].map((social) => (
                <a className="inline-flex min-h-8 items-center transition-colors hover:text-[#D9C5A5]" href="#home" key={social}>
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-[#D9C5A5]">
                  {column.title}
                </h3>
                <ul className="mt-5 space-y-3 text-sm text-white/62">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a className="inline-flex min-h-8 items-center transition-colors hover:text-white" href="#home">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <form className="rounded-md border border-white/14 p-5">
            <label className="grid gap-4">
              <span>
                <span className="block text-xs font-bold uppercase tracking-[0.14em] text-[#D9C5A5]">
                  Newsletter
                </span>
                <span className="mt-2 block text-sm text-white/62">
                  Travel inspiration, delivered occasionally.
                </span>
              </span>
              <span className="flex min-h-12 overflow-hidden rounded-md bg-white">
                <input
                  className="min-w-0 flex-1 px-4 text-sm text-[#1D2528] outline-none"
                  placeholder="Your email"
                  type="email"
                />
                <button
                  className="inline-flex w-12 items-center justify-center bg-[#C56F4D] text-white transition-colors hover:bg-[#af5f40] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9C5A5]"
                  type="submit"
                  aria-label="Subscribe"
                >
                  <Send className="size-4" />
                </button>
              </span>
            </label>
          </form>
        </div>
        <div className="flex flex-col justify-between gap-4 pt-8 text-xs text-white/46 sm:flex-row">
          <p>© 2026 Voyara. All rights reserved.</p>
          <p>Journeys made unforgettable.</p>
        </div>
      </div>
    </footer>
  );
}
