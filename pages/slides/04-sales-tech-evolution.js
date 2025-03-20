import React, { useState } from 'react';
import SalesTechTimeline from '../../components/SalesTechTimeline';
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

const SalesTechEvolution = () => {
  const [activeEra, setActiveEra] = useState(null);
  
  const eras = [
    {
      id: 'era1',
      title: '1950s-1980s',
      subtitle: 'Analog Era',
      description: 'Rolodexes, paper records, and face-to-face selling dominated. Limited tracking and mostly manual processes.',
      tools: [
        { name: 'Rolodex', icon: '/images/rolodex.svg' },
        { name: 'Phone', icon: '/images/phone.svg' }
      ],
      icon: '📝',
      quote: "The era of pen, paper, and manual processes"
    },
    {
      id: 'era2',
      title: '1980s-2000',
      subtitle: 'Digital Dawn',
      description: 'Spreadsheets, ACT!, and early contact management tools. Digital but still fragmented and desktop-bound.',
      tools: [
        { name: 'Spreadsheets', icon: '/images/excel.svg' },
        { name: 'ACT! CRM', icon: '/images/act.svg' }
      ],
      icon: '💾',
      quote: "The first digital tools emerge but remain desktop-bound"
    },
    {
      id: 'era3',
      title: '2000-2015',
      subtitle: 'CRM Revolution',
      description: 'Salesforce.com launches cloud CRM. Data centralization, sales pipelines, and tracking become standard.',
      tools: [
        { name: 'Salesforce', icon: '/images/salesforce.svg' },
        { name: 'Oracle', icon: '/images/oracle.svg' }
      ],
      icon: '☁️',
      quote: "Cloud CRM transforms data accessibility and collaboration"
    },
    {
      id: 'era4',
      title: '2015-2020',
      subtitle: 'Sales Tech Explosion',
      description: 'Specialized tools for every part of the sales process. Software proliferation leads to "app fatigue".',
      tools: [
        { name: 'HubSpot', icon: '/images/hubspot.svg' },
        { name: 'Gong', icon: '/images/gong.svg' }
      ],
      icon: '🧩',
      quote: "Specialized tools create powerful but fragmented stacks"
    },
    {
      id: 'era5',
      title: '2020-Present',
      subtitle: 'AI & RevOps Era',
      description: 'AI-driven insights, unified platforms, and cross-functional RevOps teams bring alignment and efficiency.',
      tools: [
        { name: 'AI', icon: '/images/gpt.svg' },
        { name: 'Cloud Integration', icon: '/images/cloud.svg' }
      ],
      icon: '🤖',
      quote: "AI and automation drive the next generation of sales"
    }
  ];

  return (
    <Layout
      title="Evolution of Sales Technology - Full Throttle Revenue"
      currentSlide={4}
      totalSlides={8}
      prevSlide="/slides/03-revenue-acceleration"
      nextSlide="/slides/05-automation-solutions"
    >
      <section className="slide active" id="sales-tech-evolution">
        <div className="slide-content">
          <motion.div
            className="slide-header"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h2>The <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              style={{ color: 'var(--racing-red)' }}
            >Evolution</motion.span> of Sales Technology</h2>
            <div className="slide-subtitle">From Rolodex to AI-Powered Revenue Engines</div>
          </motion.div>
          
          <motion.div
            className="timeline-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              margin: '2rem 0 3rem',
              position: 'relative',
              padding: '0 20px'
            }}
          >
            <SalesTechTimeline />
          </motion.div>
          
          <motion.div
            className="current-state"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            style={{
              marginTop: '2rem'
            }}
          >
            <h3 className="secondary-heading">Current State of Sales Technology</h3>
            
            <div
              className="challenges-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '1.5rem',
                marginTop: '1.5rem'
              }}
            >
              <motion.div
                className="challenge-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: '0 8px 25px rgba(0,0,0,0.2)', 
                  background: 'rgba(255,255,255,0.08)' 
                }}
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
                  animate={{ width: '40%' }}
                  transition={{ delay: 1.8, duration: 0.8 }}
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
                    fontSize: '1.2rem',
                    marginBottom: '0.8rem',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <span style={{ color: 'var(--racing-red)' }}>⚠️</span>
                  Too Many Tools
                </h4>
                <p>Average B2B sales team uses 10+ tools daily. Sales reps spending 65% of time on non-selling activities.</p>
              </motion.div>
              
              <motion.div
                className="challenge-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: '0 8px 25px rgba(0,0,0,0.2)', 
                  background: 'rgba(255,255,255,0.08)' 
                }}
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
                  animate={{ width: '40%' }}
                  transition={{ delay: 1.9, duration: 0.8 }}
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
                    fontSize: '1.2rem',
                    marginBottom: '0.8rem',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <span style={{ color: 'var(--racing-red)' }}>⚠️</span>
                  Data Silos
                </h4>
                <p>Disconnected systems creating multiple truths. 82% of teams can't access data across departments easily.</p>
              </motion.div>
              
              <motion.div
                className="challenge-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: '0 8px 25px rgba(0,0,0,0.2)', 
                  background: 'rgba(255,255,255,0.08)' 
                }}
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
                  animate={{ width: '40%' }}
                  transition={{ delay: 2.0, duration: 0.8 }}
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
                    fontSize: '1.2rem',
                    marginBottom: '0.8rem',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <span style={{ color: 'var(--racing-red)' }}>✨</span>
                  AI Opportunity
                </h4>
                <p>AI can now automate 40% of sales tasks. Companies adopting AI seeing 50%+ boost in lead conversion rates.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SalesTechEvolution;
