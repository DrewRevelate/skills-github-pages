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
        <div className="racing-stripes">
          <div className="stripe"></div>
          <div className="stripe white"></div>
          <div className="stripe dark"></div>
        </div>
        
        <div className="title-container">
          <div className="title-content">
            <motion.div 
              className="title-prefix animate delay-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              REVOLUTIONIZE YOUR SALES PROCESS
            </motion.div>
            
            <motion.h1 
              className="main-title animate delay-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              FULL <span className="highlight">THROTTLE</span> REVENUE
            </motion.h1>
            
            <motion.div 
              className="subtitle animate delay-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              How Revenue Operations & Automation Drive Success in Today's High-Speed Business Environment
            </motion.div>
            
            <motion.div 
              className="presenter-details animate delay-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <div className="presenter-image">
                <img src="/images/profile.jpeg" alt="Drew Lambert" />
              </div>
              <div className="presenter-info">
                <h3>Drew Lambert</h3>
                <p>Revenue Operations Expert & Salesforce Engineer</p>
                <p className="company">REVELATE OPERATIONS, LLC</p>
                <p>Founder & Principal Consultant</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Introduction;
