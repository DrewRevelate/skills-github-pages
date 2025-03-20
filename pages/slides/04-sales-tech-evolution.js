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
      title: '1950s-1980s',
      subtitle: 'Analog Era',
      description: 'Rolodexes, paper records, and face-to-face selling dominated. Limited tracking and mostly manual processes.',
      tools: [
        { name: 'Rolodex', icon: '/images/rolodex.svg' },
        { name: 'Phone', icon: '/images/phone.svg' }
      ],
      icon: '📝',
      quote: "The era of pen, paper, and manual processes"
    },
    {
      id: 'era2',
      title: '1980s-2000',
      subtitle: 'Digital Dawn',
      description: 'Spreadsheets, ACT!, and early contact management tools. Digital but still fragmented and desktop-bound.',
      tools: [
        { name: 'Spreadsheets', icon: '/images/excel.svg' },
        { name: 'ACT! CRM', icon: '/images/act.svg' }
      ],
      icon: '💾',
      quote: "The first digital tools emerge but remain desktop-bound"
    },
    {
      id: 'era3',
      title: '2000-2015',
      subtitle: 'CRM Revolution',
      description: 'Salesforce.com launches cloud CRM. Data centralization, sales pipelines, and tracking become standard.',
      tools: [
        { name: 'Salesforce', icon: '/images/salesforce.svg' },
        { name: 'Oracle', icon: '/images/oracle.svg' }
      ],
      icon: '☁️',
      quote: "Cloud CRM transforms data accessibility and collaboration"
    },
    {
      id: 'era4',
      title: '2015-2020',
      subtitle: 'Sales Tech Explosion',
      description: 'Specialized tools for every part of the sales process. Software proliferation leads to "app fatigue".',
      tools: [
        { name: 'HubSpot', icon: '/images/hubspot.svg' },
        { name: 'Gong', icon: '/images/gong.svg' }
      ],
      icon: '🧩',
      quote: "Specialized tools create powerful but fragmented stacks"
    },
    {
      id: 'era5',
      title: '2020-Present',
      subtitle: 'AI & RevOps Era',
      description: 'AI-driven insights, unified platforms, and cross-functional RevOps teams bring alignment and efficiency.',
      tools: [
        { name: 'AI', icon: '/images/gpt.svg' },
        { name: 'Cloud Integration', icon: '/images/cloud.svg' }
      ],
      icon: '🤖',
      quote: "AI and automation drive the next generation of sales"
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              margin: '2rem 0 3rem',
              position: 'relative',
              padding: '0 20px'
            }}
          >
            {/* Modern vertical timeline implementation */}
            <div 
              style={{
                maxWidth: '1200px',
                margin: '0 auto',
                position: 'relative'
              }}
            >
              {/* Central timeline line */}
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: '100%' }}
                transition={{ duration: 1.2, delay: 0.5 }}
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: 0,
                  bottom: 0,
                  width: '4px',
                  background: 'linear-gradient(to bottom, var(--racing-red), var(--accent-yellow))',
                  transform: 'translateX(-50%)',
                  borderRadius: '4px',
                  zIndex: 1
                }}
              />
              
              {/* Timeline entries */}
              {eras.map((era, index) => (
                <motion.div
                  key={era.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + (index * 0.2) }}
                  style={{
                    display: 'flex',
                    justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                    position: 'relative',
                    zIndex: 2,
                    margin: '3rem 0',
                    padding: '0 2rem'
                  }}
                >
                  {/* Timeline entry content */}
                  <motion.div
                    className={`timeline-entry ${activeEra === era.id ? 'active' : ''}`}
                    whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
                    onClick={() => setActiveEra(activeEra === era.id ? null : era.id)}
                    style={{
                      background: activeEra === era.id ? 'rgba(225,6,0,0.1)' : 'rgba(255,255,255,0.05)',
                      borderRadius: '12px',
                      padding: '1.5rem',
                      width: '46%',
                      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                      border: activeEra === era.id ? '1px solid rgba(225,6,0,0.3)' : '1px solid rgba(255,255,255,0.1)',
                      position: 'relative',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {/* Era marker dot connecting to timeline */}
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      animate={activeEra === era.id ? 
                        { scale: 1.2, boxShadow: '0 0 0 8px rgba(225, 6, 0, 0.2)' } : 
                        { scale: 1, boxShadow: '0 0 0 5px rgba(225, 6, 0, 0.3)' }
                      }
                      style={{
                        position: 'absolute',
                        top: '50%',
                        [index % 2 === 0 ? 'right' : 'left']: '-42px',
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: 'var(--racing-red)',
                        transform: 'translateY(-50%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '0.8rem',
                        zIndex: 10,
                        boxShadow: '0 0 0 5px rgba(225, 6, 0, 0.3)'
                      }}
                    >
                      {index + 1}
                    </motion.div>
                    
                    {/* Timeline connector line from dot to content */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '30px' }}
                      transition={{ duration: 0.3, delay: 0.8 + (index * 0.2) }}
                      style={{
                        position: 'absolute',
                        top: '50%',
                        [index % 2 === 0 ? 'right' : 'left']: '-30px',
                        height: '3px',
                        background: 'var(--racing-red)',
                        transform: 'translateY(-50%)',
                        zIndex: 3
                      }}
                    />
                    
                    {/* Year and title with colored top border */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ delay: 0.6 + (index * 0.2), duration: 0.8 }}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '4px',
                        background: 'linear-gradient(90deg, var(--racing-red), transparent)',
                        borderTopLeftRadius: '12px',
                        borderTopRightRadius: '12px'
                      }}
                    />
                    
                    <motion.h3
                      style={{
                        fontSize: '1.5rem',
                        color: 'white',
                        marginBottom: '0.3rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      <span style={{color: 'var(--racing-red)'}}>{era.title}</span>
                    </motion.h3>
                    
                    <motion.div
                      style={{
                        fontSize: '1.2rem',
                        fontWeight: '600',
                        marginBottom: '1rem',
                        color: 'var(--racing-silver)'
                      }}
                    >
                      {era.subtitle}
                    </motion.div>
                    
                    <p style={{ marginBottom: '1rem' }}>
                      {era.description}
                    </p>
                    
                    <motion.div
                      style={{
                        display: 'flex',
                        gap: '1rem',
                        marginBottom: '0.5rem'
                      }}
                    >
                      {era.tools.map((tool, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.1 }}
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '0.4rem'
                          }}
                        >
                          <div
                            style={{
                              width: '40px',
                              height: '40px',
                              background: 'rgba(255,255,255,0.1)',
                              borderRadius: '8px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              padding: '8px'
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
                          <span style={{ fontSize: '0.8rem' }}>{tool.name}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                    
                    {!activeEra && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        transition={{ delay: 1 + (index * 0.2) }}
                        style={{
                          fontSize: '0.8rem',
                          fontStyle: 'italic',
                          marginTop: '0.5rem',
                          color: 'var(--racing-red)'
                        }}
                      >
                        Click for details
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <AnimatePresence>
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
                  marginTop: '1rem',
                  marginBottom: '2rem',
                  position: 'relative',
                  maxWidth: '900px',
                  margin: '0 auto 2rem'
                }}
              >
                {eras.map(era => era.id === activeEra && (
                  <div key={`detail-content-${era.id}`} className="era-details">
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '1.5rem'
                      }}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                        style={{ 
                          fontSize: '4rem', 
                          lineHeight: 1,
                          marginTop: '-0.5rem'
                        }}
                      >
                        {era.icon}
                      </motion.div>
                      
                      <div>
                        <h3
                          style={{
                            fontSize: '1.6rem',
                            marginBottom: '0.5rem',
                            color: 'var(--racing-red)',
                          }}
                        >
                          {era.title}: {era.subtitle}
                        </h3>
                        
                        <p style={{ 
                          fontSize: '1.1rem', 
                          lineHeight: 1.5,
                          fontStyle: 'italic',
                          marginBottom: '1rem'
                        }}>
                          "{era.quote}"
                        </p>
                        
                        <div
                          style={{
                            background: 'rgba(0,0,0,0.2)',
                            padding: '1.2rem',
                            borderRadius: '8px',
                            marginTop: '1rem'
                          }}
                        >
                          <div
                            style={{
                              display: 'flex',
                              gap: '1.5rem',
                              flexWrap: 'wrap'
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
                    </div>
                  </div>
                ))}
                
                <motion.div
                  style={{
                    textAlign: 'center',
                    marginTop: '1.5rem',
                    fontStyle: 'italic',
                    color: 'rgba(255,255,255,0.7)'
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Click on any era again to close details
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          
          <motion.div
            className="current-state"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            style={{
              marginTop: '2rem'
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
