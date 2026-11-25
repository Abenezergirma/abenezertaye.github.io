import type { Metadata } from 'next';
import { EB_Garamond, Source_Sans_3 } from 'next/font/google';
import Script from 'next/script';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import './globals.css';

const garamond = EB_Garamond({ subsets: ['latin'], variable: '--font-garamond', display: 'swap' });
const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
  style: ['normal', 'italic'],
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
    <html lang="en" className={`${garamond.variable} ${sourceSans.variable}`}>
      <body>
        <div className="page">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>

        <Script src="https://www.googletagmanager.com/gtag/js?id=G-DQ0G0KS5B8" strategy="afterInteractive" />
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
