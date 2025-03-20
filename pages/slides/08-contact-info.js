import React, { useState } from 'react';
import Layout from '../../components/Layout';
import ContactForm from '../../components/ContactForm';

const ContactInfo = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/drewblambert', '_blank');
  };

  return (
    <Layout
      title="Contact Information - Full Throttle Revenue"
      currentSlide={8}
      totalSlides={8}
      prevSlide="/slides/07-future-of-sales-tech"
      nextSlide={null}
    >
      <section className="slide active thank-you-slide" id="slide-7">
        <div className="racing-stripes-container">
          <div className="racing-stripe-animated red"></div>
          <div className="racing-stripe-animated yellow"></div>
          <div className="racing-stripe-animated black"></div>
        </div>
        <div className="pattern-bg"></div>
        <div className="racing-stripes">
          <div className="stripe"></div>
          <div className="stripe white"></div>
          <div className="stripe dark"></div>
        </div>
        
        <div className="slide-content">
          <h2 className="animate">THANK <span>YOU</span></h2>
          <p className="animate delay-1 questions-text">Questions?</p>
          <div className="racing-stripe animate delay-2"></div>
          
          <div className="thank-you-container animate delay-3">
            {/* Left column with contact info */}
            <div className="contact-card">
              <h4>Get in Touch</h4>
              <div className="contact-info">
                <p>
                  <span className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </span>
                  Drew Lambert | Revenue Operations Consultant
                </p>
                <p>
                  <span className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </span>
                  drew@revelateops.com
                </p>
                <p>
                  <span className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                  </span>
                  Revelate Operations, LLC
                </p>
              </div>
              
              <div className="action-buttons">
                <button id="connectBtn" className="action-button secondary" onClick={handleLinkedInClick}>
                  <img src="/images/icon-linkedin.svg" alt="LinkedIn" className="button-icon" width="20" height="20" />
                  Connect on LinkedIn
                </button>
                <a href="/citations.html" className="action-button tertiary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  View Citations
                </a>
              </div>
              
              {/* Success Message (hidden by default) */}
              <div id="contactFormSuccess" className="success-message" style={{ display: formSubmitted ? 'block' : 'none' }}>
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
            </div>
            
            {/* Right column with contact form */}
            <div className="contact-card">
              <h4>Interested in learning more?</h4>
              <p>Fill out this form to receive information about revenue operations and automation in your field.</p>
              
              <form id="contactForm" style={{ display: formSubmitted ? 'none' : 'block' }}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name*</label>
                    <input type="text" id="firstName" required placeholder="Your first name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name*</label>
                    <input type="text" id="lastName" required placeholder="Your last name" />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email*</label>
                    <input type="email" id="email" required placeholder="Your email address" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone (Optional)</label>
                    <input type="tel" id="phone" placeholder="Your phone number" />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="major">Major*</label>
                    <input type="text" id="major" required placeholder="Your major" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="gradYear">Graduation Year*</label>
                    <select id="gradYear" required>
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
                  <textarea id="careerGoals" rows="3" placeholder="Share your career aspirations"></textarea>
                </div>
                
                <div className="form-actions">
                  <button type="submit" className="form-submit" onClick={(e) => {
                    e.preventDefault();
                    setFormSubmitted(true);
                    localStorage.setItem('contactFormSubmitted', 'true');
                  }}>Submit</button>
                </div>
              </form>
              
              {formSubmitted && (
                <div className="success-message" style={{ display: 'block', height: 'calc(100% - 4rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '0' }}>
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
              )}
            </div>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        /* Base Slide Styling */
        #slide-7 {
            background: linear-gradient(135deg, #121212, #1e1e1e, #2a2a2a);
            overflow: hidden;
            position: relative;
            color: white;
        }
        
        #slide-7:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect fill="none" width="100" height="100"/><rect fill="rgba(225,6,0,0.03)" width="50" height="50"/><rect fill="rgba(225,6,0,0.03)" x="50" y="50" width="50" height="50"/></svg>');
            opacity: 0.5;
            z-index: 0;
        }
        
        #slide-7 .slide-content {
            position: relative;
            z-index: 2;
            color: white;
            padding-bottom: 60px;
        }
        
        /* Mobile optimizations */
        @media (max-width: 768px) {
            #slide-7 .slide-content {
                padding-bottom: 150px;
                min-height: 120vh;
            }
            
            .thank-you-slide h2 {
                font-size: 3.5rem;
            }
            
            .questions-text {
                font-size: 1.8rem;
            }
            
            .contact-details {
                flex-direction: column;
                gap: 1.5rem;
            }
            
            .contact-item {
                flex: 1 0 100%;
            }
        }
        
        /* Modern thank you slide styles */
        .thank-you-slide h2 {
            font-size: 5.5rem;
            font-weight: 700;
            margin-bottom: 2rem;
            text-transform: uppercase;
            text-shadow: 0 5px 15px rgba(0,0,0,0.5);
            position: relative;
            color: white;
        }
        
        .thank-you-slide h2 span {
            color: var(--racing-red);
            font-style: italic;
            position: relative;
            display: inline-block;
        }
        
        .thank-you-slide h2 span::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 0;
            width: 100%;
            height: 5px;
            background: linear-gradient(90deg, var(--racing-red), var(--accent-yellow));
            box-shadow: 0 0 10px rgba(225, 6, 0, 0.7);
            border-radius: 3px;
        }
        
        .thank-you-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            margin-top: 2rem;
        }
        
        .questions-text {
            font-size: 2.5rem;
            margin-bottom: 2rem;
            font-weight: 600;
            color: white;
            position: relative;
            display: inline-block;
        }
        
        .questions-text::before {
            content: '?';
            position: absolute;
            top: -40px;
            right: -30px;
            font-size: 6rem;
            color: var(--racing-red);
            opacity: 0.2;
            font-weight: 900;
            transform: rotate(15deg);
        }
        
        .racing-stripe {
            width: 180px;
            height: 8px;
            background: linear-gradient(90deg, var(--racing-red), var(--accent-yellow));
            margin: 2rem 0;
            position: relative;
            border-radius: 4px;
            box-shadow: 0 0 15px rgba(225, 6, 0, 0.3);
        }
        
        .contact-card {
            background: rgba(0, 0, 0, 0.2);
            padding: 2.5rem;
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
            position: relative;
            overflow: hidden;
            height: 100%;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .contact-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
            border-color: rgba(225, 6, 0, 0.3);
        }
        
        .contact-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 5px;
            background: linear-gradient(90deg, var(--racing-red), var(--accent-yellow));
        }
        
        .contact-info {
            margin-bottom: 2rem;
        }
        
        .contact-info p {
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            font-size: 1.2rem;
            color: rgba(255, 255, 255, 0.9);
        }
        
        .contact-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 36px;
            height: 36px;
            background: rgba(225, 6, 0, 0.2);
            border-radius: 50%;
            margin-right: 1rem;
            flex-shrink: 0;
        }
        
        .contact-icon svg {
            width: 18px;
            height: 18px;
            stroke: var(--racing-red);
            stroke-width: 2;
        }
        
        .action-buttons {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            margin-top: 2rem;
        }
        
        .action-button {
            padding: 1rem 1.8rem;
            border-radius: 8px;
            font-weight: 600;
            font-size: 1.1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            z-index: 1;
            text-align: center;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            justify-content: center;
        }
        
        .action-button::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: -100%;
            background: linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.1), rgba(255,255,255,0));
            transition: transform 0.6s ease;
            z-index: -1;
        }
        
        .action-button:hover::after {
            transform: translateX(200%);
        }
        
        .action-button.primary {
            background: linear-gradient(135deg, var(--racing-red), #d40600);
            color: white;
            border: none;
            box-shadow: 0 6px 15px rgba(225, 6, 0, 0.3);
        }
        
        .action-button.primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(225, 6, 0, 0.4);
        }
        
        .action-button.secondary {
            background-color: #0077B5; /* LinkedIn blue */
            color: white;
            border: none;
            box-shadow: 0 6px 15px rgba(0, 119, 181, 0.3);
        }
        
        .action-button.secondary:hover {
            background-color: #0066a1; /* Darker LinkedIn blue */
            transform: translateY(-3px);
            border-color: rgba(0,0,0,0.2);
            box-shadow: 0 8px 20px rgba(0, 119, 181, 0.4);
        }
        
        .action-button.tertiary {
            background-color: rgba(255, 218, 10, 0.1);
            color: white;
            border: 2px solid var(--accent-yellow);
        }
        
        .action-button.tertiary:hover {
            background-color: rgba(255, 218, 10, 0.2);
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(255, 218, 10, 0.2);
        }
        
        .button-icon {
            display: inline-block;
            margin-right: 8px;
            filter: brightness(1.5);
        }
        
        /* Contact Form Styles */
        .contact-form-container {
            background: rgba(0, 0, 0, 0.2);
            border-radius: 12px;
            padding: 1.5rem;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
            margin-top: 2rem;
        }
        
        .contact-form-container h4 {
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
            color: white;
        }
        
        .contact-form-container p {
            margin-bottom: 1.2rem;
            font-size: 0.95rem;
            color: rgba(255, 255, 255, 0.9);
        }
        
        .form-row {
            display: flex;
            gap: 1rem;
            margin-bottom: 1rem;
        }
        
        .form-group {
            flex: 1;
            margin-bottom: 1rem;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 0.4rem;
            font-size: 0.9rem;
            font-weight: 600;
            color: rgba(255, 255, 255, 0.9);
        }
        
        .form-group input,
        .form-group select,
        .form-group textarea {
            width: 100%;
            padding: 0.8rem;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 4px;
            font-family: inherit;
            font-size: 0.95rem;
            color: rgba(255, 255, 255, 0.9);
            background-color: rgba(0, 0, 0, 0.2);
        }
        
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: var(--racing-red);
            box-shadow: 0 0 0 3px rgba(225, 6, 0, 0.2);
        }
        
        .form-actions {
            display: flex;
            justify-content: flex-end;
            gap: 1rem;
            margin-top: 1.5rem;
        }
        
        .form-submit {
            padding: 0.8rem 1.5rem;
            background-color: var(--racing-red);
            color: white;
            border: none;
            border-radius: 4px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        
        .form-submit:hover {
            background-color: #c10600;
            transform: translateY(-2px);
        }
        
        .form-cancel {
            padding: 0.8rem 1.5rem;
            background-color: transparent;
            color: rgba(255, 255, 255, 0.7);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        
        .form-cancel:hover {
            background-color: rgba(255, 255, 255, 0.05);
        }
        
        .success-message {
            padding: 2rem;
            background: rgba(0, 0, 0, 0.3);
            border: 2px solid var(--racing-red);
            border-radius: 8px;
            color: white;
            text-align: center;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            transition: all 0.3s ease;
            animation: fadeIn 0.5s ease-out;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .success-message h3 {
            font-size: 2.2rem;
            margin-bottom: 1.5rem;
            color: var(--racing-red);
            text-shadow: 0 0 10px rgba(225, 6, 0, 0.3);
            font-weight: 800;
        }
        
        .success-message p {
            font-size: 1.2rem;
            margin-bottom: 1.5rem;
            line-height: 1.6;
            color: rgba(255, 255, 255, 0.95);
            max-width: 90%;
            margin-left: auto;
            margin-right: auto;
        }
        
        .success-message .follow-up-text {
            font-size: 1.1rem;
            font-weight: 600;
            color: var(--accent-yellow);
            margin-top: 1rem;
        }
        
        .thank-you-icon {
            margin: 1.5rem auto;
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }
        
        .thank-you-icon svg {
            stroke: var(--racing-red);
            filter: drop-shadow(0 0 8px rgba(225, 6, 0, 0.5));
        }
        
        /* Card heading styles */
        .contact-card h4 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: white;
            position: relative;
            display: inline-block;
        }
        
        .contact-card h4::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 40px;
            height: 2px;
            background: var(--racing-red);
        }
        
        .contact-card p {
            color: rgba(255, 255, 255, 0.9);
            line-height: 1.6;
        }
        
        /* Enhanced form styles */
        input::placeholder, 
        textarea::placeholder {
            color: rgba(255, 255, 255, 0.5);
        }
        
        /* Fancy background pattern */
        .pattern-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E10600' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
            opacity: 0.3;
            z-index: 1;
            pointer-events: none;
        }
        
        /* Media queries for responsiveness */
        @media (max-width: 992px) {
            .thank-you-container {
                grid-template-columns: 1fr;
                gap: 2rem;
            }
        }
        
        @media (max-width: 768px) {
            .thank-you-slide h2 {
                font-size: 4rem;
            }
            
            .questions-text {
                font-size: 2rem;
            }
            
            .action-buttons {
                flex-direction: column;
            }
        }
        
        /* Adding animated stripes at the top */
        .racing-stripes-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 6px;
            display: flex;
            overflow: hidden;
            z-index: 3;
        }
        
        .racing-stripe-animated {
            height: 100%;
            flex: 1;
        }
        
        .racing-stripe-animated.red {
            background-color: var(--racing-red);
        }
        
        .racing-stripe-animated.yellow {
            background-color: var(--accent-yellow);
        }
        
        .racing-stripe-animated.black {
            background-color: #333;
        }
        
        /* Animate section transitions */
        .animate {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .delay-1 {
            transition-delay: 0.2s;
        }
        
        .delay-2 {
            transition-delay: 0.4s;
        }
        
        .delay-3 {
            transition-delay: 0.6s;
        }
        
        .visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        /* Adding racing stripes */
        .racing-stripes {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 80px;
            z-index: 3;
            overflow: hidden;
        }
        
        .stripe {
            height: 10px;
            background: var(--racing-red);
            margin-bottom: 10px;
            transform: skewY(-2deg) translateY(10px);
            opacity: 0.85;
        }
        
        .stripe.white {
            width: 80%;
            background: white;
        }
        
        .stripe.dark {
            width: 60%;
            background: #333;
        }
      `}</style>
    </Layout>
  );
};

export default ContactInfo;
