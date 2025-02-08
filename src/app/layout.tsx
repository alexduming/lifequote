/**
 * 根布局组件
 * @module RootLayout
 */

import React from 'react';
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Providers from '@/components/Providers';
import Script from 'next/script';
import { oswald as oswaldFont, notoSansSC } from '@/styles/fonts';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
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
    <html lang="en" className={`${plusJakarta.variable} ${oswaldFont.variable} ${notoSansSC.variable} font-sans`}>
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
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5692295538625732"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
} 