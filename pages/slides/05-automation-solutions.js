import React, { useState } from 'react';
import Layout from '../../components/Layout';
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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardHover = {
  rest: { scale: 1, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" },
  hover: { 
    scale: 1.03, 
    boxShadow: "0 8px 25px rgba(225,6,0,0.15)",
    borderColor: "rgba(225,6,0,0.3)"
  }
};

const AutomationSolutions = () => {
  const [activeCard, setActiveCard] = useState(null);
  
  // Define automation solution data
  const automationSolutions = [
    {
      id: 'process',
      title: 'Process Automation',
      icon: '/images/icon-server.svg',
      features: [
        'Workflow & approval automation',
        'Data entry & enrichment',
        'Document generation',
        'Contract process automation'
      ],
      technologies: 'Salesforce Flow, DocuSign, PandaDoc, HubSpot Workflows',
      details: 'Process automation eliminates repetitive manual tasks throughout the sales cycle. From lead assignment rules to automatic follow-ups and document generation, these tools free sales reps to focus on high-value activities while ensuring consistent execution of your sales process.'
    },
    {
      id: 'data',
      title: 'Data Integration',
      icon: '/images/icon-database.svg',
      features: [
        'Cross-platform data synchronization',
        'Real-time data enrichment',
        'Customer 360° views',
        'Unified reporting dashboards'
      ],
      technologies: 'MuleSoft, Zapier, Segment, Clearbit, ZoomInfo',
      details: 'Data integration solutions connect your disparate systems to create a unified view of customer data. By eliminating data silos, these tools ensure accurate reporting, seamless handoffs between teams, and provide critical context for every customer interaction.'
    },
    {
      id: 'ai',
      title: 'AI-Powered Tools',
      icon: '/images/icon-ai.svg',
      features: [
        'Predictive lead scoring',
        'Conversation intelligence',
        'Deal insights & recommendations',
        'Forecast accuracy improvement'
      ],
      technologies: 'Gong.io, Salesforce Einstein, Drift, Clari',
      details: 'AI tools analyze patterns across vast amounts of sales data to surface actionable insights. From identifying which leads are most likely to convert to analyzing successful sales conversations, AI augments human decision-making and helps sales teams prioritize their time more effectively.'
    }
  ];
  
  // Real-world examples data
  const implementationExamples = [
    {
      id: 'saas',
      title: 'SaaS Company Lead-to-Cash Transformation',
      description: 'Reduced sales cycle by 40% and increased deal volume by 25% through:',
      features: [
        'Automated lead routing & scoring',
        'AI-powered opportunity insights',
        'Integrated contract workflow',
        'Unified reporting across sales & finance'
      ],
      roi: '320% over 18 months',
      icon: '🚀'
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing Firm Sales Process Automation',
      description: 'Saved 15 hours per rep weekly and improved forecast accuracy by 30% through:',
      features: [
        'Custom CPQ implementation',
        'Automated approval workflows',
        'Customer portal integration',
        'Mobile sales tools for field team'
      ],
      roi: '280% over 24 months',
      icon: '⚙️'
    }
  ];

  return (
    <Layout
      title="Automation Solutions - Full Throttle Revenue"
      currentSlide={5}
      totalSlides={8}
      prevSlide="/slides/04-sales-tech-evolution"
      nextSlide="/slides/06-human-vs-automation"
    >
      <section className="slide active" id="automation-solutions">
        <div className="slide-content">
          <motion.div
            className="slide-header"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h2>Revenue <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              style={{ color: 'var(--racing-red)' }}
            >Automation</motion.span> Solutions</h2>
            <div className="slide-subtitle">Turbocharging Your Sales Process with Technology</div>
          </motion.div>
          
          <motion.div
            className="automation-grid"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: '2rem',
              marginTop: '2rem'
            }}
          >
            {automationSolutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                className={`automation-card ${activeCard === solution.id ? 'active' : ''}`}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { delay: 0.3 + (index * 0.1), duration: 0.5 } 
                  }
                }}
                initial="rest"
                whileHover="hover"
                variants={cardHover}
                onClick={() => setActiveCard(activeCard === solution.id ? null : solution.id)}
                style={{
                  background: activeCard === solution.id ? 'rgba(225,6,0,0.1)' : 'rgba(255,255,255,0.05)',
                  padding: '2rem',
                  borderRadius: '12px',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                  border: activeCard === solution.id ? '1px solid rgba(225,6,0,0.3)' : '1px solid rgba(255,255,255,0.1)',
                  height: '100%',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {activeCard === solution.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      background: 'var(--racing-red)',
                      color: 'white',
                      padding: '0.5rem 1rem',
                      fontSize: '0.8rem',
                      fontWeight: 'bold',
                      borderBottomLeftRadius: '8px'
                    }}
                  >
                    SELECTED
                  </motion.div>
                )}
                
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: activeCard === solution.id ? '100%' : '60%' }}
                  transition={{ delay: 0.5 + (index * 0.1), duration: 0.8 }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, var(--racing-red), transparent)',
                  }}
                />
                
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginBottom: '1.5rem'
                  }}
                >
                  <motion.div
                    animate={activeCard === solution.id ? 
                      { scale: [1, 1.1, 1], backgroundColor: 'rgba(225, 6, 0, 0.2)' } : 
                      { scale: 1, backgroundColor: 'rgba(225, 6, 0, 0.1)' }
                    }
                    transition={{ duration: 0.5 }}
                    style={{
                      width: '80px',
                      height: '80px',
                      backgroundColor: 'rgba(225, 6, 0, 0.1)',
                      borderRadius: '50%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginBottom: '1rem'
                    }}
                  >
                    <img 
                      src={solution.icon}
                      alt={solution.title}
                      style={{ width: '40px', height: '40px' }}
                    />
                  </motion.div>
                  <h3
                    style={{
                      fontSize: '1.5rem',
                      color: 'white',
                      fontWeight: '600',
                      marginBottom: '1rem',
                      textAlign: 'center'
                    }}
                  >
                    {solution.title}
                  </h3>
                </div>
                
                <ul 
                  className="racing-list" 
                  style={{ 
                    marginBottom: '1.5rem',
                    listStyle: 'none',
                    padding: 0
                  }}
                >
                  {solution.features.map((feature, i) => (
                    <motion.li 
                      key={i}
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0, transition: { delay: 0.5 + (i * 0.1), duration: 0.5 } }
                      }}
                      style={{ 
                        marginBottom: '0.8rem',
                        paddingLeft: '25px',
                        position: 'relative'
                      }}
                    >
                      <motion.span 
                        style={{ 
                          position: 'absolute',
                          left: 0,
                          top: '5px',
                          width: '16px',
                          height: '16px',
                          borderRadius: '50%',
                          background: 'var(--racing-red)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '10px',
                          color: 'white',
                          fontWeight: 'bold'
                        }}
                        animate={
                          activeCard === solution.id ? 
                          { scale: [1, 1.2, 1], transition: { repeat: Infinity, repeatDelay: 2 } } : 
                          { scale: 1 }
                        }
                      >
                        ✓
                      </motion.span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                
                <div
                  className="tech-examples"
                  style={{
                    background: 'rgba(0,0,0,0.2)',
                    padding: '1rem',
                    borderRadius: '8px',
                    fontSize: '0.9rem'
                  }}
                >
                  <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--racing-silver)' }}>
                    Key Technologies:
                  </strong>
                  <p>{solution.technologies}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <AnimatePresence>
            {activeCard && (
              <motion.div
                key={`details-${activeCard}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  padding: '1.8rem',
                  borderRadius: '10px',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  marginTop: '2rem',
                  position: 'relative'
                }}
              >
                {automationSolutions.map(solution => (
                  solution.id === activeCard && (
                    <div key={`detail-content-${solution.id}`} className="solution-details">
                      <h3
                        style={{
                          fontSize: '1.6rem',
                          marginBottom: '1rem',
                          color: 'var(--racing-red)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px'
                        }}
                      >
                        {solution.title} Details
                      </h3>
                      <p style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                        {solution.details}
                      </p>
                      
                      <div
                        style={{
                          padding: '1rem',
                          background: 'rgba(0,0,0,0.15)',
                          borderRadius: '8px',
                          marginTop: '1rem',
                          fontSize: '0.95rem',
                          lineHeight: 1.5,
                          fontStyle: 'italic'
                        }}
                      >
                        <strong style={{ color: 'var(--racing-red)' }}>Pro Tip:</strong> When implementing {solution.title.toLowerCase()}, start with a proof of concept in one department before rolling out company-wide to ensure adoption and measure initial ROI.
                      </div>
                    </div>
                  )
                ))}
              </motion.div>
            )}
          </AnimatePresence>
          
          {!activeCard && (
            <motion.div
              className="implementations-section"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              style={{
                marginTop: '2.5rem'
              }}
            >
              <h3
                className="secondary-heading"
                style={{
                  marginBottom: '1.5rem'
                }}
              >
                Real-World Implementation Examples
              </h3>
              
              <div
                className="implementation-cards"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '2rem'
                }}
              >
                {implementationExamples.map((example, index) => (
                  <motion.div
                    key={example.id}
                    className="implementation-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + (index * 0.2), duration: 0.5 }}
                    whileHover={{ 
                      scale: 1.02, 
                      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                      borderColor: 'rgba(225,6,0,0.2)'
                    }}
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      padding: '1.7rem',
                      borderRadius: '12px',
                      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      height: '100%',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: '100%' }}
                      transition={{ delay: 1.2 + (index * 0.2), duration: 0.8 }}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '6px',
                        background: 'var(--racing-red)'
                      }}
                    ></motion.div>
                    
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '1rem',
                        marginBottom: '1rem',
                      }}
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.3 + (index * 0.2), type: 'spring', stiffness: 200 }}
                        style={{
                          fontSize: '2.5rem',
                          lineHeight: 1,
                          marginTop: '-0.5rem'
                        }}
                      >
                        {example.icon}
                      </motion.div>
                      <h4
                        style={{
                          fontSize: '1.3rem',
                          color: 'white',
                          marginBottom: '0.5rem'
                        }}
                      >
                        {example.title}
                      </h4>
                    </div>
                    
                    <p style={{ marginBottom: '1rem' }}>
                      {example.description}
                    </p>
                    
                    <ul
                      style={{
                        paddingLeft: '1.5rem',
                        marginBottom: '1rem',
                        listStyle: 'none'
                      }}
                    >
                      {example.features.map((feature, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.4 + (index * 0.2) + (i * 0.1), duration: 0.5 }}
                          style={{ 
                            marginBottom: '0.6rem',
                            position: 'relative',
                            paddingLeft: '22px',
                          }}
                        >
                          <motion.span 
                            style={{ 
                              position: 'absolute',
                              left: 0,
                              top: '5px',
                              color: 'var(--racing-red)',
                              fontWeight: 'bold'
                            }}
                          >
                            →
                          </motion.span>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.6 + (index * 0.2), duration: 0.5 }}
                      style={{
                        marginTop: 'auto',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        color: 'var(--racing-red)',
                        borderTop: '1px solid rgba(255,255,255,0.1)',
                        paddingTop: '1rem'
                      }}
                    >
                      <span style={{ color: 'white' }}>ROI:</span> {example.roi}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
          
          <motion.div
            className="slide-nav-hint"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 2, duration: 0.6 }}
            style={{
              position: 'absolute',
              bottom: '15px',
              right: '15px',
              fontSize: '0.9rem',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            {activeCard ? 'Click cards to toggle details' : 'Click any card for more details'}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AutomationSolutions;
