import { ThemeProvider } from '@/providers/ThemeDarkLigthProvider';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import CustomDocument from './CustomDocument';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  icons: {
    icon: '/images/brainlogo.png',
  },
  title: 'my brain',
  description: 'manager of my brain',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <CustomDocument>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
      </CustomDocument>
    </ThemeProvider>
  );
}
