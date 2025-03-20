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

const ContactInfo = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  
  // Contact links data
  const contactLinks = [
    {
      id: 'email',
      label: 'Email',
      value: 'drew@revelateops.com',
      href: 'mailto:drew@revelateops.com',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#E10600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 6L12 13L2 6" stroke="#E10600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      value: '/in/drewlambert',
      href: 'https://www.linkedin.com/in/drewlambert/',
      icon: <img src="/images/icon-linkedin.svg" alt="LinkedIn" style={{ width: '24px', height: '24px' }} />
    },
    {
      id: 'website',
      label: 'Website',
      value: 'revelateops.com',
      href: 'https://revelateops.com',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="#E10600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 16V12" stroke="#E10600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 8H12.01" stroke="#E10600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];
  
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
            <h2>Thank <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5, type: 'spring' }}
              style={{ color: 'var(--racing-red)' }}
            >You</motion.span></h2>
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
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6, type: 'spring' }}
              whileHover={{ scale: 1.05, boxShadow: '0 15px 35px rgba(225,6,0,0.3)' }}
              style={{
                width: '150px',
                height: '150px',
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
                transition={{ delay: 0.8, duration: 0.5 }}
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '40%',
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.5))',
                  pointerEvents: 'none'
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
                Drew Lambert
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                style={{
                  fontSize: '1.3rem',
                  color: 'var(--racing-silver)',
                  marginBottom: '0.3rem'
                }}
              >
                Revenue Operations Expert & Salesforce Engineer
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                style={{
                  fontSize: '1.2rem',
                  color: 'var(--racing-red)',
                  fontWeight: '600'
                }}
              >
                Revelate Operations, LLC
              </motion.p>
            </motion.div>
            
            <motion.div
              className="connect-options"
              variants={staggerContainer}
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '2rem',
                marginBottom: '3rem',
                flexWrap: 'wrap'
              }}
            >
              {contactLinks.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  target={link.id !== 'email' ? '_blank' : undefined}
                  rel={link.id !== 'email' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + (index * 0.1), duration: 0.5 }}
                  onMouseEnter={() => setHoveredLink(link.id)}
                  onMouseLeave={() => setHoveredLink(null)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textDecoration: 'none',
                    color: 'white',
                    background: hoveredLink === link.id ? 'rgba(225,6,0,0.1)' : 'rgba(255,255,255,0.05)',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    boxShadow: hoveredLink === link.id ? '0 10px 25px rgba(225,6,0,0.2)' : '0 5px 15px rgba(0,0,0,0.1)',
                    border: hoveredLink === link.id ? '1px solid rgba(225,6,0,0.3)' : '1px solid rgba(255,255,255,0.1)',
                    width: '180px',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease, border 0.3s ease',
                    transform: hoveredLink === link.id ? 'translateY(-5px)' : 'translateY(0)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <motion.div
                    animate={
                      hoveredLink === link.id 
                        ? { 
                            y: [0, -3, 0], 
                            scale: [1, 1.1, 1], 
                            rotate: link.id === 'website' ? [0, 10, 0, -10, 0] : 0 
                          } 
                        : {}
                    }
                    transition={{ duration: 1.5, repeat: hoveredLink === link.id ? Infinity : 0 }}
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
                    {link.icon}
                  </motion.div>
                  
                  <p
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      marginBottom: '0.3rem'
                    }}
                  >
                    {link.label}
                  </p>
                  
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--racing-silver)'
                    }}
                  >
                    {link.value}
                  </p>
                  
                  <AnimatePresence>
                    {hoveredLink === link.id && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        style={{
                          position: 'absolute',
                          bottom: '10px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          color: 'var(--racing-red)',
                          fontSize: '0.8rem',
                          fontStyle: 'italic',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        Click to {link.id === 'email' ? 'email me' : 'visit'}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.a>
              ))}
            </motion.div>
            
            <motion.div
              className="questions-section"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              style={{
                textAlign: 'center',
                marginTop: '2rem',
                position: 'relative'
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3, duration: 0.5, type: 'spring' }}
                style={{
                  background: 'rgba(225,6,0,0.03)',
                  padding: '2rem',
                  borderRadius: '12px',
                  maxWidth: '800px',
                  margin: '0 auto',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                  style={{
                    position: 'absolute',
                    top: '-15%',
                    left: '-10%',
                    width: '120%',
                    height: '130%',
                    background: 'radial-gradient(circle at 50% 50%, rgba(225,6,0,0.1) 0%, transparent 70%)',
                    pointerEvents: 'none'
                  }}
                />
                
                <motion.h3
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    textShadow: ['0 0 0px rgba(225,6,0,0)', '0 0 10px rgba(225,6,0,0.5)', '0 0 0px rgba(225,6,0,0)'] 
                  }}
                  transition={{ 
                    delay: 1.4, 
                    duration: 0.5, 
                    textShadow: { delay: 2, duration: 2, repeat: Infinity }
                  }}
                  style={{
                    fontSize: '2.8rem',
                    color: 'var(--racing-red)',
                    marginBottom: '1.5rem',
                    textTransform: 'uppercase',
                    fontWeight: '700'
                  }}
                >
                  Questions?
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6, duration: 0.6 }}
                  style={{
                    fontSize: '1.3rem',
                    maxWidth: '700px',
                    margin: '0 auto'
                  }}
                >
                  I'm happy to discuss how Revenue Operations and automation 
                  can help accelerate your specific business challenges.
                </motion.p>
                
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100px' }}
                  transition={{ delay: 1.8, duration: 0.8 }}
                  style={{
                    height: '8px',
                    background: 'linear-gradient(90deg, var(--racing-red), transparent)',
                    margin: '2rem auto',
                    borderRadius: '4px'
                  }}
                />
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.0, duration: 0.6 }}
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: '600'
                  }}
                >
                  Thank you for your attention!
                </motion.p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 0.6 }}
                style={{
                  position: 'absolute',
                  bottom: '-80px',
                  left: 0,
                  right: 0,
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '15px'
                }}
              >
                <div 
                  style={{
                    width: '15px',
                    height: '15px',
                    background: 'var(--racing-red)',
                    borderRadius: '50%'
                  }}
                />
                <div 
                  style={{
                    width: '15px',
                    height: '15px',
                    background: 'white',
                    borderRadius: '50%'
                  }}
                />
                <div 
                  style={{
                    width: '15px',
                    height: '15px',
                    background: 'var(--racing-red)',
                    borderRadius: '50%'
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactInfo;
