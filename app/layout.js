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
        <style jsx global>{`
          .nav-button {
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            color: white;
          }
          
          /* Ensure proper slide activation */
          .slide {
            visibility: visible;
            opacity: 1;
          }
          
          /* Additional mobile optimizations */
          @media (max-width: 768px) {
            .presentation-container {
              overflow-x: hidden;
              overflow-y: hidden;
              height: 100vh;
              width: 100vw;
            }
            
            .slide {
              padding-bottom: 100px;
              min-height: 100vh;
            }
            
            .slide .slide-content {
              padding-bottom: 120px;
              min-height: 100%;
            }
          }
        `}</style>
      </body>
    </html>
  );
}
