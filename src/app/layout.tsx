import type { Metadata } from 'next';
// import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Script from 'next/script';

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
  verification: {
    google: "ouY_gOiaiAZfoGRg6m1Kqvm0qiC5Bh5e6HRwEKVXNUY",
  },

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
      <body
        className={`antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-KKF1XJM0FC" />
      <Script id="google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KKF1XJM0FC');
          `}
      </Script>
    </html>
  );
}
