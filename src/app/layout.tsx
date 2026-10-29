import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Crimson_Pro } from 'next/font/google';
import LayoutWrapper from '@/components/layout/LayoutWrapper';
import Script from 'next/script';
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
  title: {
    default: 'Abenezer G. Taye',
    template: '%s | Abenezer G. Taye',
  },
  description:
    'Abenezer G. Taye is a postdoctoral scholar at Vanderbilt University working on safe, secure, and reliable autonomy for advanced air mobility.',
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DQ0G0KS5B8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-DQ0G0KS5B8');
          `}
        </Script>
      </body>
    </html>
  );
}
