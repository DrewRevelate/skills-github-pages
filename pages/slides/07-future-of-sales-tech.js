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

const FutureOfSalesTech = () => {
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
            <h2>The <span>Future</span> of Sales Technology</h2>
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
                marginBottom: '3rem'
              }}
            >
              <p
                style={{
                  fontSize: '1.2rem',
                  maxWidth: '900px',
                  margin: '0 auto',
                  lineHeight: '1.6'
                }}
              >
                The next generation of sales technology is set to dramatically transform how 
                revenue teams operate — creating new possibilities and challenges for businesses.
              </p>
            </motion.div>
            
            <motion.div
              className="trends-grid"
              variants={staggerContainer}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '2rem',
                marginBottom: '3rem'
              }}
            >
              {/* Trend 1: AI-Powered Everything */}
              <motion.div
                className="trend-card"
                variants={fadeIn}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  padding: '2rem',
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
                    width: '100%',
                    height: '4px',
                    background: 'var(--racing-red)'
                  }}
                ></div>
                <h3
                  style={{
                    fontSize: '1.5rem',
                    color: 'white',
                    marginBottom: '1rem'
                  }}
                >
                  AI-Powered Everything
                </h3>
                <p style={{ marginBottom: '1.5rem' }}>
                  Generative AI is revolutionizing sales enablement by automating content creation, 
                  conversation analysis, and providing real-time coaching during customer interactions.
                </p>
                <div
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    marginBottom: '1.5rem'
                  }}
                >
                  <div
                    style={{
                      background: 'rgba(0,0,0,0.2)',
                      padding: '0.5rem 1rem',
                      borderRadius: '30px',
                      fontSize: '0.9rem'
                    }}
                  >
                    Generative AI
                  </div>
                  <div
                    style={{
                      background: 'rgba(0,0,0,0.2)',
                      padding: '0.5rem 1rem',
                      borderRadius: '30px',
                      fontSize: '0.9rem'
                    }}
                  >
                    Real-time Coaching
                  </div>
                </div>
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
                  <p>GPT-enabled email personalization, AI meeting assistants, automated proposal generation</p>
                </div>
              </motion.div>
              
              {/* Trend 2: Hyper-Personalization */}
              <motion.div
                className="trend-card"
                variants={fadeIn}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  padding: '2rem',
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
                    width: '100%',
                    height: '4px',
                    background: 'var(--racing-red)'
                  }}
                ></div>
                <h3
                  style={{
                    fontSize: '1.5rem',
                    color: 'white',
                    marginBottom: '1rem'
                  }}
                >
                  Hyper-Personalization
                </h3>
                <p style={{ marginBottom: '1.5rem' }}>
                  The shift from segment-based to individual-based engagement is enabling 1:1 
                  personalization at scale, with dynamic content adjusted for each buyer.
                </p>
                <div
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    marginBottom: '1.5rem'
                  }}
                >
                  <div
                    style={{
                      background: 'rgba(0,0,0,0.2)',
                      padding: '0.5rem 1rem',
                      borderRadius: '30px',
                      fontSize: '0.9rem'
                    }}
                  >
                    Behavioral Analytics
                  </div>
                  <div
                    style={{
                      background: 'rgba(0,0,0,0.2)',
                      padding: '0.5rem 1rem',
                      borderRadius: '30px',
                      fontSize: '0.9rem'
                    }}
                  >
                    Intent Data
                  </div>
                </div>
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
                  <p>Dynamic content recommendations, buyer intent tools, real-time website customization</p>
                </div>
              </motion.div>
              
              {/* Trend 3: Conversational Intelligence */}
              <motion.div
                className="trend-card"
                variants={fadeIn}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  padding: '2rem',
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
                    width: '100%',
                    height: '4px',
                    background: 'var(--racing-red)'
                  }}
                ></div>
                <h3
                  style={{
                    fontSize: '1.5rem',
                    color: 'white',
                    marginBottom: '1rem'
                  }}
                >
                  Conversational Intelligence
                </h3>
                <p style={{ marginBottom: '1.5rem' }}>
                  Advanced conversation analytics are transforming how we understand customer 
                  interactions, with real-time sentiment analysis and coaching becoming standard.
                </p>
                <div
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    marginBottom: '1.5rem'
                  }}
                >
                  <div
                    style={{
                      background: 'rgba(0,0,0,0.2)',
                      padding: '0.5rem 1rem',
                      borderRadius: '30px',
                      fontSize: '0.9rem'
                    }}
                  >
                    Sentiment Analysis
                  </div>
                  <div
                    style={{
                      background: 'rgba(0,0,0,0.2)',
                      padding: '0.5rem 1rem',
                      borderRadius: '30px',
                      fontSize: '0.9rem'
                    }}
                  >
                    Win/Loss Insights
                  </div>
                </div>
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
                  <p>Gong.io, Chorus.ai, real-time call coaching, automated meeting summaries</p>
                </div>
              </motion.div>
              
              {/* Trend 4: Revenue Intelligence */}
              <motion.div
                className="trend-card"
                variants={fadeIn}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  padding: '2rem',
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
                    width: '100%',
                    height: '4px',
                    background: 'var(--racing-red)'
                  }}
                ></div>
                <h3
                  style={{
                    fontSize: '1.5rem',
                    color: 'white',
                    marginBottom: '1rem'
                  }}
                >
                  Revenue Intelligence
                </h3>
                <p style={{ marginBottom: '1.5rem' }}>
                  Unifying all customer data points to create predictive insights and identify 
                  revenue opportunities that would otherwise remain hidden.
                </p>
                <div
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    marginBottom: '1.5rem'
                  }}
                >
                  <div
                    style={{
                      background: 'rgba(0,0,0,0.2)',
                      padding: '0.5rem 1rem',
                      borderRadius: '30px',
                      fontSize: '0.9rem'
                    }}
                  >
                    Predictive Analytics
                  </div>
                  <div
                    style={{
                      background: 'rgba(0,0,0,0.2)',
                      padding: '0.5rem 1rem',
                      borderRadius: '30px',
                      fontSize: '0.9rem'
                    }}
                  >
                    Revenue Attribution
                  </div>
                </div>
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
                  <p>Revenue data platforms, predictive analytics engines, intelligent forecasting</p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              className="preparation-section"
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
                How to Prepare for the Future
              </h3>
              
              <div
                className="preparation-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr',
                  gap: '1.5rem'
                }}
              >
                <motion.div
                  className="preparation-card"
                  variants={fadeIn}
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    height: '100%'
                  }}
                >
                  <div
                    className="step-number"
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
                      marginBottom: '1rem',
                      fontSize: '1.2rem'
                    }}
                  >
                    1
                  </div>
                  <h4
                    style={{
                      fontSize: '1.2rem',
                      color: 'white',
                      marginBottom: '1rem'
                    }}
                  >
                    Build a Data Foundation
                  </h4>
                  <p>
                    Clean, unified data is the fuel that powers all future sales tech. 
                    Invest in data quality, governance, and integration capabilities first.
                  </p>
                </motion.div>
                
                <motion.div
                  className="preparation-card"
                  variants={fadeIn}
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    height: '100%'
                  }}
                >
                  <div
                    className="step-number"
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
                      marginBottom: '1rem',
                      fontSize: '1.2rem'
                    }}
                  >
                    2
                  </div>
                  <h4
                    style={{
                      fontSize: '1.2rem',
                      color: 'white',
                      marginBottom: '1rem'
                    }}
                  >
                    Develop AI Strategy
                  </h4>
                  <p>
                    Create a clear roadmap for AI adoption in your sales process. Start with 
                    high-value, low-complexity use cases and scale from there.
                  </p>
                </motion.div>
                
                <motion.div
                  className="preparation-card"
                  variants={fadeIn}
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    height: '100%'
                  }}
                >
                  <div
                    className="step-number"
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
                      marginBottom: '1rem',
                      fontSize: '1.2rem'
                    }}
                  >
                    3
                  </div>
                  <h4
                    style={{
                      fontSize: '1.2rem',
                      color: 'white',
                      marginBottom: '1rem'
                    }}
                  >
                    Invest in Skills Development
                  </h4>
                  <p>
                    Modern sales requires new skills. Train teams on data literacy, AI tools, 
                    and how to work alongside automation technologies.
                  </p>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              className="quote-section"
              variants={fadeIn}
              style={{
                marginTop: '3rem',
                textAlign: 'center'
              }}
            >
              <div
                className="closing-quote"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  padding: '2rem',
                  borderRadius: '12px',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  maxWidth: '800px',
                  margin: '0 auto'
                }}
              >
                <p
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
                </p>
                <p
                  style={{
                    fontSize: '1rem'
                  }}
                >
                  The most successful companies will find the perfect balance between digital 
                  transformation and the irreplaceable human element.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default FutureOfSalesTech;
