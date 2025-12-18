import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eroots Technologies - Leading EV Training Institute in Kerala',
  description: 'Kerala\'s first exclusive EV technology training institute delivering innovation through education, products, and services. Master the future of mobility today.',
  keywords: 'EV training, electric vehicle, Kerala, battery technology, EV courses, lithium batteries',
  openGraph: {
    title: 'Eroots Technologies - EV Training Institute',
    description: 'Kerala\'s first exclusive EV technology training institute',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eroots Technologies - EV Training Institute',
    description: 'Kerala\'s first exclusive EV technology training institute',
    images: ['https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
