import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const SalesTechTimeline = () => {
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
        { name: 'ACT!', icon: '/images/act.svg' },
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

  // Find current era data
  const currentEra = eras.find(era => era.id === activeEra);

  // Function to activate a specific era
  const activateEra = (eraId) => {
    setActiveEra(eraId);
    
    // Get new efficiency value
    const newEra = eras.find(era => era.id === eraId);
    if (newEra) {
      setCurrentEfficiencyWidth(newEra.efficiency);
    }
  };

  // Handle arrow navigation
  const handleArrowClick = (nextEraId) => {
    if (nextEraId) {
      activateEra(nextEraId);
    }
  };

  // Add mobile media query styling
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  
  const timelineContainerStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '240px 1fr',
    gap: isMobile ? '1.5rem' : '2rem',
    height: '100%',
    width: '100%',
    padding: '2rem 0'
  };
  
  return (
    <div style={timelineContainerStyle}>
      {/* Timeline Column (Left) */}
      <div className="timeline-column" style={{
        position: 'relative',
        borderRight: '1px solid rgba(225, 6, 0, 0.2)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: 'rgba(0,0,0,0.3)',
        boxShadow: '5px 0 15px -5px rgba(0,0,0,0.2)',
        borderRadius: '0 0 0 8px',
        color: 'white'
      }}>
        <motion.div 
          className="timeline-line"
          initial={{ height: 0 }}
          animate={{ height: '75%' }}
          transition={{ duration: 1.2, delay: 0.5 }}
          style={{
            position: 'absolute',
            left: '40px',
            top: '50%',
            width: '6px',
            transform: 'translateY(-50%)',
            background: 'linear-gradient(180deg, var(--racing-red) 0%, var(--accent-yellow) 100%)',
            borderRadius: '3px',
            boxShadow: '0 0 15px rgba(225, 6, 0, 0.2)',
            zIndex: 1
          }}
        />
        
        <div className="era-buttons" style={{
          position: 'relative',
          zIndex: 2,
          marginLeft: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem'
        }}>
          {eras.map((era, index) => (
            <motion.button
              key={era.id}
              className={`era-button ${activeEra === era.id ? 'active' : ''}`}
              onClick={() => activateEra(era.id)}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '1rem 1rem 1rem 40px',
                cursor: 'pointer',
                position: 'relative',
                borderRadius: '0 8px 8px 0',
                transition: 'all 0.3s ease',
                background: activeEra === era.id ? 'white' : 'transparent',
                border: 'none',
                width: '100%',
                textAlign: 'left',
                fontFamily: 'Titillium Web, sans-serif',
                boxShadow: activeEra === era.id ? '0 5px 15px rgba(0,0,0,0.1)' : 'none',
                transform: activeEra === era.id ? 'translateX(8px)' : 'none',
                borderLeft: activeEra === era.id ? '3px solid var(--racing-red)' : 'none'
              }}
            >
              <motion.span 
                className="era-dot"
                animate={activeEra === era.id ? 
                  { scale: 1.3, boxShadow: '0 0 0 8px rgba(225, 6, 0, 0.15)' } : 
                  { scale: 1, boxShadow: '0 0 0 5px rgba(225, 6, 0, 0.3)' }
                }
                style={{
                  position: 'absolute',
                  left: '-20px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '20px',
                  height: '20px',
                  background: activeEra === era.id ? 'var(--racing-red)' : 'var(--racing-dark)',
                  border: '3px solid var(--racing-red)',
                  borderRadius: '50%',
                  transition: 'all 0.4s ease',
                  zIndex: 3
                }}
              />
              
              <div className="era-details">
                <div className="era-name" style={{
                  fontWeight: '700',
                  fontSize: '1.1rem',
                  color: activeEra === era.id ? 'var(--racing-red)' : 'white',
                  transition: 'color 0.3s ease'
                }}>
                  {era.title}
                </div>
                <div className="era-period" style={{
                  fontSize: '0.9rem',
                  color: activeEra === era.id ? 'black' : 'white',
                  marginTop: '0.2rem'
                }}>
                  {era.period}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
      
      {/* Content Column (Right) */}
      <div className="content-column" style={{
        height: '100%',
        overflowY: 'auto',
        padding: '2rem 3rem',
        position: 'relative',
        background: 'linear-gradient(135deg, #121212, #1e1e1e, #2a2a2a)',
        color: 'white',
        boxShadow: 'inset 5px 0 15px -5px rgba(0,0,0,0.05)',
        borderRadius: '0 8px 8px 0'
      }}>
        <AnimatePresence mode="wait">
          {currentEra && (
            <motion.div
              key={`content-${currentEra.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="era-content"
            >
              <motion.h3 
                className="era-heading"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  fontSize: '2.5rem',
                  fontWeight: '500',
                  marginBottom: '0.5rem',
                  color: 'white',
                  position: 'relative',
                  display: 'inline-block',
                  letterSpacing: '-0.5px',
                  textShadow: '0 2px 15px rgba(225, 6, 0, 0.4)'
                }}
              >
                {currentEra.title}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100px' }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  style={{
                    position: 'absolute',
                    bottom: '-8px',
                    left: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, var(--racing-red), transparent)',
                    borderRadius: '2px',
                    boxShadow: '0 2px 6px rgba(225, 6, 0, 0.2)'
                  }}
                />
              </motion.h3>
              
              <motion.p 
                className="era-subheading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                style={{
                  color: 'var(--racing-red)',
                  fontWeight: '600',
                  fontSize: '1.2rem',
                  margin: '1.5rem 0 1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
              >
                {currentEra.period}
              </motion.p>
              
              <motion.p 
                className="era-intro"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                style={{
                  fontSize: '1.15rem',
                  lineHeight: 1.7,
                  color: 'rgba(255, 255, 255, 0.9)',
                  marginBottom: '2.5rem',
                  maxWidth: '95%',
                  position: 'relative',
                  paddingLeft: '1rem',
                  borderLeft: '3px solid rgba(225, 6, 0, 0.2)'
                }}
              >
                {currentEra.description}
              </motion.p>
              
              <div className="efficiency-meter-container" style={{
                background: 'rgba(0,0,0,0.2)',
                borderRadius: '16px',
                padding: '1.5rem',
                margin: '2.5rem 0',
                border: '1px solid rgba(255,255,255,0.1)',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  left: '20px',
                  background: 'linear-gradient(90deg, var(--racing-red), var(--accent-yellow))',
                  color: 'white',
                  padding: '0.3rem 1rem',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  borderRadius: '15px',
                  boxShadow: '0 4px 10px rgba(225, 6, 0, 0.2)'
                }}>
                  Efficiency Scale
                </div>
                
                <div className="efficiency-meter" style={{
                  margin: '0.5rem 0',
                  background: 'rgba(0,0,0,0.3)',
                  height: '36px',
                  borderRadius: '18px',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: 'inset 0 2px 5px rgba(0,0,0,0.3)'
                }}>
                  <motion.div 
                    className="efficiency-fill" 
                    initial={{ width: currentEfficiencyWidth }}
                    animate={{ width: currentEra.efficiency }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{
                      height: '100%',
                      background: 'linear-gradient(90deg, var(--racing-red), var(--accent-yellow))',
                      borderRadius: '18px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      paddingRight: '1.5rem',
                      color: 'white',
                      fontWeight: '700',
                      fontSize: '1rem',
                      boxShadow: '0 0 20px rgba(225, 6, 0, 0.3)'
                    }}
                  >
                    {currentEra.efficiencyText}
                  </motion.div>
                </div>
              </div>
              
              <div className="era-cards" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '2rem',
                marginBottom: '2rem'
              }}>
                <motion.div 
                  className="era-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '12px',
                    padding: '1.8rem',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                    position: 'relative',
                    height: '100%',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease',
                    transform: 'translateY(0)',
                    color: 'white'
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      height: '5px',
                      background: 'linear-gradient(90deg, var(--racing-red), var(--accent-yellow))',
                      borderRadius: '12px 12px 0 0'
                    }}
                  />
                  
                  <h4 className="card-title" style={{
                    fontWeight: '500',
                    fontSize: '1.4rem',
                    marginBottom: '1.2rem',
                    color: 'white',
                    position: 'relative',
                    display: 'inline-block',
                    paddingBottom: '0.5rem'
                  }}>
                    Key Technologies
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '40px',
                      height: '3px',
                      background: 'var(--racing-red)',
                      borderRadius: '1.5px'
                    }}></div>
                  </h4>
                  
                  <p className="card-content" style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.7',
                    color: 'rgba(255, 255, 255, 0.9)'
                  }}>
                    {currentEra.key}
                  </p>
                  
                  <div className="tech-icons" style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '1.2rem',
                    marginTop: 'auto',
                    paddingTop: '2rem'
                  }}>
                    {currentEra.tools.map((tool, index) => (
                      <motion.div 
                        key={`${currentEra.id}-tool-${index}`}
                        className="tech-icon"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + (index * 0.1), duration: 0.5 }}
                        whileHover={{ 
                          y: -3, 
                          background: 'rgba(225, 6, 0, 0.15)',
                          boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
                          borderColor: 'rgba(225, 6, 0, 0.3)'
                        }}
                        style={{
                          background: 'rgba(0,0,0,0.2)',
                          padding: '0.8rem',
                          borderRadius: '8px',
                          textAlign: 'center',
                          minWidth: '70px',
                          transition: 'all 0.3s ease',
                          border: '1px solid rgba(255,255,255,0.1)'
                        }}
                      >
                        <img 
                          src={tool.icon} 
                          alt={tool.name}
                          style={{
                            maxWidth: '100%',
                            height: '30px',
                            marginBottom: '0.5rem',
                            filter: 'invert(1)'
                          }}
                        />
                        <div className="tech-name" style={{
                          fontSize: '0.85rem',
                          fontWeight: '600',
                          color: 'rgba(255,255,255,0.9)'
                        }}>
                          {tool.name}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div 
                  className="era-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '12px',
                    padding: '1.8rem',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                    position: 'relative',
                    height: '100%',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease',
                    transform: 'translateY(0)',
                    color: 'white'
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      height: '5px',
                      background: 'linear-gradient(90deg, var(--racing-red), var(--accent-yellow))',
                      borderRadius: '12px 12px 0 0'
                    }}
                  />
                  
                  <h4 className="card-title" style={{
                    fontWeight: '500',
                    fontSize: '1.4rem',
                    marginBottom: '1.2rem',
                    color: 'white',
                    position: 'relative',
                    display: 'inline-block',
                    paddingBottom: '0.5rem'
                  }}>
                    Business Impact
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '40px',
                      height: '3px',
                      background: 'var(--racing-red)',
                      borderRadius: '1.5px'
                    }}></div>
                  </h4>
                  
                  <p className="card-content" style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.7',
                    color: 'rgba(255, 255, 255, 0.9)'
                  }}>
                    {currentEra.impact}
                  </p>
                  
                  <motion.div 
                    className="business-driver"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    whileHover={{ x: 5, background: 'rgba(225, 6, 0, 0.15)' }}
                    style={{
                      background: 'rgba(225, 6, 0, 0.1)',
                      borderLeft: '4px solid var(--racing-red)',
                      padding: '1.5rem',
                      marginTop: '1rem',
                      borderRadius: '0 8px 8px 0',
                      fontWeight: '600',
                      color: 'white',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Business Driver: <span style={{ color: 'var(--accent-yellow)', fontWeight: '700' }}>{currentEra.businessDriver}</span>
                  </motion.div>
                </motion.div>
              </div>
              
              {!currentEra.nextEra && currentEra.hasCommonThread && (
                <motion.div 
                  className="common-thread"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  style={{
                    background: 'rgba(0, 0, 0, 0.3)',
                    borderLeft: '4px solid var(--accent-yellow)',
                    padding: '1.8rem',
                    margin: '2.5rem 0',
                    borderRadius: '0 8px 8px 0',
                    position: 'relative',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '20px',
                    background: 'var(--accent-yellow)',
                    color: 'var(--racing-dark)',
                    padding: '0.3rem 1rem',
                    fontSize: '0.9rem',
                    fontWeight: '700',
                    borderRadius: '15px',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                  }}>
                    The Common Thread
                  </div>
                  
                  <div className="common-thread-content" style={{
                    fontSize: '1.15rem',
                    lineHeight: 1.7,
                    color: 'white',
                    fontWeight: '600'
                  }}>
                    {currentEra.commonThread.split('business efficiency').map((part, i, array) => {
                      // For the last part (if any)
                      if (i === array.length - 1) {
                        return part;
                      }
                      // For parts that should have the term "business efficiency" after them
                      return (
                        <React.Fragment key={i}>
                          {part}
                          <span style={{ color: 'var(--accent-yellow)', fontWeight: '700' }}>business efficiency</span>
                        </React.Fragment>
                      );
                    })}
                  </div>
                </motion.div>
              )}
              
              {currentEra.nextEra && (
                <div className="evolution-arrow" style={{
                  display: 'flex',
                  justifyContent: 'center',
                  margin: '2.5rem 0',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, rgba(225, 6, 0, 0.2), transparent)',
                    transform: 'translateY(-50%)',
                    zIndex: 0
                  }}></div>
                  
                  <motion.div 
                    className="arrow-icon"
                    whileHover={{ y: 8, boxShadow: '0 12px 25px rgba(225, 6, 0, 0.4)', background: 'linear-gradient(135deg, var(--racing-red), #c10500)' }}
                    onClick={() => handleArrowClick(currentEra.nextEra)}
                    style={{
                      width: '50px',
                      height: '50px',
                      background: 'var(--racing-red)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '1.6rem',
                      boxShadow: '0 5px 15px rgba(225, 6, 0, 0.3)',
                      cursor: 'pointer',
                      transition: 'all 0.4s ease',
                      position: 'relative',
                      zIndex: 1
                    }}
                  >
                    ↓
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1, y: 3 }}
                      style={{
                        position: 'absolute',
                        bottom: '-25px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        whiteSpace: 'nowrap',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        color: 'var(--racing-red)',
                        transition: 'opacity 0.3s ease, transform 0.3s ease'
                      }}
                    >
                      Continue Evolution
                    </motion.span>
                  </motion.div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SalesTechTimeline;