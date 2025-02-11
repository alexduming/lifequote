/**
 * 根布局组件
 * @module RootLayout
 */

import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Providers } from '@/components/Providers';
import Script from 'next/script';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "LifeQuote - Words That Inspired Humanity for 1000 Years",
  description: "Discover inspiring quotes from history's greatest minds. Find motivation, wisdom, and inspiration through carefully curated quotes from famous people, books, and more.",
  keywords: "quotes, life quotes, inspirational quotes, motivational quotes, famous quotes, wisdom quotes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5692295538625732"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      </head>
      <body className={inter.className}>
        <Providers>
          {children}
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}