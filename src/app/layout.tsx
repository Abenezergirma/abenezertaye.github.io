import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import LayoutWrapper from '@/components/layout/LayoutWrapper';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Abenezer Taye - Research Portfolio',
    template: '%s | Abenezer Taye'
  },
  description: 'Post-Doctoral Research Scholar specializing in Advanced Air Mobility, Trajectory Planning, and Autonomous Systems at Vanderbilt University',
  keywords: ['Advanced Air Mobility', 'Trajectory Planning', 'Autonomous Systems', 'UAV Research', 'Vanderbilt University', 'NASA Research'],
  authors: [{ name: 'Abenezer Taye' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abenezertaye.com',
    title: 'Abenezer Taye - Research Portfolio',
    description: 'Post-Doctoral Research Scholar specializing in Advanced Air Mobility and Autonomous Systems',
    siteName: 'Abenezer Taye Research Portfolio',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-white font-sans antialiased">
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}