import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const timelineData = [
  {
    id: 'analog',
    era: '1950s-1980s',
    title: 'Analog Era',
    description: 'Before digital tools, sales teams relied on paper records, rolodexes, and in-person meetings.',
    icon: '/images/icon-analog.svg',
    technologies: [
      { name: 'Rolodex', icon: '/images/rolodex.svg' },
      { name: 'Paper Files', icon: '/images/file.svg' },
      { name: 'Phone Calls', icon: '/images/phone.svg' }
    ],
    color: '#6f8ab7'
  },
  {
    id: 'early-digital',
    era: '1980s-1990s',
    title: 'Early Digital',
    description: 'The introduction of basic digital tools and databases to manage customer information.',
    icon: '/images/icon-spreadsheet.svg',
    technologies: [
      { name: 'Spreadsheets', icon: '/images/excel.svg' },
      { name: 'Basic Databases', icon: '/images/icon-database.svg' },
      { name: 'Contact Management', icon: '/images/act.svg' }
    ],
    color: '#51a4b8'
  },
  {
    id: 'crm-revolution',
    era: '1990s-2010s',
    title: 'CRM Revolution',
    description: 'The rise of dedicated Customer Relationship Management systems that centralized sales data.',
    icon: '/images/icon-salesforce.svg',
    technologies: [
      { name: 'Salesforce', icon: '/images/salesforce.svg' },
      { name: 'Oracle', icon: '/images/oracle.svg' },
      { name: 'On-premise CRMs', icon: '/images/icon-server.svg' }
    ],
    color: '#3c88b5'
  },
  {
    id: 'cloud-era',
    era: '2010s',
    title: 'Cloud Era',
    description: 'The shift to cloud-based platforms, integrations, and the beginnings of automation.',
    icon: '/images/icon-cloud.svg',
    technologies: [
      { name: 'HubSpot', icon: '/images/hubspot.svg' },
      { name: 'Cloud Hosting', icon: '/images/cloud.svg' },
      { name: 'Sales Engagement', icon: '/images/icon-book.svg' }
    ],
    color: '#2a6daf'
  },
  {
    id: 'ai-automation',
    era: '2020s-Present',
    title: 'AI & Automation',
    description: 'Advanced AI tools, full automation capabilities, and predictive analytics that transform sales.',
    icon: '/images/icon-ai.svg',
    technologies: [
      { name: 'Gong', icon: '/images/gong.svg' },
      { name: 'AI Assistants', icon: '/images/gpt.svg' },
      { name: 'Predictive Intelligence', icon: '/images/robot.svg' }
    ],
    color: '#15539d'
  }
];

