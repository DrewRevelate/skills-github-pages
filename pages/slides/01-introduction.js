import React, { useEffect } from 'react';
import Layout from '../../components/Layout';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Introduction = () => {
  return (
    <Layout
      title="Introduction - Full Throttle Revenue"
      currentSlide={1}
      totalSlides={8}
      prevSlide={null}
      nextSlide="/slides/02-presenter-profile"
    >
      <section className="slide active title-slide" id="title">
        <div className="diagonal-accent"></div>
        <div className="speedometer-bg"></div>
        <div className="chevron-pattern"></div>
        <motion.div 
          className="racing-stripes"
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="stripe"></div>
          <div className="stripe white"></div>
          <div className="stripe dark"></div>
        </motion.div>
        
        <div className="title-container">
          <div className="title-content">
            <motion.div 
              className="title-prefix"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              REVOLUTIONIZE YOUR SALES PROCESS
            </motion.div>
            
            <motion.h1 
              className="main-title"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              FULL <motion.span 
                className="highlight"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >THROTTLE</motion.span> REVENUE
            </motion.h1>
            
            <motion.div 
              className="subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              How Revenue Operations & Automation Drive Success in Today's High-Speed Business Environment
            </motion.div>
            
            <motion.div 
              className="presenter-details"
              initial={{ opacity: 0, y: 30, x: -10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              <motion.div 
                className="presenter-image"
                whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(225,6,0,0.4)" }}
                transition={{ duration: 0.3 }}
              >
                <img src="/images/profile.jpeg" alt="Drew Lambert" />
              </motion.div>
              <div className="presenter-info">
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6, duration: 0.5 }}
                >Drew Lambert</motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.7, duration: 0.5 }}
                >Revenue Operations Expert & Salesforce Engineer</motion.p>
                <motion.p 
                  className="company"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8, duration: 0.5 }}
                >REVELATE OPERATIONS, LLC</motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.9, duration: 0.5 }}
                >Founder & Principal Consultant</motion.p>
              </div>
            </motion.div>
            
            <motion.div 
              className="interactive-hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 2.5, duration: 0.8 }}
              style={{
                position: 'absolute',
                bottom: '40px',
                right: '20px',
                fontSize: '0.9rem',
                color: 'rgba(255, 255, 255, 0.7)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Navigate with arrow keys or swipe
            </motion.div>
          </div>
        </div>
        
        <motion.div
          className="racing-checkered-flag"
          initial={{ opacity: 0, right: -100 }}
          animate={{ opacity: 0.15, right: 0 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '40%',
            height: '100%',
            backgroundImage: 'repeating-conic-gradient(#000 0% 25%, transparent 0% 50%)',
            backgroundSize: '40px 40px',
            zIndex: 0,
            pointerEvents: 'none',
            mixBlendMode: 'overlay'
          }}
        />
      </section>
    </Layout>
  );
};

export default Introduction;
