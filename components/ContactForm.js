import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import supabase from '../utils/supabaseClient';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    interest: 'general' // Default interest
  });
  
  const [formState, setFormState] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });

  // Update form data when inputs change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Submit form data to Supabase
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email) {
      setFormState(prev => ({
        ...prev,
        error: 'Name and email are required'
      }));
      return;
    }
    
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormState(prev => ({
        ...prev,
        error: 'Please enter a valid email address'
      }));
      return;
    }
    
    setFormState(prev => ({
      ...prev,
      isSubmitting: true,
      error: null
    }));
    
    try {
      // Insert contact data to Supabase
      const { error } = await supabase
        .from('contacts')
        .insert([
          { 
            name: formData.name,
            email: formData.email,
            company: formData.company,
            message: formData.message,
            interest: formData.interest,
            source: 'presentation'
          }
        ]);
        
      if (error) throw error;
      
      // Form submitted successfully
      setFormState({
        isSubmitting: false,
        isSubmitted: true,
        error: null
      });
    } catch (err) {
      console.error('Error submitting form:', err);
      setFormState({
        isSubmitting: false,
        isSubmitted: false,
        error: 'Failed to submit form. Please try again later.'
      });
    }
  };

  // Reset form to try again
  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
      interest: 'general'
    });
    
    setFormState({
      isSubmitting: false,
      isSubmitted: false,
      error: null
    });
  };

  return (
    <motion.div
      className="contact-form-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        background: 'rgba(255, 255, 255, 0.05)',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        maxWidth: '600px',
        margin: '0 auto',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Racing stripe accent */}
      <motion.div
        className="form-racing-stripe"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '4px',
          background: 'linear-gradient(90deg, var(--racing-red), transparent)'
        }}
      />
      
      <AnimatePresence mode="wait">
        {!formState.isSubmitted ? (
          <motion.form
            key="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              style={{
                fontSize: '1.6rem',
                marginBottom: '1.5rem',
                textAlign: 'center',
                color: 'white'
              }}
            >
              Get in <span style={{ color: 'var(--racing-red)' }}>Touch</span>
            </motion.h3>
            
            {formState.error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  background: 'rgba(225, 6, 0, 0.15)',
                  padding: '0.8rem',
                  borderRadius: '6px',
                  marginBottom: '1.5rem',
                  color: 'var(--racing-red)',
                  textAlign: 'center'
                }}
              >
                {formState.error}
              </motion.div>
            )}
            
            <motion.div
              className="form-fields"
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
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}
            >
              {/* Name field */}
              <motion.div
                className="form-field"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
              >
                <label 
                  htmlFor="name"
                  style={{
                    display: 'block',
                    marginBottom: '0.4rem',
                    fontSize: '0.9rem',
                    color: 'var(--racing-silver)'
                  }}
                >
                  Your Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    borderRadius: '6px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: 'white',
                    fontSize: '1rem'
                  }}
                />
              </motion.div>
              
              {/* Email field */}
              <motion.div
                className="form-field"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
              >
                <label 
                  htmlFor="email"
                  style={{
                    display: 'block',
                    marginBottom: '0.4rem',
                    fontSize: '0.9rem',
                    color: 'var(--racing-silver)'
                  }}
                >
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    borderRadius: '6px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: 'white',
                    fontSize: '1rem'
                  }}
                />
              </motion.div>
              
              {/* Company field */}
              <motion.div
                className="form-field"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
              >
                <label 
                  htmlFor="company"
                  style={{
                    display: 'block',
                    marginBottom: '0.4rem',
                    fontSize: '0.9rem',
                    color: 'var(--racing-silver)'
                  }}
                >
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    borderRadius: '6px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: 'white',
                    fontSize: '1rem'
                  }}
                />
              </motion.div>
              
              {/* Interest selection */}
              <motion.div
                className="form-field"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
              >
                <label 
                  htmlFor="interest"
                  style={{
                    display: 'block',
                    marginBottom: '0.4rem',
                    fontSize: '0.9rem',
                    color: 'var(--racing-silver)'
                  }}
                >
                  Primary Interest
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    borderRadius: '6px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: 'white',
                    fontSize: '1rem',
                    appearance: 'none',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    backgroundSize: '16px'
                  }}
                >
                  <option value="general">General Information</option>
                  <option value="revops">Revenue Operations</option>
                  <option value="salesforce">Salesforce Consulting</option>
                  <option value="automation">Sales Automation</option>
                  <option value="other">Other</option>
                </select>
              </motion.div>
              
              {/* Message field */}
              <motion.div
                className="form-field"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
              >
                <label 
                  htmlFor="message"
                  style={{
                    display: 'block',
                    marginBottom: '0.4rem',
                    fontSize: '0.9rem',
                    color: 'var(--racing-silver)'
                  }}
                >
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    borderRadius: '6px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: 'white',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                />
              </motion.div>
              
              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={formState.isSubmitting}
                whileHover={{ scale: 1.05, boxShadow: '0 8px 25px rgba(225, 6, 0, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                style={{
                  background: 'var(--racing-red)',
                  color: 'white',
                  padding: '0.8rem 1.5rem',
                  borderRadius: '8px',
                  border: 'none',
                  marginTop: '1rem',
                  cursor: formState.isSubmitting ? 'not-allowed' : 'pointer',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  boxShadow: '0 5px 15px rgba(225, 6, 0, 0.2)',
                  alignSelf: 'center',
                  opacity: formState.isSubmitting ? 0.7 : 1,
                  width: '100%'
                }}
              >
                {formState.isSubmitting ? 'Submitting...' : 'Submit'}
              </motion.button>
              
              <motion.p
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 0.8, transition: { delay: 0.5, duration: 0.5 } }
                }}
                style={{
                  fontSize: '0.8rem',
                  textAlign: 'center',
                  color: 'var(--racing-silver)',
                  marginTop: '0.5rem'
                }}
              >
                * Required fields
              </motion.p>
            </motion.div>
          </motion.form>
        ) : (
          /* Success message after form submission */
          <motion.div
            key="success-message"
            className="success-message"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            style={{
              textAlign: 'center',
              padding: '2rem 1rem'
            }}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'var(--racing-red)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem'
              }}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
            
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              style={{
                fontSize: '1.8rem',
                marginBottom: '1rem',
                color: 'white'
              }}
            >
              Thanks for Reaching Out!
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              style={{
                fontSize: '1.1rem',
                marginBottom: '2rem',
                lineHeight: 1.5
              }}
            >
              I've received your message and will get back to you shortly.
            </motion.p>
            
            <motion.button
              onClick={handleReset}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                padding: '0.8rem 1.5rem',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '1rem'
              }}
            >
              Send Another Message
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Racing checkered flag pattern */}
      <motion.div
        className="form-checkered-flag"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '150px',
          height: '150px',
          backgroundImage: 'repeating-conic-gradient(#fff 0% 25%, transparent 0% 50%)',
          backgroundSize: '20px 20px',
          zIndex: 0,
          pointerEvents: 'none',
          mixBlendMode: 'overlay'
        }}
      />
    </motion.div>
  );
};

export default ContactForm;