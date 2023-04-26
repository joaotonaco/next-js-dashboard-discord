'use client';

import { DM_Sans } from '@next/font/google';
import './globals.css';

const font = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A modern Discord Bot" />
        <title>Sync Station</title>
      </head>
      <body className={font.className}>{children}</body>
    </html>
  );
}

export default HomeLayout;
