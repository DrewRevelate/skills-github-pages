import React, { useEffect } from 'react';
import Layout from '../../components/Layout';

const PresenterProfile = () => {
  // Add animation handling outside of the Layout component to ensure it runs correctly
  useEffect(() => {
    // Enhanced animations with staggered timing (matching HTML version)
    setTimeout(() => {
      const elements = document.querySelectorAll('.animate');
      elements.forEach((element, index) => {
        setTimeout(() => {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }, 100 * index);
      });

      // Add bounce animation to profile image
      const profileImage = document.querySelector('.profile-image');
      if (profileImage) {
        profileImage.classList.add('bounce');
      }
    }, 200);
  }, []);

  return (
    <Layout
      title="Presenter Profile - Full Throttle Revenue"
      currentSlide={2}
      totalSlides={8}
      prevSlide="/slides/01-introduction"
      nextSlide="/slides/03-revenue-acceleration"
    >
      <section className="slide active profile-slide" id="slide-1">
        <div className="slide-content">
          <div className="profile-container">
            {/* Left Column: Image and Specialties */}
            <div className="profile-left-column">
              <div className="profile-image-container animate">
                <div className="profile-image">
                  <img src="/images/profile.jpeg" alt="Drew Lambert" width="220" height="220" />
                </div>
              </div>
              
              <div className="profile-specialties animate delay-2">
                <h3>Specialties</h3>
                <div className="specialties-grid">
                  <div className="specialty-item">
                    <span className="specialty-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </span>
                    RevOps Strategy
                  </div>
                  <div className="specialty-item">
                    <span className="specialty-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </span>
                    Apex & LWC
                  </div>
                  <div className="specialty-item">
                    <span className="specialty-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 8v4l3 3"></path>
                      </svg>
                    </span>
                    Workflow Automation
                  </div>
                  <div className="specialty-item">
                    <span className="specialty-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                    </span>
                    API Integrations
                  </div>
                  <div className="specialty-item">
                    <span className="specialty-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="3"></circle>
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                      </svg>
                    </span>
                    Data Architecture
                  </div>
                  <div className="specialty-item">
                    <span className="specialty-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="20" x2="18" y2="10"></line>
                        <line x1="12" y1="20" x2="12" y2="4"></line>
                        <line x1="6" y1="20" x2="6" y2="14"></line>
                      </svg>
                    </span>
                    Revenue Analytics
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column: Profile Info and Companies */}
            <div className="profile-right-column">
              <div className="profile-header animate">
                <h1 className="profile-name">Drew Lambert</h1>
                <p className="profile-title">Revenue Operations Expert & Salesforce Engineer</p>
              </div>
              
              <div className="profile-companies animate delay-1">
                <div className="company-block">
                  <h3 className="profile-company">REVELATE OPERATIONS, LLC</h3>
                  <p className="profile-role">Founder & Principal Consultant</p>
                  <p className="profile-description">
                    Drew Lambert is a Revenue Operations expert with over 7 years of experience in Salesforce and automation technologies. He specializes in designing and implementing revenue systems that enhance operational efficiency and drive measurable business growth.
                  </p>
                </div>
                
                <div className="company-block">
                  <h3 className="profile-company">BEVI</h3>
                  <p className="profile-role">Senior Salesforce Engineer</p>
                  <p className="profile-description">
                    At Bevi, Drew leads enterprise Salesforce engineering initiatives, focusing on scaling revenue operations through intelligent automation, cross-platform data integration, and streamlined business processes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          /* Override the slide background to match our dark theme */
          #slide-1 {
            background: linear-gradient(135deg, #121212, #1e1e1e, #2a2a2a);
            color: var(--text-light);
            position: relative;
          }
          
          #slide-1:before {
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
          
          #slide-1 .slide-content {
            position: relative;
            z-index: 2;
            padding: 2rem 3rem;
            display: flex;
            flex-direction: column;
            height: 100%;
          }
          
          /* Redesigned layout for better space utilization */
          .profile-container {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 2rem;
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            height: 100%;
          }
          
          /* Left column: Profile image and specialties */
          .profile-left-column {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          
          .profile-image-container {
            text-align: center;
            margin-bottom: 2rem;
          }
          
          .profile-image {
            width: 220px;
            height: 220px;
            border-radius: 50%;
            border: 5px solid var(--racing-red);
            box-shadow: 0 15px 35px rgba(0,0,0,0.3);
            position: relative;
            overflow: hidden;
            margin: 0 auto;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          
          .profile-image:hover {
            transform: scale(1.05);
            box-shadow: 0 20px 40px rgba(225, 6, 0, 0.4);
          }
          
          .profile-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          
          .profile-image::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to top, rgba(0,0,0,0.2), transparent 50%);
          }
          
          /* Right column: Profile information and descriptions */
          .profile-right-column {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          
          .profile-header {
            margin-bottom: 1.5rem;
          }
          
          .profile-name {
            font-size: 3.5rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
            position: relative;
            display: inline-block;
            color: white;
            text-shadow: 0 2px 15px rgba(225, 6, 0, 0.4);
            line-height: 1.1;
          }
          
          .profile-name::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 0;
            width: 80%;
            height: 4px;
            background: linear-gradient(90deg, var(--racing-red), var(--accent-yellow));
            border-radius: 2px;
            box-shadow: 0 2px 10px rgba(225, 6, 0, 0.3);
          }
          
          .profile-title {
            font-size: 1.6rem;
            font-weight: 400;
            margin-top: 1rem;
            margin-bottom: 0;
            color: rgba(255, 255, 255, 0.9);
            line-height: 1.4;
          }
          
          .profile-companies {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.5rem;
            margin-bottom: 1.5rem;
          }
          
          .company-block {
            background: rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            padding: 1.2rem 1.5rem;
            border-left: 4px solid var(--racing-red);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          
          .company-block:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          }
          
          .profile-company {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
            color: var(--racing-red);
            text-shadow: 0 0 10px rgba(225, 6, 0, 0.3);
            display: block;
          }
          
          .profile-role {
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 0.8rem;
            color: white;
          }
          
          .profile-description {
            margin: 0;
            font-size: 1.1rem;
            line-height: 1.6;
            color: rgba(255, 255, 255, 0.9);
          }
          
          .profile-specialties {
            background: rgba(20, 20, 20, 0.7);
            border-radius: 12px;
            padding: 1.5rem;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            position: relative;
            border: 1px solid rgba(255, 255, 255, 0.1);
            width: 100%;
          }
          
          .profile-specialties::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 5px;
            background: linear-gradient(90deg, var(--racing-red), var(--accent-yellow));
            border-radius: 12px 12px 0 0;
            box-shadow: 0 0 15px rgba(225, 6, 0, 0.3);
          }
          
          .profile-specialties h3 {
            font-size: 1.4rem;
            margin-bottom: 1.2rem;
            color: white;
            font-weight: 600;
            letter-spacing: 0.5px;
            text-shadow: 0 2px 8px rgba(0,0,0,0.5);
            text-align: center;
          }
          
          .specialties-grid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 0.8rem;
            width: 100%;
          }
          
          .specialty-item {
            display: flex;
            align-items: center;
            padding: 0.7rem 1rem;
            background: rgba(255, 255, 255, 0.07);
            border-radius: 8px;
            color: rgba(255, 255, 255, 0.95);
            font-size: 1rem;
            font-weight: 500;
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
            cursor: pointer;
          }
          
          .specialty-item:hover {
            background: rgba(255, 255, 255, 0.1);
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            border-color: rgba(225, 6, 0, 0.3);
          }
          
          .specialty-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 32px;
            height: 32px;
            background: rgba(225, 6, 0, 0.2);
            border-radius: 50%;
            margin-right: 0.8rem;
            flex-shrink: 0;
            box-shadow: 0 3px 10px rgba(225, 6, 0, 0.2);
            transition: all 0.3s ease;
          }
          
          .specialty-item:hover .specialty-icon {
            background: rgba(225, 6, 0, 0.3);
            box-shadow: 0 0 15px rgba(225, 6, 0, 0.4);
          }
          
          .specialty-icon svg {
            width: 16px;
            height: 16px;
            stroke: var(--racing-red);
            stroke-width: 2;
          }
          
          /* Animation classes */
          .animate {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.8s ease, transform 0.8s ease;
          }
          
          .active .animate {
            opacity: 1;
            transform: translateY(0);
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
          
          @keyframes bounce-in {
            0% { opacity: 0; transform: scale(0.8); }
            40% { opacity: 1; transform: scale(1.1); }
            60% { transform: scale(0.9); }
            100% { transform: scale(1); }
          }
          
          .bounce {
            animation: bounce-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          
          /* Media queries for responsiveness */
          @media (max-width: 1200px) {
            .profile-container {
              grid-template-columns: 1fr 1.5fr;
            }
            
            .specialties-grid {
              grid-template-columns: 1fr 1fr;
            }
          }
          
          @media (max-width: 992px) {
            .profile-container {
              grid-template-columns: 1fr;
              gap: 2rem;
            }
            
            .profile-left-column {
              display: grid;
              grid-template-columns: auto 1fr;
              align-items: center;
              gap: 2rem;
            }
            
            .profile-image-container {
              margin-bottom: 0;
            }
            
            .profile-specialties {
              height: 100%;
            }
            
            .profile-image {
              width: 180px;
              height: 180px;
            }
          }
          
          @media (max-width: 768px) {
            .profile-left-column {
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            
            .profile-header {
              text-align: center;
            }
            
            .company-block {
              margin-bottom: 1.5rem;
              padding: 2rem;
            }
            
            .company-block:last-child {
              margin-bottom: 0;
            }
            
            .profile-companies {
              margin-bottom: 2rem;
            }
            
            .profile-name {
              font-size: 2.8rem;
            }
            
            .profile-name::after {
              width: 100%;
              left: 0;
              right: 0;
              margin: 0 auto;
            }
            
            .profile-title {
              font-size: 1.4rem;
              text-align: center;
            }
            
            .specialties-grid {
              grid-template-columns: 1fr;
            }
            
            .profile-image {
              width: 160px;
              height: 160px;
            }
            
            #slide-1 .slide-content {
              padding: 2rem 1.5rem;
              padding-bottom: 120px; /* Reduced padding for better mobile layout */
            }
          }
          
          @media (max-width: 480px) {
            #slide-1 .slide-content {
              padding-bottom: 150px; /* Reduced padding for better mobile layout */
              padding-top: 1rem;
            }
            
            .company-block {
              padding: 1.5rem;
            }
            
            .profile-company {
              font-size: 1.3rem;
            }
            
            .profile-role {
              font-size: 1.1rem;
            }
            
            .profile-description {
              font-size: 1rem;
            }
          }
        `}</style>
      </section>
    </Layout>
  );
};

export default PresenterProfile;
