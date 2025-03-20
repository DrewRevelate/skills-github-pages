import '../styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Add focus outline styles for accessibility only when using keyboard
    const handleFirstTab = (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('user-is-tabbing');
        window.removeEventListener('keydown', handleFirstTab);
      }
    };
    
    window.addEventListener('keydown', handleFirstTab);
    
    // Fix for reload issues and navigation
    const handleRouteChange = () => {
      // Force window scroll to top on route change
      window.scrollTo(0, 0);
    };
    
    router.events.on('routeChangeComplete', handleRouteChange);
    
    return () => {
      window.removeEventListener('keydown', handleFirstTab);
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#121212" />
        <link rel="icon" href="/images/logo.png" />
        <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600;700;900&display=swap" rel="stylesheet" />
        <title>Full Throttle Revenue: How RevOps & Automation Drive Success</title>
      </Head>
      <Component {...pageProps} />
      
      <style jsx global>{`
        /* Fix for navigation buttons */
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
    </>
  );
}

export default MyApp;