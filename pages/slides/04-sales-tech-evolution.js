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

const SalesTechEvolution = () => {
  const [activeEra, setActiveEra] = useState(null);
  
  const eras = [
    {
      id: 'era1',
      title: '1950s-1980s: Analog Era',
      description: 'Rolodexes, paper records, and face-to-face selling dominated. Limited tracking and mostly manual processes.',
      tools: [
        { name: 'Rolodex', icon: '/images/rolodex.svg' },
        { name: 'Phone', icon: '/images/phone.svg' }
      ]
    },
    {
      id: 'era2',
      title: '1980s-2000: Digital Dawn',
      description: 'Spreadsheets, ACT!, and early contact management tools. Digital but still fragmented and desktop-bound.',
      tools: [
        { name: 'Spreadsheets', icon: '/images/excel.svg' },
        { name: 'ACT! CRM', icon: '/images/act.svg' }
      ]
    },
    {
      id: 'era3',
      title: '2000-2015: CRM Revolution',
      description: 'Salesforce.com launches cloud CRM. Data centralization, sales pipelines, and tracking become standard.',
      tools: [
        { name: 'Salesforce', icon: '/images/salesforce.svg' },
        { name: 'Oracle', icon: '/images/oracle.svg' }
      ]
    },
    {
      id: 'era4',
      title: '2015-2020: Sales Tech Explosion',
      description: 'Specialized tools for every part of the sales process. Software proliferation leads to "app fatigue".',
      tools: [
        { name: 'HubSpot', icon: '/images/hubspot.svg' },
        { name: 'Gong', icon: '/images/gong.svg' }
      ]
    },
    {
      id: 'era5',
      title: '2020-Present: AI & RevOps Era',
      description: 'AI-driven insights, unified platforms, and cross-functional RevOps teams bring alignment and efficiency.',
      tools: [
        { name: 'AI', icon: '/images/gpt.svg' },
        { name: 'Cloud Integration', icon: '/images/cloud.svg' }
      ]
    }
  ];

  return (
    <Layout
      title="Evolution of Sales Technology - Full Throttle Revenue"
      currentSlide={4}
      totalSlides={8}
      prevSlide="/slides/03-revenue-acceleration"
      nextSlide="/slides/05-automation-solutions"
    >
      <section className="slide active" id="sales-tech-evolution">
        <div className="slide-content">
          <motion.div
            className="slide-header"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h2>The <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              style={{ color: 'var(--racing-red)' }}
            >Evolution</motion.span> of Sales Technology</h2>
            <div className="slide-subtitle">From Rolodex to AI-Powered Revenue Engines</div>
          </motion.div>
          
          <motion.div
            className="timeline-container"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            style={{
              margin: '2.5rem 0',
              position: 'relative'
            }}
          >
            <div
              className="timeline-track"
              style={{
                position: 'relative',
                paddingTop: '2rem',
                paddingBottom: '2rem'
              }}
            >
              <motion.div
                className="timeline-line"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: 0,
                  right: 0,
                  height: '6px',
                  background: 'linear-gradient(90deg, var(--racing-red), var(--accent-yellow))',
                  transform: 'translateY(-50%)',
                  borderRadius: '3px',
                  zIndex: 1
                }}
              ></motion.div>
              
              <motion.div
                className="timeline-eras"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  position: 'relative',
                  zIndex: 2
                }}
              >
                {eras.map((era, index) => (
                  <motion.div
                    key={era.id}
                    className={`timeline-era ${activeEra === era.id ? 'active' : ''}`}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { 
                        opacity: 1, 
                        y: 0, 
                        transition: { delay: 0.3 + (index * 0.1), duration: 0.5 } 
                      }
                    }}
                    style={{
                      flex: '1',
                      textAlign: 'center',
                      padding: '0 0.8rem',
                      position: 'relative'
                    }}
                    onClick={() => setActiveEra(activeEra === era.id ? null : era.id)}
                  >
                    <motion.div
                      className="era-marker"
                      whileHover={{ scale: 1.2, boxShadow: '0 0 0 8px rgba(225, 6, 0, 0.2)' }}
                      animate={activeEra === era.id ? 
                        { scale: 1.2, boxShadow: '0 0 0 8px rgba(225, 6, 0, 0.2)' } : 
                        { scale: 1, boxShadow: '0 0 0 5px rgba(225, 6, 0, 0.3)' }
                      }
                      transition={{ duration: 0.3 }}
                      style={{
                        width: '36px',
                        height: '36px',
                        background: 'var(--racing-red)',
                        borderRadius: '50%',
                        margin: '0 auto 1.5rem',
                        boxShadow: '0 0 0 5px rgba(225, 6, 0, 0.3)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '1rem'
                      }}
                    >
                      {index + 1}
                    </motion.div>
                    
                    <motion.div
                      className="era-title"
                      style={{
                        fontSize: '0.9rem',
                        fontWeight: 'bold',
                        marginBottom: '0.5rem',
                        color: activeEra === era.id ? 'var(--racing-red)' : 'white',
                        transition: 'color 0.3s ease'
                      }}
                    >
                      {era.title.split(':')[0]}
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            <AnimatePresence mode="wait">
              {activeEra && (
                <motion.div
                  key={`detail-${activeEra}`}
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
                  <motion.div
                    style={{
                      position: 'absolute',
                      top: '-15px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 0,
                      height: 0,
                      borderLeft: '15px solid transparent',
                      borderRight: '15px solid transparent',
                      borderBottom: '15px solid rgba(255,255,255,0.05)'
                    }}
                  />
                  
                  {eras.map(era => era.id === activeEra && (
                    <div key={`content-${era.id}`} className="era-details">
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
                        {era.title}
                      </h3>
                      
                      <div
                        style={{
                          display: 'flex',
                          gap: '2rem',
                          alignItems: 'center'
                        }}
                      >
                        <div style={{ flex: 2 }}>
                          <p style={{ fontSize: '1.1rem', lineHeight: 1.5 }}>
                            {era.description}
                          </p>
                          
                          <div
                            style={{
                              marginTop: '1.5rem',
                              background: 'rgba(0,0,0,0.2)',
                              padding: '1.2rem',
                              borderRadius: '8px',
                              border: '1px solid rgba(255,255,255,0.05)'
                            }}
                          >
                            <h4 style={{ marginBottom: '0.8rem', fontSize: '1.1rem' }}>Key Technologies:</h4>
                            <div
                              style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '1.5rem'
                              }}
                            >
                              {era.tools.map((tool, i) => (
                                <motion.div
                                  key={`tool-${i}`}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 0.3 + (i * 0.1), duration: 0.4 }}
                                  style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                  }}
                                >
                                  <div
                                    style={{
                                      width: '60px',
                                      height: '60px',
                                      background: 'rgba(255,255,255,0.05)',
                                      borderRadius: '50%',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      padding: '12px'
                                    }}
                                  >
                                    <img
                                      src={tool.icon}
                                      alt={tool.name}
                                      style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain'
                                      }}
                                    />
                                  </div>
                                  <span>{tool.name}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        <motion.div
                          style={{
                            flex: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                          }}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4, duration: 0.6 }}
                        >
                          {activeEra === 'era1' && (
                            <div style={{ textAlign: 'center' }}>
                              <div style={{ 
                                fontSize: '5rem', 
                                color: 'var(--racing-red)',
                                opacity: 0.7,
                                marginBottom: '1rem'
                              }}>
                                📝
                              </div>
                              <div style={{ fontSize: '1.1rem', fontStyle: 'italic' }}>
                                "The era of pen, paper, and manual processes"
                              </div>
                            </div>
                          )}
                          
                          {activeEra === 'era2' && (
                            <div style={{ textAlign: 'center' }}>
                              <div style={{ 
                                fontSize: '5rem', 
                                color: 'var(--racing-red)',
                                opacity: 0.7,
                                marginBottom: '1rem'
                              }}>
                                💾
                              </div>
                              <div style={{ fontSize: '1.1rem', fontStyle: 'italic' }}>
                                "The first digital tools emerge but remain desktop-bound"
                              </div>
                            </div>
                          )}
                          
                          {activeEra === 'era3' && (
                            <div style={{ textAlign: 'center' }}>
                              <div style={{ 
                                fontSize: '5rem', 
                                color: 'var(--racing-red)',
                                opacity: 0.7,
                                marginBottom: '1rem'
                              }}>
                                ☁️
                              </div>
                              <div style={{ fontSize: '1.1rem', fontStyle: 'italic' }}>
                                "Cloud CRM transforms data accessibility and collaboration"
                              </div>
                            </div>
                          )}
                          
                          {activeEra === 'era4' && (
                            <div style={{ textAlign: 'center' }}>
                              <div style={{ 
                                fontSize: '5rem', 
                                color: 'var(--racing-red)',
                                opacity: 0.7,
                                marginBottom: '1rem'
                              }}>
                                🧩
                              </div>
                              <div style={{ fontSize: '1.1rem', fontStyle: 'italic' }}>
                                "Specialized tools create powerful but fragmented stacks"
                              </div>
                            </div>
                          )}
                          
                          {activeEra === 'era5' && (
                            <div style={{ textAlign: 'center' }}>
                              <div style={{ 
                                fontSize: '5rem', 
                                color: 'var(--racing-red)',
                                opacity: 0.7,
                                marginBottom: '1rem'
                              }}>
                                🤖
                              </div>
                              <div style={{ fontSize: '1.1rem', fontStyle: 'italic' }}>
                                "AI and automation drive the next generation of sales"
                              </div>
                            </div>
                          )}
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
            
            {!activeEra && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                style={{
                  marginTop: '1.5rem',
                  textAlign: 'center',
                  color: 'var(--racing-red)',
                  fontSize: '1.1rem',
                  fontStyle: 'italic'
                }}
              >
                Click on any era marker above to explore details
              </motion.div>
            )}
          </motion.div>
          
          <motion.div
            className="current-state"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            style={{
              marginTop: '2.5rem'
            }}
          >
            <h3 className="secondary-heading">Current State of Sales Technology</h3>
            
            <div
              className="challenges-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '1.5rem',
                marginTop: '1.5rem'
              }}
            >
              <motion.div
                className="challenge-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: '0 8px 25px rgba(0,0,0,0.2)', 
                  background: 'rgba(255,255,255,0.08)' 
                }}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  padding: '1.5rem',
                  borderRadius: '10px',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '40%' }}
                  transition={{ delay: 1.8, duration: 0.8 }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '3px',
                    background: 'linear-gradient(90deg, var(--racing-red), transparent)',
                  }}
                />
                <h4
                  style={{
                    fontSize: '1.2rem',
                    marginBottom: '0.8rem',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <span style={{ color: 'var(--racing-red)' }}>⚠️</span>
                  Too Many Tools
                </h4>
                <p>Average B2B sales team uses 10+ tools daily. Sales reps spending 65% of time on non-selling activities.</p>
              </motion.div>
              
              <motion.div
                className="challenge-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: '0 8px 25px rgba(0,0,0,0.2)', 
                  background: 'rgba(255,255,255,0.08)' 
                }}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  padding: '1.5rem',
                  borderRadius: '10px',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '40%' }}
                  transition={{ delay: 1.9, duration: 0.8 }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '3px',
                    background: 'linear-gradient(90deg, var(--racing-red), transparent)',
                  }}
                />
                <h4
                  style={{
                    fontSize: '1.2rem',
                    marginBottom: '0.8rem',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <span style={{ color: 'var(--racing-red)' }}>⚠️</span>
                  Data Silos
                </h4>
                <p>Disconnected systems creating multiple truths. 82% of teams can't access data across departments easily.</p>
              </motion.div>
              
              <motion.div
                className="challenge-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: '0 8px 25px rgba(0,0,0,0.2)', 
                  background: 'rgba(255,255,255,0.08)' 
                }}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  padding: '1.5rem',
                  borderRadius: '10px',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '40%' }}
                  transition={{ delay: 2.0, duration: 0.8 }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '3px',
                    background: 'linear-gradient(90deg, var(--racing-red), transparent)',
                  }}
                />
                <h4
                  style={{
                    fontSize: '1.2rem',
                    marginBottom: '0.8rem',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <span style={{ color: 'var(--racing-red)' }}>✨</span>
                  AI Opportunity
                </h4>
                <p>AI can now automate 40% of sales tasks. Companies adopting AI seeing 50%+ boost in lead conversion rates.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SalesTechEvolution;
