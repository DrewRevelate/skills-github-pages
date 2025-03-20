import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import { motion, AnimatePresence } from 'framer-motion';

const RevenueAcceleration = () => {
  const [needleRevved, setNeedleRevved] = useState(false);
  const [efficiency, setEfficiency] = useState(0);
  const [efficiencySubtitle, setEfficiencySubtitle] = useState("of a sales rep's week is spent actively selling");
  
  // Generate speedometer markings
  const generateSpeedometerMarkings = () => {
    const markings = [];
    for (let i = 0; i < 36; i++) {
      const isMajor = i % 3 === 0;
      markings.push(
        <div 
          key={i}
          className={isMajor ? 'speedometer-marking major' : 'speedometer-marking'}
          style={{ transform: `rotate(${i * 10}deg) translateX(-50%)` }}
        />
      );
    }
    return markings;
  };
  
  // Start speedometer animation after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setNeedleRevved(true);
      
      // Update efficiency display during animation
      let displayValue = 0;
      const totalTime = 60000; // 60 seconds in milliseconds
      const updateInterval = 1000; // Update every 1 second
      const totalSteps = totalTime / updateInterval;
      const incrementPerStep = 100 / totalSteps; // Increment per step
      
      const displayInterval = setInterval(() => {
        displayValue = Math.min(100, displayValue + incrementPerStep);
        const roundedValue = Math.round(displayValue);
        setEfficiency(roundedValue);
        
        // Update subtitle text based on progress
        if (roundedValue < 28) {
          setEfficiencySubtitle("of a sales rep's week is spent actively selling");
        } else if (roundedValue < 50) {
          setEfficiencySubtitle("more time for selling with automation");
        } else if (roundedValue < 90) {
          setEfficiencySubtitle("efficiency achievable with RevOps");
        } else {
          setEfficiencySubtitle("productivity boost possible!");
        }
        
        if (displayValue >= 100) {
          clearInterval(displayInterval);
        }
      }, updateInterval);
      
      return () => clearInterval(displayInterval);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <Layout
      title="Revenue Acceleration - Full Throttle Revenue"
      currentSlide={3}
      totalSlides={8}
      prevSlide="/slides/02-presenter-profile"
      nextSlide="/slides/04-sales-tech-evolution"
    >
      <section className="slide active" id="slide-2">
        <div className="speedometer-bg"></div>
        <div className="diagonal-divider"></div>
        
        <div className="slide-content">
          <div className="slide-header">
            <h2 className="animate speed">REVVING UP <span>REVENUE</span></h2>
            <p className="slide-subtitle animate delay-1">Did you know sales reps only spend about 28% of their week actually selling?</p>
          </div>
          
          <div className="content-grid">
            <div className="content-col">
              <p className="animate delay-1">Most of their time is spent on administrative tasks, rather than the high-value activities that drive revenue. In today's fast-paced sales landscape, every minute saved is money earned.</p>
              
              <h3 className="animate delay-2 secondary-heading">How Automation Turbocharges Revenue:</h3>
              <ul className="racing-list animate delay-3">
                <li>Building a modern sales tech stack</li>
                <li>Boosting efficiency at each stage of the sales process</li>
                <li>Balancing tech with the human touch for maximum impact</li>
              </ul>
            </div>
            
            <div className="content-col animate zoom delay-2">
              <div className="speedometer">
                <div className="time-indicator t0">0%</div>
                <div className="time-indicator t25">25%</div>
                <div className="time-indicator t50">50%</div>
                <div className="time-indicator t75">75%</div>
                <div className="time-indicator t100">100%</div>
                
                <div className="speedometer-outer"></div>
                <div className="speedometer-gauge"></div>
                <div className="speedometer-inner">
                  <div className="inner-content">
                    <div className="efficiency-number">{efficiency}%</div>
                    <div className="efficiency-label">SELLING TIME</div>
                    <div className="efficiency-subtitle">{efficiencySubtitle}</div>
                  </div>
                </div>
                <div className="speedometer-markings">
                  {generateSpeedometerMarkings()}
                </div>
                <motion.div 
                  className="speedometer-needle" 
                  initial={{ rotate: -145, originX: "left", originY: "center" }}
                  animate={needleRevved ? { 
                    rotate: 30,
                    transition: { 
                      duration: 60, 
                      ease: "easeOut" 
                    }
                  } : {}}
                />
                <div className="speedometer-center"></div>
              </div>
            </div>
          </div>
          
          <div className="stats-container animate delay-3">
            <div className="card stat-card">
              <div className="stat-number">15%</div>
              <p>Increased profitability for businesses with aligned RevOps</p>
            </div>
            <div className="card stat-card">
              <div className="stat-number">80%</div>
              <p>of B2B sales interactions expected to be digital by 2025</p>
            </div>
            <div className="card stat-card">
              <div className="stat-number">5hrs</div>
              <p>Average time saved per week per rep through automation</p>
            </div>
          </div>
          
          <div className="poll-container animate delay-4" data-poll-id="default">
            <div className="poll-header">
              <h3>Interactive Poll</h3>
              <div className="poll-user-id" id="userId">Your ID: <span></span></div>
            </div>
            <div className="poll-question">What would you do with 5 extra hours per week?</div>
            <div className="poll-options">
              <div className="poll-option" data-value="prospecting">
                <div className="poll-option-check"></div>
                <div className="poll-option-text">More prospecting</div>
              </div>
              <div className="poll-option" data-value="client-meetings">
                <div className="poll-option-check"></div>
                <div className="poll-option-text">Additional client meetings</div>
              </div>
              <div className="poll-option" data-value="learning">
                <div className="poll-option-check"></div>
                <div className="poll-option-text">Learning new skills</div>
              </div>
              <div className="poll-option" data-value="planning">
                <div className="poll-option-check"></div>
                <div className="poll-option-text">Strategic planning</div>
              </div>
              <div className="poll-option" data-value="personal">
                <div className="poll-option-check"></div>
                <div className="poll-option-text">Personal time/life balance</div>
              </div>
            </div>
            <div className="poll-results">
              <h4>Live Class Results:</h4>
              <div className="poll-result-item" data-option="prospecting">
                <div className="poll-result-header">
                  <div className="poll-result-label">More prospecting</div>
                  <div className="poll-result-percentage">0%</div>
                </div>
                <div className="poll-bar">
                  <div className="poll-fill" style={{ width: '0%' }}></div>
                </div>
              </div>
              <div className="poll-result-item" data-option="client-meetings">
                <div className="poll-result-header">
                  <div className="poll-result-label">Additional client meetings</div>
                  <div className="poll-result-percentage">0%</div>
                </div>
                <div className="poll-bar">
                  <div className="poll-fill" style={{ width: '0%' }}></div>
                </div>
              </div>
              <div className="poll-result-item" data-option="learning">
                <div className="poll-result-header">
                  <div className="poll-result-label">Learning new skills</div>
                  <div className="poll-result-percentage">0%</div>
                </div>
                <div className="poll-bar">
                  <div className="poll-fill" style={{ width: '0%' }}></div>
                </div>
              </div>
              <div className="poll-result-item" data-option="planning">
                <div className="poll-result-header">
                  <div className="poll-result-label">Strategic planning</div>
                  <div className="poll-result-percentage">0%</div>
                </div>
                <div className="poll-bar">
                  <div className="poll-fill" style={{ width: '0%' }}></div>
                </div>
              </div>
              <div className="poll-result-item" data-option="personal">
                <div className="poll-result-header">
                  <div className="poll-result-label">Personal time/life balance</div>
                  <div className="poll-result-percentage">0%</div>
                </div>
                <div className="poll-bar">
                  <div className="poll-fill" style={{ width: '0%' }}></div>
                </div>
              </div>
            </div>
            <div className="poll-actions">
              <button className="poll-submit">Submit Answer</button>
              <button className="poll-skip">Just Show Results</button>
            </div>
          </div>
        </div>

        <style jsx>{`
          /* Enhanced Slide Design */
          #slide-2 {
            background: linear-gradient(135deg, #121212, #1e1e1e, #2a2a2a);
            overflow: hidden;
            position: relative;
          }
          
          #slide-2:before {
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
          
          #slide-2 .slide-content {
            position: relative;
            z-index: 2;
            color: white;
          }
          
          #slide-2 .slide-header h2 {
            color: white;
            text-shadow: 0 2px 15px rgba(225, 6, 0, 0.5);
          }
          
          #slide-2 .slide-subtitle {
            color: rgba(255, 255, 255, 0.9);
          }
          
          #slide-2 p {
            color: rgba(255, 255, 255, 0.8);
          }
          
          #slide-2 .racing-list li {
            color: rgba(255, 255, 255, 0.8);
          }
          
          #slide-2 .secondary-heading {
            color: white;
            position: relative;
            padding-left: 15px;
          }
          
          #slide-2 .secondary-heading:before {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            width: 8px;
            height: 25px;
            background: var(--racing-red);
            transform: translateY(-50%);
          }
          
          /* Modern Dashboard Style Speedometer */
          .speedometer {
            width: 320px;
            height: 320px;
            position: relative;
            margin: 0 auto;
            border-radius: 50%;
            background: linear-gradient(145deg, #222, #333);
            box-shadow: 0 10px 30px rgba(0,0,0,0.5),
                        inset 0 2px 10px rgba(255,255,255,0.07),
                        inset 0 -5px 15px rgba(0,0,0,0.3);
            border: 1px solid rgba(255,255,255,0.05);
            overflow: hidden;
          }
          
          .speedometer:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, 
                rgba(255,255,255,0.08) 0%, 
                rgba(255,255,255,0) 50%, 
                rgba(0,0,0,0.15) 100%);
            border-radius: 50%;
            z-index: 10;
            pointer-events: none;
          }
          
          .speedometer-outer {
            position: absolute;
            width: 96%;
            height: 96%;
            top: 2%;
            left: 2%;
            border-radius: 50%;
            overflow: hidden;
            background: #222;
          }
          
          .speedometer-inner {
            position: absolute;
            width: 80%;
            height: 80%;
            top: 10%;
            left: 10%;
            border-radius: 50%;
            background: linear-gradient(145deg, #1a1a1a, #252525);
            box-shadow: inset 0 0 30px rgba(0,0,0,0.5);
            z-index: 3;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
          
          .inner-content {
            font-family: 'Titillium Web', sans-serif;
            color: white;
            text-align: center;
            font-weight: 300;
            line-height: 1.2;
          }
          
          .efficiency-number {
            font-size: 38px;
            font-weight: 700;
            color: #FFDA0A;
            margin-bottom: 5px;
            letter-spacing: -1px;
            text-shadow: 0 0 10px rgba(255, 218, 10, 0.3);
          }
          
          .efficiency-label {
            font-size: 14px;
            color: rgba(255,255,255,0.7);
            text-transform: uppercase;
            letter-spacing: 2px;
          }
          
          .efficiency-subtitle {
            font-size: 11px;
            color: rgba(255,255,255,0.4);
            max-width: 150px;
            margin-top: 10px;
            text-align: center;
          }
          
          .speedometer-gauge {
            position: absolute;
            width: 100%;
            height: 100%;
            background: conic-gradient(
                #E10600 0%, 
                #FF5300 15%, 
                #FFDA0A 28%,
                rgba(255, 255, 255, 0.05) 28%
            );
            border-radius: 50%;
            z-index: 1;
            transform: rotate(-145deg);
          }
          
          .speedometer-center {
            position: absolute;
            width: 20px;
            height: 20px;
            background: #E10600;
            border-radius: 50%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 4;
            box-shadow: 0 0 15px rgba(225, 6, 0, 0.8);
          }
          
          .speedometer-needle {
            position: absolute;
            width: 130px;
            height: 4px;
            background: linear-gradient(90deg, rgba(225, 6, 0, 0.8), #E10600);
            top: 50%;
            left: 50%;
            transform: translateY(-50%) rotate(-145deg);
            transform-origin: left center;
            z-index: 3;
            border-radius: 2px;
            box-shadow: 0 0 15px rgba(225, 6, 0, 0.7);
          }
          
          .speedometer-needle::after {
            content: '';
            position: absolute;
            width: 16px;
            height: 16px;
            background: linear-gradient(145deg, #E10600, #c10000);
            border-radius: 50%;
            left: -8px;
            top: 50%;
            transform: translateY(-50%);
            box-shadow: 0 0 15px rgba(225, 6, 0, 0.7),
                        inset 0 1px 3px rgba(255,255,255,0.2);
          }
          
          /* Enhanced Markings */
          .speedometer-markings {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 2;
          }
          
          .speedometer-marking {
            position: absolute;
            top: 8px;
            left: 50%;
            transform-origin: 50% 142px;
            width: 2px;
            height: 8px;
            background: rgba(255, 255, 255, 0.3);
          }
          
          .speedometer-marking.major {
            height: 12px;
            width: 3px;
            background: rgba(255, 255, 255, 0.6);
          }
          
          /* Add time percentage indicators */
          .time-indicator {
            position: absolute;
            font-size: 11px;
            font-weight: 600;
            color: rgba(255,255,255,0.7);
            z-index: 2;
          }
          
          .time-indicator.t0 {
            bottom: 40%;
            left: 10%;
          }
          
          .time-indicator.t25 {
            bottom: 65%;
            left: 20%;
          }
          
          .time-indicator.t50 {
            top: 25%;
            left: 50%;
            transform: translateX(-50%);
          }
          
          .time-indicator.t75 {
            bottom: 65%;
            right: 20%;
          }
          
          .time-indicator.t100 {
            bottom: 40%;
            right: 10%;
          }
          
          /* Grid layout for content */
          .content-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            margin: 2rem 0;
          }
          
          /* Enhanced stats cards */
          .stats-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
            margin: 2rem 0;
          }
          
          /* Enhanced stats cards */
          .stat-card {
            background: linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01));
            border: 1px solid rgba(255,255,255,0.1);
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          
          .stat-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(0,0,0,0.4);
          }
          
          .stat-number {
            color: var(--racing-red);
            text-shadow: 0 0 10px rgba(225, 6, 0, 0.3);
          }
          
          /* Poll container styles */
          .poll-container {
            background: linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01));
            border: 1px solid rgba(255,255,255,0.1);
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            padding: 2rem;
            border-radius: 12px;
            margin-top: 2rem;
          }
          
          .poll-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
          }
          
          .poll-header h3 {
            font-size: 1.4rem;
            color: white;
          }
          
          .poll-user-id {
            background-color: rgba(0, 0, 0, 0.3);
            color: rgba(255, 255, 255, 0.8);
            padding: 0.4rem 0.8rem;
            border-radius: 20px;
            font-size: 0.8rem;
          }
          
          .poll-question {
            font-size: 1.2rem;
            margin-bottom: 1.5rem;
            color: white;
            font-weight: 500;
          }
          
          .poll-options {
            display: flex;
            flex-direction: column;
            gap: 0.8rem;
            margin-bottom: 1.5rem;
          }
          
          .poll-option {
            display: flex;
            align-items: center;
            padding: 1rem 1.2rem;
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          
          .poll-option:hover {
            background: rgba(255,255,255,0.1);
            border-color: rgba(255,255,255,0.2);
            transform: translateX(5px);
          }
          
          .poll-option.selected {
            background: rgba(225, 6, 0, 0.15);
            border-color: rgba(225, 6, 0, 0.3);
          }
          
          .poll-option-check {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: 2px solid rgba(255, 255, 255, 0.3);
            margin-right: 1rem;
          }
          
          .poll-option.selected .poll-option-check {
            background-color: var(--racing-red);
            border-color: var(--racing-red);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .poll-option.selected .poll-option-check::after {
            content: '✓';
            color: white;
            font-size: 0.8rem;
          }
          
          .poll-option-text {
            color: rgba(255,255,255,0.9);
            font-size: 1.05rem;
          }
          
          .poll-results {
            display: none;
            margin-top: 1.5rem;
          }
          
          .poll-results.show {
            display: block;
          }
          
          .poll-results h4 {
            font-size: 1.2rem;
            margin-bottom: 1.2rem;
            color: white;
          }
          
          .poll-result-item {
            margin-bottom: 1.2rem;
          }
          
          .poll-result-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.5rem;
          }
          
          .poll-result-label {
            font-size: 1rem;
            color: rgba(255, 255, 255, 0.9);
          }
          
          .poll-result-percentage {
            font-weight: 600;
            color: var(--racing-red);
          }
          
          .poll-bar {
            height: 8px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 4px;
            overflow: hidden;
          }
          
          .poll-fill {
            height: 100%;
            background: linear-gradient(90deg, var(--racing-red), var(--accent-yellow));
            border-radius: 4px;
            transition: width 0.5s ease;
          }
          
          .poll-actions {
            display: flex;
            justify-content: flex-end;
            gap: 1rem;
            margin-top: 1.5rem;
          }
          
          .poll-submit {
            background: var(--racing-red);
            color: white;
            border: none;
            padding: 0.8rem 1.5rem;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(225, 6, 0, 0.3);
          }
          
          .poll-submit:hover {
            background: #c10500;
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(225, 6, 0, 0.4);
          }
          
          .poll-skip {
            background: transparent;
            color: rgba(255, 255, 255, 0.6);
            border: none;
            padding: 0.8rem 1.5rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          
          .poll-skip:hover {
            color: white;
            text-decoration: underline;
          }
          
          /* Animation classes */
          @keyframes speedIn {
            from { transform: translateX(-100%) skewX(-30deg); opacity: 0; }
            to { transform: translateX(0) skewX(0); opacity: 1; }
          }
          
          .speed {
            animation: speedIn 1s forwards;
          }
          
          .animate {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.8s ease, transform 0.8s ease;
          }
          
          .active .animate {
            opacity: 1;
            transform: translateY(0);
          }
          
          .delay-1 {
            transition-delay: 0.2s;
          }
          
          .delay-2 {
            transition-delay: 0.4s;
          }
          
          .delay-3 {
            transition-delay: 0.6s;
          }
          
          .delay-4 {
            transition-delay: 0.8s;
          }
          
          .zoom {
            transform: scale(0.8);
          }
          
          .active .animate.zoom {
            transform: scale(1);
          }
          
          /* Responsive styles */
          @media (max-width: 992px) {
            .content-grid, .stats-container {
              grid-template-columns: 1fr;
              gap: 2rem;
            }
            
            .speedometer {
              margin: 2rem auto;
            }
          }
          
          @media (max-width: 768px) {
            .poll-header {
              flex-direction: column;
              align-items: flex-start;
              gap: 1rem;
            }
            
            .poll-actions {
              flex-direction: column;
              width: 100%;
            }
            
            .poll-submit, .poll-skip {
              width: 100%;
              text-align: center;
            }
          }
        `}</style>
      </section>
    </Layout>
  );
};

export default RevenueAcceleration;
