'use client';

import React from 'react';
import Layout from '../../../components/Layout';
import { usePathname } from 'next/navigation';
import { getNextSlidePath, getPrevSlidePath, getTotalSlides, getCurrentSlideNumber } from '../../../utils/navigation';

const PresenterProfile = () => {
  const pathname = usePathname();
  
  return (
    <Layout
      title="Presenter Profile - Full Throttle Revenue"
      currentSlide={getCurrentSlideNumber(pathname)}
      totalSlides={getTotalSlides()}
      prevSlide={getPrevSlidePath(pathname)}
      nextSlide={getNextSlidePath(pathname)}
    >
      <section className="slide presenter-profile-slide" id="presenter-profile">
        <div className="slide-content">
          <h2 className="slide-title animate">Your Presenter Today</h2>
          
          <div className="presenter-container">
            <div className="presenter-image-large animate delay-1">
              <img src="/images/profile.jpeg" alt="Drew Lambert" />
              <div className="racing-stripe"></div>
            </div>
            
            <div className="presenter-details-large animate delay-2">
              <h3>Drew Lambert</h3>
              <p className="title">Revenue Operations Expert & Salesforce Engineer</p>
              
              <div className="presenter-credentials">
                <div className="credential">
                  <span className="credential-icon">🏢</span>
                  <div className="credential-detail">
                    <strong>REVELATE OPERATIONS, LLC</strong>
                    <span>Founder & Principal Consultant</span>
                  </div>
                </div>
                
                <div className="credential">
                  <span className="credential-icon">⚙️</span>
                  <div className="credential-detail">
                    <strong>15+ Years in Business Technology</strong>
                    <span>Specializing in Sales & Revenue Systems</span>
                  </div>
                </div>
                
                <div className="credential">
                  <span className="credential-icon">🏆</span>
                  <div className="credential-detail">
                    <strong>Certified Salesforce Administrator</strong>
                    <span>Expert in CRM & Sales Technology Stack</span>
                  </div>
                </div>
                
                <div className="credential">
                  <span className="credential-icon">📊</span>
                  <div className="credential-detail">
                    <strong>Data-Driven Approach</strong>
                    <span>Sales Analytics & Process Optimization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="presenter-quote animate delay-4">
            <blockquote>
              "The future of sales lies at the intersection of human connection and intelligent automation. Finding the right balance is the key to sustainable revenue growth."
            </blockquote>
          </div>
        </div>
      </section>

      <style jsx>{`
        .presenter-profile-slide {
          background: linear-gradient(135deg, #121212, #1e1e1e);
          color: var(--text-light);
          position: relative;
          overflow: hidden;
        }
        
        .slide-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          z-index: 2;
          position: relative;
        }
        
        .slide-title {
          font-size: 2.8rem;
          font-weight: 700;
          margin-bottom: 2.5rem;
          position: relative;
          padding-left: 25px;
          display: inline-block;
        }
        
        .slide-title::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          width: 15px;
          height: 4px;
          background-color: var(--racing-red);
          transform: translateY(-50%);
        }
        
        .presenter-container {
          display: flex;
          gap: 3rem;
          margin-bottom: 3rem;
        }
        
        .presenter-image-large {
          flex: 0 0 350px;
          position: relative;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 15px 30px rgba(0,0,0,0.3);
        }
        
        .presenter-image-large img {
          width: 100%;
          height: auto;
          display: block;
        }
        
        .racing-stripe {
          position: absolute;
          top: 0;
          left: 0;
          width: 10px;
          height: 100%;
          background-color: var(--racing-red);
        }
        
        .presenter-details-large {
          flex: 1;
        }
        
        .presenter-details-large h3 {
          font-size: 2.4rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: white;
        }
        
        .presenter-details-large .title {
          font-size: 1.4rem;
          color: var(--racing-silver);
          margin-bottom: 2rem;
          position: relative;
          display: inline-block;
          padding-bottom: 1rem;
        }
        
        .presenter-details-large .title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 50px;
          height: 3px;
          background-color: var(--racing-red);
        }
        
        .presenter-credentials {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        
        .credential {
          display: flex;
          align-items: flex-start;
          background: rgba(0, 0, 0, 0.2);
          padding: 1rem;
          border-radius: 8px;
          border-left: 3px solid var(--racing-red);
        }
        
        .credential-icon {
          font-size: 1.8rem;
          margin-right: 1rem;
        }
        
        .credential-detail {
          flex: 1;
        }
        
        .credential-detail strong {
          display: block;
          font-size: 1.1rem;
          margin-bottom: 0.3rem;
          color: white;
        }
        
        .credential-detail span {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.7);
        }
        
        .presenter-quote {
          margin-top: 2rem;
          background: rgba(0, 0, 0, 0.2);
          padding: 1.5rem 2rem;
          border-radius: 10px;
          position: relative;
        }
        
        .presenter-quote::before {
          content: '"';
          position: absolute;
          top: -20px;
          left: 20px;
          font-size: 6rem;
          color: var(--racing-red);
          opacity: 0.2;
          font-family: Georgia, serif;
          line-height: 1;
        }
        
        blockquote {
          font-size: 1.4rem;
          font-style: italic;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
          margin: 0;
          padding-left: 1rem;
          border-left: 3px solid var(--racing-red);
        }
        
        /* Responsive adjustments */
        @media (max-width: 992px) {
          .presenter-container {
            flex-direction: column;
            gap: 2rem;
          }
          
          .presenter-image-large {
            flex: 0 0 auto;
            max-width: 300px;
            margin: 0 auto;
          }
          
          .presenter-credentials {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 768px) {
          .slide-title {
            font-size: 2.2rem;
          }
          
          .presenter-details-large h3 {
            font-size: 2rem;
          }
          
          .presenter-image-large {
            max-width: 250px;
          }
          
          blockquote {
            font-size: 1.2rem;
          }
        }
        
        @media (max-width: 480px) {
          .slide-title {
            font-size: 1.8rem;
          }
          
          .presenter-details-large h3 {
            font-size: 1.6rem;
          }
          
          .presenter-details-large .title {
            font-size: 1.1rem;
          }
          
          .credential {
            padding: 0.8rem;
          }
          
          .credential-icon {
            font-size: 1.4rem;
          }
          
          .credential-detail strong {
            font-size: 1rem;
          }
          
          .credential-detail span {
            font-size: 0.85rem;
          }
          
          blockquote {
            font-size: 1rem;
          }
        }
      `}</style>
    </Layout>
  );
};

export default PresenterProfile;