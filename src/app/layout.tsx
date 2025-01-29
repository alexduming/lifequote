/**
 * 根布局组件
 * @module RootLayout
 */

import React from 'react';
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Oswald } from "next/font/google";
import "./globals.css";
import Providers from '@/components/Providers';

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
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;600;700&display=swap"
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