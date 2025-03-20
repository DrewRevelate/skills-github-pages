import { Titillium_Web } from 'next/font/google';
import './globals.css';
import { metadata } from './metadata';

const titilliumWeb = Titillium_Web({
  weight: ['300', '400', '600', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-titillium-web',
});

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={titilliumWeb.variable}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <meta name="theme-color" content="#E10600" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
