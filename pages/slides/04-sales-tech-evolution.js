import React from 'react';
import Layout from '../../components/Layout';
import { motion } from 'framer-motion';

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
            <h2>The <span>Evolution</span> of Sales Technology</h2>
            <div className="slide-subtitle">From Rolodex to AI-Powered Revenue Engines</div>
          </motion.div>
          
          <motion.div
            className="timeline-container"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            style={{
              margin: '3rem 0',
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
              <div
                className="timeline-line"
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
              ></div>
              
              <motion.div
                className="timeline-eras"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  position: 'relative',
                  zIndex: 2
                }}
              >
                {/* Era 1: Analog Era */}
                <motion.div
                  className="timeline-era"
                  variants={fadeIn}
                  style={{
                    flex: '1',
                    textAlign: 'center',
                    padding: '0 1rem',
                    position: 'relative'
                  }}
                >
                  <div
                    className="era-marker"
                    style={{
                      width: '36px',
                      height: '36px',
                      background: 'var(--racing-red)',
                      borderRadius: '50%',
                      margin: '0 auto 1.5rem',
                      boxShadow: '0 0 0 5px rgba(225, 6, 0, 0.3)'
                    }}
                  ></div>
                  
                  <div
                    className="era-content"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      padding: '1.5rem',
                      borderRadius: '10px',
                      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                      border: '1px solid rgba(255,255,255,0.1)'
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '1.3rem',
                        marginBottom: '0.5rem',
                        color: 'white'
                      }}
                    >
                      1950s-1980s: Analog Era
                    </h3>
                    
                    <div
                      className="era-tools"
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: '1rem',
                        gap: '1rem'
                      }}
                    >
                      <div className="era-tool">
                        <img 
                          src="/images/rolodex.svg" 
                          alt="Rolodex" 
                          style={{
                            width: '40px',
                            height: '40px',
                            margin: '0 auto'
                          }}
                        />
                      </div>
                      <div className="era-tool">
                        <img 
                          src="/images/phone.svg" 
                          alt="Phone" 
                          style={{
                            width: '40px',
                            height: '40px',
                            margin: '0 auto'
                          }}
                        />
                      </div>
                    </div>
                    
                    <p style={{ fontSize: '0.95rem' }}>
                      Rolodexes, paper records, and face-to-face selling dominated. Limited tracking and mostly manual processes.
                    </p>
                  </div>
                </motion.div>
                
                {/* Era 2: Digital Dawn */}
                <motion.div
                  className="timeline-era"
                  variants={fadeIn}
                  style={{
                    flex: '1',
                    textAlign: 'center',
                    padding: '0 1rem',
                    position: 'relative'
                  }}
                >
                  <div
                    className="era-marker"
                    style={{
                      width: '36px',
                      height: '36px',
                      background: 'var(--racing-red)',
                      borderRadius: '50%',
                      margin: '0 auto 1.5rem',
                      boxShadow: '0 0 0 5px rgba(225, 6, 0, 0.3)'
                    }}
                  ></div>
                  
                  <div
                    className="era-content"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      padding: '1.5rem',
                      borderRadius: '10px',
                      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                      border: '1px solid rgba(255,255,255,0.1)'
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '1.3rem',
                        marginBottom: '0.5rem',
                        color: 'white'
                      }}
                    >
                      1980s-2000: Digital Dawn
                    </h3>
                    
                    <div
                      className="era-tools"
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: '1rem',
                        gap: '1rem'
                      }}
                    >
                      <div className="era-tool">
                        <img 
                          src="/images/excel.svg" 
                          alt="Spreadsheets" 
                          style={{
                            width: '40px',
                            height: '40px',
                            margin: '0 auto'
                          }}
                        />
                      </div>
                      <div className="era-tool">
                        <img 
                          src="/images/act.svg" 
                          alt="ACT! CRM" 
                          style={{
                            width: '40px',
                            height: '40px',
                            margin: '0 auto'
                          }}
                        />
                      </div>
                    </div>
                    
                    <p style={{ fontSize: '0.95rem' }}>
                      Spreadsheets, ACT!, and early contact management tools. Digital but still fragmented and desktop-bound.
                    </p>
                  </div>
                </motion.div>
                
                {/* Era 3: CRM Revolution */}
                <motion.div
                  className="timeline-era"
                  variants={fadeIn}
                  style={{
                    flex: '1',
                    textAlign: 'center',
                    padding: '0 1rem',
                    position: 'relative'
                  }}
                >
                  <div
                    className="era-marker"
                    style={{
                      width: '36px',
                      height: '36px',
                      background: 'var(--racing-red)',
                      borderRadius: '50%',
                      margin: '0 auto 1.5rem',
                      boxShadow: '0 0 0 5px rgba(225, 6, 0, 0.3)'
                    }}
                  ></div>
                  
                  <div
                    className="era-content"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      padding: '1.5rem',
                      borderRadius: '10px',
                      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                      border: '1px solid rgba(255,255,255,0.1)'
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '1.3rem',
                        marginBottom: '0.5rem',
                        color: 'white'
                      }}
                    >
                      2000-2015: CRM Revolution
                    </h3>
                    
                    <div
                      className="era-tools"
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: '1rem',
                        gap: '1rem'
                      }}
                    >
                      <div className="era-tool">
                        <img 
                          src="/images/salesforce.svg" 
                          alt="Salesforce" 
                          style={{
                            width: '40px',
                            height: '40px',
                            margin: '0 auto'
                          }}
                        />
                      </div>
                      <div className="era-tool">
                        <img 
                          src="/images/oracle.svg" 
                          alt="Oracle" 
                          style={{
                            width: '40px',
                            height: '40px',
                            margin: '0 auto'
                          }}
                        />
                      </div>
                    </div>
                    
                    <p style={{ fontSize: '0.95rem' }}>
                      Salesforce.com launches cloud CRM. Data centralization, sales pipelines, and tracking become standard.
                    </p>
                  </div>
                </motion.div>
                
                {/* Era 4: Sales Tech Explosion */}
                <motion.div
                  className="timeline-era"
                  variants={fadeIn}
                  style={{
                    flex: '1',
                    textAlign: 'center',
                    padding: '0 1rem',
                    position: 'relative'
                  }}
                >
                  <div
                    className="era-marker"
                    style={{
                      width: '36px',
                      height: '36px',
                      background: 'var(--racing-red)',
                      borderRadius: '50%',
                      margin: '0 auto 1.5rem',
                      boxShadow: '0 0 0 5px rgba(225, 6, 0, 0.3)'
                    }}
                  ></div>
                  
                  <div
                    className="era-content"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      padding: '1.5rem',
                      borderRadius: '10px',
                      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                      border: '1px solid rgba(255,255,255,0.1)'
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '1.3rem',
                        marginBottom: '0.5rem',
                        color: 'white'
                      }}
                    >
                      2015-2020: Sales Tech Explosion
                    </h3>
                    
                    <div
                      className="era-tools"
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: '1rem',
                        gap: '1rem'
                      }}
                    >
                      <div className="era-tool">
                        <img 
                          src="/images/hubspot.svg" 
                          alt="HubSpot" 
                          style={{
                            width: '40px',
                            height: '40px',
                            margin: '0 auto'
                          }}
                        />
                      </div>
                      <div className="era-tool">
                        <img 
                          src="/images/gong.svg" 
                          alt="Gong" 
                          style={{
                            width: '40px',
                            height: '40px',
                            margin: '0 auto'
                          }}
                        />
                      </div>
                    </div>
                    
                    <p style={{ fontSize: '0.95rem' }}>
                      Specialized tools for every part of the sales process. Software proliferation leads to "app fatigue".
                    </p>
                  </div>
                </motion.div>
                
                {/* Era 5: AI & RevOps */}
                <motion.div
                  className="timeline-era"
                  variants={fadeIn}
                  style={{
                    flex: '1',
                    textAlign: 'center',
                    padding: '0 1rem',
                    position: 'relative'
                  }}
                >
                  <div
                    className="era-marker"
                    style={{
                      width: '36px',
                      height: '36px',
                      background: 'var(--racing-red)',
                      borderRadius: '50%',
                      margin: '0 auto 1.5rem',
                      boxShadow: '0 0 0 5px rgba(225, 6, 0, 0.3)'
                    }}
                  ></div>
                  
                  <div
                    className="era-content"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      padding: '1.5rem',
                      borderRadius: '10px',
                      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                      border: '1px solid rgba(255,255,255,0.1)'
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '1.3rem',
                        marginBottom: '0.5rem',
                        color: 'white'
                      }}
                    >
                      2020-Present: AI & RevOps Era
                    </h3>
                    
                    <div
                      className="era-tools"
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: '1rem',
                        gap: '1rem'
                      }}
                    >
                      <div className="era-tool">
                        <img 
                          src="/images/gpt.svg" 
                          alt="AI" 
                          style={{
                            width: '40px',
                            height: '40px',
                            margin: '0 auto'
                          }}
                        />
                      </div>
                      <div className="era-tool">
                        <img 
                          src="/images/cloud.svg" 
                          alt="Cloud Integration" 
                          style={{
                            width: '40px',
                            height: '40px',
                            margin: '0 auto'
                          }}
                        />
                      </div>
                    </div>
                    
                    <p style={{ fontSize: '0.95rem' }}>
                      AI-driven insights, unified platforms, and cross-functional RevOps teams bring alignment and efficiency.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            className="current-state"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
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
                variants={fadeIn}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  padding: '1.5rem',
                  borderRadius: '10px',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <h4
                  style={{
                    fontSize: '1.2rem',
                    marginBottom: '1rem',
                    color: 'white'
                  }}
                >
                  Too Many Tools
                </h4>
                <p>Average B2B sales team uses 10+ tools daily. Sales reps spending 65% of time on non-selling activities.</p>
              </motion.div>
              
              <motion.div
                className="challenge-card"
                variants={fadeIn}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  padding: '1.5rem',
                  borderRadius: '10px',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <h4
                  style={{
                    fontSize: '1.2rem',
                    marginBottom: '1rem',
                    color: 'white'
                  }}
                >
                  Data Silos
                </h4>
                <p>Disconnected systems creating multiple truths. 82% of teams can't access data across departments easily.</p>
              </motion.div>
              
              <motion.div
                className="challenge-card"
                variants={fadeIn}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  padding: '1.5rem',
                  borderRadius: '10px',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <h4
                  style={{
                    fontSize: '1.2rem',
                    marginBottom: '1rem',
                    color: 'white'
                  }}
                >
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
