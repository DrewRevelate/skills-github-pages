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
            <h2>Meet Your <span>Presenter</span></h2>
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
              <div className="profile-header" style={{ marginBottom: '2rem' }}>
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
              </div>
              
              <div 
                className="profile-image"
                style={{
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '3px solid var(--racing-red)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                  marginBottom: '2rem'
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
              </div>
              
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
                <ul 
                  className="racing-list"
                  style={{
                    listStyle: 'none',
                    margin: '0',
                    padding: '0'
                  }}
                >
                  <li>10+ years in B2B SaaS sales and operations</li>
                  <li>Certified Salesforce Administrator & Developer</li>
                  <li>Previously VP of Sales at Venture-Backed SaaS Company</li>
                  <li>MBA with focus on data-driven decision making</li>
                </ul>
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
                      color: 'white',
                      fontSize: '1.3rem',
                      marginBottom: '0.8rem'
                    }}
                  >
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
                      color: 'white',
                      fontSize: '1.3rem',
                      marginBottom: '0.8rem'
                    }}
                  >
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
                      color: 'white',
                      fontSize: '1.3rem',
                      marginBottom: '0.8rem'
                    }}
                  >
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
                      color: 'white',
                      fontSize: '1.3rem',
                      marginBottom: '0.8rem'
                    }}
                  >
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
              >
                <h3 className="secondary-heading">My Philosophy</h3>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                  Revenue operations isn't just about tools and technology—it's about 
                  creating frictionless, integrated systems that allow sales teams to focus 
                  on what they do best: building relationships and closing deals.
                </p>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.6', marginTop: '1rem' }}>
                  Great RevOps is like a perfectly tuned race car engine—it delivers 
                  maximum power with minimum waste, precisely when and where you need it.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default PresenterProfile;
