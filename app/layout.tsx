import type { Metadata } from 'next';
import { Titillium_Web } from 'next/font/google';
import './globals.css';

const titilliumWeb = Titillium_Web({
  weight: ['300', '400', '600', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-titillium-web',
});

export const metadata: Metadata = {
  title: 'Full Throttle Revenue: How RevOps & Automation Drive Success',
  description: 'Interactive presentation on Revenue Operations and Automation for undergraduate business students',
  authors: [{ name: 'Drew Lambert' }],
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
  themeColor: '#121212',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={titilliumWeb.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
