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

const HumanVsAutomation = () => {
  // State to control which section to highlight
  const [activeSection, setActiveSection] = useState(null);

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
            <h2>Human <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              style={{ color: 'var(--racing-red)' }}
            >vs</motion.span> Automation</h2>
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
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: '100%' }}
                transition={{ delay: 0.7, duration: 1 }}
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
              ></motion.div>
              
              {/* Human side */}
              <motion.div
                className="human-side"
                variants={fadeIn}
                onMouseEnter={() => setActiveSection('human')}
                onMouseLeave={() => setActiveSection(null)}
                whileHover={{ 
                  scale: activeSection === 'automation' ? 0.98 : 1.02,
                  opacity: activeSection === 'automation' ? 0.9 : 1 
                }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="side-header"
                  style={{
                    textAlign: 'center',
                    marginBottom: '2rem'
                  }}
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
                    style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      margin: '0 auto 1rem',
                      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                      overflow: 'hidden'
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
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    style={{
                      fontSize: '2rem',
                      color: 'white',
                      marginBottom: '0.5rem'
                    }}
                  >
                    Human Touch
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    style={{
                      color: 'var(--racing-silver)',
                      fontSize: '1.1rem'
                    }}
                  >
                    When personal connection matters most
                  </motion.p>
                </div>
                
                <motion.div
                  className="strengths"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  whileHover={{ 
                    boxShadow: '0 8px 25px rgba(0,0,0,0.15)', 
                    borderColor: 'rgba(255,255,255,0.2)' 
                  }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    marginBottom: '2rem',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '60%' }}
                    transition={{ delay: 0.8, duration: 0.8 }}
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
                      fontSize: '1.3rem',
                      color: 'white',
                      marginBottom: '1rem',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                      paddingBottom: '0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <motion.span
                      animate={{ rotate: [0, 10, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
                      style={{ display: 'inline-block', color: 'var(--racing-red)' }}
                    >
                      🧠
                    </motion.span>
                    Human Strengths
                  </h4>
                  <motion.ul 
                    className="racing-list"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                  >
                    {[
                      'Building authentic relationships',
                      'Understanding complex emotions',
                      'Creative problem solving',
                      'Reading between the lines',
                      'Adaptive communication style',
                      'Handling objections with empathy'
                    ].map((item, index) => (
                      <motion.li 
                        key={index}
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { 
                            opacity: 1, 
                            x: 0, 
                            transition: { delay: 0.8 + (index * 0.1), duration: 0.5 } 
                          }
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
                        >
                          ✓
                        </motion.span>
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
                
                <motion.div
                  className="best-for"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  whileHover={{ 
                    boxShadow: '0 8px 25px rgba(0,0,0,0.15)', 
                    borderColor: 'rgba(255,255,255,0.2)' 
                  }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '60%' }}
                    transition={{ delay: 1.0, duration: 0.8 }}
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
                      fontSize: '1.3rem',
                      color: 'white',
                      marginBottom: '1rem',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                      paddingBottom: '0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <motion.span
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      style={{ display: 'inline-block', color: 'var(--racing-red)' }}
                    >
                      ⭐
                    </motion.span>
                    Best For
                  </h4>
                  <motion.ul 
                    className="racing-list"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                  >
                    {[
                      'High-value customer interactions',
                      'Complex negotiations',
                      'Handling sensitive situations',
                      'Strategic account planning',
                      'Executive-level relationships'
                    ].map((item, index) => (
                      <motion.li 
                        key={index}
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { 
                            opacity: 1, 
                            x: 0, 
                            transition: { delay: 1.0 + (index * 0.1), duration: 0.5 } 
                          }
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
                            color: 'var(--racing-red)',
                            fontWeight: 'bold'
                          }}
                        >
                          →
                        </motion.span>
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </motion.div>
              
              {/* Automation side */}
              <motion.div
                className="automation-side"
                variants={fadeIn}
                onMouseEnter={() => setActiveSection('automation')}
                onMouseLeave={() => setActiveSection(null)}
                whileHover={{ 
                  scale: activeSection === 'human' ? 0.98 : 1.02,
                  opacity: activeSection === 'human' ? 0.9 : 1 
                }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="side-header"
                  style={{
                    textAlign: 'center',
                    marginBottom: '2rem'
                  }}
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(225,6,0,0.2)" }}
                    style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(225, 6, 0, 0.1)',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      margin: '0 auto 1rem',
                      boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                    }}
                  >
                    <motion.img 
                      src="/images/robot.svg" 
                      alt="Automation" 
                      animate={{ rotate: [0, 5, 0, -5, 0] }}
                      transition={{ duration: 5, repeat: Infinity }}
                      style={{
                        width: '50px',
                        height: '50px'
                      }}
                    />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    style={{
                      fontSize: '2rem',
                      color: 'white',
                      marginBottom: '0.5rem'
                    }}
                  >
                    Automation
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    style={{
                      color: 'var(--racing-silver)',
                      fontSize: '1.1rem'
                    }}
                  >
                    When speed and scale are critical
                  </motion.p>
                </div>
                
                <motion.div
                  className="strengths"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                  whileHover={{ 
                    boxShadow: '0 8px 25px rgba(0,0,0,0.15)', 
                    borderColor: 'rgba(255,255,255,0.2)' 
                  }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    marginBottom: '2rem',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '60%' }}
                    transition={{ delay: 1.2, duration: 0.8 }}
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
                      fontSize: '1.3rem',
                      color: 'white',
                      marginBottom: '1rem',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                      paddingBottom: '0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <motion.span
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      style={{ display: 'inline-block', color: 'var(--racing-red)' }}
                    >
                      ⚙️
                    </motion.span>
                    Automation Strengths
                  </h4>
                  <motion.ul 
                    className="racing-list"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                  >
                    {[
                      'Consistent execution at scale',
                      '24/7 operation without fatigue',
                      'Processing massive data sets',
                      'Eliminating repetitive tasks',
                      'Perfect memory of customer details',
                      'Real-time response to triggers'
                    ].map((item, index) => (
                      <motion.li 
                        key={index}
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { 
                            opacity: 1, 
                            x: 0, 
                            transition: { delay: 1.2 + (index * 0.1), duration: 0.5 } 
                          }
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
                        >
                          ✓
                        </motion.span>
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
                
                <motion.div
                  className="best-for"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3, duration: 0.5 }}
                  whileHover={{ 
                    boxShadow: '0 8px 25px rgba(0,0,0,0.15)', 
                    borderColor: 'rgba(255,255,255,0.2)' 
                  }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '60%' }}
                    transition={{ delay: 1.4, duration: 0.8 }}
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
                      fontSize: '1.3rem',
                      color: 'white',
                      marginBottom: '1rem',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                      paddingBottom: '0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <motion.span
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      style={{ display: 'inline-block', color: 'var(--racing-red)' }}
                    >
                      ⭐
                    </motion.span>
                    Best For
                  </h4>
                  <motion.ul 
                    className="racing-list"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                  >
                    {[
                      'Lead qualification & routing',
                      'Follow-up sequences & nurturing',
                      'Data entry & enrichment',
                      'Contract generation & management',
                      'Forecasting & analytics'
                    ].map((item, index) => (
                      <motion.li 
                        key={index}
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { 
                            opacity: 1, 
                            x: 0, 
                            transition: { delay: 1.4 + (index * 0.1), duration: 0.5 } 
                          }
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
                            color: 'var(--racing-red)',
                            fontWeight: 'bold'
                          }}
                        >
                          →
                        </motion.span>
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div
              className="balance-section"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              style={{
                marginTop: '3rem',
                textAlign: 'center'
              }}
            >
              <motion.h3
                className="secondary-heading"
                style={{
                  textAlign: 'center',
                  marginBottom: '1.5rem',
                  display: 'inline-block',
                  position: 'relative'
                }}
                whileHover={{ scale: 1.03 }}
              >
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.8, duration: 0.5, type: 'spring' }}
                  style={{
                    position: 'absolute',
                    left: '-40px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'var(--racing-red)',
                    fontSize: '1.8rem'
                  }}
                >
                  🏁
                </motion.span>
                The Winning Formula: Human + Automation
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.8, duration: 0.5, type: 'spring' }}
                  style={{
                    position: 'absolute',
                    right: '-40px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'var(--racing-red)',
                    fontSize: '1.8rem'
                  }}
                >
                  🏁
                </motion.span>
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.9, duration: 0.6 }}
                style={{
                  fontSize: '1.2rem',
                  maxWidth: '900px',
                  margin: '0 auto 2rem',
                  lineHeight: '1.6'
                }}
              >
                Like a race car driver working with cutting-edge technology, the most successful 
                revenue teams achieve perfect harmony between human talent and automation.
              </motion.p>
              
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
                {[
                  {
                    title: 'AI-Assisted Selling',
                    description: 'AI analyzes call recordings and suggests optimal talking points, while reps maintain authentic conversation flow and emotional connection.',
                    icon: '🎯',
                    delay: 2.0
                  },
                  {
                    title: 'Guided Selling Workflows',
                    description: 'System automatically guides reps through optimized sales processes with recommended actions, while allowing flexibility for personalization.',
                    icon: '🧭',
                    delay: 2.1
                  },
                  {
                    title: 'Automated Lead Prioritization',
                    description: 'AI scores and routes leads to the right reps, who then use their expertise to develop personalized outreach strategies.',
                    icon: '⚡',
                    delay: 2.2
                  }
                ].map((example, index) => (
                  <motion.div
                    key={index}
                    className="formula-example"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: example.delay, duration: 0.6 }}
                    whileHover={{ 
                      scale: 1.03, 
                      boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                      borderColor: 'rgba(225,6,0,0.2)'
                    }}
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      padding: '1.5rem',
                      borderRadius: '12px',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ delay: example.delay + 0.3, duration: 1 }}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '4px',
                        background: 'linear-gradient(90deg, var(--racing-red), transparent)',
                      }}
                    ></motion.div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: '0.8rem'
                      }}
                    >
                      <motion.div
                        animate={{ 
                          rotate: index === 1 ? [0, 360] : 0,
                          scale: index === 0 ? [1, 1.2, 1] : 1,
                          y: index === 2 ? [0, -5, 0] : 0
                        }}
                        transition={{ 
                          duration: index === 1 ? 8 : 2, 
                          repeat: Infinity, 
                          repeatType: index === 0 ? 'reverse' : 'loop'
                        }}
                        style={{ fontSize: '1.5rem' }}
                      >
                        {example.icon}
                      </motion.div>
                      <h4
                        style={{
                          fontSize: '1.2rem',
                          color: 'white',
                          fontWeight: '600'
                        }}
                      >
                        {example.title}
                      </h4>
                    </div>
                    <p style={{ textAlign: 'left' }}>
                      {example.description}
                    </p>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                className="interactive-prompt"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: 2.5, duration: 0.8 }}
                style={{
                  marginTop: '2rem',
                  fontSize: '0.9rem',
                  color: 'white',
                  fontStyle: 'italic'
                }}
              >
                Hover over each side to compare human and automation approaches
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default HumanVsAutomation;
