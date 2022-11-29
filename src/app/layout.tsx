'use client';

import { DM_Sans } from '@next/font/google';
import './globals.css';

const font = DM_Sans({
  weight: ['400', '500', '700'],
});

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A modern Discord Bot" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
        />
        <title>Sync Station</title>
      </head>
      <body className={font.className}>
        {children}
      </body>
    </html>
  );
}

export default HomeLayout;
