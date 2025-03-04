import type { Metadata } from 'next';
// import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '~/components/Header';
import Footer from '~/components/Footer';

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

export const metadata: Metadata = {
  title: 'BroCine - Production House & Rental House',
  description:
    'BROS CINE is an video production company with offices in the Ho Chi Minh and equipment rental in Da Nang . With lots of ambition about TVC, documentary filming, music video. Having a love with every simple thing in this world. Always be professional & energetic at work.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
      <link rel="manifest" href="/site.webmanifest"></link>
      <head>
        <meta name="google-site-verification" content="ouY_gOiaiAZfoGRg6m1Kqvm0qiC5Bh5e6HRwEKVXNUY" />
      </head>
      <body
        className={`antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
