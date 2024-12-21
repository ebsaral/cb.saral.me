import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

import {routing} from '@/i18n/routing';
import { Inter } from 'next/font/google'
 
import "../globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: "variable"
})

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const messages = await getMessages();
  const {locale} = await params;
  return (
    <html lang={locale}>
      <body
        className={`${inter.className}`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
          <PrismicPreview repositoryName={repositoryName} />
          <Analytics />
          <SpeedInsights />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
