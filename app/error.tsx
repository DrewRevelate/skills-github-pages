"use client";

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="error-container">
      <h1>Something went wrong</h1>
      <p>Sorry, there was an error loading this slide.</p>
      <div className="buttons">
        <button onClick={() => reset()}>Try again</button>
        <a href="/">Return to first slide</a>
      </div>
      
      <style jsx>{`
        .error-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background-color: var(--racing-dark);
          color: white;
          text-align: center;
          padding: 2rem;
        }
        
        h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          color: var(--racing-red);
        }
        
        p {
          font-size: 1.5rem;
          margin-bottom: 2rem;
        }
        
        .buttons {
          display: flex;
          gap: 1rem;
        }
        
        button, a {
          display: inline-block;
          font-size: 1.2rem;
          font-weight: 600;
          padding: 0.8rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        button {
          background-color: var(--accent-yellow);
          color: var(--racing-dark);
          border: none;
        }
        
        a {
          background-color: var(--racing-red);
          color: white;
        }
        
        button:hover, a:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
        }
      `}</style>
    </div>
  );
}
