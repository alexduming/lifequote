/**
 * 根布局组件
 * @module RootLayout
 */

import React from 'react';
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Oswald } from "next/font/google";
import "./globals.css";
import Providers from '@/components/Providers';
import Script from 'next/script';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: "--font-oswald",
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "LifeQuote - Words That Inspired Humanity for 1000 Years",
  description: "Discover inspiring quotes from history's greatest minds. Find motivation, wisdom, and inspiration through carefully curated quotes from famous people, books, and more.",
  keywords: "quotes, life quotes, inspirational quotes, motivational quotes, famous quotes, wisdom quotes",
};

/**
 * 根布局组件
 * @param {object} props - 组件属性
 * @param {React.ReactNode} props.children - 子组件
 * @returns {JSX.Element} 根布局组件
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <style>{`
          .font-[oswald] {
            font-family: 'Oswald', 'Noto Sans SC', sans-serif;
          }
        `}</style>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JNJV1MMYTT"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JNJV1MMYTT');
          `}
        </Script>
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5692295538625732"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${plusJakarta.variable} ${oswald.variable} font-sans`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
} 