const SalesTechTimeline = () => {
  const [activeEra, setActiveEra] = useState(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [hasManuallySelected, setHasManuallySelected] = useState(false);

  // Auto scroll through eras on initial load
  useEffect(() => {
    if (!activeEra) {
      setActiveEra(timelineData[0].id);
    }
    
    let interval;
    if (isAutoScrolling && !hasManuallySelected) {
      interval = setInterval(() => {
        setActiveEra(currentEra => {
          const currentIndex = timelineData.findIndex(item => item.id === currentEra);
          const nextIndex = (currentIndex + 1) % timelineData.length;
          return timelineData[nextIndex].id;
        });
      }, 5000); // Change every 5 seconds
    }
    
    return () => clearInterval(interval);
  }, [isAutoScrolling, hasManuallySelected]);

  // Handle manual era selection
  const handleEraSelect = (eraId) => {
    setActiveEra(eraId);
    setHasManuallySelected(true);
    setIsAutoScrolling(false);
  };

  // Get current active era details
  const activeEraData = timelineData.find(era => era.id === activeEra) || timelineData[0];

  return (
    <motion.div
      className="timeline-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        marginTop: '2rem',
        position: 'relative'
      }}
    >
      {/* Timeline track */}
      <motion.div
        className="timeline-track"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
        style={{
          height: '4px',
          background: 'linear-gradient(90deg, rgba(255,255,255,0.1), rgba(255,255,255,0.2))',
          borderRadius: '2px',
          position: 'relative',
          marginBottom: '2rem'
        }}
      >
        {/* Era markers */}
        {timelineData.map((era, index) => {
          const position = `${(index / (timelineData.length - 1)) * 100}%`;
          
          return (
            <motion.div
              key={era.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 + (index * 0.1), duration: 0.5 }}
              onClick={() => handleEraSelect(era.id)}
              style={{
                position: 'absolute',
                left: position,
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: activeEra === era.id ? '22px' : '16px',
                height: activeEra === era.id ? '22px' : '16px',
                borderRadius: '50%',
                backgroundColor: era.color,
                boxShadow: activeEra === era.id 
                  ? '0 0 0 4px rgba(255,255,255,0.1), 0 0 15px rgba(255,255,255,0.2)' 
                  : '0 0 0 2px rgba(255,255,255,0.05)',
                cursor: 'pointer',
                zIndex: activeEra === era.id ? 2 : 1,
                transition: 'all 0.3s ease'
              }}
            >
              {/* Year label */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + (index * 0.1), duration: 0.5 }}
                style={{
                  position: 'absolute',
                  top: '24px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  whiteSpace: 'nowrap',
                  fontSize: '0.8rem',
                  fontWeight: activeEra === era.id ? 'bold' : 'normal',
                  color: activeEra === era.id ? 'white' : 'rgba(255,255,255,0.6)',
                  transition: 'all 0.3s ease'
                }}
              >
                {era.era}
              </motion.div>
            </motion.div>
          );
        })}
        
        {/* Progress bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ 
            width: `${(timelineData.findIndex(era => era.id === activeEra) / (timelineData.length - 1)) * 100}%` 
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            background: 'linear-gradient(90deg, var(--racing-red), var(--racing-red-light))',
            borderRadius: '2px',
            zIndex: 0
          }}
        />
      </motion.div>
      
      {/* Era details section */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeEraData.id}
          className="era-details"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          style={{
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '12px',
            padding: '2rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            border: '1px solid rgba(255,255,255,0.1)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Era color accent */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ duration: 0.5 }}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '6px',
              background: activeEraData.color,
              borderTopLeftRadius: '12px',
              borderBottomLeftRadius: '12px'
            }}
          />
          
          <div 
            className="era-content"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}
          >
            <div className="era-info">
              <motion.div
                className="era-icon"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${activeEraData.color}, rgba(255,255,255,0.1))`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}
              >
                <img src={activeEraData.icon} alt={activeEraData.title} style={{ width: '30px', height: '30px' }} />
              </motion.div>
              
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                style={{
                  fontSize: '1.8rem',
                  marginBottom: '0.5rem',
                  color: 'white'
                }}
              >
                {activeEraData.title}
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                style={{
                  fontSize: '1.1rem',
                  color: 'rgba(255,255,255,0.8)',
                  lineHeight: 1.6,
                  marginBottom: '1.5rem'
                }}
              >
                {activeEraData.description}
              </motion.p>
            </div>
            
            <div className="era-technologies">
              <motion.h4
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                style={{
                  fontSize: '1.2rem',
                  marginBottom: '1.5rem',
                  color: 'white'
                }}
              >
                Key Technologies
              </motion.h4>
              
              <motion.div
                className="tech-grid"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
                  gap: '1.5rem'
                }}
              >
                {activeEraData.technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className="tech-item"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                    }}
                    whileHover={{ y: -5, boxShadow: '0 8px 25px rgba(0,0,0,0.2)' }}
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      borderRadius: '8px',
                      padding: '1.2rem 1rem',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.8rem',
                      textAlign: 'center',
                      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                      border: '1px solid rgba(255,255,255,0.05)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <div 
                      style={{
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <img src={tech.icon} alt={tech.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                    <p style={{ fontSize: '0.9rem', margin: 0 }}>{tech.name}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
          
          {/* Auto-scroll toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setIsAutoScrolling(!isAutoScrolling);
              setHasManuallySelected(false);
            }}
            style={{
              position: 'absolute',
              bottom: '1rem',
              right: '1rem',
              background: 'transparent',
              border: 'none',
              color: isAutoScrolling ? 'var(--racing-red)' : 'rgba(255,255,255,0.5)',
              fontSize: '0.9rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 17H19M19 17L15 13M19 17L15 21M5 7H19M19 7L15 3M19 7L15 11" 
                stroke={isAutoScrolling ? 'var(--racing-red)' : 'rgba(255,255,255,0.5)'} 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            Auto-scroll {isAutoScrolling ? 'ON' : 'OFF'}
          </motion.button>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default SalesTechTimeline;