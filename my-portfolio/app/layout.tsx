import type { Metadata } from 'next';
import './globals.css';
import { Charm } from 'next/font/google';

const charm = Charm({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-charm',
});

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Personal Portfolio Website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={charm.variable}>{children}</body>
    </html>
  );
}
