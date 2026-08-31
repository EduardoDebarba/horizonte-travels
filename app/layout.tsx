import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
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
  metadataBase: new URL('https://voyara.travel'),
  title: 'Voyara | Bespoke Travel & Extraordinary Journeys',
  description:
    'Discover tailor-made journeys, extraordinary destinations and unforgettable travel experiences designed around you.',
  openGraph: {
    title: 'Voyara | Bespoke Travel & Extraordinary Journeys',
    description:
      'Bespoke journeys, extraordinary places and unforgettable experiences designed around you.',
    siteName: 'Voyara',
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1792,
        height: 1024,
        alt: 'Voyara premium travel coastline preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Voyara | Bespoke Travel & Extraordinary Journeys',
    description:
      'Discover tailor-made journeys, extraordinary destinations and unforgettable travel experiences designed around you.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${cormorant.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
