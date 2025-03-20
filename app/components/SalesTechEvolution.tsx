"use client";

import SlideLayout from '@/app/components/SlideLayout';
import TouchNavigation from '@/app/components/TouchNavigation';

export default function SalesTechEvolution() {
  return (
    <SlideLayout slideNumber={4} totalSlides={8} slideId="slide-3">
      <div className="diagonal-divider"></div>
      <div className="speedometer-bg"></div>
      
      <div className="slide-content">
        <div className="slide-header">
          <h2 className="animate">SALES TECH <span>EVOLUTION</span></h2>
          <p className="slide-subtitle animate delay-1">The journey from rolodex to artificial intelligence</p>
        </div>
        
        <div className="timeline-container animate delay-2">
          <div className="timeline-track">
            <div className="timeline-line"></div>
            
            <div className="timeline-point" style={{ left: '10%' }}>
              <div className="timeline-point-marker"></div>
              <div className="timeline-content">
                <h3>1980s-1990s</h3>
                <p>Basic contact management software and spreadsheets. Information silos with limited collaboration.</p>
              </div>
            </div>
            
            <div className="timeline-point" style={{ left: '30%' }}>
              <div className="timeline-point-marker"></div>
              <div className="timeline-content">
                <h3>2000-2010</h3>
                <p>Rise of CRM platforms. Salesforce launches, bringing cloud-based sales tools to the mainstream.</p>
              </div>
            </div>
            
            <div className="timeline-point" style={{ left: '50%' }}>
              <div className="timeline-point-marker"></div>
              <div className="timeline-content">
                <h3>2010-2015</h3>
                <p>Marketing automation emerges. Social selling and digital engagement tools become essential.</p>
              </div>
            </div>
            
            <div className="timeline-point" style={{ left: '70%' }}>
              <div className="timeline-point-marker"></div>
              <div className="timeline-content">
                <h3>2015-2020</h3>
                <p>Sales engagement platforms and conversation intelligence. RevOps emerges as a strategic function.</p>
              </div>
            </div>
            
            <div className="timeline-point" style={{ left: '90%' }}>
              <div className="timeline-point-marker"></div>
              <div className="timeline-content">
                <h3>2020-Present</h3>
                <p>AI-driven insights and automation. Unified revenue platforms that connect the entire customer journey.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="tech-challenges-section animate delay-3">
          <h3 className="section-title">Key Challenges in Sales Technology</h3>
          
          <div className="challenges-grid">
            <div className="challenge-card">
              <div className="challenge-icon">🔄</div>
              <h4>Integration Complexity</h4>
              <p>The average enterprise uses 976 different applications, creating massive integration challenges</p>
            </div>
            
            <div className="challenge-card">
              <div className="challenge-icon">📊</div>
              <h4>Data Quality</h4>
              <p>Poor data hygiene costs businesses 15-25% of revenue due to missed opportunities and inefficient processes</p>
            </div>
            
            <div className="challenge-card">
              <div className="challenge-icon">👥</div>
              <h4>Adoption Barriers</h4>
              <p>User adoption rates for new sales technology average only 43% without proper change management</p>
            </div>
            
            <div className="challenge-card">
              <div className="challenge-icon">💰</div>
              <h4>ROI Measurement</h4>
              <p>Only 33% of sales leaders report they can accurately measure technology ROI</p>
            </div>
          </div>
        </div>
        
        <div className="quote-banner animate delay-4">
          "The future of sales technology isn't about replacing humans — it's about augmenting human capabilities with the right insights at the right time."
        </div>
      </div>

      <TouchNavigation prevLink="/slides/3" nextLink="/slides/5" />

      <style jsx>{`
        .slide-content {
          position: relative;
          z-index: 5;
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 3rem;
          height: 100%;
          overflow-y: auto;
          color: white;
        }
        
        .slide-header {
          margin-bottom: 2rem;
        }
        
        .slide-header h2 {
          color: white;
          font-size: 3rem;
          font-weight: 800;
          text-transform: uppercase;
          position: relative;
          display: inline-block;
          padding-bottom: 0.8rem;
          margin-bottom: 1rem;
          letter-spacing: -1px;
          text-shadow: 0 2px 15px rgba(225, 6, 0, 0.5);
        }
        
        .slide-header h2 span {
          color: var(--racing-red);
          font-style: italic;
        }
        
        .slide-header h2:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 60px;
          height: 4px;
          background-color: var(--racing-red);
          border-radius: 2px;
        }
        
        .slide-subtitle {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.3rem;
          margin-bottom: 2rem;
          font-weight: 400;
          max-width: 80%;
        }
        
        .diagonal-divider {
          position: absolute;
          top: 0;
          right: 0;
          width: 25%;
          height: 100%;
          background-color: rgba(225, 6, 0, 0.05);
          clip-path: polygon(100% 0, 0% 100%, 100% 100%);
          z-index: 3;
        }
        
        .speedometer-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 70% 60%, rgba(225, 6, 0, 0.05) 0%, transparent 60%);
          z-index: 2;
        }
        
        /* Timeline styling */
        .timeline-container {
          margin: 4rem 0;
          position: relative;
          overflow: hidden;
          max-width: 100%;
        }
        
        .timeline-track {
          position: relative;
          height: 400px;
          overflow: visible;
        }
        
        .timeline-line {
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          height: 6px;
          background: linear-gradient(90deg, var(--racing-red), var(--accent-yellow));
          transform: translateY(-50%);
          border-radius: 3px;
          box-shadow: 0 0 20px rgba(225, 6, 0, 0.2);
        }
        
        .timeline-point {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 220px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .timeline-point-marker {
          position: absolute;
          width: 30px;
          height: 30px;
          background-color: var(--racing-red);
          border-radius: 50%;
          top: 0;
          left: 0;
          transform: translate(-50%, -50%);
          z-index: 5;
          box-shadow: 0 0 0 5px rgba(225, 6, 0, 0.2);
          transition: all 0.3s ease;
        }
        
        .timeline-point:hover .timeline-point-marker {
          transform: translate(-50%, -50%) scale(1.2);
          box-shadow: 0 0 0 8px rgba(225, 6, 0, 0.2);
        }
        
        .timeline-content {
          position: absolute;
          width: 270px;
          background-color: rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          padding: 1.5rem;
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
          top: 0;
          left: 0;
          transform: translateY(-130%);
          opacity: 0.85;
          transition: opacity 0.3s ease, transform 0.3s ease;
          border: 1px solid rgba(255,255,255,0.1);
        }
        
        .timeline-point:hover .timeline-content {
          opacity: 1;
          transform: translateY(-140%);
          box-shadow: 0 12px 30px rgba(0,0,0,0.15);
        }
        
        .timeline-point:nth-child(even) .timeline-content {
          top: auto;
          bottom: 0;
          transform: translateY(30%);
        }
        
        .timeline-point:nth-child(even):hover .timeline-content {
          transform: translateY(40%);
        }
        
        .timeline-content h3 {
          font-size: 1.2rem;
          margin-bottom: 0.8rem;
          color: white;
          font-weight: 700;
        }
        
        .timeline-content p {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 0;
          line-height: 1.5;
        }
        
        /* Challenges section */
        .section-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: white;
          margin: 2rem 0 1.5rem;
          position: relative;
          display: inline-block;
          padding-left: 1.2rem;
          border-left: 4px solid var(--racing-red);
        }
        
        .challenges-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin: 2rem 0;
        }
        
        .challenge-card {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 12px;
          padding: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .challenge-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
          border-color: rgba(225, 6, 0, 0.2);
        }
        
        .challenge-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, var(--racing-red), transparent);
        }
        
        .challenge-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        
        .challenge-card h4 {
          font-size: 1.3rem;
          margin-bottom: 0.8rem;
          color: var(--racing-red);
          font-weight: 700;
        }
        
        .challenge-card p {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.5;
          margin: 0;
        }
        
        .quote-banner {
          background: rgba(0, 0, 0, 0.3);
          padding: 1.5rem;
          border-radius: 10px;
          text-align: center;
          font-size: 1.3rem;
          font-weight: 600;
          font-style: italic;
          color: rgba(255, 255, 255, 0.95);
          margin: 2rem 0 1rem;
          position: relative;
          border-left: 4px solid var(--racing-red);
          border-right: 4px solid var(--racing-red);
        }
        
        /* Responsive adjustments */
        @media (max-width: 992px) {
          .slide-header h2 {
            font-size: 2.5rem;
          }
          
          .challenges-grid {
            grid-template-columns: 1fr;
          }
          
          .section-title {
            font-size: 1.6rem;
          }
        }
        
        @media (max-width: 768px) {
          .slide-content {
            padding: 1.5rem;
            padding-bottom: 100px;
          }
          
          .slide-header h2 {
            font-size: 2rem;
          }
          
          .timeline-container {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            padding-bottom: 20px;
          }
          
          .timeline-track {
            min-width: 800px;
            padding: 0 100px;
          }
          
          .quote-banner {
            font-size: 1.1rem;
            padding: 1.2rem;
          }
        }
      `}</style>
    </SlideLayout>
  );
}
