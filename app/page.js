'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Wait for loading animation before redirecting
    const timer = setTimeout(() => {
      router.push('/slides/01-introduction');
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="loading">
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

      <style jsx global>{`
        body.loading {
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
        body.loading:after {
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
        body.loading:before {
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
        
        .loading-text {
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
            opacity: 0;
            animation: fadeIn 1s forwards;
            font-weight: 600;
            color: white;
            text-shadow: 0 2px 10px rgba(0,0,0,0.3);
            letter-spacing: 0.5px;
        }
        
        .spinner {
            position: relative;
            width: 70px;
            height: 70px;
            margin: 0 auto;
        }
        
        .spinner:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 5px solid rgba(255, 255, 255, 0.05);
            border-radius: 50%;
        }
        
        .spinner:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 5px solid transparent;
            border-top-color: var(--racing-red);
            border-radius: 50%;
            animation: spin 1s cubic-bezier(0.66, 0, 0.33, 1) infinite;
            box-shadow: 0 0 20px rgba(225, 6, 0, 0.4);
        }
        
        /* Progress dots */
        .loading-dots {
            margin-top: 1.5rem;
            display: flex;
            justify-content: center;
            gap: 8px;
        }
        
        .loading-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.2);
            animation: pulse-dot 1.5s infinite;
        }
        
        .loading-dot:nth-child(2) {
            animation-delay: 0.2s;
        }
        
        .loading-dot:nth-child(3) {
            animation-delay: 0.4s;
        }
        
        @keyframes pulse-dot {
            0%, 100% { opacity: 0.2; transform: scale(1); background-color: rgba(255, 255, 255, 0.2); }
            50% { opacity: 1; transform: scale(1.1); background-color: var(--racing-red); }
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        
        /* Hide the main presentation container during loading */
        .loading .presentation-container {
            display: none;
        }
        
        /* Logo in loading screen */
        .loading-logo {
            margin-bottom: 2rem;
            animation: float 3s ease-in-out infinite;
        }
        
        .loading-logo img {
            max-width: 180px;
            height: auto;
            filter: drop-shadow(0 10px 15px rgba(0,0,0,0.3));
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}