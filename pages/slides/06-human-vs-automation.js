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

const HumanVsAutomation = () => {
  return (
    <Layout
      title="Human vs Automation - Full Throttle Revenue"
      currentSlide={6}
      totalSlides={8}
      prevSlide="/slides/05-automation-solutions"
      nextSlide="/slides/07-future-of-sales-tech"
    >
      <section className="slide active" id="human-vs-automation">
        <div className="slide-content">
          <motion.div
            className="slide-header"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h2>Human <span>vs</span> Automation</h2>
            <div className="slide-subtitle">Finding the Right Balance for Maximum Performance</div>
          </motion.div>
          
          <motion.div
            className="comparison-container"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            style={{
              marginTop: '2rem'
            }}
          >
            <div
              className="comparison-intro"
              style={{
                marginBottom: '2rem'
              }}
            >
              <motion.p
                variants={fadeIn}
                style={{
                  fontSize: '1.2rem',
                  maxWidth: '900px',
                  margin: '0 auto 2rem',
                  textAlign: 'center',
                  lineHeight: '1.6'
                }}
              >
                Like a world-class racing team, peak sales performance comes from knowing exactly 
                when to rely on human talent and when to leverage technological precision.
              </motion.p>
            </div>
            
            <motion.div
              className="comparison-grid"
              variants={fadeIn}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '3rem',
                margin: '0 auto',
                maxWidth: '1100px',
                position: 'relative'
              }}
            >
              {/* Divider line */}
              <div
                style={{
                  position: 'absolute',
                  top: '0',
                  bottom: '0',
                  left: '50%',
                  width: '2px',
                  background: 'linear-gradient(to bottom, transparent, var(--racing-red), transparent)',
                  transform: 'translateX(-50%)',
                  zIndex: 1
                }}
              ></div>
              
              {/* Human side */}
              <motion.div
                className="human-side"
                variants={fadeIn}
              >
                <div
                  className="side-header"
                  style={{
                    textAlign: 'center',
                    marginBottom: '2rem'
                  }}
                >
                  <div
                    style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      margin: '0 auto 1rem'
                    }}
                  >
                    <img 
                      src="/images/profile.jpeg" 
                      alt="Human" 
                      style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  <h3
                    style={{
                      fontSize: '2rem',
                      color: 'white',
                      marginBottom: '0.5rem'
                    }}
                  >
                    Human Touch
                  </h3>
                  <p
                    style={{
                      color: 'var(--racing-silver)',
                      fontSize: '1.1rem'
                    }}
                  >
                    When personal connection matters most
                  </p>
                </div>
                
                <div
                  className="strengths"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    marginBottom: '2rem',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <h4
                    style={{
                      fontSize: '1.3rem',
                      color: 'white',
                      marginBottom: '1rem',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                      paddingBottom: '0.5rem'
                    }}
                  >
                    Human Strengths
                  </h4>
                  <ul className="racing-list">
                    <li>Building authentic relationships</li>
                    <li>Understanding complex emotions</li>
                    <li>Creative problem solving</li>
                    <li>Reading between the lines</li>
                    <li>Adaptive communication style</li>
                    <li>Handling objections with empathy</li>
                  </ul>
                </div>
                
                <div
                  className="best-for"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <h4
                    style={{
                      fontSize: '1.3rem',
                      color: 'white',
                      marginBottom: '1rem',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                      paddingBottom: '0.5rem'
                    }}
                  >
                    Best For
                  </h4>
                  <ul className="racing-list">
                    <li>High-value customer interactions</li>
                    <li>Complex negotiations</li>
                    <li>Handling sensitive situations</li>
                    <li>Strategic account planning</li>
                    <li>Executive-level relationships</li>
                  </ul>
                </div>
              </motion.div>
              
              {/* Automation side */}
              <motion.div
                className="automation-side"
                variants={fadeIn}
              >
                <div
                  className="side-header"
                  style={{
                    textAlign: 'center',
                    marginBottom: '2rem'
                  }}
                >
                  <div
                    style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(225, 6, 0, 0.1)',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      margin: '0 auto 1rem'
                    }}
                  >
                    <img 
                      src="/images/robot.svg" 
                      alt="Automation" 
                      style={{
                        width: '50px',
                        height: '50px'
                      }}
                    />
                  </div>
                  <h3
                    style={{
                      fontSize: '2rem',
                      color: 'white',
                      marginBottom: '0.5rem'
                    }}
                  >
                    Automation
                  </h3>
                  <p
                    style={{
                      color: 'var(--racing-silver)',
                      fontSize: '1.1rem'
                    }}
                  >
                    When speed and scale are critical
                  </p>
                </div>
                
                <div
                  className="strengths"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    marginBottom: '2rem',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <h4
                    style={{
                      fontSize: '1.3rem',
                      color: 'white',
                      marginBottom: '1rem',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                      paddingBottom: '0.5rem'
                    }}
                  >
                    Automation Strengths
                  </h4>
                  <ul className="racing-list">
                    <li>Consistent execution at scale</li>
                    <li>24/7 operation without fatigue</li>
                    <li>Processing massive data sets</li>
                    <li>Eliminating repetitive tasks</li>
                    <li>Perfect memory of customer details</li>
                    <li>Real-time response to triggers</li>
                  </ul>
                </div>
                
                <div
                  className="best-for"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <h4
                    style={{
                      fontSize: '1.3rem',
                      color: 'white',
                      marginBottom: '1rem',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                      paddingBottom: '0.5rem'
                    }}
                  >
                    Best For
                  </h4>
                  <ul className="racing-list">
                    <li>Lead qualification & routing</li>
                    <li>Follow-up sequences & nurturing</li>
                    <li>Data entry & enrichment</li>
                    <li>Contract generation & management</li>
                    <li>Forecasting & analytics</li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              className="balance-section"
              variants={fadeIn}
              style={{
                marginTop: '3rem',
                textAlign: 'center'
              }}
            >
              <h3
                className="secondary-heading"
                style={{
                  textAlign: 'center',
                  marginBottom: '1.5rem',
                  display: 'inline-block'
                }}
              >
                The Winning Formula: Human + Automation
              </h3>
              
              <p
                style={{
                  fontSize: '1.2rem',
                  maxWidth: '900px',
                  margin: '0 auto 2rem',
                  lineHeight: '1.6'
                }}
              >
                Like a race car driver working with cutting-edge technology, the most successful 
                revenue teams achieve perfect harmony between human talent and automation.
              </p>
              
              <div
                className="formula-examples"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr',
                  gap: '1.5rem',
                  maxWidth: '1100px',
                  margin: '0 auto'
                }}
              >
                <motion.div
                  className="formula-example"
                  variants={fadeIn}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '4px',
                      background: 'var(--racing-red)'
                    }}
                  ></div>
                  <h4
                    style={{
                      fontSize: '1.2rem',
                      color: 'white',
                      marginBottom: '1rem'
                    }}
                  >
                    AI-Assisted Selling
                  </h4>
                  <p style={{ textAlign: 'left' }}>
                    AI analyzes call recordings and suggests optimal talking points, while reps 
                    maintain authentic conversation flow and emotional connection.
                  </p>
                </motion.div>
                
                <motion.div
                  className="formula-example"
                  variants={fadeIn}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '4px',
                      background: 'var(--racing-red)'
                    }}
                  ></div>
                  <h4
                    style={{
                      fontSize: '1.2rem',
                      color: 'white',
                      marginBottom: '1rem'
                    }}
                  >
                    Guided Selling Workflows
                  </h4>
                  <p style={{ textAlign: 'left' }}>
                    System automatically guides reps through optimized sales processes with 
                    recommended actions, while allowing flexibility for personalization.
                  </p>
                </motion.div>
                
                <motion.div
                  className="formula-example"
                  variants={fadeIn}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '4px',
                      background: 'var(--racing-red)'
                    }}
                  ></div>
                  <h4
                    style={{
                      fontSize: '1.2rem',
                      color: 'white',
                      marginBottom: '1rem'
                    }}
                  >
                    Automated Lead Prioritization
                  </h4>
                  <p style={{ textAlign: 'left' }}>
                    AI scores and routes leads to the right reps, who then use their expertise 
                    to develop personalized outreach strategies.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default HumanVsAutomation;
