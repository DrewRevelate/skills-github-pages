'use client';

import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <h1>404 - Slide Not Found</h1>
        <p>The slide you're looking for doesn't exist or has been moved.</p>
        <Link href="/" className="back-button">
          Return to Start
        </Link>
      </div>

      <style jsx>{`
        .not-found {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background: linear-gradient(135deg, #121212, #1e1e1e, #2a2a2a);
          color: white;
          font-family: 'Titillium Web', sans-serif;
          position: relative;
          overflow: hidden;
          text-align: center;
        }
        
        .not-found:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E10600' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          opacity: 0.2;
        }
        
        .not-found:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 8px;
          background: linear-gradient(90deg, var(--racing-red, #E10600), rgba(225, 6, 0, 0.3), transparent);
        }
        
        .not-found-content {
          position: relative;
          z-index: 2;
          padding: 2rem;
          max-width: 600px;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 15px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
          border-left: 5px solid var(--racing-red, #E10600);
        }
        
        h1 {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          color: white;
          text-shadow: 0 2px 10px rgba(0,0,0,0.3);
        }
        
        p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          color: rgba(255, 255, 255, 0.9);
        }
        
        .back-button {
          display: inline-block;
          padding: 0.8rem 1.5rem;
          background-color: var(--racing-red, #E10600);
          color: white;
          text-decoration: none;
          font-weight: 700;
          border-radius: 5px;
          transition: background-color 0.3s, transform 0.2s;
          box-shadow: 0 5px 15px rgba(225, 6, 0, 0.3);
        }
        
        .back-button:hover {
          background-color: #ff0a00;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(225, 6, 0, 0.4);
        }
        
        .back-button:active {
          transform: translateY(0);
        }
        
        @media (max-width: 600px) {
          h1 {
            font-size: 2.2rem;
          }
          
          p {
            font-size: 1rem;
          }
          
          .not-found-content {
            width: 90%;
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}