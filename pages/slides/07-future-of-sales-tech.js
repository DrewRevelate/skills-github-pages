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

const cardHover = {
  rest: { scale: 1, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" },
  hover: { 
    scale: 1.03, 
    boxShadow: "0 8px 25px rgba(225,6,0,0.15)",
    borderColor: "rgba(225,6,0,0.3)"
  }
};

const FutureOfSalesTech = () => {
  const [activeCard, setActiveCard] = useState(null);
  
  // Trends data
  const trends = [
    {
      id: 'ai',
      title: 'AI-Powered Everything',
      description: 'Generative AI is revolutionizing sales enablement by automating content creation, conversation analysis, and providing real-time coaching during customer interactions.',
      tags: ['Generative AI', 'Real-time Coaching'],
      examples: 'GPT-enabled email personalization, AI meeting assistants, automated proposal generation',
      icon: '🤖',
      details: 'By 2026, over 80% of sales interactions will involve some form of AI assistance. Sales professionals using AI tools are already seeing 37% higher close rates and 50% more efficient prospecting.',
      impact: 'High'
    },
    {
      id: 'personalization',
      title: 'Hyper-Personalization',
      description: 'The shift from segment-based to individual-based engagement is enabling 1:1 personalization at scale, with dynamic content adjusted for each buyer.',
      tags: ['Behavioral Analytics', 'Intent Data'],
      examples: 'Dynamic content recommendations, buyer intent tools, real-time website customization',
      icon: '🎯',
      details: 'Companies implementing hyper-personalization strategies have seen 40% higher customer lifetime values. The technology now enables real-time content adaptation based on thousands of data points about each prospect.',
      impact: 'Medium'
    },
    {
      id: 'conversation',
      title: 'Conversational Intelligence',
      description: 'Advanced conversation analytics are transforming how we understand customer interactions, with real-time sentiment analysis and coaching becoming standard.',
      tags: ['Sentiment Analysis', 'Win/Loss Insights'],
      examples: 'Gong.io, Chorus.ai, real-time call coaching, automated meeting summaries',
      icon: '🗣️',
      details: 'Conversation intelligence platforms have grown 300% in adoption since 2020. Companies using these tools report 28% faster ramp times for new reps and 15% higher quota attainment.',
      impact: 'High'
    },
    {
      id: 'revenue',
      title: 'Revenue Intelligence',
      description: 'Unifying all customer data points to create predictive insights and identify revenue opportunities that would otherwise remain hidden.',
      tags: ['Predictive Analytics', 'Revenue Attribution'],
      examples: 'Revenue data platforms, predictive analytics engines, intelligent forecasting',
      icon: '📈',
      details: 'Revenue intelligence platforms have improved forecast accuracy by 28% for early adopters. Companies using these platforms report finding 15-20% more revenue opportunities in their existing pipeline.',
      impact: 'Medium'
    }
  ];
  
  // Preparation steps data
  const prepSteps = [
    {
      id: 'data',
      title: 'Build a Data Foundation',
      description: 'Clean, unified data is the fuel that powers all future sales tech. Invest in data quality, governance, and integration capabilities first.',
      number: 1,
      icon: '📊'
    },
    {
      id: 'ai',
      title: 'Develop AI Strategy',
      description: 'Create a clear roadmap for AI adoption in your sales process. Start with high-value, low-complexity use cases and scale from there.',
      number: 2,
      icon: '🧠'
    },
    {
      id: 'skills',
      title: 'Invest in Skills Development',
      description: 'Modern sales requires new skills. Train teams on data literacy, AI tools, and how to work alongside automation technologies.',
      number: 3,
      icon: '🎓'
    }
  ];

  return (
    <Layout
      title="Future of Sales Technology - Full Throttle Revenue"
      currentSlide={7}
      totalSlides={8}
      prevSlide="/slides/06-human-vs-automation"
      nextSlide="/slides/08-contact-info"
    >
      <section className="slide active" id="future-of-sales-tech">
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
            >Future</motion.span> of Sales Technology</h2>
            <div className="slide-subtitle">Emerging Trends Reshaping Revenue Operations</div>
          </motion.div>
          
          <motion.div
            className="future-container"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            style={{
              marginTop: '2rem'
            }}
          >
            <motion.div
              className="future-intro"
              variants={fadeIn}
              style={{
                textAlign: 'center',
                marginBottom: '2rem'
              }}
            >
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                style={{
                  fontSize: '1.2rem',
                  maxWidth: '900px',
                  margin: '0 auto',
                  lineHeight: '1.6'
                }}
              >
                The next generation of sales technology is set to dramatically transform how 
                revenue teams operate — creating new possibilities and challenges for businesses.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                style={{
                  margin: '1.5rem auto',
                  padding: '0.8rem 1.5rem',
                  background: 'rgba(225,6,0,0.1)',
                  borderRadius: '30px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  border: '1px solid rgba(225,6,0,0.2)'
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>🚀</span>
                <span style={{ fontWeight: '600' }}>Click on any trend card for more details</span>
              </motion.div>
            </motion.div>
            
            <motion.div
              className="trends-grid"
              variants={staggerContainer}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '2rem',
                marginBottom: '2rem'
              }}
            >
              {/* Map through trends to create cards */}
              {trends.map((trend, index) => (
                <motion.div
                  key={trend.id}
                  className={`trend-card ${activeCard === trend.id ? 'active' : ''}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (index * 0.1), duration: 0.6 }}
                  whileHover={activeCard === null ? { scale: 1.02 } : {}}
                  onClick={() => setActiveCard(activeCard === trend.id ? null : trend.id)}
                  style={{
                    background: activeCard === trend.id ? 'rgba(225,6,0,0.1)' : 'rgba(255,255,255,0.05)',
                    padding: '2rem',
                    borderRadius: '12px',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                    border: activeCard === trend.id ? '1px solid rgba(225,6,0,0.3)' : '1px solid rgba(255,255,255,0.1)',
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: activeCard === trend.id ? '100%' : '60%' }}
                    transition={{ delay: 0.5 + (index * 0.1), duration: 0.8 }}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      height: '4px',
                      background: 'linear-gradient(90deg, var(--racing-red), transparent)',
                    }}
                  />
                  
                  {activeCard === trend.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ 
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        background: 'var(--racing-red)',
                        color: 'white',
                        fontSize: '0.7rem',
                        fontWeight: 'bold',
                        padding: '3px 8px',
                        borderRadius: '20px'
                      }}
                    >
                      IMPACT: {trend.impact}
                    </motion.div>
                  )}
                  
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '1rem' }}>
                    <motion.div
                      animate={{ 
                        rotate: trend.id === 'ai' ? [0, 5, 0, -5, 0] : 0,
                        scale: trend.id === 'personalization' ? [1, 1.1, 1] : 1,
                        y: trend.id === 'revenue' ? [0, -3, 0] : 0
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      style={{ fontSize: '2rem', lineHeight: 1 }}
                    >
                      {trend.icon}
                    </motion.div>
                    <h3
                      style={{
                        fontSize: '1.5rem',
                        color: 'white',
                        marginBottom: '0.5rem'
                      }}
                    >
                      {trend.title}
                    </h3>
                  </div>
                  
                  <p style={{ marginBottom: '1.5rem' }}>
                    {trend.description}
                  </p>
                  
                  <div
                    style={{
                      display: 'flex',
                      gap: '1rem',
                      marginBottom: '1.5rem',
                      flexWrap: 'wrap'
                    }}
                  >
                    {trend.tags.map((tag, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + (index * 0.1) + (i * 0.1), duration: 0.5 }}
                        style={{
                          background: 'rgba(0,0,0,0.2)',
                          padding: '0.5rem 1rem',
                          borderRadius: '30px',
                          fontSize: '0.9rem'
                        }}
                      >
                        {tag}
                      </motion.div>
                    ))}
                  </div>
                  
                  <AnimatePresence>
                    {activeCard === trend.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                          overflow: 'hidden',
                          marginBottom: '1rem',
                          background: 'rgba(255,255,255,0.05)',
                          padding: '1rem',
                          borderRadius: '8px',
                          border: '1px solid rgba(255,255,255,0.1)'
                        }}
                      >
                        <p style={{ fontStyle: 'italic', marginBottom: '0' }}>
                          {trend.details}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <div
                    className="trend-examples"
                    style={{
                      background: 'rgba(0,0,0,0.2)',
                      padding: '1rem',
                      borderRadius: '8px',
                      fontSize: '0.9rem'
                    }}
                  >
                    <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--racing-silver)' }}>
                      Examples:
                    </strong>
                    <p>{trend.examples}</p>
                  </div>
                  
                  {activeCard === null && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 + (index * 0.1), duration: 0.5 }}
                      style={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '10px',
                        color: 'var(--racing-red)',
                        fontSize: '0.8rem',
                        fontStyle: 'italic'
                      }}
                    >
                      Click for details
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div
              className="preparation-section"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              style={{
                marginTop: '2.5rem'
              }}
            >
              <motion.h3
                className="secondary-heading"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.5 }}
                style={{
                  marginBottom: '1.5rem',
                  textAlign: 'center'
                }}
              >
                How to Prepare for the Future
              </motion.h3>
              
              <div
                className="preparation-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr',
                  gap: '1.5rem',
                  maxWidth: '1000px',
                  margin: '0 auto'
                }}
              >
                {prepSteps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    className="preparation-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 + (index * 0.1), duration: 0.5 }}
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                      borderColor: 'rgba(225,6,0,0.2)'
                    }}
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      padding: '1.5rem',
                      borderRadius: '12px',
                      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      height: '100%',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px',
                        marginBottom: '1rem'
                      }}
                    >
                      <motion.div
                        className="step-number"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1.5 + (index * 0.1), duration: 0.5, type: 'spring' }}
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          background: 'var(--racing-red)',
                          color: 'white',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          fontWeight: '700',
                          fontSize: '1.2rem',
                          flexShrink: 0
                        }}
                      >
                        {step.number}
                      </motion.div>
                      
                      <h4
                        style={{
                          fontSize: '1.2rem',
                          color: 'white',
                          marginBottom: '0',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px'
                        }}
                      >
                        {step.title}
                        <motion.span
                          animate={{ rotate: 0, scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                        >
                          {step.icon}
                        </motion.span>
                      </h4>
                    </div>
                    
                    <p>
                      {step.description}
                    </p>
                    
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '60%' }}
                      transition={{ delay: 1.6 + (index * 0.1), duration: 0.8 }}
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        height: '3px',
                        background: 'linear-gradient(90deg, var(--racing-red), transparent)',
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              className="quote-section"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.8 }}
              style={{
                marginTop: '3rem',
                textAlign: 'center'
              }}
            >
              <motion.div
                className="closing-quote"
                whileHover={{ scale: 1.02, boxShadow: '0 15px 35px rgba(0,0,0,0.15)' }}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  padding: '2rem',
                  borderRadius: '12px',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  maxWidth: '800px',
                  margin: '0 auto',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <motion.div
                  initial={{ left: '-50%' }}
                  animate={{ left: '150%' }}
                  transition={{ 
                    delay: 2, 
                    duration: 2, 
                    repeat: Infinity, 
                    repeatDelay: 5 
                  }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '50%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                    transform: 'skewX(-15deg)',
                    pointerEvents: 'none'
                  }}
                />
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.8, duration: 0.5 }}
                  style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    fontSize: '3rem',
                    color: 'var(--racing-red)',
                    opacity: 0.2,
                    transform: 'rotate(-10deg)'
                  }}
                >
                  "
                </motion.div>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.9, duration: 0.6 }}
                  style={{
                    fontSize: '1.4rem',
                    color: 'var(--racing-red)',
                    fontStyle: 'italic',
                    lineHeight: '1.6',
                    marginBottom: '1rem'
                  }}
                >
                  "The future of sales isn't about replacing humans with technology, but 
                  elevating humans with technology."
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.0, duration: 0.6 }}
                  style={{
                    fontSize: '1rem'
                  }}
                >
                  The most successful companies will find the perfect balance between digital 
                  transformation and the irreplaceable human element.
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default FutureOfSalesTech;
