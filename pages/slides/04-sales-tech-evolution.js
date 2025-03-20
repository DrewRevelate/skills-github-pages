import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';

const SalesTechEvolution = () => {
  const [activeEra, setActiveEra] = useState('analog');
  const [currentEfficiencyWidth, setCurrentEfficiencyWidth] = useState('20%');
  
  // Data for timeline eras
  const eras = [
    {
      id: 'analog',
      title: 'The Analog Era',
      period: '1950s-1970s',
      description: 'The foundation of sales methodology was built on paper systems and personal relationships. Before computers, sales professionals relied entirely on manual processes and face-to-face interactions. The Rolodex, invented in 1956, became an essential tool for contact management.',
      efficiency: '20%',
      efficiencyText: 'Efficiency: Low',
      businessDriver: 'Expanding market reach required an unsustainable increase in headcount.',
      key: 'Sales relied entirely on physical tools: Rolodexes for contact management, filing cabinets for customer records, printed product catalogs, and landline phones. According to a 1975 Harvard Business Review study, sales professionals spent over 60% of their time on administrative tasks.',
      impact: 'Limited by geography and physical constraints, sales organizations grew by adding more people rather than improving per-rep efficiency. Each new territory required a new salesperson with their own set of records, creating data silos and making collaboration difficult.',
      tools: [
        { name: 'Rolodex', icon: '/images/rolodex.svg' },
        { name: 'Files', icon: '/images/file.svg' },
        { name: 'Phone', icon: '/images/phone.svg' }
      ],
      nextEra: 'digital'
    },
    {
      id: 'digital',
      title: 'Digital Databases',
      period: '1980s-1990s',
      description: 'The introduction of personal computers and database software marked the first major shift in sales technology. ACT!, launched in 1987, pioneered digital contact management, while spreadsheet applications fundamentally changed how sales data was organized.',
      efficiency: '40%',
      efficiencyText: 'Efficiency: Moderate',
      businessDriver: 'The need for multiple salespeople to access the same customer information without duplication.',
      key: 'ACT! (1987) revolutionized contact management, while Siebel Systems (founded 1993) and Oracle dominated the enterprise CRM market. Microsoft Excel became the de facto sales tracking tool for many organizations, with client-server architecture becoming the standard.',
      impact: 'A 1997 IDC study found that digital CRM systems increased sales productivity by 15-20%. Information could now be stored, searched, and shared within corporate networks, leading to formalized sales processes and the first data-driven performance tracking.',
      tools: [
        { name: 'ACT!', icon: '/images/Act.svg' },
        { name: 'Excel', icon: '/images/excel.svg' },
        { name: 'Siebel', icon: '/images/oracle.svg' }
      ],
      nextEra: 'cloud'
    },
    {
      id: 'cloud',
      title: 'SaaS & Cloud',
      period: '2000s-2010s',
      description: 'Cloud computing revolutionized sales technology accessibility. Salesforce, founded in 1999 with the "No Software" mantra, pioneered Software-as-a-Service for CRM, dramatically lowering barriers to entry for sophisticated sales tools.',
      efficiency: '65%',
      efficiencyText: 'Efficiency: High',
      businessDriver: 'The need to eliminate infrastructure costs while gaining rapid access to new capabilities.',
      key: 'Salesforce\'s 1999 launch democratized CRM access. HubSpot (2006) pioneered inbound marketing automation. Mobile CRM apps emerged during 2009-2010, while integration platforms like Zapier (2011) connected previously siloed sales tools.',
      impact: 'According to Forrester Research (2010), cloud-based CRM systems delivered 3x better ROI than on-premise solutions. McKinsey\'s 2015 study showed that data-driven sales organizations improved revenue productivity by 5-10% annually. Mobile access enabled "anywhere selling."',
      tools: [
        { name: 'Salesforce', icon: '/images/salesforce.svg' },
        { name: 'HubSpot', icon: '/images/hubspot.svg' },
        { name: 'Cloud', icon: '/images/cloud.svg' }
      ],
      nextEra: 'ai'
    },
    {
      id: 'ai',
      title: 'AI & Automation',
      period: '2020s+',
      description: 'Artificial intelligence has transformed sales from an intuition-driven practice to a data science. The pandemic accelerated digital selling adoption, while AI tools now automate routine tasks and provide real-time guidance and insights.',
      efficiency: '90%',
      efficiencyText: 'Efficiency: Very High',
      businessDriver: 'The need to handle increasing complexity and customer expectations while maintaining human connections at scale.',
      key: 'Conversation intelligence platforms like Gong.io (2015) apply AI to sales calls. Outreach (2014) and SalesLoft (2011) automated outbound sales at scale. By 2023, generative AI tools like ChatGPT are revolutionizing content creation, while Calendly has eliminated scheduling friction.',
      impact: 'Gartner\'s 2022 research shows that sales organizations using AI achieve 50% higher lead conversion rates. LinkedIn\'s State of Sales Report (2023) indicates that high-performing teams are 2.3x more likely to use AI tools extensively. Reps now focus on strategic work while automation handles routine tasks.',
      tools: [
        { name: 'AI', icon: '/images/robot.svg' },
        { name: 'Gong', icon: '/images/gong.svg' },
        { name: 'GPT', icon: '/images/gpt.svg' }
      ],
      nextEra: null,
      hasCommonThread: true,
      commonThread: 'Throughout this evolution, the fundamental driver has been business efficiency—the need to do more with less, move faster, and scale revenue operations without proportionally scaling costs. As McKinsey\'s 2023 "Sales Growth" report notes: "Sales technology creates competitive differentiation through superior customer experience."'
    }
  ];
  
  // Function to activate a specific era
  const activateEra = (eraId) => {
    setActiveEra(eraId);
    
    // Get new efficiency value
    const newEra = eras.find(era => era.id === eraId);
    if (newEra) {
      // Set initial width to current width (for seamless transition)
      const activeEraContent = document.querySelector(`.era-content.active .efficiency-fill`);
      if (activeEraContent) {
        activeEraContent.style.width = currentEfficiencyWidth;
      }
      
      // Update to new width with animation
      setTimeout(() => {
        setCurrentEfficiencyWidth(newEra.efficiency);
      }, 50);
    }
  };
  
  // Handle arrow navigation
  const handleArrowClick = (nextEraId) => {
    if (nextEraId) {
      activateEra(nextEraId);
    }
  };
  
  // Initialize with first era active on page load
  useEffect(() => {
    // Always start with Analog era
    const timer = setTimeout(() => {
      activateEra('analog');
    }, 100);
    
    // Add keyboard navigation specifically for eras (up/down arrows)
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        // Find current active era index
        const currentEraIndex = eras.findIndex(era => era.id === activeEra);
        if (currentEraIndex === -1) return;
        
        // Calculate next index based on key pressed
        let nextIndex;
        if (event.key === 'ArrowUp') {
          nextIndex = (currentEraIndex - 1 + eras.length) % eras.length;
        } else {
          nextIndex = (currentEraIndex + 1) % eras.length;
        }
        
        // Activate the next era
        activateEra(eras[nextIndex].id);
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      clearTimeout(timer);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeEra]);
  
  return (
    <Layout
      title="Evolution of Sales Technology - Full Throttle Revenue"
      currentSlide={4}
      totalSlides={8}
      prevSlide="/slides/03-revenue-acceleration"
      nextSlide="/slides/05-automation-solutions"
    >
      <section className="slide active" id="slide-3">
        <div className="diagonal-divider"></div>
        
        <div className="slide-header" style={{ padding: '3rem 4rem 1.5rem 4rem', marginBottom: 0 }}>
          <h2 className="animate">THE <span>EVOLUTION</span> OF SALES TECH</h2>
          <p className="slide-subtitle animate delay-1">One continuous thread of business innovation driven by the need for efficiency</p>
        </div>
        
        <div style={{ width: '100%', height: 'calc(100% - 11rem)', padding: 0 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: 0, height: '100%', width: '100%', padding: '0 4rem' }}>
            {/* Timeline Column (Left) */}
            <div className="timeline-column">
              <div className="timeline-line"></div>
              <div className="era-buttons">
                {eras.map((era) => (
                  <button 
                    key={era.id}
                    className={`era-button ${activeEra === era.id ? 'active' : ''}`} 
                    onClick={() => activateEra(era.id)}
                    data-era={era.id}
                    data-index={eras.indexOf(era)}
                  >
                    <div className="era-details">
                      <div className="era-name">{era.title}</div>
                      <div className="era-period">{era.period}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Content Column (Right) */}
            <div className="content-column">
              {eras.map((era) => (
                <div 
                  key={era.id} 
                  className={`era-content ${activeEra === era.id ? 'active' : ''}`} 
                  id={`${era.id}-content`}
                  data-index={eras.indexOf(era)}
                >
                  <h3 className="era-heading">{era.title}</h3>
                  <p className="era-subheading">{era.period}</p>
                  <p className="era-intro">{era.description}</p>
                  
                  <div className="efficiency-meter-container">
                    <div className="efficiency-meter">
                      <div className="efficiency-fill" style={{ width: era.id === activeEra ? era.efficiency : '0%' }}>{era.efficiencyText}</div>
                    </div>
                  </div>
                  
                  <div className="era-cards">
                    <div className="era-card">
                      <h4 className="card-title">Key Technologies</h4>
                      <p className="card-content">{era.key}</p>
                      
                      <div className="tech-icons">
                        {era.tools.map((tool, index) => (
                          <div key={`${era.id}-tool-${index}`} className="tech-icon">
                            <img src={tool.icon} alt={tool.name} />
                            <div className="tech-name">{tool.name}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="era-card">
                      <h4 className="card-title">Business Impact</h4>
                      <p className="card-content">{era.impact}</p>
                      
                      <div className="business-driver">
                        Business Driver: <span>{era.businessDriver}</span>
                      </div>
                    </div>
                  </div>
                  
                  {era.nextEra && (
                    <div className="evolution-arrow">
                      <div className="arrow-icon" onClick={() => handleArrowClick(era.nextEra)}>↓</div>
                    </div>
                  )}
                  
                  {!era.nextEra && era.hasCommonThread && (
                    <div className="common-thread">
                      <div className="common-thread-content">
                        {era.commonThread.split('business efficiency').map((part, i, array) => {
                          // For the last part (if any)
                          if (i === array.length - 1) {
                            return part;
                          }
                          // For parts that should have the term "business efficiency" after them
                          return (
                            <React.Fragment key={i}>
                              {part}
                              <span>business efficiency</span>
                            </React.Fragment>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        /* Timeline column styling */
        .timeline-column {
            position: relative;
            border-right: 1px solid rgba(225, 6, 0, 0.2);
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            background: rgba(0,0,0,0.3);
            box-shadow: 5px 0 15px -5px rgba(0,0,0,0.2);
            border-radius: 0 0 0 8px;
            color: white;
        }
        
        .timeline-line {
            position: absolute;
            left: 40px;
            top: 50%;
            width: 6px;
            height: 75%;
            transform: translateY(-50%);
            background: linear-gradient(180deg, var(--racing-red) 0%, var(--accent-yellow) 100%);
            border-radius: 3px;
            box-shadow: 0 0 15px rgba(225, 6, 0, 0.2);
        }
        
        .era-buttons {
            position: relative;
            z-index: 2;
            margin-left: 20px;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }
        
        .era-button {
            display: flex;
            align-items: center;
            padding: 1rem 1rem 1rem 40px;
            cursor: pointer;
            position: relative;
            border-radius: 0 8px 8px 0;
            transition: all 0.3s ease;
            background: transparent;
            border: none;
            width: 100%;
            text-align: left;
            font-family: 'Titillium Web', sans-serif;
        }
        
        .era-button:hover {
            background: rgba(255,255,255,0.8);
            transform: translateX(5px);
        }
        
        .era-button.active {
            background: white;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            transform: translateX(8px);
            border-left: 3px solid var(--racing-red);
        }
        
        .era-button::before {
            content: '';
            position: absolute;
            left: -20px;
            top: 50%;
            transform: translateY(-50%);
            width: 20px;
            height: 20px;
            background: var(--racing-dark);
            border: 3px solid var(--racing-red);
            border-radius: 50%;
            transition: all 0.4s ease;
            z-index: 3;
        }
        
        .era-button.active::before {
            background: var(--racing-red);
            transform: translateY(-50%) scale(1.3);
            box-shadow: 0 0 0 8px rgba(225, 6, 0, 0.15);
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0% {
                box-shadow: 0 0 0 0 rgba(225, 6, 0, 0.4);
            }
            70% {
                box-shadow: 0 0 0 8px rgba(225, 6, 0, 0.0);
            }
            100% {
                box-shadow: 0 0 0 0 rgba(225, 6, 0, 0.0);
            }
        }
        
        .era-name {
            font-weight: 700;
            font-size: 1.1rem;
            color: white;
            transition: color 0.3s ease;
        }
        
        .era-period {
            font-size: 0.9rem;
            color: white;
            margin-top: 0.2rem;
        }
        
        .era-button.active .era-name {
            color: var(--racing-red);
        }

        .era-button.active .era-period {
            color: black;
        }
        
        /* Content area styling */
        .content-column {
            height: 100%;
            overflow-y: auto;
            padding: 2rem 3rem;
            position: relative;
            background: linear-gradient(135deg, #121212, #1e1e1e, #2a2a2a);
            color: white;
            box-shadow: inset 5px 0 15px -5px rgba(0,0,0,0.05);
            border-radius: 0 8px 8px 0;
        }
        
        .era-content {
            display: none;
            opacity: 0;
            transition: opacity 0.5s ease;
            height: 100%;
        }
        
        .era-content.active {
            display: block;
            opacity: 1;
            animation: fadeIn 0.7s forwards;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .era-heading {
            font-size: 2.5rem;
            font-weight: 500;
            margin-bottom: 0.5rem;
            color: white;
            position: relative;
            display: inline-block;
            letter-spacing: -0.5px;
            text-shadow: 0 2px 15px rgba(225, 6, 0, 0.4);
        }
        
        .era-heading::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 0;
            width: 100px;
            height: 4px;
            background: linear-gradient(90deg, var(--racing-red), transparent);
            border-radius: 2px;
            box-shadow: 0 2px 6px rgba(225, 6, 0, 0.2);
        }
        
        .era-subheading {
            color: var(--racing-red);
            font-weight: 600;
            font-size: 1.2rem;
            margin: 1.5rem 0 1rem;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        .era-intro {
            font-size: 1.15rem;
            line-height: 1.7;
            color: rgba(255, 255, 255, 0.9);
            margin-bottom: 2.5rem;
            max-width: 95%;
            position: relative;
            padding-left: 1rem;
            border-left: 3px solid rgba(225, 6, 0, 0.2);
        }
        
        .era-cards {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            margin-bottom: 2rem;
        }
        
        .era-card {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 12px;
            padding: 1.8rem;
            box-shadow: 0 10px 30px rgba(0,0,0,0.15);
            position: relative;
            height: 100%;
            border: 1px solid rgba(255, 255, 255, 0.1);
            display: flex;
            flex-direction: column;
            transition: all 0.3s ease;
            transform: translateY(0);
            color: white;
        }
        
        .era-card:hover {
            box-shadow: 0 15px 35px rgba(0,0,0,0.2);
            transform: translateY(-5px);
            border-color: rgba(225, 6, 0, 0.3);
            background: rgba(255, 255, 255, 0.07);
        }
        
        .era-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 5px;
            background: linear-gradient(90deg, var(--racing-red), var(--accent-yellow));
            border-radius: 12px 12px 0 0;
        }
        
        .card-title {
            font-weight: 500;
            font-size: 1.4rem;
            margin-bottom: 1.2rem;
            color: white;
            position: relative;
            display: inline-block;
            padding-bottom: 0.5rem;
        }
        
        .card-title::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 40px;
            height: 3px;
            background: var(--racing-red);
            border-radius: 1.5px;
        }
        
        .card-content {
            font-size: 1.1rem;
            line-height: 1.7;
            color: rgba(255, 255, 255, 0.9);
        }
        
        .business-driver {
            background: rgba(225, 6, 0, 0.1);
            border-left: 4px solid var(--racing-red);
            padding: 1.5rem;
            margin-top: 1rem;
            border-radius: 0 8px 8px 0;
            font-weight: 600;
            color: white;
            box-shadow: 0 4px 10px rgba(0,0,0,0.2);
            transition: all 0.3s ease;
        }
        
        .business-driver:hover {
            background: rgba(225, 6, 0, 0.15);
            transform: translateX(5px);
        }
        
        .business-driver span {
            color: var(--accent-yellow);
            font-weight: 700;
        }
        
        .tech-icons {
            display: flex;
            flex-wrap: wrap;
            gap: 1.2rem;
            margin-top: auto;
            padding-top: 2rem;
        }
        
        .tech-icon {
            background: rgba(0,0,0,0.2);
            padding: 0.8rem;
            border-radius: 8px;
            text-align: center;
            min-width: 70px;
            transition: all 0.3s ease;
            border: 1px solid rgba(255,255,255,0.1);
        }
        
        .tech-icon:hover {
            background: rgba(225, 6, 0, 0.15);
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            transform: translateY(-3px);
            border-color: rgba(225, 6, 0, 0.3);
        }
        
        .tech-icon img {
            max-width: 100%;
            height: 30px;
            margin-bottom: 0.5rem;
            filter: invert(1);
        }
        
        /* Ensure HubSpot and Gong logos are always white */
        .tech-icon img[alt="HubSpot"],
        .tech-icon img[alt="Analytics"] {
            filter: brightness(0) invert(1) !important;
        }
        
        .tech-name {
            font-size: 0.85rem;
            font-weight: 600;
            color: rgba(255,255,255,0.9);
        }
        
        .efficiency-meter-container {
            background: rgba(0,0,0,0.2);
            border-radius: 16px;
            padding: 1.5rem;
            margin: 2.5rem 0;
            border: 1px solid rgba(255,255,255,0.1);
            position: relative;
        }
        
        .efficiency-meter-container::before {
            content: 'Efficiency Scale';
            position: absolute;
            top: -10px;
            left: 20px;
            background: linear-gradient(90deg, var(--racing-red), var(--accent-yellow));
            color: white;
            padding: 0.3rem 1rem;
            font-size: 0.8rem;
            font-weight: 700;
            border-radius: 15px;
            box-shadow: 0 4px 10px rgba(225, 6, 0, 0.2);
        }
        
        .efficiency-meter {
            margin: 0.5rem 0;
            background: rgba(0,0,0,0.3);
            height: 36px;
            border-radius: 18px;
            position: relative;
            overflow: hidden;
            box-shadow: inset 0 2px 5px rgba(0,0,0,0.3);
        }
        
        .efficiency-fill {
            height: 100%;
            background: linear-gradient(90deg, var(--racing-red), var(--accent-yellow));
            border-radius: 18px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            padding-right: 1.5rem;
            color: white;
            font-weight: 700;
            font-size: 1rem;
            transition: width 1.2s cubic-bezier(0.22, 1, 0.36, 1);
            box-shadow: 0 0 20px rgba(225, 6, 0, 0.3);
        }
        
        /* Evolution arrow styles - Made interactive */
        .evolution-arrow {
            display: flex;
            justify-content: center;
            margin: 2.5rem 0;
            position: relative;
        }
        
        .evolution-arrow::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, rgba(225, 6, 0, 0.2), transparent);
            transform: translateY(-50%);
            z-index: 0;
        }
        
        .arrow-icon {
            width: 50px;
            height: 50px;
            background: var(--racing-red);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.6rem;
            box-shadow: 0 5px 15px rgba(225, 6, 0, 0.3);
            cursor: pointer;
            transition: all 0.4s ease;
            position: relative;
            z-index: 1;
        }
        
        .arrow-icon:hover {
            transform: translateY(8px);
            box-shadow: 0 12px 25px rgba(225, 6, 0, 0.4);
            background: linear-gradient(135deg, var(--racing-red), #c10500);
        }
        
        .arrow-icon::after {
            content: 'Continue Evolution';
            position: absolute;
            bottom: -25px;
            left: 50%;
            transform: translateX(-50%);
            white-space: nowrap;
            font-size: 0.8rem;
            font-weight: 600;
            color: var(--racing-red);
            opacity: 0;
            transition: opacity 0.3s ease, transform 0.3s ease;
        }
        
        .arrow-icon:hover::after {
            opacity: 1;
            transform: translateX(-50%) translateY(3px);
        }
        
        /* Final common thread styling */
        .common-thread {
            background: rgba(0, 0, 0, 0.3);
            border-left: 4px solid var(--accent-yellow);
            padding: 1.8rem;
            margin: 2.5rem 0;
            border-radius: 0 8px 8px 0;
            position: relative;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
        
        .common-thread::before {
            content: 'The Common Thread';
            position: absolute;
            top: -12px;
            left: 20px;
            background: var(--accent-yellow);
            color: var(--racing-dark);
            padding: 0.3rem 1rem;
            font-size: 0.9rem;
            font-weight: 700;
            border-radius: 15px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        
        .common-thread-content {
            font-size: 1.15rem;
            line-height: 1.7;
            color: white;
            font-weight: 600;
        }
        
        .common-thread-content span {
            color: var(--accent-yellow);
            font-weight: 700;
        }
        
        .citation-link {
            margin-top: 1rem;
            font-size: 0.85rem;
            text-align: right;
        }
        
        .citation-link a {
            display: inline-flex;
            align-items: center;
            color: var(--racing-gray);
            text-decoration: none;
            transition: all 0.2s ease;
            padding: 0.3rem 0.6rem;
            border-radius: 4px;
            background: rgba(0,0,0,0.03);
        }
        
        .citation-link a:hover {
            color: var(--racing-red);
            background: rgba(225, 6, 0, 0.05);
        }
        
        /* Mobile timeline layout */
        @media (max-width: 768px) {
            .slide-content {
                display: flex;
                flex-direction: column;
                grid-template-columns: unset;
                padding: 1.5rem;
                height: auto;
                min-height: 100vh;
                overflow-y: auto;
            }
            
            .timeline-column {
                border-right: none;
                border-bottom: 1px solid rgba(225, 6, 0, 0.2);
                border-radius: 8px 8px 0 0;
                height: auto;
                padding: 1rem 0;
                box-shadow: 0 5px 15px -5px rgba(0,0,0,0.2);
            }
            
            .timeline-line {
                display: none; /* Hide vertical timeline line on mobile */
            }
            
            .era-buttons {
                flex-direction: row;
                width: 100%;
                padding: 0 1rem;
                justify-content: space-between;
                margin-left: 0;
            }
            
            .era-button {
                margin: 0;
                padding: 0.8rem 0.5rem;
                font-size: 0.8rem;
                flex: 1;
                margin: 0 0.3rem;
            }
            
            .content-column {
                padding: 1.5rem 0.8rem;
                overflow-y: visible;
            }
            
            .era-cards {
                grid-template-columns: 1fr;
            }
            
            .slide-header {
                padding: 2rem 2rem 1rem !important;
            }
            
            .slide-header h2 {
                font-size: 2rem;
            }
            
            .slide-subtitle {
                font-size: 1.1rem;
            }
            
            .efficiency-meter-container::before {
                font-size: 0.7rem;
                padding: 0.2rem 0.8rem;
            }
            
            .card-title {
                font-size: 1.2rem;
            }
            
            .card-content, .business-driver, .common-thread-content {
                font-size: 1rem;
            }
            
            .era-button {
                padding: 0.7rem;
            }
            
            .era-name {
                font-size: 0.9rem;
            }
            
            .era-period {
                font-size: 0.8rem;
            }
        }
        
        @media (max-width: 992px) {
            .slide-content {
                grid-template-columns: 1fr;
                grid-template-rows: auto 1fr;
            }
            
            .timeline-column {
                border-right: none;
                border-bottom: 1px solid rgba(225, 6, 0, 0.1);
                height: auto;
                padding: 1.5rem 0;
                box-shadow: 0 5px 15px -5px rgba(0,0,0,0.05);
            }
            
            .timeline-line {
                left: 0;
                top: 50%;
                width: 100%;
                height: 6px;
                transform: translateY(-50%);
            }
            
            .era-buttons {
                display: flex;
                flex-direction: row;
                margin-left: 0;
                justify-content: space-around;
                flex-wrap: wrap;
                gap: 1rem;
            }
            
            .era-button {
                padding: 1rem;
                flex-direction: column;
                width: auto;
                align-items: center;
                justify-content: center;
                border-radius: 8px;
                text-align: center;
                background: rgba(255,255,255,0.7);
            }
            
            .era-button.active {
                transform: translateY(-5px);
                border-left: none;
                border-bottom: 3px solid var(--racing-red);
            }
            
            .era-button::before {
                display: none;
            }
            
            .era-cards {
                grid-template-columns: 1fr;
            }
            
            .content-column {
                padding: 1.5rem;
            }
            
            .era-heading {
                font-size: 2.2rem;
            }
            
            .era-intro {
                font-size: 1.1rem;
                max-width: 100%;
            }
        }
      `}</style>
    </Layout>
  );
};

export default SalesTechEvolution;
