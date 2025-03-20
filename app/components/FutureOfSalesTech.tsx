"use client";

import SlideLayout from '@/app/components/SlideLayout';
import TouchNavigation from '@/app/components/TouchNavigation';

export default function FutureOfSalesTech() {
  return (
    <SlideLayout slideNumber={7} totalSlides={8} slideId="slide-6">
      <div className="diagonal-divider"></div>
      <div className="future-bg"></div>
      <div className="pattern-overlay"></div>
      
      <div className="slide-content">
        <div className="slide-header">
          <h2 className="animate">THE <span>FUTURE</span> OF SALES TECH</h2>
          <p className="slide-subtitle animate delay-1">What's next in the world of revenue acceleration</p>
        </div>
        
        <div className="future-trends animate delay-2">
          <div className="trend-item">
            <div className="trend-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"></path>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </svg>
            </div>
            <div className="trend-content">
              <h4>AI-Powered Messaging</h4>
              <p>By 2025, 30% of outbound messages from large organizations will be synthetically generated, according to Gartner research.</p>
            </div>
          </div>
          
          <div className="trend-item">
            <div className="trend-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                <line x1="8" x2="16" y1="21" y2="21"></line>
                <line x1="12" x2="12" y1="17" y2="21"></line>
              </svg>
            </div>
            <div className="trend-content">
              <h4>Immersive Sales Interfaces</h4>
              <p>The AR & VR market is projected to grow by 7.42% annually (2025-2029), reaching $62 billion globally by 2029, transforming B2B sales demonstrations.</p>
            </div>
          </div>
          
          <div className="trend-item">
            <div className="trend-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <line x1="10" y1="9" x2="8" y2="9"></line>
              </svg>
            </div>
            <div className="trend-content">
              <h4>Predictive Deal Intelligence</h4>
              <p>According to Salesforce, 62% of high-performing sales teams are already using AI to improve their sales forecasting accuracy and effectiveness.</p>
            </div>
          </div>
          
          <div className="trend-item">
            <div className="trend-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 20h10M10 20c0-4.4 0-8.8 1-12h1c1 3.2 1 7.6 1 12"></path>
                <path d="M8 4v4h7"></path>
                <rect x="2" y="6" width="5" height="8" rx="1"></rect>
                <path d="M17 6v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1Z"></path>
              </svg>
            </div>
            <div className="trend-content">
              <h4>Autonomous Relationship Management</h4>
              <p>Advanced systems will autonomously nurture relationships by delivering perfectly timed, relevant touchpoints.</p>
            </div>
          </div>
        </div>
        
        <div className="content-grid animate delay-3">
          <div className="future-card">
            <h3>Future-Ready Skills</h3>
            <ul className="racing-list">
              <li><strong>AI Collaboration:</strong> Working alongside AI to enhance your capabilities rather than competing</li>
              <li><strong>Data Literacy:</strong> Understanding how to interpret and leverage insights from complex datasets</li>
              <li><strong>Ethical Tech Usage:</strong> Balancing automation with humanity and privacy considerations</li>
              <li><strong>Adaptable Learning:</strong> Developing the ability to quickly master new tools and platforms</li>
              <li><strong>Strategic Consultative Selling:</strong> Adding value beyond what automation can provide</li>
            </ul>
          </div>
          
          <div className="future-card">
            <h3>Career Acceleration Roadmap</h3>
            <ul className="racing-list">
              <li><strong>Revenue Operations:</strong> The fastest growing career path at the intersection of sales, marketing and customer success</li>
              <li><strong>Sales AI Specialist:</strong> Emerging roles focused on optimizing sales tech stacks</li>
              <li><strong>Free Learning Resources:</strong> Salesforce Trailhead, HubSpot Academy, Google Analytics certification</li>
              <li><strong>Look for:</strong> Companies investing heavily in modern sales tech as accelerators for your career</li>
            </ul>
          </div>
        </div>
        
        <h3 className="secondary-heading animate delay-3">Essential Takeaways</h3>
        
        <div className="animate delay-4">
          <div className="future-numbered-card">
            <div className="future-number">1</div>
            <div className="card-content">
              <h3>RevOps and automation are redefining what's possible</h3>
              <p>Companies that embrace these approaches are growing revenue 3× faster and enabling their teams to focus on high-impact work</p>
            </div>
          </div>
          
          <div className="future-numbered-card">
            <div className="future-number">2</div>
            <div className="card-content">
              <h3>Technology must augment, not replace, humanity</h3>
              <p>The most successful implementations balance automation with authentic human connection and ethical considerations</p>
            </div>
          </div>
          
          <div className="future-numbered-card">
            <div className="future-number">3</div>
            <div className="card-content">
              <h3>Adaptability is your competitive advantage</h3>
              <p>The ability to quickly master new tools and approaches will separate those who thrive from those who merely survive</p>
            </div>
          </div>
        </div>
        
        <div className="future-quote animate delay-4">
          <p className="quote-text">"As we encounter more and more artificial intelligence, real intelligence, real empathy, and real common sense will be scarce. Humans will add value where machines cannot."</p>
          <p className="quote-author">— Satya Nadella, CEO of Microsoft</p>
        </div>
      </div>

      <TouchNavigation prevLink="/slides/6" nextLink="/slides/8" />

      <style jsx>{`
        .slide-content {
          position: relative;
          z-index: 2;
          color: white;
          padding: 3rem 4rem;
          height: 100%;
          overflow-y: auto;
          max-width: 1200px;
          margin: 0 auto;
          padding-bottom: 60px;
        }
        
        /* Background effects */
        .future-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(ellipse at top right, rgba(225, 6, 0, 0.15), transparent 70%),
                      radial-gradient(ellipse at bottom left, rgba(255, 218, 10, 0.08), transparent 70%);
          z-index: 1;
          pointer-events: none;
        }
        
        /* Static pattern overlay */
        .pattern-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E10600' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          z-index: 1;
          opacity: 0.3;
          pointer-events: none;
        }
        
        /* Slide header improvements */
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
        
        /* Advanced card styles */
        .future-card {
          position: relative;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          padding: 1.8rem;
          margin-bottom: 1.5rem;
          height: 100%;
        }
        
        .future-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
          border-color: rgba(225, 6, 0, 0.3);
        }
        
        .future-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: linear-gradient(90deg, var(--racing-red), var(--accent-yellow));
        }
        
        .future-card h3 {
          color: var(--racing-red);
          margin-bottom: 1.2rem;
          position: relative;
          display: inline-block;
          font-size: 1.5rem;
          font-weight: 700;
        }
        
        .future-card h3::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, var(--racing-red), var(--accent-yellow));
        }
        
        /* Racing list improvements */
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
        
        /* Numbered cards with advanced styling */
        .future-numbered-card {
          position: relative;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          padding: 1.5rem 1.5rem 1.5rem 5rem;
          margin-bottom: 1.5rem;
        }
        
        .future-numbered-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
          border-color: rgba(225, 6, 0, 0.3);
        }
        
        .future-number {
          position: absolute;
          left: 1.5rem;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, var(--racing-red), var(--accent-yellow));
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 1.5rem;
          box-shadow: 0 5px 15px rgba(225, 6, 0, 0.3);
        }
        
        .future-numbered-card h3 {
          margin-top: 0;
          margin-bottom: 0.6rem;
          color: white;
          font-weight: 700;
          font-size: 1.3rem;
        }
        
        .future-numbered-card p {
          margin: 0;
          color: rgba(255, 255, 255, 0.9);
          font-size: 1rem;
          line-height: 1.5;
        }
        
        /* Future trends icon grid */
        .future-trends {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin: 2rem 0;
        }
        
        .trend-item {
          display: flex;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 12px;
          padding: 1.2rem;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }
        
        .trend-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
          border-color: rgba(225, 6, 0, 0.3);
        }
        
        .trend-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 3px;
          height: 100%;
          background: linear-gradient(to bottom, var(--racing-red), var(--accent-yellow));
        }
        
        .trend-icon {
          margin-right: 1rem;
          display: flex;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          border-radius: 12px;
          background: rgba(225, 6, 0, 0.1);
          padding: 0.8rem;
          transition: transform 0.3s ease;
        }
        
        .trend-item:hover .trend-icon {
          transform: scale(1.05);
        }
        
        .trend-icon svg {
          width: 100%;
          height: 100%;
          stroke: var(--racing-red);
          stroke-width: 1.5;
        }
        
        .trend-content {
          flex: 1;
        }
        
        .trend-content h4 {
          margin: 0 0 0.4rem 0;
          color: var(--racing-red);
          font-size: 1.15rem;
          font-weight: 700;
        }
        
        .trend-content p {
          margin: 0;
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.5;
        }
        
        /* Advanced quote card */
        .future-quote {
          position: relative;
          border-radius: 16px;
          background: rgba(0, 0, 0, 0.2);
          padding: 2.5rem;
          text-align: center;
          margin: 3rem 0 1rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
        }
        
        .future-quote::before,
        .future-quote::after {
          content: '"';
          position: absolute;
          font-size: 8rem;
          font-family: Georgia, serif;
          line-height: 1;
          color: rgba(225, 6, 0, 0.1);
        }
        
        .future-quote::before {
          top: -1rem;
          left: 1rem;
        }
        
        .future-quote::after {
          bottom: -5rem;
          right: 1rem;
        }
        
        .future-quote .quote-text {
          position: relative;
          font-size: 1.7rem;
          font-weight: 700;
          line-height: 1.4;
          color: white;
          font-style: italic;
          z-index: 2;
        }
        
        .quote-author {
          margin-top: 1.5rem;
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.8);
          font-weight: 600;
        }
        
        /* Heading styles */
        .secondary-heading {
          font-size: 1.8rem;
          font-weight: 700;
          color: white;
          margin: 2rem 0 1.5rem;
          position: relative;
          display: inline-block;
        }
        
        .secondary-heading::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 70px;
          height: 3px;
          background: linear-gradient(90deg, var(--racing-red), var(--accent-yellow));
        }
        
        /* Content grid */
        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.8rem;
        }
        
        /* Slide subtitle */
        .slide-subtitle {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.3rem;
          margin-bottom: 2rem;
          font-weight: 400;
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
        
        /* Mobile optimizations */
        @media (max-width: 768px) {
          .slide-content {
            padding: 1.5rem;
            padding-bottom: 80px;
            min-height: auto;
          }
          
          .slide-header {
            padding: 1.5rem 0 1rem;
          }
          
          .slide-header h2 {
            font-size: 2.2rem;
          }
          
          /* Stack cards vertically on mobile */
          .future-trends {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          /* Force content grid to single column on mobile */
          .content-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem;
          }
          
          /* Reduce spacing for mobile */
          .future-quote {
            margin: 1rem 0;
          }
          
          /* Improve readability */
          .future-card {
            padding: 1.5rem;
          }
          
          .future-card h3 {
            font-size: 1.4rem;
          }
          
          .racing-list li {
            font-size: 1rem;
            line-height: 1.4;
          }
        }
      `}</style>
    </SlideLayout>
  );
}
