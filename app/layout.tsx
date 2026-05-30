import './globals.css';
import type { Metadata } from 'next';
import { Black_Han_Sans, Space_Grotesk } from 'next/font/google';

const blackHanSans = Black_Han_Sans({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'B. Ranjani — Full Stack Developer & SEO Specialist',
  description:
    'Portfolio of B. Ranjani — Full Stack Developer and SEO Specialist. Building high-performance websites and driving organic growth.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${blackHanSans.variable} ${spaceGrotesk.variable}`}>{children}</body>
    </html>
  );
}
