import React, { useState } from 'react';
import Layout from '../../components/Layout';

const HumanVsAutomation = () => {
  // State to track selected poll option
  const [selectedOption, setSelectedOption] = useState(null);
  const [pollResults, setPollResults] = useState({
    technical: 25,
    relationship: 40,
    strategic: 20,
    execution: 15
  });
  const [voted, setVoted] = useState(false);

  // Function to handle poll option selection
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  // Function to handle poll submission
  const handlePollSubmit = () => {
    if (!selectedOption) return;
    
    // In a real implementation, we'd send this to a server
    // For now, we'll just update the UI as if the vote was registered
    setVoted(true);
    
    // Simulate updated results
    const newResults = {...pollResults};
    const totalVotes = Object.values(newResults).reduce((a, b) => a + b, 0);
    newResults[selectedOption] += 1;
    
    // Update the poll results
    setPollResults(newResults);
  };

  // Function to handle showing results without voting
  const handlePollSkip = () => {
    setVoted(true);
  };

  return (
    <Layout
      title="Human vs Automation - Full Throttle Revenue"
      currentSlide={6}
      totalSlides={8}
      prevSlide="/slides/05-automation-solutions"
      nextSlide="/slides/07-future-of-sales-tech"
    >
      <section className="slide active" id="slide-5">
        <div className="diagonal-divider"></div>
        <div className="warning-bg"></div>
        
        <div className="slide-content">
          <div className="slide-header">
            <h2 className="animate">NAVIGATING THE <span>PITFALLS</span></h2>
            <p className="slide-subtitle animate delay-1">Smart automation requires awareness of key challenges</p>
          </div>
          
          <div className="content-grid animate delay-2">
            <div className="warning-card">
              <h3>1. Data Quality Issues <span className="alert-icon">⚠️</span></h3>
              <p>Automation amplifies your data problems. Poor quality data costs the U.S. an estimated <span className="stat-highlight">$3.1 trillion</span> annually in lost opportunities and wasted resources, according to IBM research.</p>
              <p>Bad data leads to misdirected outreach, inaccurate forecasting, and ineffective targeting.</p>
              <p><em>"If you automate a mess, you get an automated mess."<br/><span>— Rod Michael, IBM Quality Expert</span></em></p>
            </div>
            <div className="warning-card">
              <h3>2. Loss of Personal Connection <span className="alert-icon">⚠️</span></h3>
              <p><span className="stat-highlight">56%</span> of consumers say most companies treat them like numbers, according to Salesforce. In sales, you can't simply "set it and forget it."</p>
              <p>Over-automation risks making customers feel like transactions rather than valuable partners.</p>
              <p><em>"The more high tech we have, the more high touch we will want."<br/><span>— John Naisbitt, Author of "Megatrends"</span></em></p>
            </div>
          </div>
          
          <div className="content-grid animate delay-3">
            <div className="warning-card">
              <h3>3. Compliance & Privacy Risks <span className="alert-icon">⚠️</span></h3>
              <p>Automated outreach must comply with regulations like <span className="stat-highlight">GDPR</span> and <span className="stat-highlight">CAN-SPAM</span>. Violations can result in significant financial penalties and reputation damage.</p>
              <p>Customer data requires robust security measures and transparent handling policies.</p>
              <p><em>"The average cost of a data breach is <span>$4.45 million</span> in 2023."<br/><span>— IBM Cost of a Data Breach Report</span></em></p>
            </div>
            <div className="warning-card">
              <h3>4. AI Bias & Human Value <span className="alert-icon">⚠️</span></h3>
              <p>AI systems can unintentionally perpetuate biases present in training data, potentially leading to unfair treatment of customer segments.</p>
              <p>The future belongs to professionals who work effectively alongside automation, not those replaced by it.</p>
              <p><em>"AI will continue to evolve and improve, but these improvements will make salespeople more efficient, not replace them entirely."<br/><span>— Sales Growth Research</span></em></p>
            </div>
          </div>
          
          <div className="balance-section animate delay-4">
            <h3 className="balance-heading">The Winning Formula: Human + Machine</h3>
            <div className="balance-columns">
              <div className="balance-column">
                <h4>
                  <span className="automate-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M14.31 8l5.74 9.94"></path>
                      <path d="M9.69 8h10.61"></path>
                      <path d="M7.38 12l5.74-9.94"></path>
                      <path d="M7.35 16.15l10.68-2.63"></path>
                      <path d="M3.95 12l10.68 2.63"></path>
                    </svg>
                  </span>
                  Automate:
                </h4>
                <ul className="racing-list">
                  <li>High-volume, repetitive tasks</li>
                  <li>Data collection and enrichment</li>
                  <li>Initial outreach sequences</li>
                  <li>Follow-up reminders and scheduling</li>
                </ul>
              </div>
              <div className="balance-column">
                <h4>
                  <span className="human-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </span>
                  Keep Human:
                </h4>
                <ul className="racing-list">
                  <li>Relationship building and trust</li>
                  <li>Complex negotiations</li>
                  <li>Strategic account planning</li>
                  <li>Critical decision points</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="poll-container animate delay-4 highlight-border" data-poll-id="student-skills">
            <div className="poll-header">
              <h3><span style={{ color: 'var(--racing-red)' }}>📊</span> INTERACTIVE POLL</h3>
              <div className="poll-user-id" id="userId"><span></span></div>
            </div>
            <div className="poll-question">For your first sales role, which skills would you prioritize developing?</div>
            <div className="poll-options">
              <div 
                className={`poll-option ${selectedOption === 'technical' ? 'selected' : ''}`} 
                data-value="technical"
                onClick={() => handleOptionSelect('technical')}
              >
                <div className="poll-option-check"></div>
                <div className="poll-option-text"><b>Technical skills</b><br/><span style={{ fontSize: '0.85rem', opacity: '0.9' }}>(CRM, automation tools, data analysis)</span></div>
              </div>
              <div 
                className={`poll-option ${selectedOption === 'relationship' ? 'selected' : ''}`} 
                data-value="relationship"
                onClick={() => handleOptionSelect('relationship')}
              >
                <div className="poll-option-check"></div>
                <div className="poll-option-text"><b>Relationship-building skills</b><br/><span style={{ fontSize: '0.85rem', opacity: '0.9' }}>(communication, empathy, trust)</span></div>
              </div>
              <div 
                className={`poll-option ${selectedOption === 'strategic' ? 'selected' : ''}`} 
                data-value="strategic"
                onClick={() => handleOptionSelect('strategic')}
              >
                <div className="poll-option-check"></div>
                <div className="poll-option-text"><b>Strategic skills</b><br/><span style={{ fontSize: '0.85rem', opacity: '0.9' }}>(industry knowledge, competitive analysis)</span></div>
              </div>
              <div 
                className={`poll-option ${selectedOption === 'execution' ? 'selected' : ''}`} 
                data-value="execution"
                onClick={() => handleOptionSelect('execution')}
              >
                <div className="poll-option-check"></div>
                <div className="poll-option-text"><b>Execution skills</b><br/><span style={{ fontSize: '0.85rem', opacity: '0.9' }}>(organization, time management, follow-through)</span></div>
              </div>
            </div>
            <div className="poll-results">
              <h4 style={{ color: 'rgba(255, 255, 255, 0.9)' }}><span style={{ color: 'var(--racing-red)', marginRight: '0.5rem' }}>⚡</span>Live Class Results:</h4>
              <div className="poll-result-item" data-option="technical">
                <div className="poll-result-header">
                  <div className="poll-result-label">Technical skills</div>
                  <div className="poll-result-percentage">{voted ? `${Math.round((pollResults.technical / Object.values(pollResults).reduce((a, b) => a + b, 0)) * 100)}%` : '0%'}</div>
                </div>
                <div className="poll-bar">
                  <div className="poll-fill" style={{ width: voted ? `${Math.round((pollResults.technical / Object.values(pollResults).reduce((a, b) => a + b, 0)) * 100)}%` : '0%' }}></div>
                </div>
              </div>
              <div className="poll-result-item" data-option="relationship">
                <div className="poll-result-header">
                  <div className="poll-result-label">Relationship-building skills</div>
                  <div className="poll-result-percentage">{voted ? `${Math.round((pollResults.relationship / Object.values(pollResults).reduce((a, b) => a + b, 0)) * 100)}%` : '0%'}</div>
                </div>
                <div className="poll-bar">
                  <div className="poll-fill" style={{ width: voted ? `${Math.round((pollResults.relationship / Object.values(pollResults).reduce((a, b) => a + b, 0)) * 100)}%` : '0%' }}></div>
                </div>
              </div>
              <div className="poll-result-item" data-option="strategic">
                <div className="poll-result-header">
                  <div className="poll-result-label">Strategic skills</div>
                  <div className="poll-result-percentage">{voted ? `${Math.round((pollResults.strategic / Object.values(pollResults).reduce((a, b) => a + b, 0)) * 100)}%` : '0%'}</div>
                </div>
                <div className="poll-bar">
                  <div className="poll-fill" style={{ width: voted ? `${Math.round((pollResults.strategic / Object.values(pollResults).reduce((a, b) => a + b, 0)) * 100)}%` : '0%' }}></div>
                </div>
              </div>
              <div className="poll-result-item" data-option="execution">
                <div className="poll-result-header">
                  <div className="poll-result-label">Execution skills</div>
                  <div className="poll-result-percentage">{voted ? `${Math.round((pollResults.execution / Object.values(pollResults).reduce((a, b) => a + b, 0)) * 100)}%` : '0%'}</div>
                </div>
                <div className="poll-bar">
                  <div className="poll-fill" style={{ width: voted ? `${Math.round((pollResults.execution / Object.values(pollResults).reduce((a, b) => a + b, 0)) * 100)}%` : '0%' }}></div>
                </div>
              </div>
            </div>
            <div className="poll-actions">
              <button className="poll-submit" onClick={handlePollSubmit} disabled={voted || !selectedOption}>
                <span style={{ position: 'relative', zIndex: 1 }}>SUBMIT YOUR ANSWER</span>
              </button>
              <button className="poll-skip" onClick={handlePollSkip} disabled={voted}>
                Just Show Results
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        /* Base Slide Styling */
        #slide-5 {
            background: linear-gradient(135deg, #121212, #1e1e1e, #2a2a2a);
            overflow: hidden;
            position: relative;
            color: white;
        }
        
        #slide-5:before {
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
        
        #slide-5 .slide-content {
            position: relative;
            z-index: 2;
            color: white;
            padding-bottom: 60px;
        }
        
        /* Warning signs background */
        .warning-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at 80% 30%, rgba(225, 6, 0, 0.1) 0%, transparent 60%);
            z-index: 1;
            pointer-events: none;
        }
        
        /* Enhanced warning cards */
        .warning-card {
            position: relative;
            background: rgba(0, 0, 0, 0.2);
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
            transition: all 0.3s ease;
            padding-bottom: 1.5rem;
            height: 100%;
            display: flex;
            flex-direction: column;
            transform: translateY(0);
            cursor: pointer;
        }
        
        .warning-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
            border-color: rgba(225, 6, 0, 0.3);
        }
        
        .warning-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 6px;
            height: 100%;
            background: linear-gradient(to bottom, var(--racing-red), var(--accent-yellow));
        }
        
        .warning-card h3 {
            color: white;
            border-bottom: 1px dashed rgba(255, 255, 255, 0.1);
            padding: 1.2rem 1rem;
            margin-bottom: 1rem;
            font-size: 1.4rem;
            margin-top: 0;
            font-weight: 700;
            letter-spacing: -0.02em;
            position: relative;
            overflow: hidden;
        }
        
        .warning-card h3::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(225, 6, 0, 0.2), transparent);
        }
        
        .warning-card p {
            padding-left: 1.2rem;
            padding-right: 1.2rem;
            margin-top: 0.7rem;
            margin-bottom: 0.7rem;
            line-height: 1.6;
            font-size: 1.05rem;
            color: rgba(255, 255, 255, 0.9);
        }
        
        .warning-card em {
            display: block;
            margin: 1rem 1.2rem 0.5rem;
            font-weight: 600;
            color: rgba(255, 255, 255, 0.8);
            font-style: italic;
            font-size: 1rem;
            padding: 1rem;
            background: rgba(0, 0, 0, 0.3);
            border-radius: 8px;
            border-left: 3px solid var(--racing-red);
            line-height: 1.5;
            box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
        }
        
        .warning-card em br + span,
        .warning-card em br + small {
            display: inline-block;
            margin-top: 0.5rem;
            font-size: 0.9rem;
            color: rgba(255, 255, 255, 0.7);
            font-weight: 500;
            font-style: normal;
        }
        
        .stat-highlight {
            display: inline-block;
            color: white;
            background: var(--racing-red);
            padding: 0.2rem 0.5rem;
            border-radius: 4px;
            font-weight: 700;
            margin: 0 2px;
            box-shadow: 0 2px 5px rgba(225, 6, 0, 0.2);
        }
        
        /* Alert icon */
        .alert-icon {
            position: absolute;
            top: 1.2rem;
            right: 1.2rem;
            color: var(--racing-red);
            opacity: 0.8;
            transition: all 0.3s ease;
        }
        
        .warning-card:hover .alert-icon {
            opacity: 1;
        }
        
        /* Balance section improvements */
        .balance-section {
            position: relative;
            background: rgba(0, 0, 0, 0.2);
            border-radius: 15px;
            padding: 1.8rem;
            margin: 2.5rem 0;
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.1);
            overflow: hidden;
        }
        
        .balance-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 6px;
            background: linear-gradient(to right, var(--racing-red), var(--accent-yellow));
            border-radius: 15px 15px 0 0;
        }
        
        .balance-section::after {
            content: '';
            position: absolute;
            bottom: -20px;
            right: -20px;
            width: 180px;
            height: 180px;
            background: radial-gradient(circle, rgba(225, 6, 0, 0.05), transparent 70%);
            border-radius: 50%;
            z-index: 0;
        }
        
        .balance-heading {
            font-size: 1.7rem;
            font-weight: 800;
            margin-bottom: 1.8rem;
            color: white;
            border-bottom: 2px solid rgba(255, 255, 255, 0.1);
            padding-bottom: 1rem;
            letter-spacing: -0.02em;
            position: relative;
        }
        
        .balance-heading::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 100px;
            height: 2px;
            background: linear-gradient(to right, var(--racing-red), var(--accent-yellow));
        }
        
        .balance-columns {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
            position: relative;
            z-index: 5;
        }
        
        .balance-column h4 {
            font-size: 1.3rem;
            font-weight: 700;
            margin-bottom: 1.2rem;
            color: white;
            display: flex;
            align-items: center;
            letter-spacing: -0.01em;
        }
        
        .automate-icon, .human-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            margin-right: 0.8rem;
            flex-shrink: 0;
            box-shadow: 0 3px 8px rgba(0, 0, 0, 0.5);
        }
        
        .automate-icon {
            background: var(--racing-red);
            color: white;
        }
        
        .human-icon {
            background: #555;
            color: white;
        }
        
        /* Racing list enhancements */
        .racing-list {
            list-style: none;
            padding-left: 0;
            margin-top: 0;
        }
        
        .racing-list li {
            margin-bottom: 1rem;
            padding-left: 1.5rem;
            position: relative;
            font-size: 1.1rem;
            line-height: 1.5;
            color: rgba(255, 255, 255, 0.9);
            transition: all 0.3s ease;
            transform: translateX(0);
        }
        
        .racing-list li:hover {
            transform: translateX(5px);
            color: var(--racing-red);
        }
        
        .racing-list li:before {
            content: "";
            position: absolute;
            left: 0;
            top: 0.5rem;
            width: 8px;
            height: 8px;
            background: var(--racing-red);
            border-radius: 2px;
            transform: rotate(45deg);
            transition: all 0.3s ease;
        }
        
        /* Enhanced poll container */
        .poll-container {
            background: rgba(0, 0, 0, 0.3);
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 18px 40px rgba(0, 0, 0, 0.4);
            border: 1px solid rgba(255, 255, 255, 0.1);
            margin-top: 2.5rem;
            position: relative;
        }
        
        .poll-container::after {
            content: '';
            position: absolute;
            bottom: 0;
            right: 0;
            width: 120px;
            height: 120px;
            background: linear-gradient(135deg, transparent, rgba(225, 6, 0, 0.1));
            border-radius: 50% 0 0 0;
            z-index: 1;
        }
        
        .poll-header {
            background: rgba(0, 0, 0, 0.2);
            padding: 1.2rem 1.5rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            position: relative;
            overflow: hidden;
        }
        
        .poll-header::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at 10% 50%, rgba(225, 6, 0, 0.1) 0%, transparent 70%);
        }
        
        .poll-header h3 {
            font-size: 1.3rem;
            font-weight: 800;
            letter-spacing: -0.01em;
            color: white;
            position: relative;
            z-index: 5;
        }
        
        .poll-question {
            font-size: 1.2rem;
            font-weight: 600;
            padding: 1.5rem 1.5rem 1rem;
            color: white;
        }
        
        .poll-option {
            padding: 1rem 1.5rem;
            border-radius: 8px;
            transition: all 0.3s ease;
            margin: 0.8rem 1.5rem;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }
        
        .poll-option:hover {
            background: rgba(255, 255, 255, 0.1);
            transform: translateX(3px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            border-color: rgba(255, 255, 255, 0.2);
        }
        
        .poll-option.selected {
            background: rgba(225, 6, 0, 0.15);
            border-left: 3px solid var(--racing-red);
            transform: translateX(5px);
        }
        
        .poll-option-text {
            color: rgba(255, 255, 255, 0.9);
        }
        
        .poll-option-text b {
            color: white;
        }
        
        .poll-option-text span {
            color: rgba(255, 255, 255, 0.7);
        }
        
        .poll-results {
            color: rgba(255, 255, 255, 0.9);
            padding: 1rem 1.5rem;
            background: rgba(0, 0, 0, 0.2);
        }
        
        .poll-result-label, .poll-result-percentage {
            color: rgba(255, 255, 255, 0.9);
        }
        
        .poll-result-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.3rem;
        }
        
        .poll-bar {
            margin-bottom: 1rem;
            background: rgba(255, 255, 255, 0.1);
            height: 18px;
            border-radius: 9px;
            box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.3);
        }
        
        .poll-fill {
            height: 100%;
            border-radius: 9px;
            background: linear-gradient(90deg, var(--racing-red), var(--accent-yellow));
            transition: width 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }
        
        .poll-actions {
            padding: 1.2rem 1.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            background: rgba(0, 0, 0, 0.2);
        }
        
        .poll-submit {
            background: linear-gradient(to right, var(--racing-red), var(--accent-yellow));
            font-weight: 700;
            padding: 1.2rem 2rem;
            box-shadow: 0 8px 20px rgba(225, 6, 0, 0.3);
            transition: all 0.3s ease;
            border-radius: 30px;
            margin-top: 0.5rem;
            position: relative;
            overflow: hidden;
            color: white;
            border: none;
            cursor: pointer;
            width: 100%;
            max-width: 300px;
        }
        
        .poll-submit:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 25px rgba(225, 6, 0, 0.4);
        }
        
        .poll-submit:disabled {
            opacity: 0.5;
            cursor: not-allowed;
            transform: none;
        }
        
        .poll-skip {
            background: transparent;
            border: none;
            color: rgba(255, 255, 255, 0.6);
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            padding: 0.8rem 1.5rem;
            margin-top: 0.5rem;
        }
        
        .poll-skip:hover {
            color: var(--racing-red);
        }
        
        .poll-skip:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
        
        .content-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.8rem;
            margin-bottom: 2rem;
        }
        
        /* Slide subtitle enhancement */
        .slide-subtitle {
            font-size: 1.3rem;
            font-weight: 500;
            color: rgba(255, 255, 255, 0.9);
            margin-bottom: 2rem;
        }
        
        /* Animation enhancements */
        .animate {
            animation-duration: 0.8s;
            animation-fill-mode: both;
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .active .animate {
            opacity: 1;
            transform: translateY(0);
        }
        
        .delay-1 {
            animation-delay: 0.2s;
            transition-delay: 0.2s;
        }
        
        .delay-2 {
            animation-delay: 0.4s;
            transition-delay: 0.4s;
        }
        
        .delay-3 {
            animation-delay: 0.6s;
            transition-delay: 0.6s;
        }
        
        .delay-4 {
            animation-delay: 0.8s;
            transition-delay: 0.8s;
        }
        
        /* Highlight border for poll */
        .highlight-border {
            position: relative;
        }
        
        .highlight-border::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 2px solid var(--racing-red);
            border-radius: 15px;
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
        
        /* Media Queries */
        @media (max-width: 992px) {
            .content-grid, .balance-columns {
                grid-template-columns: 1fr;
                gap: 1.5rem;
            }
            
            .slide-header h2 {
                font-size: 2.5rem;
            }
        }
        
        @media (max-width: 768px) {
            .slide-header h2 {
                font-size: 2rem;
            }
            
            .slide-subtitle {
                font-size: 1.1rem;
            }
            
            .warning-card h3 {
                font-size: 1.2rem;
            }
            
            .balance-heading {
                font-size: 1.4rem;
            }
            
            .balance-column h4 {
                font-size: 1.2rem;
            }
            
            .poll-question {
                font-size: 1.1rem;
            }
            
            .poll-option-text {
                font-size: 0.95rem;
            }
        }
      `}</style>
    </Layout>
  );
};

export default HumanVsAutomation;
