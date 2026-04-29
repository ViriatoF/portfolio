import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const space = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Viriato FERREIRA - Front-end developper',
  description:
    'Viriato FERREIRA portfolio one page, french front-end developper based in Nantes, LA, France',
  openGraph: {
    title: 'Viriato FERREIRA - Front-end developper',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${space.variable}`}>
        {children}
      </body>
    </html>
  );
}
