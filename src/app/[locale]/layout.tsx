import './globals.css';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import { redirect } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactWidget from '@/components/ContactWidget';
import { Inter } from 'next/font/google';
import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: "Wholesale Silk Bedding Sets: Taihu Snow Silk Bed Set Deals",
  description: "Find wholesale silk bedding sets & Taihu Snow silk bed set deals. Shop mulberry silk options & customize your silk bedding needs here!",
};


const inter = Inter({ subsets: ["latin"] })

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    redirect('/en');
  }

  return (
    <html lang={locale}>
        <head>
        <link 
          rel="preload" 
          href="https://www.googletagmanager.com/gtag/js?id=G-F31FS4THEZ" 
          as="script"
        />
      </head>
      <body className={`${inter.className} min-h-screen bg-secondary flex flex-col`}>
        <NextIntlClientProvider>
            <Header />
              {children}
            <Footer />
            <ContactWidget />
        </NextIntlClientProvider>
      </body>
      <GoogleAnalytics gaId="G-F31FS4THEZ" />
    </html>
  );
} 