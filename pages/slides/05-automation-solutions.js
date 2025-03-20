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

const AutomationSolutions = () => {
  return (
    <Layout
      title="Automation Solutions - Full Throttle Revenue"
      currentSlide={5}
      totalSlides={8}
      prevSlide="/slides/04-sales-tech-evolution"
      nextSlide="/slides/06-human-vs-automation"
    >
      <section className="slide active" id="automation-solutions">
        <div className="slide-content">
          <motion.div
            className="slide-header"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h2>Revenue <span>Automation</span> Solutions</h2>
            <div className="slide-subtitle">Turbocharging Your Sales Process with Technology</div>
          </motion.div>
          
          <motion.div
            className="automation-grid"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: '2rem',
              marginTop: '2rem'
            }}
          >
            {/* Process Automation */}
            <motion.div
              className="automation-card"
              variants={fadeIn}
              style={{
                background: 'rgba(255,255,255,0.05)',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                border: '1px solid rgba(255,255,255,0.1)',
                height: '100%'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginBottom: '1.5rem'
                }}
              >
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: 'rgba(225, 6, 0, 0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '1rem'
                  }}
                >
                  <img 
                    src="/images/icon-server.svg" 
                    alt="Process Automation" 
                    style={{ width: '40px', height: '40px' }}
                  />
                </div>
                <h3
                  style={{
                    fontSize: '1.5rem',
                    color: 'white',
                    fontWeight: '600',
                    marginBottom: '1rem',
                    textAlign: 'center'
                  }}
                >
                  Process Automation
                </h3>
              </div>
              
              <ul 
                className="racing-list" 
                style={{ 
                  marginBottom: '1.5rem',
                  listStyle: 'none'
                }}
              >
                <li>Workflow & approval automation</li>
                <li>Data entry & enrichment</li>
                <li>Document generation</li>
                <li>Contract process automation</li>
              </ul>
              
              <div
                className="tech-examples"
                style={{
                  background: 'rgba(0,0,0,0.2)',
                  padding: '1rem',
                  borderRadius: '8px',
                  fontSize: '0.9rem'
                }}
              >
                <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--racing-silver)' }}>
                  Key Technologies:
                </strong>
                <p>Salesforce Flow, DocuSign, PandaDoc, HubSpot Workflows</p>
              </div>
            </motion.div>
            
            {/* Data Integration */}
            <motion.div
              className="automation-card"
              variants={fadeIn}
              style={{
                background: 'rgba(255,255,255,0.05)',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                border: '1px solid rgba(255,255,255,0.1)',
                height: '100%'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginBottom: '1.5rem'
                }}
              >
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: 'rgba(225, 6, 0, 0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '1rem'
                  }}
                >
                  <img 
                    src="/images/icon-database.svg" 
                    alt="Data Integration" 
                    style={{ width: '40px', height: '40px' }}
                  />
                </div>
                <h3
                  style={{
                    fontSize: '1.5rem',
                    color: 'white',
                    fontWeight: '600',
                    marginBottom: '1rem',
                    textAlign: 'center'
                  }}
                >
                  Data Integration
                </h3>
              </div>
              
              <ul 
                className="racing-list" 
                style={{ 
                  marginBottom: '1.5rem',
                  listStyle: 'none'
                }}
              >
                <li>Cross-platform data synchronization</li>
                <li>Real-time data enrichment</li>
                <li>Customer 360° views</li>
                <li>Unified reporting dashboards</li>
              </ul>
              
              <div
                className="tech-examples"
                style={{
                  background: 'rgba(0,0,0,0.2)',
                  padding: '1rem',
                  borderRadius: '8px',
                  fontSize: '0.9rem'
                }}
              >
                <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--racing-silver)' }}>
                  Key Technologies:
                </strong>
                <p>MuleSoft, Zapier, Segment, Clearbit, ZoomInfo</p>
              </div>
            </motion.div>
            
            {/* AI-Powered Tools */}
            <motion.div
              className="automation-card"
              variants={fadeIn}
              style={{
                background: 'rgba(255,255,255,0.05)',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                border: '1px solid rgba(255,255,255,0.1)',
                height: '100%'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginBottom: '1.5rem'
                }}
              >
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: 'rgba(225, 6, 0, 0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '1rem'
                  }}
                >
                  <img 
                    src="/images/icon-ai.svg" 
                    alt="AI-Powered Tools" 
                    style={{ width: '40px', height: '40px' }}
                  />
                </div>
                <h3
                  style={{
                    fontSize: '1.5rem',
                    color: 'white',
                    fontWeight: '600',
                    marginBottom: '1rem',
                    textAlign: 'center'
                  }}
                >
                  AI-Powered Tools
                </h3>
              </div>
              
              <ul 
                className="racing-list" 
                style={{ 
                  marginBottom: '1.5rem',
                  listStyle: 'none'
                }}
              >
                <li>Predictive lead scoring</li>
                <li>Conversation intelligence</li>
                <li>Deal insights & recommendations</li>
                <li>Forecast accuracy improvement</li>
              </ul>
              
              <div
                className="tech-examples"
                style={{
                  background: 'rgba(0,0,0,0.2)',
                  padding: '1rem',
                  borderRadius: '8px',
                  fontSize: '0.9rem'
                }}
              >
                <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--racing-silver)' }}>
                  Key Technologies:
                </strong>
                <p>Gong.io, Salesforce Einstein, Drift, Clari</p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="implementations-section"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            style={{
              marginTop: '3rem'
            }}
          >
            <h3
              className="secondary-heading"
              style={{
                marginBottom: '1.5rem'
              }}
            >
              Real-World Implementation Examples
            </h3>
            
            <div
              className="implementation-cards"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '2rem'
              }}
            >
              {/* Example 1 */}
              <motion.div
                className="implementation-card"
                variants={fadeIn}
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
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '6px',
                    height: '100%',
                    background: 'var(--racing-red)'
                  }}
                ></div>
                
                <h4
                  style={{
                    fontSize: '1.3rem',
                    color: 'white',
                    marginBottom: '1rem'
                  }}
                >
                  SaaS Company Lead-to-Cash Transformation
                </h4>
                
                <p style={{ marginBottom: '1rem' }}>
                  Reduced sales cycle by 40% and increased deal volume by 25% through:
                </p>
                
                <ul
                  style={{
                    paddingLeft: '1.5rem',
                    marginBottom: '1rem'
                  }}
                >
                  <li>Automated lead routing & scoring</li>
                  <li>AI-powered opportunity insights</li>
                  <li>Integrated contract workflow</li>
                  <li>Unified reporting across sales & finance</li>
                </ul>
                
                <div
                  style={{
                    marginTop: 'auto',
                    fontSize: '0.9rem',
                    color: 'var(--racing-silver)',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '1rem'
                  }}
                >
                  <strong>ROI:</strong> 320% over 18 months
                </div>
              </motion.div>
              
              {/* Example 2 */}
              <motion.div
                className="implementation-card"
                variants={fadeIn}
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
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '6px',
                    height: '100%',
                    background: 'var(--racing-red)'
                  }}
                ></div>
                
                <h4
                  style={{
                    fontSize: '1.3rem',
                    color: 'white',
                    marginBottom: '1rem'
                  }}
                >
                  Manufacturing Firm Sales Process Automation
                </h4>
                
                <p style={{ marginBottom: '1rem' }}>
                  Saved 15 hours per rep weekly and improved forecast accuracy by 30% through:
                </p>
                
                <ul
                  style={{
                    paddingLeft: '1.5rem',
                    marginBottom: '1rem'
                  }}
                >
                  <li>Custom CPQ implementation</li>
                  <li>Automated approval workflows</li>
                  <li>Customer portal integration</li>
                  <li>Mobile sales tools for field team</li>
                </ul>
                
                <div
                  style={{
                    marginTop: 'auto',
                    fontSize: '0.9rem',
                    color: 'var(--racing-silver)',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '1rem'
                  }}
                >
                  <strong>ROI:</strong> 280% over 24 months
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AutomationSolutions;
