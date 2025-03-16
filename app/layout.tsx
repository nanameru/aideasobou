// @ts-nocheck
import type { Metadata } from "next";
import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CacheBuster from './components/cache-buster';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AIで遊ぼうコミュニティー",
  description: "AIで遊ぼうコミュニティーへようこそ。最新のAI情報と早期アクセス特典をご提供します。",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CacheBuster />
        {children}
      </body>
    </html>
  );
}
