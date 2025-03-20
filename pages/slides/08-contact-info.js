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

const ContactInfo = () => {
  return (
    <Layout
      title="Contact Information - Full Throttle Revenue"
      currentSlide={8}
      totalSlides={8}
      prevSlide="/slides/07-future-of-sales-tech"
      nextSlide={null}
    >
      <section className="slide active" id="contact-info">
        <div className="slide-content">
          <motion.div
            className="slide-header center-aligned"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            style={{
              textAlign: 'center'
            }}
          >
            <h2>Thank <span>You</span></h2>
            <div className="slide-subtitle">Let's Continue the Conversation</div>
          </motion.div>
          
          <motion.div
            className="contact-container"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: '2rem'
            }}
          >
            <motion.div
              className="profile-image"
              variants={fadeIn}
              style={{
                width: '150px',
                height: '150px',
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
            </motion.div>
            
            <motion.div
              className="contact-details"
              variants={fadeIn}
              style={{
                textAlign: 'center',
                marginBottom: '3rem'
              }}
            >
              <h3
                style={{
                  fontSize: '2rem',
                  color: 'white',
                  marginBottom: '0.5rem'
                }}
              >
                Drew Lambert
              </h3>
              <p
                style={{
                  fontSize: '1.3rem',
                  color: 'var(--racing-silver)',
                  marginBottom: '0.3rem'
                }}
              >
                Revenue Operations Expert & Salesforce Engineer
              </p>
              <p
                style={{
                  fontSize: '1.2rem',
                  color: 'var(--racing-red)',
                  fontWeight: '600'
                }}
              >
                Revelate Operations, LLC
              </p>
            </motion.div>
            
            <motion.div
              className="connect-options"
              variants={staggerContainer}
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '2rem',
                marginBottom: '3rem'
              }}
            >
              <motion.a
                href="mailto:drew@revelateops.com"
                variants={fadeIn}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textDecoration: 'none',
                  color: 'white',
                  background: 'rgba(255,255,255,0.05)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  width: '180px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                whileHover={{
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
                }}
              >
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(225, 6, 0, 0.1)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '1rem'
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#E10600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 6L12 13L2 6" stroke="#E10600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    marginBottom: '0.3rem'
                  }}
                >
                  Email
                </p>
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--racing-silver)'
                  }}
                >
                  drew@revelateops.com
                </p>
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/drewlambert/"
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeIn}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textDecoration: 'none',
                  color: 'white',
                  background: 'rgba(255,255,255,0.05)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  width: '180px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                whileHover={{
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
                }}
              >
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(225, 6, 0, 0.1)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '1rem'
                  }}
                >
                  <img 
                    src="/images/icon-linkedin.svg" 
                    alt="LinkedIn" 
                    style={{ width: '24px', height: '24px' }}
                  />
                </div>
                <p
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    marginBottom: '0.3rem'
                  }}
                >
                  LinkedIn
                </p>
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--racing-silver)'
                  }}
                >
                  /in/drewlambert
                </p>
              </motion.a>
              
              <motion.a
                href="https://revelateops.com"
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeIn}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textDecoration: 'none',
                  color: 'white',
                  background: 'rgba(255,255,255,0.05)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  width: '180px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                whileHover={{
                  transform: 'translateY(-5px)',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
                }}
              >
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(225, 6, 0, 0.1)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '1rem'
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="#E10600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 16V12" stroke="#E10600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8H12.01" stroke="#E10600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    marginBottom: '0.3rem'
                  }}
                >
                  Website
                </p>
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--racing-silver)'
                  }}
                >
                  revelateops.com
                </p>
              </motion.a>
            </motion.div>
            
            <motion.div
              className="questions-section"
              variants={fadeIn}
              style={{
                textAlign: 'center',
                marginTop: '2rem'
              }}
            >
              <h3
                style={{
                  fontSize: '2.8rem',
                  color: 'var(--racing-red)',
                  marginBottom: '1.5rem',
                  textTransform: 'uppercase',
                  fontWeight: '700'
                }}
              >
                Questions?
              </h3>
              <p
                style={{
                  fontSize: '1.3rem',
                  maxWidth: '700px',
                  margin: '0 auto'
                }}
              >
                I'm happy to discuss how Revenue Operations and automation 
                can help accelerate your specific business challenges.
              </p>
              <div
                style={{
                  width: '100px',
                  height: '8px',
                  background: 'linear-gradient(90deg, var(--racing-red), transparent)',
                  margin: '2rem auto',
                  borderRadius: '4px'
                }}
              ></div>
              <p
                style={{
                  fontSize: '1.2rem',
                  fontWeight: '600'
                }}
              >
                Thank you for your attention!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactInfo;
