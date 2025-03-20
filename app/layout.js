import '../styles/globals.css';
import { Titillium_Web } from 'next/font/google';

const titilliumWeb = Titillium_Web({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '900'],
  variable: '--font-titillium-web',
  display: 'swap',
});

export const metadata = {
  title: 'Full Throttle Revenue: How RevOps & Automation Drive Success',
  description: 'Interactive presentation on RevOps and Automation for college business undergrads',
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
  themeColor: '#121212',
  appleWebAppCapable: 'yes',
  appleWebAppStatusBarStyle: 'black-translucent',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={titilliumWeb.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
