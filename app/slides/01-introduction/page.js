'use client';

import React, { useEffect, useState } from 'react';
import Layout from '../../../components/Layout';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { getNextSlidePath, getPrevSlidePath, getTotalSlides, getCurrentSlideNumber } from '../../../utils/navigation';

const Introduction = () => {
  const [showRacingLine, setShowRacingLine] = useState(false);
  const pathname = usePathname();
  
  // Show racing line animation after initial animations complete
  useEffect(() => {
    const timer = setTimeout(() => setShowRacingLine(true), 2000);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <Layout
      title="Introduction - Full Throttle Revenue"
      currentSlide={getCurrentSlideNumber(pathname)}
      totalSlides={getTotalSlides()}
      prevSlide={getPrevSlidePath(pathname)}
      nextSlide={getNextSlidePath(pathname)}
    >
      <section className="slide active title-slide" id="title">
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
                <img src="/images/profile.jpeg" alt="Drew Lambert" />
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
        
        {/* F1-style speedometer animation - appears at the bottom */}
        {showRacingLine && (
          <motion.div 
            className="speedometer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '300px',
              height: '150px',
              pointerEvents: 'none',
              zIndex: 5
            }}
          >
            <svg width="300" height="150" viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Speedometer track */}
              <path d="M20 130 A130 130 0 0 1 280 130" stroke="rgba(255,255,255,0.1)" strokeWidth="10" strokeLinecap="round" />
              
              {/* Speed markers */}
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
                const angle = -180 + (i * 180/8);
                const x = 150 + 115 * Math.cos(angle * Math.PI/180);
                const y = 130 + 115 * Math.sin(angle * Math.PI/180);
                return (
                  <motion.circle 
                    key={i} 
                    cx={x} cy={y} r="4" 
                    fill={i <= 6 ? "white" : "var(--racing-red)"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 + (i * 0.05), duration: 0.3 }}
                  />
                )
              })}
              
              {/* Speedometer needle */}
              <motion.line 
                x1="150" y1="130" 
                x2="150" y2="25" 
                stroke="var(--racing-red)" 
                strokeWidth="3" 
                strokeLinecap="round"
                initial={{ rotate: -90, originX: "150px", originY: "130px" }}
                animate={{ rotate: 65 }}
                transition={{ 
                  duration: 2, 
                  type: "spring", 
                  stiffness: 50,
                  damping: 15 
                }}
              />
              
              {/* Center of speedometer */}
              <motion.circle 
                cx="150" cy="130" r="12" 
                fill="#111111" 
                stroke="var(--racing-red)" 
                strokeWidth="2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
              />
            </svg>
          </motion.div>
        )}
        
        {/* Racing track line animation */}
        {showRacingLine && (
          <motion.div
            className="racing-track-line"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 0,
              pointerEvents: 'none'
            }}
          >
            <svg width="100%" height="100%" viewBox="0 0 1000 600" preserveAspectRatio="none" style={{ position: 'absolute' }}>
              <motion.path
                d="M-100,400 C100,450 300,150 500,250 S700,450 900,300 S1100,100 1300,200"
                fill="none"
                stroke="white"
                strokeWidth="10"
                strokeDasharray="15 20"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.06 }}
                transition={{ duration: 4, ease: "easeOut" }}
              />
            </svg>
          </motion.div>
        )}
        
        <motion.div
          className="racing-checkered-flag"
          initial={{ opacity: 0, right: -100 }}
          animate={{ opacity: 0.15, right: 0 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '40%',
            height: '100%',
            backgroundImage: 'repeating-conic-gradient(#000 0% 25%, transparent 0% 50%)',
            backgroundSize: '40px 40px',
            zIndex: 0,
            pointerEvents: 'none',
            mixBlendMode: 'overlay'
          }}
        />
      </section>

      <style jsx>{`
        /* Title slide specific styles */
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
    </Layout>
  );
};

export default Introduction;