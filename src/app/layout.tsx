import { ThemeProvider } from '@/providers/ThemeProvider';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import CustomDocument from './CustomDocument';
import './globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <ThemeProvider>
      <CustomDocument>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
        </body>
      </CustomDocument>
    </ThemeProvider>
  );
}
