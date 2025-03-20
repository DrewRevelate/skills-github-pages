"use client";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404 - Slide Not Found</h1>
      <p>The slide you are looking for does not exist.</p>
      <a href="/">Return to first slide</a>
      
      <style jsx>{`
        .not-found {
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
        
        a {
          display: inline-block;
          background-color: var(--racing-red);
          color: white;
          font-size: 1.2rem;
          font-weight: 600;
          padding: 0.8rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        a:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(225, 6, 0, 0.4);
        }
      `}</style>
    </div>
  );
}
