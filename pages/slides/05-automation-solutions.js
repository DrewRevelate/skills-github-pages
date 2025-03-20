import React from 'react';
import Layout from '../../components/Layout';

const AutomationSolutions = () => {
  return (
    <Layout
      title="Automation Solutions - Full Throttle Revenue"
      currentSlide={5}
      totalSlides={8}
      prevSlide="/slides/04-sales-tech-evolution"
      nextSlide="/slides/06-human-vs-automation"
    >
      <section className="slide active" id="slide-4">
        <div className="diagonal-divider"></div>
        
        <div className="slide-content">
          {/* Title and Subtitle */}
          <div className="slide-title-container">
            <h2 className="slide-title animate">22Q <span>Family </span> Foundation</h2>
            <div className="title-underline"></div>
            <p className="slide-subtitle animate delay-1">Real-world impact through a nonprofit case study</p>
          </div>
          
          <div className="content-container">
            {/* Case Study Card */}
            <div className="case-study-card animate delay-2">
              <div className="case-study-header">
                <h3 className="case-study-title">22q Family Foundation</h3>
              </div>
              <div className="case-study-content">
                <div className="case-study-description">
                  <p>The 22q Family Foundation supports families affected by a rare genetic disorder. Revelate Operations implemented Salesforce Nonprofit Cloud to centralize data, automate key processes, and enhance fundraising capabilities while reducing manual workload.</p>
                </div>
                <div className="case-study-metrics">
                  <div className="metric-card">
                    <div className="metric-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    </div>
                    <div className="metric-info">
                      <div className="metric-value">5-8</div>
                      <div className="metric-label">Hours saved weekly</div>
                    </div>
                  </div>
                  <div className="metric-card">
                    <div className="metric-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <div className="metric-info">
                      <div className="metric-value">100%</div>
                      <div className="metric-label">Data centralization</div>
                    </div>
                  </div>
                  <div className="metric-card">
                    <div className="metric-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                        <path d="M7 12l3 3 7-7"></path>
                      </svg>
                    </div>
                    <div className="metric-info">
                      <div className="metric-value">3</div>
                      <div className="metric-label">Systems integrated</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Transformation Impact Section */}
            <div className="transformation-section animate delay-3">
              <div className="transformation-header">
                <h3 className="transformation-title">Transformation Impact</h3>
              </div>
              <div className="transformation-content">
                <div className="comparison-container">
                  <div className="comparison-column comparison-before">
                    <h4 className="comparison-title">Before Automation</h4>
                    <ul className="comparison-list">
                      <li>Disorganized data with duplicates</li>
                      <li>Manual imports between systems</li>
                      <li>Days spent creating reports</li>
                      <li>Staff focused on admin tasks</li>
                    </ul>
                  </div>
                  <div className="comparison-arrow">→</div>
                  <div className="comparison-column comparison-after">
                    <h4 className="comparison-title">After Automation</h4>
                    <ul className="comparison-list">
                      <li>Clean, centralized database</li>
                      <li>Integrated tech ecosystem</li>
                      <li>Real-time insights dashboards</li>
                      <li>Focus on mission-critical work</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Solutions Section */}
            <div className="solutions-section animate delay-4">
              <div className="solutions-header">
                <h3 className="solutions-title">Key Solutions Implemented</h3>
              </div>
              <div className="solutions-content">
                <div className="solutions-grid">
                  <div className="solution-card">
                    <div className="solution-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                      </svg>
                    </div>
                    <h4 className="solution-title">Data Quality</h4>
                    <p className="solution-description">Deduplication created a reliable central database</p>
                  </div>
                  
                  <div className="solution-card">
                    <div className="solution-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22v-5"></path>
                        <path d="M9 7V2"></path>
                        <path d="M15 7V2"></path>
                        <path d="M6 13V8h12v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4Z"></path>
                      </svg>
                    </div>
                    <h4 className="solution-title">Integration</h4>
                    <p className="solution-description">Connected systems eliminated data silos</p>
                  </div>
                  
                  <div className="solution-card">
                    <div className="solution-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="20" x2="12" y2="10"></line>
                        <line x1="18" y1="20" x2="18" y2="4"></line>
                        <line x1="6" y1="20" x2="6" y2="16"></line>
                      </svg>
                    </div>
                    <h4 className="solution-title">Insights</h4>
                    <p className="solution-description">Dashboards provided fundraising visibility</p>
                  </div>
                  
                  <div className="solution-card">
                    <div className="solution-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <circle cx="12" cy="12" r="6"></circle>
                        <circle cx="12" cy="12" r="2"></circle>
                      </svg>
                    </div>
                    <h4 className="solution-title">Impact</h4>
                    <p className="solution-description">Redirected staff time to supporting families</p>
                  </div>
                </div>
                
                <div className="testimonial">
                  <div className="testimonial-content">
                    The team transformed our Salesforce instance from a simple data repository into a strategic engine for our organization. Tasks that used to require multiple steps across different systems can now be accomplished seamlessly within one integrated platform.
                  </div>
                  <div className="testimonial-author">— Executive Director, 22q Family Foundation</div>
                </div>
                
                <div className="success-factors">
                  <div className="success-factor">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Align technology with mission</span>
                  </div>
                  <div className="success-factor">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Data cleanup first priority</span>
                  </div>
                  <div className="success-factor">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Integration eliminates silos</span>
                  </div>
                  <div className="success-factor">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Training ensures adoption</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        /* Base Slide Styling */
        #slide-4 {
            background: linear-gradient(135deg, #121212, #1e1e1e, #2a2a2a);
            overflow: hidden;
            position: relative;
        }
        
        #slide-4:before {
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
        
        #slide-4 .slide-content {
            position: relative;
            z-index: 2;
            color: white;
            padding-bottom: 60px;
        }
        
        /* Title and Subtitle Styling with Red Underline */
        .slide-title-container {
            padding: 3rem 4rem 1rem;
            position: relative;
        }
        
        .slide-title {
            color: white;
            font-size: 3.2rem;
            font-weight: 600;
            margin: 0;
            line-height: 1.1;
            text-transform: uppercase;
            position: relative;
            padding-bottom: 0.8rem;
            letter-spacing: -0.5px;
            text-shadow: 0 2px 15px rgba(225, 6, 0, 0.5);
        }
        
        .slide-title span {
            color: var(--racing-red);
            font-style: italic;
            position: relative;
            display: inline-block;
        }
        
        .slide-title span::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 100%;
            height: 8px;
            background: linear-gradient(90deg, rgba(225, 6, 0, 0.3), transparent);
            filter: blur(5px);
        }
        
        .title-underline {
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 100px;
            height: 4px;
            background: linear-gradient(90deg, var(--racing-red), rgba(225, 6, 0, 0.3));
            border-radius: 2px;
            box-shadow: 0 0 10px rgba(225, 6, 0, 0.3);
        }
        
        .slide-subtitle {
            color: rgba(255, 255, 255, 0.9);
            font-size: 1.4rem;
            margin: 1rem 0 2rem;
            font-weight: 400;
            max-width: 80%;
            line-height: 1.4;
        }
        
        /* Main Content Container */
        .content-container {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            padding: 0 4rem;
        }
        
        /* Case Study Overview Card */
        .case-study-card {
            background: rgba(0, 0, 0, 0.2);
            border-radius: 12px;
            overflow: hidden;
            position: relative;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
            border: 1px solid rgba(255, 255, 255, 0.05);
            transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
        }
        
        .case-study-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
            border-color: rgba(225, 6, 0, 0.3);
        }
        
        .case-study-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, var(--racing-red), var(--accent-yellow));
            box-shadow: 0 0 10px rgba(225, 6, 0, 0.2);
        }
        
        .case-study-header {
            padding: 1.8rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            position: relative;
            background: rgba(0, 0, 0, 0.1);
        }
        
        .case-study-title {
            font-size: 1.8rem;
            font-weight: 700;
            margin: 0;
            position: relative;
            display: inline-block;
            padding-bottom: 0.5rem;
            color: white;
        }
        
        .case-study-title::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 40px;
            height: 3px;
            background: var(--racing-red);
        }
        
        .case-study-content {
            display: flex;
            padding: 1.8rem;
            gap: 2rem;
        }
        
        .case-study-description {
            flex: 3;
            font-size: 1.15rem;
            line-height: 1.6;
            color: rgba(255, 255, 255, 0.95);
        }
        
        .case-study-metrics {
            flex: 2;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        
        .metric-card {
            background: rgba(0, 0, 0, 0.3);
            border-radius: 8px;
            padding: 1.2rem;
            display: flex;
            align-items: center;
            border-left: 3px solid var(--racing-red);
            transition: all 0.3s ease;
        }
        
        .metric-card:hover {
            transform: translateX(8px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
            background: rgba(225, 6, 0, 0.1);
        }
        
        .metric-icon {
            width: 48px;
            height: 48px;
            background: rgba(225, 6, 0, 0.15);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 1.2rem;
            transition: transform 0.3s ease;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
        }
        
        .metric-card:hover .metric-icon {
            transform: scale(1.1) rotate(5deg);
            background: rgba(225, 6, 0, 0.25);
        }
        
        .metric-icon svg {
            width: 24px;
            height: 24px;
            stroke: var(--racing-red);
            stroke-width: 2;
        }
        
        .metric-value {
            font-size: 2.2rem;
            font-weight: 800;
            color: var(--racing-red);
            line-height: 1;
            margin-bottom: 4px;
            text-shadow: 0 2px 5px rgba(225, 6, 0, 0.2);
        }
        
        .metric-label {
            font-size: 0.95rem;
            color: rgba(255, 255, 255, 0.9);
            font-weight: 500;
        }
        
        /* Transformation Impact Section */
        .transformation-section {
            background: rgba(0, 0, 0, 0.2);
            border-radius: 12px;
            overflow: hidden;
            position: relative;
            padding: 0;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
            border: 1px solid rgba(255, 255, 255, 0.05);
            transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
        }
        
        .transformation-section:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
            border-color: rgba(225, 6, 0, 0.3);
        }
        
        .transformation-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, var(--racing-red), var(--accent-yellow));
            box-shadow: 0 0 10px rgba(225, 6, 0, 0.2);
        }
        
        .transformation-header {
            padding: 1.8rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            position: relative;
            background: rgba(0, 0, 0, 0.1);
        }
        
        .transformation-title {
            font-size: 1.7rem;
            font-weight: 700;
            margin: 0;
            position: relative;
            display: inline-block;
            padding-bottom: 0.5rem;
            color: white;
        }
        
        .transformation-title::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 40px;
            height: 3px;
            background: var(--racing-red);
        }
        
        .transformation-content {
            padding: 1.8rem;
        }
        
        .comparison-container {
            display: flex;
            width: 100%;
            position: relative;
            gap: 3rem;
        }
        
        .comparison-column {
            flex: 1;
            padding: 1.8rem;
            position: relative;
            transition: all 0.3s ease;
            border-radius: 10px;
        }
        
        .comparison-column:hover {
            background: rgba(255, 255, 255, 0.05);
            transform: translateY(-3px) scale(1.02);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }
        
        .comparison-before {
            background: rgba(0, 0, 0, 0.25);
            border-radius: 10px;
            border: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .comparison-after {
            background: rgba(225, 6, 0, 0.05);
            border-radius: 10px;
            border: 1px solid rgba(225, 6, 0, 0.15);
        }
        
        .comparison-arrow {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 48px;
            height: 48px;
            background: linear-gradient(135deg, var(--racing-red), #ff3a35);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.8rem;
            z-index: 10;
            box-shadow: 0 8px 20px rgba(225, 6, 0, 0.3);
            transition: all 0.3s ease;
        }
        
        .comparison-container:hover .comparison-arrow {
            transform: translate(-50%, -50%) scale(1.1);
            box-shadow: 0 10px 25px rgba(225, 6, 0, 0.4);
        }
        
        .comparison-title {
            font-size: 1.4rem;
            font-weight: 700;
            margin-bottom: 1.2rem;
        }
        
        .comparison-before .comparison-title {
            color: #ddd;
        }
        
        .comparison-after .comparison-title {
            color: var(--racing-red);
        }
        
        .comparison-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        
        .comparison-list li {
            margin-bottom: 1rem;
            padding-left: 1.8rem;
            position: relative;
            font-size: 1.1rem;
            color: rgba(255, 255, 255, 0.95);
            transition: transform 0.2s ease;
        }
        
        .comparison-list li:hover {
            transform: translateX(5px);
        }
        
        .comparison-before .comparison-list li::before {
            content: '•';
            position: absolute;
            left: 0;
            color: #aaa;
            font-size: 1.5rem;
            line-height: 0.8;
        }
        
        .comparison-after .comparison-list li::before {
            content: '✓';
            position: absolute;
            left: 0;
            color: var(--racing-red);
            font-weight: bold;
        }
        
        /* Solutions and Testimonial Section */
        .solutions-section {
            background: rgba(0, 0, 0, 0.2);
            border-radius: 12px;
            overflow: hidden;
            position: relative;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
            border: 1px solid rgba(255, 255, 255, 0.05);
            transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
        }
        
        .solutions-section:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
            border-color: rgba(225, 6, 0, 0.3);
        }
        
        .solutions-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, var(--racing-red), var(--accent-yellow));
            box-shadow: 0 0 10px rgba(225, 6, 0, 0.2);
        }
        
        .solutions-header {
            padding: 1.8rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            position: relative;
            background: rgba(0, 0, 0, 0.1);
        }
        
        .solutions-title {
            font-size: 1.7rem;
            font-weight: 700;
            margin: 0;
            position: relative;
            display: inline-block;
            padding-bottom: 0.5rem;
            color: white;
        }
        
        .solutions-title::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 40px;
            height: 3px;
            background: var(--racing-red);
        }
        
        .solutions-content {
            padding: 1.8rem;
        }
        
        .solutions-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 1.2rem;
            margin-bottom: 2.5rem;
        }
        
        .solution-card {
            background: rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            padding: 1.5rem;
            text-align: center;
            border: 1px solid rgba(255, 255, 255, 0.05);
            transition: all 0.3s ease;
            height: 100%;
        }
        
        .solution-card:hover {
            transform: translateY(-8px);
            background: rgba(225, 6, 0, 0.1);
            border-color: rgba(225, 6, 0, 0.3);
            box-shadow: 0 15px 25px rgba(0, 0, 0, 0.3);
        }
        
        .solution-icon {
            width: 60px;
            height: 60px;
            background: rgba(225, 6, 0, 0.15);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1.2rem;
            transition: all 0.3s ease;
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
        }
        
        .solution-card:hover .solution-icon {
            transform: scale(1.1) rotate(10deg);
            background: rgba(225, 6, 0, 0.25);
        }
        
        .solution-icon svg {
            width: 28px;
            height: 28px;
            stroke: var(--racing-red);
            stroke-width: 2;
        }
        
        .solution-title {
            font-size: 1.2rem;
            font-weight: 500;
            margin-bottom: 0.8rem;
            color: white;
        }
        
        .solution-description {
            font-size: 0.95rem;
            color: rgba(255, 255, 255, 0.9);
            line-height: 1.5;
        }
        
        .testimonial {
            background: rgba(0, 0, 0, 0.25);
            border-radius: 10px;
            padding: 2rem;
            border-left: 4px solid var(--accent-yellow);
            margin: 2.5rem 0;
            position: relative;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease;
        }
        
        .testimonial:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
            background: rgba(0, 0, 0, 0.3);
        }
        
        .testimonial-content {
            font-style: italic;
            font-size: 1.2rem;
            color: rgba(255, 255, 255, 0.95);
            line-height: 1.6;
            padding-left: 2.5rem;
            position: relative;
        }
        
        .testimonial-content::before {
            content: '"';
            position: absolute;
            left: 0;
            top: -15px;
            font-size: 4rem;
            color: rgba(255, 218, 10, 0.3);
            font-family: Georgia, serif;
            line-height: 1;
        }
        
        .testimonial-author {
            text-align: right;
            margin-top: 1.5rem;
            color: var(--accent-yellow);
            font-weight: 600;
            font-size: 1.1rem;
        }
        
        /* Success Factors Grid */
        .success-factors {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.2rem;
            margin-top: 2rem;
        }
        
        .success-factor {
            display: flex;
            align-items: center;
            background: rgba(0, 0, 0, 0.2);
            padding: 1rem 1.2rem;
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.05);
            transition: all 0.3s ease;
        }
        
        .success-factor:hover {
            background: rgba(255, 255, 255, 0.05);
            transform: translateX(8px);
            border-color: rgba(225, 6, 0, 0.2);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }
        
        .success-factor svg {
            color: var(--racing-red);
            margin-right: 1rem;
            flex-shrink: 0;
            width: 18px;
            height: 18px;
            stroke: currentColor;
            stroke-width: 2.5;
        }
        
        .success-factor span {
            color: rgba(255, 255, 255, 0.95);
            font-size: 1rem;
            font-weight: 500;
        }
        
        /* Animation classes */
        .animate {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .animate.slide-right {
            transform: translateX(50px);
        }
        
        .animate.slide-left {
            transform: translateX(-50px);
        }
        
        .animate.zoom {
            transform: scale(0.8);
        }
        
        .animate.delay-1 {
            transition-delay: 0.2s;
        }
        
        .animate.delay-2 {
            transition-delay: 0.4s;
        }
        
        .animate.delay-3 {
            transition-delay: 0.6s;
        }
        
        .animate.delay-4 {
            transition-delay: 0.8s;
        }
        
        /* Media Queries */
        @media (max-width: 1200px) {
            .solutions-grid {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .slide-title {
                font-size: 2.8rem;
            }
            
            .slide-subtitle {
                font-size: 1.3rem;
                max-width: 90%;
            }
        }
        
        @media (max-width: 992px) {
            .case-study-content {
                flex-direction: column;
            }
            
            .case-study-metrics {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                margin-top: 2rem;
                gap: 1.2rem;
            }
            
            .comparison-container {
                flex-direction: column;
                gap: 5rem; /* Increased space for the arrow */
                position: relative;
            }
            
            .comparison-arrow {
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) rotate(90deg);
                position: absolute;
                margin-top: -0.5rem;
            }
            
            .comparison-container:hover .comparison-arrow {
                transform: translate(-50%, -50%) rotate(90deg) scale(1.1);
            }
            
            .comparison-before {
                border-radius: 10px;
                margin-bottom: 0;
            }
            
            .comparison-after {
                border-radius: 10px;
                margin-top: 0;
            }
            
            .slide-title-container, .content-container {
                padding-left: 2.5rem;
                padding-right: 2.5rem;
            }
            
            .solutions-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        
        @media (max-width: 768px) {
            .slide-title-container {
                padding: 2rem 2rem 1rem;
            }
            
            .slide-title {
                font-size: 2.4rem;
            }
            
            .slide-subtitle {
                font-size: 1.2rem;
                max-width: 100%;
            }
            
            .content-container {
                padding: 0 1.5rem;
            }
            
            /* Fix for one card per row on mobile */
            .case-study-metrics {
                grid-template-columns: 1fr;
            }
            
            /* Ensure pitfall cards and solution cards stack vertically on mobile */
            .solutions-grid {
                grid-template-columns: 1fr;
                gap: 1.5rem;
            }
            
            .success-factors {
                grid-template-columns: 1fr;
            }
            
            /* Add more space between before/after sections */
            .comparison-container {
                gap: 6rem;
            }
            
            .comparison-arrow {
                margin-top: 0;
            }
            
            .testimonial-content {
                font-size: 1.1rem;
                padding-left: 2rem;
            }
            
            .testimonial-content::before {
                font-size: 3rem;
            }
            
            /* Ensure full scrolling */
            #slide-4 .slide-content {
                padding-bottom: 150px;
                min-height: 100%;
            }
        }
      `}</style>
    </Layout>
  );
};

export default AutomationSolutions;
