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

const cardHover = {
  rest: { scale: 1, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" },
  hover: { 
    scale: 1.03, 
    boxShadow: "0 8px 25px rgba(225,6,0,0.15)",
    borderColor: "rgba(225,6,0,0.3)"
  }
};

const PresenterProfile = () => {
  return (
    <Layout
      title="Presenter Profile - Full Throttle Revenue"
      currentSlide={2}
      totalSlides={8}
      prevSlide="/slides/01-introduction"
      nextSlide="/slides/03-revenue-acceleration"
    >
      <section className="slide active" id="presenter-profile">
        <div className="slide-content">
          <motion.div
            className="slide-header"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h2>Meet Your <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              style={{ color: 'var(--racing-red)' }}
            >Presenter</motion.span></h2>
            <div className="slide-subtitle">From Enterprise Sales to Revenue Operations</div>
          </motion.div>
          
          <motion.div
            className="profile-container"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3rem',
              marginTop: '2rem'
            }}
          >
            <motion.div
              className="profile-left-column"
              variants={fadeIn}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start'
              }}
            >
              <motion.div 
                className="profile-header" 
                style={{ marginBottom: '2rem' }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <div 
                  className="profile-name"
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    color: 'white',
                    marginBottom: '1rem',
                    position: 'relative'
                  }}
                >
                  Drew Lambert
                </div>
                <div 
                  className="profile-title"
                  style={{
                    fontSize: '1.4rem',
                    color: 'rgba(255,255,255,0.9)',
                    marginBottom: '0.5rem'
                  }}
                >
                  Revenue Operations Expert
                </div>
                <div 
                  className="profile-company"
                  style={{
                    fontSize: '1.2rem',
                    color: 'var(--racing-red)',
                    fontWeight: '600'
                  }}
                >
                  Revelate Operations, LLC
                </div>
              </motion.div>
              
              <motion.div 
                className="profile-image"
                whileHover={{ scale: 1.05, boxShadow: "0 15px 35px rgba(225,6,0,0.3)", borderColor: "var(--racing-red)" }}
                transition={{ duration: 0.3 }}
                style={{
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '3px solid var(--racing-red)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                  marginBottom: '2rem',
                  position: 'relative'
                }}
              >
                <img 
                  src="/images/profile.jpeg" 
                  alt="Drew Lambert" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '40%',
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                    pointerEvents: 'none'
                  }}
                />
              </motion.div>
              
              <div 
                className="profile-background"
                style={{
                  marginBottom: '2rem'
                }}
              >
                <h3 
                  className="secondary-heading"
                  style={{
                    marginBottom: '1rem'
                  }}
                >
                  Background
                </h3>
                <motion.ul 
                  className="racing-list"
                  style={{
                    listStyle: 'none',
                    margin: '0',
                    padding: '0'
                  }}
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
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
                    >✓</motion.span>
                    10+ years in B2B SaaS sales and operations
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
                    >✓</motion.span>
                    Certified Salesforce Administrator & Developer
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
                    >✓</motion.span>
                    Previously VP of Sales at Venture-Backed SaaS Company
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
                    >✓</motion.span>
                    MBA with focus on data-driven decision making
                  </motion.li>
                </motion.ul>
              </div>
            </motion.div>
            
            <motion.div
              className="profile-right-column"
              variants={fadeIn}
            >
              <h3 
                className="secondary-heading"
                style={{
                  marginBottom: '1.5rem'
                }}
              >
                Areas of Expertise
              </h3>
              
              <div 
                className="specialties-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1.5rem',
                  marginBottom: '2.5rem'
                }}
              >
                <motion.div 
                  className="specialty-item"
                  variants={fadeIn}
                  initial="rest"
                  whileHover="hover"
                  variants={cardHover}
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
                      color: 'white',
                      fontSize: '1.3rem',
                      marginBottom: '0.8rem'
                    }}
                  >
                    <motion.span 
                      style={{ color: 'var(--racing-red)', marginRight: '6px' }}
                      animate={{ x: [0, 2, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, repeatType: 'reverse' }}
                    >
                      &#9733;
                    </motion.span>
                    Revenue Operations
                  </h4>
                  <p>
                    Aligning sales, marketing and customer success operations for 
                    maximum efficiency and revenue growth.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="specialty-item"
                  variants={fadeIn}
                  initial="rest"
                  whileHover="hover"
                  variants={cardHover}
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
                    animate={{ width: '60%' }}
                    transition={{ delay: 0.9, duration: 0.8 }}
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
                      color: 'white',
                      fontSize: '1.3rem',
                      marginBottom: '0.8rem'
                    }}
                  >
                    <motion.span 
                      style={{ color: 'var(--racing-red)', marginRight: '6px' }}
                      animate={{ x: [0, 2, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, repeatType: 'reverse', delay: 0.2 }}
                    >
                      &#9733;
                    </motion.span>
                    Sales Engineering
                  </h4>
                  <p>
                    Creating technical demonstrations and solutions architecture 
                    to support complex SaaS sales.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="specialty-item"
                  variants={fadeIn}
                  initial="rest"
                  whileHover="hover"
                  variants={cardHover}
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
                      color: 'white',
                      fontSize: '1.3rem',
                      marginBottom: '0.8rem'
                    }}
                  >
                    <motion.span 
                      style={{ color: 'var(--racing-red)', marginRight: '6px' }}
                      animate={{ x: [0, 2, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, repeatType: 'reverse', delay: 0.4 }}
                    >
                      &#9733;
                    </motion.span>
                    CRM Implementation
                  </h4>
                  <p>
                    Salesforce customization, automation, integration and 
                    data management for high-growth companies.
                  </p>
                </motion.div>
                
                <motion.div 
                  className="specialty-item"
                  variants={fadeIn}
                  initial="rest"
                  whileHover="hover"
                  variants={cardHover}
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
                    animate={{ width: '60%' }}
                    transition={{ delay: 1.1, duration: 0.8 }}
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
                      color: 'white',
                      fontSize: '1.3rem',
                      marginBottom: '0.8rem'
                    }}
                  >
                    <motion.span 
                      style={{ color: 'var(--racing-red)', marginRight: '6px' }}
                      animate={{ x: [0, 2, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, repeatType: 'reverse', delay: 0.6 }}
                    >
                      &#9733;
                    </motion.span>
                    Sales Process Automation
                  </h4>
                  <p>
                    Leveraging AI, workflow automation and integrations to 
                    streamline sales processes and increase productivity.
                  </p>
                </motion.div>
              </div>
              
              <motion.div
                className="profile-philosophy"
                variants={fadeIn}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.8 }}
                style={{
                  background: 'rgba(225,6,0,0.05)',
                  padding: '1.5rem',
                  borderRadius: '10px',
                  border: '1px solid rgba(225,6,0,0.1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <h3 className="secondary-heading">My Philosophy</h3>
                <div 
                  style={{ 
                    width: '40px', 
                    height: '40px',
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    opacity: 0.5
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="var(--racing-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                  Revenue operations isn't just about tools and technology—it's about 
                  creating frictionless, integrated systems that allow sales teams to focus 
                  on what they do best: building relationships and closing deals.
                </p>
                <motion.p 
                  style={{ 
                    fontSize: '1.2rem', 
                    lineHeight: '1.6', 
                    marginTop: '1rem',
                    fontStyle: 'italic',
                    color: 'var(--racing-red)'
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8, duration: 0.8 }}
                >
                  "Great RevOps is like a perfectly tuned race car engine—it delivers 
                  maximum power with minimum waste, precisely when and where you need it."
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default PresenterProfile;
