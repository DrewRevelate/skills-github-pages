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

const RevenueAcceleration = () => {
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
            <h2>Revenue <span>Acceleration</span></h2>
            <div className="slide-subtitle">Why RevOps is the Engine of Modern Business Growth</div>
          </motion.div>
          
          <motion.div
            className="content-grid"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '2rem',
              marginTop: '2rem'
            }}
          >
            <motion.div
              className="content-col"
              variants={fadeIn}
            >
              <h3 className="secondary-heading">The RevOps Revolution</h3>
              <p>
                Revenue Operations (RevOps) is transforming how businesses align their 
                revenue-generating teams. By breaking down silos between sales, marketing, 
                and customer success, RevOps creates a unified approach to revenue generation.
              </p>
              
              <ul className="racing-list">
                <motion.li variants={fadeIn}>
                  <strong>Unified Data & Analytics:</strong> Single source of truth across 
                  the entire customer journey
                </motion.li>
                <motion.li variants={fadeIn}>
                  <strong>Process Optimization:</strong> Streamlined workflows with minimal 
                  friction points
                </motion.li>
                <motion.li variants={fadeIn}>
                  <strong>Technology Integration:</strong> Connected tech stack with 
                  seamless data flow
                </motion.li>
                <motion.li variants={fadeIn}>
                  <strong>Cross-Functional Alignment:</strong> Shared goals and 
                  metrics across departments
                </motion.li>
              </ul>
              
              <div
                className="quote-card"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  padding: '1.5rem',
                  borderRadius: '10px',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  margin: '2rem 0'
                }}
              >
                <p
                  style={{
                    fontSize: '1.2rem',
                    fontStyle: 'italic',
                    color: 'var(--racing-red)',
                    textAlign: 'center'
                  }}
                >
                  "Companies with aligned revenue operations grow 15% faster than those with siloed operations."
                </p>
                <p
                  style={{
                    fontSize: '0.9rem',
                    textAlign: 'center',
                    marginTop: '0.5rem'
                  }}
                >
                  - SiriusDecisions/Forrester Research
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="content-col"
              variants={fadeIn}
            >
              <h3 className="secondary-heading">RevOps Impact by the Numbers</h3>
              
              <div
                className="stats-container"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1.5rem',
                  margin: '1.5rem 0'
                }}
              >
                <motion.div
                  className="stat-card"
                  variants={fadeIn}
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    padding: '1.5rem',
                    borderRadius: '10px',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    textAlign: 'center'
                  }}
                >
                  <div
                    className="stat-number"
                    style={{
                      fontSize: '3rem',
                      fontWeight: '700',
                      color: 'var(--racing-red)',
                      marginBottom: '0.5rem'
                    }}
                  >
                    19%
                  </div>
                  <p>
                    Higher Growth Rate for Companies with Aligned RevOps
                  </p>
                </motion.div>
                
                <motion.div
                  className="stat-card"
                  variants={fadeIn}
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    padding: '1.5rem',
                    borderRadius: '10px',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    textAlign: 'center'
                  }}
                >
                  <div
                    className="stat-number"
                    style={{
                      fontSize: '3rem',
                      fontWeight: '700',
                      color: 'var(--racing-red)',
                      marginBottom: '0.5rem'
                    }}
                  >
                    10-20%
                  </div>
                  <p>
                    Increase in Sales Productivity Through Automation
                  </p>
                </motion.div>
                
                <motion.div
                  className="stat-card"
                  variants={fadeIn}
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    padding: '1.5rem',
                    borderRadius: '10px',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    textAlign: 'center'
                  }}
                >
                  <div
                    className="stat-number"
                    style={{
                      fontSize: '3rem',
                      fontWeight: '700',
                      color: 'var(--racing-red)',
                      marginBottom: '0.5rem'
                    }}
                  >
                    30%
                  </div>
                  <p>
                    Reduction in Go-to-Market Expenses
                  </p>
                </motion.div>
                
                <motion.div
                  className="stat-card"
                  variants={fadeIn}
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    padding: '1.5rem',
                    borderRadius: '10px',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    textAlign: 'center'
                  }}
                >
                  <div
                    className="stat-number"
                    style={{
                      fontSize: '3rem',
                      fontWeight: '700',
                      color: 'var(--racing-red)',
                      marginBottom: '0.5rem'
                    }}
                  >
                    95%
                  </div>
                  <p>
                    Improved Forecast Accuracy
                  </p>
                </motion.div>
              </div>
              
              <h3 className="secondary-heading">Why Now?</h3>
              <ul className="racing-list">
                <motion.li variants={fadeIn}>
                  <strong>Digital Transformation:</strong> Accelerated pace of business requiring real-time insights
                </motion.li>
                <motion.li variants={fadeIn}>
                  <strong>Buyer Sophistication:</strong> More complex, self-guided buying journeys
                </motion.li>
                <motion.li variants={fadeIn}>
                  <strong>Competition:</strong> Need for operational efficiency to gain market edge
                </motion.li>
                <motion.li variants={fadeIn}>
                  <strong>Recession-Proofing:</strong> Ensuring maximum ROI during economic uncertainty
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default RevenueAcceleration;
