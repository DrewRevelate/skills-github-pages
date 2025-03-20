import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import supabase from '../utils/supabaseClient';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    major: '',
    gradYear: '',
    careerGoals: ''
  });
  
  const [formState, setFormState] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });

  // Check if form was previously submitted (browser storage)
  useEffect(() => {
    const formAlreadySubmitted = localStorage.getItem('contactFormSubmitted');
    if (formAlreadySubmitted === 'true') {
      setFormState({
        isSubmitting: false,
        isSubmitted: true,
        error: null
      });
    }
  }, []);

  // Update form data when inputs change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Submit form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email) {
      setFormState(prev => ({
        ...prev,
        error: 'Required fields must be filled in'
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
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mark as submitted in localStorage
      localStorage.setItem('contactFormSubmitted', 'true');
      
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

  // If already submitted, show success message
  if (formState.isSubmitted) {
    return (
      <div className="success-message">
        <h3>You're All Set!</h3>
        <p>Thanks for your interest in revenue operations! I've added you to my list of promising students to connect with about internships, entry-level opportunities, and career guidance in the fast-growing RevOps field.</p>
        <div className="thank-you-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="var(--racing-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        <p className="follow-up-text">Be sure to connect on LinkedIn for more career resources!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {formState.error && (
        <div style={{
          padding: '0.8rem',
          marginBottom: '1rem',
          backgroundColor: 'rgba(225, 6, 0, 0.15)',
          color: 'white',
          borderRadius: '4px',
          textAlign: 'center'
        }}>
          {formState.error}
        </div>
      )}
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName">First Name*</label>
          <input 
            type="text" 
            id="firstName" 
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required 
            placeholder="Your first name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name*</label>
          <input 
            type="text" 
            id="lastName" 
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required 
            placeholder="Your last name"
          />
        </div>
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">Email*</label>
          <input 
            type="email" 
            id="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            required 
            placeholder="Your email address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone (Optional)</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your phone number"
          />
        </div>
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="major">Major*</label>
          <input 
            type="text" 
            id="major" 
            name="major"
            value={formData.major}
            onChange={handleChange}
            required 
            placeholder="Your major"
          />
        </div>
        <div className="form-group">
          <label htmlFor="gradYear">Graduation Year*</label>
          <select 
            id="gradYear" 
            name="gradYear"
            value={formData.gradYear}
            onChange={handleChange}
            required
          >
            <option value="">Select Year</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
      
      <div className="form-group">
        <label htmlFor="careerGoals">Career Goals (Optional)</label>
        <textarea 
          id="careerGoals" 
          name="careerGoals"
          value={formData.careerGoals}
          onChange={handleChange}
          rows="3" 
          placeholder="Share your career aspirations"
        ></textarea>
      </div>
      
      <div className="form-actions">
        <button 
          type="submit" 
          className="form-submit"
          disabled={formState.isSubmitting}
        >
          {formState.isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;