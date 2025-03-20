"use client";

import SlideLayout from '@/app/components/SlideLayout';
import TouchNavigation from '@/app/components/TouchNavigation';

export default function RevenueAcceleration() {
  return (
    <SlideLayout slideNumber={3} totalSlides={8} slideId="slide-2">
      <div className="diagonal-divider"></div>
      <div className="speedometer-bg"></div>
      
      <div className="slide-content">
        <div className="slide-header">
          <h2 className="animate">REVENUE <span>ACCELERATION</span></h2>
          <p className="slide-subtitle animate delay-1">How modern sales organizations drive growth through technology and process</p>
        </div>
        
        <div className="content-grid animate delay-2">
          <div className="left-column">
            <h3 className="secondary-heading">What is RevOps?</h3>
            <p>Revenue Operations (RevOps) is the strategic alignment of sales, marketing, and customer success operations across the full customer lifecycle to drive growth through operational efficiency and keep all teams accountable to revenue.</p>
            
            <div className="revops-diagram">
              <div className="diagram-circle">
                <div className="circle-segment marketing">
                  <div className="segment-label">Marketing</div>
                </div>
                <div className="circle-segment sales">
                  <div className="segment-label">Sales</div>
                </div>
                <div className="circle-segment success">
                  <div className="segment-label">Customer Success</div>
                </div>
                <div className="circle-center">RevOps</div>
              </div>
            </div>
            
            <div className="stat-card animate delay-3">
              <div className="stat-number">78%</div>
              <p>of businesses implemented RevOps report improved win rates and more predictable pipeline generation</p>
            </div>
          </div>
          
          <div className="right-column">
            <div className="card-wrapper animate delay-2">
              <div className="benefit-card">
                <h3>Key Business Benefits</h3>
                <ul className="racing-list animate-list">
                  <li><strong>Faster Revenue Growth:</strong> Companies with aligned revenue teams grow 19% faster and are 15% more profitable</li>
                  <li><strong>Greater Predictability:</strong> Improved forecasting accuracy and reduced revenue leakage</li>
                  <li><strong>Enhanced Customer Experience:</strong> Consistent engagement across entire customer journey</li>
                  <li><strong>Data-Driven Decisions:</strong> Single source of truth across all revenue-generating departments</li>
                  <li><strong>Operational Efficiency:</strong> Streamlined processes and elimination of redundant activities</li>
                </ul>
              </div>
            </div>
            
            <div className="poll-container animate delay-4">
              <div className="poll-header">
                <h3>Quick Poll</h3>
              </div>
              
              <div className="poll-question">What's your biggest challenge with sales technology?</div>
              
              <div className="poll-options">
                <div className="poll-option">
                  <div className="poll-option-check"></div>
                  <div className="poll-option-text">Too many disconnected systems</div>
                </div>
                <div className="poll-option">
                  <div className="poll-option-check"></div>
                  <div className="poll-option-text">Lack of data quality/accuracy</div>
                </div>
                <div className="poll-option">
                  <div className="poll-option-check"></div>
                  <div className="poll-option-text">Team adoption resistance</div>
                </div>
                <div className="poll-option">
                  <div className="poll-option-check"></div>
                  <div className="poll-option-text">Measuring ROI/impact</div>
                </div>
              </div>
              
              <div className="poll-actions">
                <button className="poll-submit">Submit</button>
                <button className="poll-skip">Skip</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="quote-banner animate delay-4">
          "Revenue Operations is not just another business function. It's a different way of thinking about how your business creates and captures value."
        </div>
      </div>

      <TouchNavigation prevLink="/slides/2" nextLink="/slides/4" />

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
        
        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin: 1rem 0;
        }
        
        .left-column, 
        .right-column {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .secondary-heading {
          font-size: 1.8rem;
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
          position: relative;
          display: inline-block;
        }
        
        .secondary-heading::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, var(--racing-red), var(--accent-yellow));
        }
        
        p {
          font-size: 1.05rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 1.2rem;
        }
        
        .revops-diagram {
          margin: 1.5rem 0;
          position: relative;
          height: 240px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .diagram-circle {
          width: 280px;
          height: 280px;
          border-radius: 50%;
          position: relative;
          background-color: rgba(0, 0, 0, 0.2);
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .circle-segment {
          position: absolute;
          width: 50%;
          height: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }
        
        .circle-segment:hover {
          transform: scale(1.05);
        }
        
        .marketing {
          top: 0;
          left: 0;
          background: rgba(225, 6, 0, 0.2);
          border-radius: 140px 0 0 0;
          transform-origin: bottom right;
        }
        
        .sales {
          top: 0;
          right: 0;
          background: rgba(255, 218, 10, 0.2);
          border-radius: 0 140px 0 0;
          transform-origin: bottom left;
        }
        
        .success {
          bottom: 0;
          left: 25%;
          width: 50%;
          height: 50%;
          background: rgba(26, 44, 153, 0.2);
          border-radius: 0 0 140px 140px;
          transform-origin: top center;
        }
        
        .segment-label {
          font-size: 0.9rem;
          font-weight: 600;
          color: white;
          text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        }
        
        .circle-center {
          width: 90px;
          height: 90px;
          background: var(--racing-red);
          color: white;
          font-weight: 700;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 5;
          font-size: 1.1rem;
          box-shadow: 0 5px 15px rgba(225, 6, 0, 0.3);
          animation: pulse 3s infinite;
        }
        
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        .stat-card {
          background: linear-gradient(145deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02));
          border: 1px solid rgba(255,255,255,0.15);
          box-shadow: var(--shadow-medium);
          padding: 1.8rem;
          transition: all 0.3s ease;
          text-align: center;
          border-radius: var(--border-radius-card);
          position: relative;
          overflow: hidden;
        }
        
        .stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--racing-red), var(--accent-yellow));
          z-index: 5;
        }
        
        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.4);
          border-color: rgba(255,255,255,0.25);
        }
        
        .stat-number {
          color: var(--racing-red);
          text-shadow: 0 0 15px rgba(225, 6, 0, 0.4);
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 0.8rem;
          line-height: 1;
        }
        
        .benefit-card {
          background: linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01));
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          padding: 1.5rem;
          border-radius: var(--border-radius-card);
          height: 100%;
          position: relative;
        }
        
        .benefit-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, var(--racing-red), var(--accent-yellow));
        }
        
        .benefit-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.4);
        }
        
        .benefit-card h3 {
          font-size: 1.4rem;
          font-weight: 700;
          color: white;
          margin-bottom: 1.2rem;
        }
        
        .racing-list {
          list-style: none;
          padding-left: 0;
          margin: 0;
        }
        
        .racing-list li {
          position: relative;
          padding-left: 1.8rem;
          margin-bottom: 1rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.5;
          font-size: 1.05rem;
        }
        
        .racing-list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.5rem;
          width: 8px;
          height: 8px;
          background: var(--racing-red);
          border-radius: 2px;
          transform: rotate(45deg);
        }
        
        .racing-list li strong {
          color: white;
          font-weight: 700;
        }
        
        .card-wrapper {
          flex: 1;
        }
        
        /* Poll styles */
        .poll-container {
          background: linear-gradient(145deg, rgba(20, 20, 20, 0.95), rgba(30, 30, 30, 0.98));
          border: 1px solid rgba(255,255,255,0.15);
          box-shadow: var(--shadow-medium);
          padding: 2rem;
          border-radius: var(--border-radius-card);
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(5px);
          z-index: 10;
        }
        
        .poll-container:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--racing-red), var(--accent-yellow));
        }
        
        .poll-header h3 {
          color: white;
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.7rem;
        }
        
        .poll-question {
          color: white;
          font-size: 1.2rem;
          font-weight: 500;
          line-height: 1.4;
          margin-bottom: 1.5rem;
        }
        
        .poll-option {
          background: rgba(50, 50, 50, 0.8);
          border: 1px solid rgba(255,255,255,0.2);
          transition: all 0.3s ease;
          padding: 1.2rem 1.5rem;
          margin-bottom: 0.8rem;
          border-radius: 8px;
          min-height: 44px;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          cursor: pointer;
        }
        
        .poll-option:hover {
          background: rgba(60, 60, 60, 0.95);
          border-color: var(--racing-red);
          transform: translateX(8px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
        
        .poll-option-check {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          border: 2px solid #ccc;
          margin-right: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          background-color: rgba(255, 255, 255, 0.1);
        }
        
        .poll-option.selected .poll-option-check {
          background-color: var(--racing-red);
          border-color: var(--racing-red);
          box-shadow: 0 0 8px rgba(225, 6, 0, 0.3);
        }
        
        .poll-option.selected .poll-option-check::before {
          content: '✓';
          color: white;
          font-size: 0.9rem;
        }
        
        .poll-option-text {
          color: rgba(255,255,255,1);
          font-size: 1.05rem;
          font-weight: 500;
        }
        
        .poll-actions {
          display: flex;
          justify-content: space-between;
          margin-top: 1.5rem;
        }
        
        .poll-submit {
          background: var(--racing-red);
          color: white;
          font-size: 1rem;
          font-weight: 600;
          padding: 0.8rem 1.6rem;
          border-radius: 8px;
          box-shadow: 0 5px 15px rgba(225, 6, 0, 0.3);
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          min-height: 44px;
        }
        
        .poll-submit:hover {
          background: #c10500;
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(225, 6, 0, 0.4);
        }
        
        .poll-skip {
          color: rgba(255,255,255,0.7);
          font-size: 0.95rem;
          font-weight: 500;
          padding: 0.8rem 1.2rem;
          transition: all 0.3s ease;
          background: transparent;
          border: none;
          cursor: pointer;
          min-height: 44px;
        }
        
        .poll-skip:hover {
          color: white;
          text-decoration: underline;
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
          
          .slide-subtitle {
            font-size: 1.1rem;
          }
          
          .content-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .stat-number {
            font-size: 3rem;
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
          
          .secondary-heading {
            font-size: 1.5rem;
          }
          
          .diagram-circle {
            width: 240px;
            height: 240px;
          }
          
          .circle-center {
            width: 70px;
            height: 70px;
            font-size: 0.9rem;
          }
          
          .poll-option {
            padding: 1rem;
          }
          
          .poll-option-text {
            font-size: 0.95rem;
          }
          
          .poll-actions {
            flex-direction: column;
            gap: 0.8rem;
          }
          
          .poll-submit, 
          .poll-skip {
            width: 100%;
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
