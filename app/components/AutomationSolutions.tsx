"use client";

import SlideLayout from '@/app/components/SlideLayout';
import TouchNavigation from '@/app/components/TouchNavigation';

export default function AutomationSolutions() {
  return (
    <SlideLayout slideNumber={5} totalSlides={8} slideId="slide-4">
      <div className="diagonal-divider"></div>
      <div className="speedometer-bg"></div>
      
      <div className="slide-content">
        <div className="slide-header">
          <h2 className="animate">AUTOMATION <span>SOLUTIONS</span></h2>
          <p className="slide-subtitle animate delay-1">Building efficiency and intelligence into your sales process</p>
        </div>
        
        <div className="automation-icons animate delay-2">
          <div className="automation-icon">
            <div className="icon-circle">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#E10600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 6V12L16 14" stroke="#E10600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Time Savings</h3>
            <p>Automate routine tasks to save 5-20 hours per sales rep weekly</p>
          </div>
          
          <div className="automation-icon">
            <div className="icon-circle">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12H18L15 21L9 3L6 12H2" stroke="#E10600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Consistency</h3>
            <p>Standardize processes to ensure reliable execution at scale</p>
          </div>
          
          <div className="automation-icon">
            <div className="icon-circle">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#E10600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Error Reduction</h3>
            <p>Eliminate manual data entry errors in critical sales processes</p>
          </div>
          
          <div className="automation-icon">
            <div className="icon-circle">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V16M17 3H21M21 7V3M13.5 11.5L21 3.5" stroke="#E10600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Enhanced Data</h3>
            <p>Improve data quality and analytics for better decision making</p>
          </div>
        </div>
        
        <div className="automation-examples animate delay-3">
          <h3 className="section-title">High-Impact Automation Examples</h3>
          
          <div className="examples-grid">
            <div className="example-card">
              <div className="example-number">01</div>
              <div className="example-content">
                <h4>Lead Routing & Assignment</h4>
                <p>Automatically assign leads based on territory, expertise, capacity, or round-robin distribution to reduce lead response time by 80%</p>
              </div>
            </div>
            
            <div className="example-card">
              <div className="example-number">02</div>
              <div className="example-content">
                <h4>Engagement Sequences</h4>
                <p>Multi-channel, time-based outreach campaigns that dynamically adjust based on prospect engagement signals</p>
              </div>
            </div>
            
            <div className="example-card">
              <div className="example-number">03</div>
              <div className="example-content">
                <h4>Opportunity Management</h4>
                <p>Automate stage progression, approval workflows, and risk identification to increase pipeline accuracy</p>
              </div>
            </div>
            
            <div className="example-card">
              <div className="example-number">04</div>
              <div className="example-content">
                <h4>Contract & Quote Generation</h4>
                <p>Automated document creation with dynamic pricing, approvals, and e-signature integration to close deals 3x faster</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="implementation-tips animate delay-4">
          <h3 className="section-title">Implementation Best Practices</h3>
          
          <ul className="best-practices-list">
            <li><strong>Start Small:</strong> Begin with high-impact, low-complexity processes rather than attempting to automate everything at once</li>
            <li><strong>Document First:</strong> Thoroughly map your current process before automating to avoid embedding inefficiencies</li>
            <li><strong>Build for Exceptions:</strong> Design automation with error handling and contingencies for edge cases</li>
            <li><strong>Measure Outcomes:</strong> Establish clear metrics to compare pre and post-automation performance</li>
            <li><strong>Focus on Adoption:</strong> Invest in training, change management, and user experience to drive uptake</li>
          </ul>
        </div>
      </div>

      <TouchNavigation prevLink="/slides/4" nextLink="/slides/6" />

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
        
        /* Automation Icons Grid */
        .automation-icons {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          margin: 3rem 0;
        }
        
        .automation-icon {
          text-align: center;
          padding: 2rem 1.2rem;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid rgba(255,255,255,0.05);
        }
        
        .automation-icon:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.12);
          border-color: rgba(225, 6, 0, 0.2);
        }
        
        .automation-icon::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: linear-gradient(90deg, var(--racing-red), transparent);
        }
        
        .icon-circle {
          width: 80px;
          height: 80px;
          background-color: rgba(225, 6, 0, 0.08);
          border-radius: 50%;
          margin: 0 auto 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        
        .icon-circle::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 2px solid var(--racing-red);
          opacity: 0.5;
          animation: pulse 2s infinite;
        }
        
        .automation-icon h3 {
          font-size: 1.3rem;
          margin-bottom: 0.8rem;
          color: white;
          font-weight: 700;
        }
        
        .automation-icon p {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.5;
          margin: 0;
        }
        
        /* Section Title */
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
        
        /* Examples Grid */
        .examples-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin: 2rem 0;
        }
        
        .example-card {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 12px;
          padding: 1.5rem 1.5rem 1.5rem 5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .example-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
          border-color: rgba(225, 6, 0, 0.2);
        }
        
        .example-number {
          position: absolute;
          left: 1.2rem;
          top: 50%;
          transform: translateY(-50%);
          font-size: 2rem;
          font-weight: 900;
          color: var(--racing-red);
          opacity: 0.4;
          font-style: italic;
        }
        
        .example-content h4 {
          font-size: 1.2rem;
          margin-bottom: 0.6rem;
          color: white;
          font-weight: 700;
        }
        
        .example-content p {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.5;
          margin: 0;
        }
        
        /* Best Practices List */
        .best-practices-list {
          list-style: none;
          padding: 0;
          margin: 1.5rem 0;
        }
        
        .best-practices-list li {
          position: relative;
          padding-left: 1.8rem;
          margin-bottom: 1rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.5;
          font-size: 1.05rem;
        }
        
        .best-practices-list li::before {
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
        
        .best-practices-list li strong {
          color: white;
          font-weight: 700;
        }
        
        /* Responsive adjustments */
        @media (max-width: 1200px) {
          .automation-icons {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 992px) {
          .slide-header h2 {
            font-size: 2.5rem;
          }
          
          .examples-grid {
            grid-template-columns: 1fr;
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
          
          .automation-icons {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .automation-icon {
            padding: 1.5rem 1rem;
          }
          
          .section-title {
            font-size: 1.5rem;
          }
        }
        
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 0.2; }
          100% { transform: scale(1); opacity: 0.5; }
        }
      `}</style>
    </SlideLayout>
  );
}
