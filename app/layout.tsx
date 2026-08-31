import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import { brand } from '@/data/travel';
import './globals.css';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  title: `${brand.name} | Viagens Sob Medida e Jornadas Extraordinárias`,
  description:
    'Descubra jornadas sob medida, destinos extraordinários e experiências de viagem inesquecíveis desenhadas ao seu redor.',
  openGraph: {
    title: `${brand.name} | Viagens Sob Medida e Jornadas Extraordinárias`,
    description:
      'Jornadas sob medida, lugares extraordinários e experiências inesquecíveis desenhadas ao seu redor.',
    siteName: brand.name,
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1792,
        height: 1024,
        alt: `Prévia da ${brand.name} com litoral premium de viagem`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${brand.name} | Viagens Sob Medida e Jornadas Extraordinárias`,
    description:
      'Descubra jornadas sob medida, destinos extraordinários e experiências de viagem inesquecíveis desenhadas ao seu redor.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${manrope.variable} ${cormorant.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
