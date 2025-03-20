"use client";

import SlideLayout from '@/app/components/SlideLayout';
import TouchNavigation from '@/app/components/TouchNavigation';

export default function HumanVsAutomation() {
  return (
    <SlideLayout slideNumber={6} totalSlides={8} slideId="slide-5">
      <div className="diagonal-divider"></div>
      <div className="speedometer-bg"></div>
      
      <div className="slide-content">
        <div className="slide-header">
          <h2 className="animate">HUMAN <span>VS</span> AUTOMATION</h2>
          <p className="slide-subtitle animate delay-1">Finding the right balance between technology and human touch</p>
        </div>
        
        <div className="comparison-grid animate delay-2">
          <div className="comparison-column">
            <div className="column-header human">
              <h3>Human Touch</h3>
            </div>
            
            <div className="comparison-item">
              <div className="item-header">
                <div className="item-icon">👥</div>
                <h4>Relationship Building</h4>
              </div>
              <p>Emotional connections, trust development, and rapport building that creates lasting business relationships</p>
            </div>
            
            <div className="comparison-item">
              <div className="item-header">
                <div className="item-icon">💡</div>
                <h4>Complex Problem Solving</h4>
              </div>
              <p>Addressing nuanced customer challenges that require creativity, empathy and out-of-the-box thinking</p>
            </div>
            
            <div className="comparison-item">
              <div className="item-header">
                <div className="item-icon">🤝</div>
                <h4>Advanced Negotiation</h4>
              </div>
              <p>Sensing objections, reading social cues, and creating win-win scenarios with strategic value exchanges</p>
            </div>
          </div>
          
          <div className="versus-divider">VS</div>
          
          <div className="comparison-column">
            <div className="column-header automation">
              <h3>Automation</h3>
            </div>
            
            <div className="comparison-item">
              <div className="item-header">
                <div className="item-icon">⚙️</div>
                <h4>Process Execution</h4>
              </div>
              <p>High-volume, repetitive tasks that follow clear rules and require consistency, accuracy, and speed</p>
            </div>
            
            <div className="comparison-item">
              <div className="item-header">
                <div className="item-icon">📊</div>
                <h4>Data Analysis</h4>
              </div>
              <p>Pattern recognition across large datasets to identify trends, predict outcomes, and surface actionable insights</p>
            </div>
            
            <div className="comparison-item">
              <div className="item-header">
                <div className="item-icon">⏱️</div>
                <h4>Timely Follow-up</h4>
              </div>
              <p>Consistent, perfectly timed engagement based on buyer signals and optimal communication schedules</p>
            </div>
          </div>
        </div>
        
        <div className="blended-approach animate delay-3">
          <h3 className="section-title">The Optimal Blended Approach</h3>
          
          <div className="blend-items">
            <div className="blend-item">
              <div className="blend-number">1</div>
              <div className="blend-content">
                <h4>Automate the Routine, Personalize the Strategic</h4>
                <p>Use technology for data entry, activity logging, and scheduling while preserving human bandwidth for high-value conversations</p>
              </div>
            </div>
            
            <div className="blend-item">
              <div className="blend-number">2</div>
              <div className="blend-content">
                <h4>Let AI Recommend, Let Humans Decide</h4>
                <p>Leverage AI for next-best-action suggestions but maintain human judgment for final customer-facing decisions</p>
              </div>
            </div>
            
            <div className="blend-item">
              <div className="blend-number">3</div>
              <div className="blend-content">
                <h4>Augment Instead of Replace</h4>
                <p>Use technology to make salespeople better, more informed, and more capable rather than attempt to substitute them</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="poll-container animate delay-4">
          <div className="poll-header">
            <h3>Quick Poll</h3>
          </div>
          
          <div className="poll-question">In your opinion, what's the biggest challenge in balancing human touch and automation?</div>
          
          <div className="poll-options">
            <div className="poll-option">
              <div className="poll-option-check"></div>
              <div className="poll-option-text">Technology limitations</div>
            </div>
            <div className="poll-option">
              <div className="poll-option-check"></div>
              <div className="poll-option-text">Cultural resistance</div>
            </div>
            <div className="poll-option">
              <div className="poll-option-check"></div>
              <div className="poll-option-text">Cost of implementation</div>
            </div>
            <div className="poll-option">
              <div className="poll-option-check"></div>
              <div className="poll-option-text">Complexity of sales processes</div>
            </div>
          </div>
          
          <div className="poll-actions">
            <button className="poll-submit">Submit</button>
            <button className="poll-skip">Skip</button>
          </div>
        </div>
      </div>

      <TouchNavigation prevLink="/slides/5" nextLink="/slides/7" />

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
        
        /* Comparison Grid */
        .comparison-grid {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 0;
          margin: 2rem 0;
          position: relative;
        }
        
        .comparison-column {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .column-header {
          text-align: center;
          padding: 1rem;
          border-radius: 10px;
          margin-bottom: 0.5rem;
        }
        
        .column-header.human {
          background: linear-gradient(135deg, rgba(26, 44, 153, 0.3), rgba(26, 44, 153, 0.1));
          border: 1px solid rgba(26, 44, 153, 0.2);
        }
        
        .column-header.automation {
          background: linear-gradient(135deg, rgba(225, 6, 0, 0.3), rgba(225, 6, 0, 0.1));
          border: 1px solid rgba(225, 6, 0, 0.2);
        }
        
        .column-header h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0;
          color: white;
        }
        
        .versus-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          font-weight: 900;
          color: var(--racing-red);
          padding: 0 1.5rem;
          position: relative;
        }
        
        .versus-divider::before {
          content: '';
          position: absolute;
          top: 8rem;
          bottom: 8rem;
          width: 2px;
          background: linear-gradient(to bottom, transparent, var(--racing-red), transparent);
        }
        
        .comparison-item {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 12px;
          padding: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          height: 100%;
        }
        
        .comparison-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
          border-color: rgba(225, 6, 0, 0.2);
        }
        
        .comparison-column:first-child .comparison-item:hover {
          border-color: rgba(26, 44, 153, 0.3);
        }
        
        .comparison-column:last-child .comparison-item:hover {
          border-color: rgba(225, 6, 0, 0.3);
        }
        
        .item-header {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }
        
        .item-icon {
          font-size: 1.5rem;
          margin-right: 1rem;
        }
        
        .item-header h4 {
          font-size: 1.2rem;
          margin: 0;
          color: white;
          font-weight: 700;
        }
        
        .comparison-item p {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.5;
          margin: 0;
        }
        
        /* Blended Approach */
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
        
        .blend-items {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin: 2rem 0;
        }
        
        .blend-item {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 12px;
          padding: 1.5rem 1.5rem 1.5rem 5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .blend-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
          border-color: rgba(225, 6, 0, 0.2);
        }
        
        .blend-number {
          position: absolute;
          left: 1.5rem;
          top: 50%;
          transform: translateY(-50%);
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, var(--racing-red), var(--accent-yellow));
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.2rem;
          box-shadow: 0 5px 15px rgba(225, 6, 0, 0.3);
        }
        
        .blend-content h4 {
          font-size: 1.2rem;
          margin-bottom: 0.6rem;
          color: white;
          font-weight: 700;
        }
        
        .blend-content p {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.5;
          margin: 0;
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
          margin-top: 2rem;
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
        
        /* Responsive adjustments */
        @media (max-width: 992px) {
          .slide-header h2 {
            font-size: 2.5rem;
          }
          
          .comparison-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .versus-divider {
            display: flex;
            text-align: center;
            justify-content: center;
            padding: 1rem 0;
          }
          
          .versus-divider::before {
            width: 100px;
            height: 2px;
            top: auto;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(to right, transparent, var(--racing-red), transparent);
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
          
          .section-title {
            font-size: 1.5rem;
          }
          
          .poll-actions {
            flex-direction: column;
            gap: 0.8rem;
          }
          
          .poll-submit, 
          .poll-skip {
            width: 100%;
          }
        }
      `}</style>
    </SlideLayout>
  );
}
