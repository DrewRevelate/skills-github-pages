export default function Loading() {
  return (
    <div className="loading-wrapper">
      <div className="loading-container">
        <div className="loading-text">Loading Slide...</div>
        <div className="spinner"></div>
        <div className="loading-dots">
          <div className="loading-dot"></div>
          <div className="loading-dot"></div>
          <div className="loading-dot"></div>
        </div>
      </div>
      
      <style jsx>{`
        .loading-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          width: 100vw;
          background: linear-gradient(135deg, #121212, #1e1e1e, #2a2a2a);
          color: white;
        }
        
        .loading-container {
          text-align: center;
          padding: 2rem;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 15px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(225, 6, 0, 0.1);
          position: relative;
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
          font-weight: 600;
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
      `}</style>
    </div>
  );
}
