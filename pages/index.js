import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Wait for loading animation before redirecting
    setTimeout(() => {
      router.push('/slides/01-introduction');
    }, 2000);
  }, [router]);

  return (
    <div className="loading">
      <Head>
        <title>Full Throttle Revenue: How RevOps & Automation Drive Success</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#121212" />
        <style jsx global>{`
          body {
            margin: 0;
            padding: 0;
            background-color: var(--racing-dark);
            font-family: 'Titillium Web', 'Segoe UI', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            overflow: hidden;
            color: white;
            background: linear-gradient(135deg, #121212, #1e1e1e, #2a2a2a);
            position: relative;
          }
          
          /* Racing-inspired background pattern */
          body:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E10600' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
            opacity: 0.5;
            z-index: 1;
          }
          
          /* Racing stripes at bottom */
          body:before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 80px;
            background: repeating-linear-gradient(
                45deg,
                rgba(225, 6, 0, 0.1),
                rgba(225, 6, 0, 0.1) 10px,
                rgba(0, 0, 0, 0) 10px,
                rgba(0, 0, 0, 0) 20px
            );
            z-index: 1;
          }
        `}</style>
      </Head>

      <div className="loading-container">
        <div className="loading-logo">
          <img src="/images/logo.png" alt="Full Throttle Logo" />
        </div>
        <div className="loading-text">Loading Presentation...</div>
        <div className="spinner"></div>
        <div className="loading-dots">
          <div className="loading-dot"></div>
          <div className="loading-dot"></div>
          <div className="loading-dot"></div>
        </div>
      </div>
    </div>
  );
}
