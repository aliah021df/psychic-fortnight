// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header'; // ایمپورت هدر

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rastegar VRF - Next.js WordPress Frontend',
  description: 'A modern frontend for WordPress using Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl"> {/* برای زبان فارسی و جهت راست به چپ */}
      <body className={inter.className}>
        <Header /> {/* کامپوننت هدر را اینجا قرار دهید */}
        <main>{children}</main> {/* محتوای صفحات شما */}
      </body>
    </html>
  );
}