"use client";

import Image from 'next/image';
import SlideLayout from './SlideLayout';
import TouchNavigation from './TouchNavigation';

export default function HomePage() {
  return (
    <SlideLayout slideNumber={1} totalSlides={8} slideId="title">
      <div className="diagonal-accent"></div>
      <div className="speedometer-bg"></div>
      <div className="chevron-pattern"></div>
      <div className="racing-stripes">
        <div className="stripe"></div>
        <div className="stripe white"></div>
        <div className="stripe dark"></div>
      </div>
      
      <div className="title-container">
        <div className="title-content">
          <div className="title-prefix animate delay-1">REVOLUTIONIZE YOUR SALES PROCESS</div>
          <h1 className="main-title animate delay-2">FULL <span className="highlight">THROTTLE</span> REVENUE</h1>
          <div className="subtitle animate delay-3">How Revenue Operations & Automation Drive Success in Today's High-Speed Business Environment</div>
          
          <div className="presenter-details animate delay-4">
            <div className="presenter-image">
              <Image 
                src="/images/profile.jpeg" 
                alt="Drew Lambert" 
                width={120} 
                height={120} 
                layout="responsive"
              />
            </div>
            <div className="presenter-info">
              <h3>Drew Lambert</h3>
              <p>Revenue Operations Expert & Salesforce Engineer</p>
              <p className="company">REVELATE OPERATIONS, LLC</p>
              <p>Founder & Principal Consultant</p>
            </div>
          </div>
        </div>
      </div>

      <TouchNavigation prevLink={null} nextLink="/slides/2" />

      <style jsx>{`
        .title-slide {
          background: linear-gradient(135deg, #121212, #1e1e1e, #232323);
          color: var(--text-light);
          position: relative;
          overflow: hidden;
        }
        
        .title-slide:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect fill="none" width="100" height="100"/><rect fill="rgba(225,6,0,0.03)" width="50" height="50"/><rect fill="rgba(225,6,0,0.03)" x="50" y="50" width="50" height="50"/></svg>');
          opacity: 0.5;
          z-index: 0;
        }
        
        .diagonal-accent {
          position: absolute;
          top: 0;
          right: 0;
          width: 50%;
          height: 100%;
          background: linear-gradient(135deg, transparent, rgba(225, 6, 0, 0.05));
          clip-path: polygon(100% 0, 0% 100%, 100% 100%);
          z-index: 1;
        }
        
        .title-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          position: relative;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          z-index: 5;
        }
        
        .title-content {
          max-width: 1000px;
          position: relative;
        }
        
        .title-prefix {
          font-size: 1.8rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--racing-silver);
          text-shadow: 0 2px 5px rgba(0,0,0,0.3);
          margin-bottom: 1.2rem;
          position: relative;
          display: inline-block;
          padding-left: 30px;
          letter-spacing: 2px;
        }
        
        .title-prefix::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          width: 20px;
          height: 4px;
          background-color: var(--racing-red);
          transform: translateY(-50%);
          box-shadow: 0 0 8px rgba(225, 6, 0, 0.5);
        }
        
        .main-title {
          font-size: 7rem;
          line-height: 1;
          font-weight: 750;
          margin-bottom: 2rem;
          text-transform: uppercase;
          letter-spacing: -3px;
          text-shadow: 0 3px 10px rgba(0,0,0,0.3);
          position: relative;
        }
        
        .main-title .highlight {
          color: var(--racing-red);
          font-style: italic;
          display: inline-block;
          position: relative;
        }
        
        .main-title .highlight::after {
          content: '';
          position: absolute;
          bottom: 5px;
          left: 0;
          width: 100%;
          height: 20px;
          background: linear-gradient(90deg, rgba(225, 6, 0, 0.3), transparent);
          filter: blur(15px);
          z-index: -1;
        }
        
        .subtitle {
          font-size: 2.4rem;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.95);
          line-height: 1.4;
          max-width: 900px;
          text-shadow: 0 2px 8px rgba(0,0,0,0.3);
          margin-bottom: 2.5rem;
          position: relative;
        }
        
        .subtitle::after {
          content: '';
          position: absolute;
          bottom: -1.5rem;
          left: 0;
          width: 100px;
          height: 5px;
          background: linear-gradient(90deg, var(--racing-red), transparent);
          border-radius: 2px;
        }
        
        .presenter-details {
          display: flex;
          align-items: center;
          margin-top: 3rem;
          background: rgba(0, 0, 0, 0.2);
          padding: 1.5rem;
          border-radius: 15px;
          border-left: 5px solid var(--racing-red);
          max-width: 600px;
          position: relative;
          z-index: 10;
        }
        
        .presenter-image {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          border: 3px solid var(--racing-red);
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0,0,0,0.3);
          margin-right: 2rem;
          position: relative;
        }
        
        .presenter-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .presenter-info h3 {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: white;
        }
        
        .presenter-info p {
          font-size: 1.2rem;
          margin-bottom: 0.3rem;
          color: rgba(255, 255, 255, 0.9);
        }
        
        .presenter-info .company {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--racing-red);
        }
        
        .speedometer-bg {
          position: absolute;
          top: 0;
          right: 0;
          width: 50%;
          height: 100%;
          background: radial-gradient(circle at 70% 50%, rgba(225, 6, 0, 0.1) 0%, transparent 70%);
          z-index: 1;
        }
        
        .chevron-pattern {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 120px;
          background: repeating-linear-gradient(
            135deg,
            rgba(225, 6, 0, 0.05),
            rgba(225, 6, 0, 0.05) 15px,
            transparent 15px,
            transparent 30px
          );
          z-index: 2;
        }
        
        /* Racing stripes at bottom */
        .racing-stripes {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 80px;
          z-index: 3;
          overflow: hidden;
        }
        
        .stripe {
          height: 10px;
          background: var(--racing-red);
          margin-bottom: 10px;
          transform: skewY(-2deg) translateY(10px);
          opacity: 0.85;
        }
        
        .stripe.white {
          width: 80%;
          background: white;
        }
        
        .stripe.dark {
          width: 60%;
          background: #333;
        }
        
        /* Responsive adjustments */
        @media (max-width: 1200px) {
          .main-title {
            font-size: 6rem;
          }
          
          .subtitle {
            font-size: 2rem;
          }
        }
        
        @media (max-width: 992px) {
          .main-title {
            font-size: 5rem;
          }
          
          .subtitle {
            font-size: 1.8rem;
          }
          
          .presenter-details {
            max-width: 500px;
          }
        }
        
        @media (max-width: 768px) {
          .title-container {
            padding: 1.5rem;
            padding-bottom: 100px;
            justify-content: flex-start;
            height: 100%;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
          }
          
          .main-title {
            font-size: 3.5rem;
            letter-spacing: -1px;
          }
          
          .subtitle {
            font-size: 1.5rem;
          }
          
          .title-prefix {
            font-size: 1.4rem;
          }
          
          .presenter-details {
            flex-direction: column;
            text-align: center;
            margin-top: 3rem;
            margin-bottom: 3rem;
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
            border-left: none;
            border-top: 5px solid var(--racing-red);
          }
          
          .presenter-image {
            margin-right: 0;
            margin-bottom: 1.5rem;
          }
        }
        
        /* Additional styles for very small screens */
        @media (max-width: 480px) {
          .title-container {
            padding-top: 1rem;
            padding-bottom: 150px;
          }
          
          .main-title {
            font-size: 2.8rem;
            letter-spacing: -1px;
          }
          
          .subtitle {
            font-size: 1.3rem;
          }
          
          .presenter-image {
            width: 100px;
            height: 100px;
          }
          
          .presenter-info h3 {
            font-size: 1.6rem;
          }
          
          .presenter-info p {
            font-size: 1rem;
          }
        }
      `}</style>
    </SlideLayout>
  );
}
