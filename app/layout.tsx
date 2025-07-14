import type { Metadata } from 'next';
import { Geist, Geist_Mono, Alumni_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/src/components/header/header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const alumni = Alumni_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-alumni',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Galaxy Academy',
  description: '',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${alumni.variable}`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
