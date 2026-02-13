import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Crimson_Pro } from 'next/font/google';
import LayoutWrapper from '@/components/layout/LayoutWrapper';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  variable: '--font-crimson-pro',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Abenezer G. Taye',
  icons: {
    icon: '/at.png',
    shortcut: '/at.png',
    apple: '/at.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${crimsonPro.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >


      {/* Body uses Crimson Pro (Palatino-like), headings can use Inter via CSS */}
      <body
        className="min-h-screen bg-white antialiased font-[var(--font-crimson-pro)]"
        suppressHydrationWarning
      >

        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
