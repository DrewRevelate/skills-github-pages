import React, { useState } from 'react';
import PollComponent from '../../components/PollComponent';
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
    scale: 1.05, 
    boxShadow: "0 8px 25px rgba(225,6,0,0.15)",
    borderColor: "rgba(225,6,0,0.3)"
  }
};

const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    repeatType: "reverse"
  }
};

const RevenueAcceleration = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  
  return (
    <Layout
      title="Revenue Acceleration - Full Throttle Revenue"
      currentSlide={3}
      totalSlides={8}
      prevSlide="/slides/02-presenter-profile"
      nextSlide="/slides/04-sales-tech-evolution"
    >
      <section className="slide active" id="revenue-acceleration">
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
            >Acceleration</motion.span></h2>
            <div className="slide-subtitle">Why RevOps is the Engine of Modern Business Growth</div>
          </motion.div>
          
          <motion.div 
            className="tab-navigation"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '2rem',
              gap: '1rem'
            }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('tab1')}
              style={{
                background: activeTab === 'tab1' ? 'var(--racing-red)' : 'rgba(255,255,255,0.1)',
                color: 'white',
                border: 'none',
                padding: '0.8rem 1.5rem',
                borderRadius: '30px',
                fontWeight: activeTab === 'tab1' ? '600' : '400',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: activeTab === 'tab1' ? '0 5px 15px rgba(225,6,0,0.3)' : 'none'
              }}
            >
              The RevOps Revolution
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('tab2')}
              style={{
                background: activeTab === 'tab2' ? 'var(--racing-red)' : 'rgba(255,255,255,0.1)',
                color: 'white',
                border: 'none',
                padding: '0.8rem 1.5rem',
                borderRadius: '30px',
                fontWeight: activeTab === 'tab2' ? '600' : '400',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: activeTab === 'tab2' ? '0 5px 15px rgba(225,6,0,0.3)' : 'none'
              }}
            >
              RevOps Impact by Numbers
            </motion.button>
          </motion.div>
          
          <AnimatePresence mode="wait">
            {activeTab === 'tab1' && (
              <motion.div
                key="tab1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="content-col"
              >
                <motion.h3 
                  className="secondary-heading"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >The RevOps Revolution</motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Revenue Operations (RevOps) is transforming how businesses align their 
                  revenue-generating teams. By breaking down silos between sales, marketing, 
                  and customer success, RevOps creates a unified approach to revenue generation.
                </motion.p>
                
                <motion.ul 
                  className="racing-list"
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  style={{ margin: '1.5rem 0' }}
                >
                  <motion.li 
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                    }}
                    style={{ 
                      marginBottom: '1rem',
                      paddingLeft: '30px',
                      position: 'relative'
                    }}
                  >
                    <motion.span 
                      style={{ 
                        position: 'absolute',
                        left: 0,
                        top: '6px',
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        background: 'var(--racing-red)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        color: 'white',
                        fontWeight: 'bold'
                      }}
                    >1</motion.span>
                    <strong>Unified Data & Analytics:</strong> Single source of truth across 
                    the entire customer journey
                  </motion.li>
                  <motion.li 
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.1 } }
                    }}
                    style={{ 
                      marginBottom: '1rem',
                      paddingLeft: '30px',
                      position: 'relative'
                    }}
                  >
                    <motion.span 
                      style={{ 
                        position: 'absolute',
                        left: 0,
                        top: '6px',
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        background: 'var(--racing-red)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        color: 'white',
                        fontWeight: 'bold'
                      }}
                    >2</motion.span>
                    <strong>Process Optimization:</strong> Streamlined workflows with minimal 
                    friction points
                  </motion.li>
                  <motion.li 
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } }
                    }}
                    style={{ 
                      marginBottom: '1rem',
                      paddingLeft: '30px',
                      position: 'relative'
                    }}
                  >
                    <motion.span 
                      style={{ 
                        position: 'absolute',
                        left: 0,
                        top: '6px',
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        background: 'var(--racing-red)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        color: 'white',
                        fontWeight: 'bold'
                      }}
                    >3</motion.span>
                    <strong>Technology Integration:</strong> Connected tech stack with 
                    seamless data flow
                  </motion.li>
                  <motion.li 
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.3 } }
                    }}
                    style={{ 
                      marginBottom: '1rem',
                      paddingLeft: '30px',
                      position: 'relative'
                    }}
                  >
                    <motion.span 
                      style={{ 
                        position: 'absolute',
                        left: 0,
                        top: '6px',
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        background: 'var(--racing-red)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        color: 'white',
                        fontWeight: 'bold'
                      }}
                    >4</motion.span>
                    <strong>Cross-Functional Alignment:</strong> Shared goals and 
                    metrics across departments
                  </motion.li>
                </motion.ul>
                
                <motion.div
                  className="quote-card"
                  initial="rest"
                  whileHover="hover"
                  variants={cardHover}
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    padding: '1.8rem',
                    borderRadius: '10px',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    margin: '2rem 0',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <motion.div
                    animate={pulseAnimation}
                    style={{
                      position: 'absolute',
                      top: '-20px',
                      left: '-20px',
                      width: '60px',
                      height: '60px',
                      backgroundImage: 'radial-gradient(circle, rgba(225,6,0,0.3) 0%, transparent 70%)',
                      borderRadius: '50%'
                    }}
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    style={{
                      position: 'absolute',
                      top: '15px',
                      left: '15px',
                      fontSize: '2.5rem',
                      color: 'var(--racing-red)',
                      opacity: 0.5
                    }}
                  >
                    "
                  </motion.div>
                  <p
                    style={{
                      fontSize: '1.2rem',
                      fontStyle: 'italic',
                      color: 'var(--racing-red)',
                      textAlign: 'center',
                      position: 'relative'
                    }}
                  >
                    "Companies with aligned revenue operations grow 15% faster than those with siloed operations."
                  </p>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      textAlign: 'center',
                      marginTop: '0.8rem'
                    }}
                  >
                    - SiriusDecisions/Forrester Research
                  </p>
                </motion.div>
                
                <motion.h3 
                  className="secondary-heading"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >Why Now?</motion.h3>
                <motion.ul 
                  className="racing-list"
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  style={{ 
                    margin: '1.5rem 0',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1rem'
                  }}
                >
                  <motion.li 
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } }
                    }}
                    style={{ 
                      background: 'rgba(255,255,255,0.05)',
                      padding: '1rem',
                      borderRadius: '8px',
                      border: '1px solid rgba(255,255,255,0.05)'
                    }}
                  >
                    <strong style={{ color: 'var(--racing-red)' }}>Digital Transformation:</strong> Accelerated pace of business requiring real-time insights
                  </motion.li>
                  <motion.li 
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } }
                    }}
                    style={{ 
                      background: 'rgba(255,255,255,0.05)',
                      padding: '1rem',
                      borderRadius: '8px',
                      border: '1px solid rgba(255,255,255,0.05)'
                    }}
                  >
                    <strong style={{ color: 'var(--racing-red)' }}>Buyer Sophistication:</strong> More complex, self-guided buying journeys
                  </motion.li>
                  <motion.li 
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.7 } }
                    }}
                    style={{ 
                      background: 'rgba(255,255,255,0.05)',
                      padding: '1rem',
                      borderRadius: '8px',
                      border: '1px solid rgba(255,255,255,0.05)'
                    }}
                  >
                    <strong style={{ color: 'var(--racing-red)' }}>Competition:</strong> Need for operational efficiency to gain market edge
                  </motion.li>
                  <motion.li 
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.8 } }
                    }}
                    style={{ 
                      background: 'rgba(255,255,255,0.05)',
                      padding: '1rem',
                      borderRadius: '8px',
                      border: '1px solid rgba(255,255,255,0.05)'
                    }}
                  >
                    <strong style={{ color: 'var(--racing-red)' }}>Recession-Proofing:</strong> Ensuring maximum ROI during economic uncertainty
                  </motion.li>
                </motion.ul>
              </motion.div>
            )}
            
            {activeTab === 'tab2' && (
              <motion.div
                key="tab2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="content-col"
              >
                <motion.h3 
                  className="secondary-heading"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >RevOps Impact by the Numbers</motion.h3>
                
                <motion.div
                  className="stats-container"
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1.5rem',
                    margin: '1.5rem 0'
                  }}
                >
                  <motion.div
                    className="stat-card"
                    variants={{
                      hidden: { opacity: 0, y: 30, scale: 0.9 },
                      visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } }
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: '0 8px 25px rgba(225,6,0,0.2)',
                      borderColor: 'rgba(225,6,0,0.3)'
                    }}
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      padding: '1.8rem 1.5rem',
                      borderRadius: '10px',
                      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      textAlign: 'center',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '80%' }}
                      transition={{ delay: 0.3, duration: 1 }}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '4px',
                        background: 'linear-gradient(90deg, var(--racing-red), transparent)',
                      }}
                    />
                    <motion.div
                      className="stat-number"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.5, type: 'spring' }}
                      style={{
                        fontSize: '3.5rem',
                        fontWeight: '700',
                        color: 'var(--racing-red)',
                        marginBottom: '0.5rem',
                        lineHeight: 1
                      }}
                    >
                      19%
                    </motion.div>
                    <p>
                      Higher Growth Rate for Companies with Aligned RevOps
                    </p>
                  </motion.div>
                  
                  <motion.div
                    className="stat-card"
                    variants={{
                      hidden: { opacity: 0, y: 30, scale: 0.9 },
                      visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, delay: 0.1 } }
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: '0 8px 25px rgba(225,6,0,0.2)',
                      borderColor: 'rgba(225,6,0,0.3)'
                    }}
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      padding: '1.8rem 1.5rem',
                      borderRadius: '10px',
                      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      textAlign: 'center',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '80%' }}
                      transition={{ delay: 0.4, duration: 1 }}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '4px',
                        background: 'linear-gradient(90deg, var(--racing-red), transparent)',
                      }}
                    />
                    <motion.div
                      className="stat-number"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4, duration: 0.5, type: 'spring' }}
                      style={{
                        fontSize: '3.5rem',
                        fontWeight: '700',
                        color: 'var(--racing-red)',
                        marginBottom: '0.5rem',
                        lineHeight: 1
                      }}
                    >
                      10-20%
                    </motion.div>
                    <p>
                      Increase in Sales Productivity Through Automation
                    </p>
                  </motion.div>
                  
                  <motion.div
                    className="stat-card"
                    variants={{
                      hidden: { opacity: 0, y: 30, scale: 0.9 },
                      visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, delay: 0.2 } }
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: '0 8px 25px rgba(225,6,0,0.2)',
                      borderColor: 'rgba(225,6,0,0.3)'
                    }}
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      padding: '1.8rem 1.5rem',
                      borderRadius: '10px',
                      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      textAlign: 'center',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '80%' }}
                      transition={{ delay: 0.5, duration: 1 }}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '4px',
                        background: 'linear-gradient(90deg, var(--racing-red), transparent)',
                      }}
                    />
                    <motion.div
                      className="stat-number"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5, duration: 0.5, type: 'spring' }}
                      style={{
                        fontSize: '3.5rem',
                        fontWeight: '700',
                        color: 'var(--racing-red)',
                        marginBottom: '0.5rem',
                        lineHeight: 1
                      }}
                    >
                      30%
                    </motion.div>
                    <p>
                      Reduction in Go-to-Market Expenses
                    </p>
                  </motion.div>
                  
                  <motion.div
                    className="stat-card"
                    variants={{
                      hidden: { opacity: 0, y: 30, scale: 0.9 },
                      visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, delay: 0.3 } }
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: '0 8px 25px rgba(225,6,0,0.2)',
                      borderColor: 'rgba(225,6,0,0.3)'
                    }}
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      padding: '1.8rem 1.5rem',
                      borderRadius: '10px',
                      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      textAlign: 'center',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '80%' }}
                      transition={{ delay: 0.6, duration: 1 }}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '4px',
                        background: 'linear-gradient(90deg, var(--racing-red), transparent)',
                      }}
                    />
                    <motion.div
                      className="stat-number"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6, duration: 0.5, type: 'spring' }}
                      style={{
                        fontSize: '3.5rem',
                        fontWeight: '700',
                        color: 'var(--racing-red)',
                        marginBottom: '0.5rem',
                        lineHeight: 1
                      }}
                    >
                      95%
                    </motion.div>
                    <p>
                      Improved Forecast Accuracy
                    </p>
                  </motion.div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  style={{ marginTop: '2rem' }}
                >
                  <PollComponent 
                    pollId="revops-impact"
                    question="Which RevOps benefit would impact your business the most?"
                    options={[
                      { id: 'productivity', text: 'Increased Sales Productivity' },
                      { id: 'forecasting', text: 'More Accurate Forecasting' },
                      { id: 'retention', text: 'Higher Customer Retention' },
                      { id: 'sales-cycle', text: 'Shorter Sales Cycles' },
                      { id: 'expenses', text: 'Reduced Go-to-Market Expenses' }
                    ]}
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          
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
            Use tabs above to explore different metrics
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default RevenueAcceleration;
