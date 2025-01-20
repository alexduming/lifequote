import React from 'react';
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Oswald } from "next/font/google";
import { LanguageProvider } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: "--font-oswald",
  display: 'swap',
});

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
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;600;700&display=swap"
        />
        <link rel="stylesheet" href="//at.alicdn.com/t/c/font_4815599_0e03su13486.css" />
      </head>
      <body className={`${plusJakarta.variable} ${oswald.variable} font-sans`}>
        <LanguageProvider>
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
} 