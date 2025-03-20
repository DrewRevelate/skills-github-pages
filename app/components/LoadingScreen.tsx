"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface LoadingScreenProps {
  duration?: number;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ duration = 2000 }) => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      router.push('/');
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, router]);

  if (!isLoading) return null;

  return (
    <div className="loading-wrapper">
      <div className="loading-container">
        <div className="loading-logo">
          <Image 
            src="/images/logo.png" 
            alt="Full Throttle Logo" 
            width={180} 
            height={180}
            priority
          />
        </div>
        <div className="loading-text">Loading Presentation...</div>
        <div className="spinner"></div>
        <div className="loading-dots">
          <div className="loading-dot"></div>
          <div className="loading-dot"></div>
          <div className="loading-dot"></div>
        </div>
      </div>

      <style jsx>{`
        .loading-wrapper {
          margin: 0;
          padding: 0;
          background-color: var(--racing-dark);
          font-family: var(--font-titillium-web), 'Segoe UI', sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          width: 100vw;
          overflow: hidden;
          color: white;
          background: linear-gradient(135deg, #121212, #1e1e1e, #2a2a2a);
          position: relative;
          z-index: 9999;
        }
        
        /* Racing-inspired background pattern */
        .loading-wrapper:after {
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
        .loading-wrapper:before {
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
        
        .loading-container {
          text-align: center;
          position: relative;
          z-index: 2;
          padding: 2rem;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 15px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
          max-width: 400px;
          border: 1px solid rgba(225, 6, 0, 0.1);
          position: relative;
          overflow: hidden;
        }
        
        .loading-container:after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, var(--racing-red), transparent);
          box-shadow: 0 0 15px rgba(225, 6, 0, 0.5);
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
