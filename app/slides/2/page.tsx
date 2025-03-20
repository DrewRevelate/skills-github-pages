import Image from 'next/image';
import SlideLayout from '@/app/components/SlideLayout';
import TouchNavigation from '@/app/components/TouchNavigation';

export default function PresenterProfile() {
  return (
    <SlideLayout slideNumber={2} totalSlides={8} slideId="slide-1">
      <div className="slide-content">
        <div className="profile-container">
          <div className="profile-left-column">
            <div className="profile-header">
              <div className="profile-badge">YOUR PRESENTER</div>
              <h2 className="profile-name">Drew Lambert</h2>
              <div className="profile-title">Revenue Operations Specialist & Sales Engineer</div>
            </div>
            
            <div className="profile-image-wrapper">
              <div className="profile-image">
                <Image 
                  src="/images/profile.jpeg" 
                  alt="Drew Lambert" 
                  width={300} 
                  height={300}
                  layout="responsive"
                />
              </div>
            </div>
            
            <div className="profile-company animate delay-1">
              <div className="company-box">
                <div className="company-logo">
                  <Image 
                    src="/images/company-logo.png" 
                    alt="Revelate Operations Logo" 
                    width={50} 
                    height={50}
                  />
                </div>
                <div className="company-details">
                  <div className="company-name">REVELATE OPERATIONS, LLC</div>
                  <div className="position-title">Founder & Principal Consultant</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="profile-right-column">
            <div className="experience-section animate delay-2">
              <h3 className="section-title">Professional Experience</h3>
              <div className="experience-stats">
                <div className="stat-box">
                  <div className="stat-number">13+</div>
                  <div className="stat-label">Years in Sales Technology</div>
                </div>
                <div className="stat-box">
                  <div className="stat-number">85+</div>
                  <div className="stat-label">Enterprise Implementations</div>
                </div>
                <div className="stat-box">
                  <div className="stat-number">$4M+</div>
                  <div className="stat-label">Revenue Impact</div>
                </div>
              </div>
              
              <div className="career-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">
                    <span>↗</span>
                  </div>
                  <div className="highlight-content">
                    <div className="highlight-title">From Street to C-Suite</div>
                    <div className="highlight-description">Started as a field sales rep, evolved into a trusted advisor for executive revenue leaders</div>
                  </div>
                </div>
                
                <div className="highlight-item">
                  <div className="highlight-icon">
                    <span>💡</span>
                  </div>
                  <div className="highlight-content">
                    <div className="highlight-title">Technical Problem Solver</div>
                    <div className="highlight-description">Known for creating innovative solutions that blend business strategy with technical implementation</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="specialties-section animate delay-3">
              <h3 className="section-title">Areas of Expertise</h3>
              <div className="specialties-grid">
                <div className="specialty-item">
                  <div className="specialty-title">Revenue Operations Architecture</div>
                </div>
                <div className="specialty-item">
                  <div className="specialty-title">Salesforce Engineering</div>
                </div>
                <div className="specialty-item">
                  <div className="specialty-title">Go-to-Market Strategy</div>
                </div>
                <div className="specialty-item">
                  <div className="specialty-title">Sales Process Optimization</div>
                </div>
                <div className="specialty-item">
                  <div className="specialty-title">Data Integration & Analytics</div>
                </div>
                <div className="specialty-item">
                  <div className="specialty-title">Business Automation</div>
                </div>
              </div>
            </div>
            
            <div className="education-section animate delay-4">
              <h3 className="section-title">Education</h3>
              <div className="education-grid">
                <div className="edu-item">
                  <div className="edu-logo">
                    <span>🎓</span>
                  </div>
                  <div className="edu-details">
                    <div className="edu-name">UMass Lowell</div>
                    <div className="edu-degree">Bachelor of Science, Business</div>
                  </div>
                </div>
                <div className="edu-item">
                  <div className="edu-logo">
                    <span>🏆</span>
                  </div>
                  <div className="edu-details">
                    <div className="edu-name">Certifications</div>
                    <div className="edu-degree">Salesforce Admin, Sales Cloud, CPQ</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TouchNavigation prevLink="/" nextLink="/slides/3" />

      <style jsx>{`
        .slide-content {
          position: relative;
          z-index: 5;
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem;
          height: 100%;
          overflow-y: auto;
          color: white;
        }
        
        .profile-container {
          display: grid;
          grid-template-columns: 35% 65%;
          gap: 3rem;
          height: 100%;
        }
        
        .profile-left-column {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding-right: 2rem;
          border-right: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .profile-header {
          margin-bottom: 2rem;
        }
        
        .profile-badge {
          display: inline-block;
          background-color: var(--racing-red);
          color: white;
          font-size: 0.9rem;
          font-weight: 700;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          margin-bottom: 1.3rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .profile-name {
          font-size: 3.5rem;
          font-weight: 800;
          color: white;
          margin-bottom: 0.8rem;
          line-height: 1.1;
          position: relative;
        }
        
        .profile-name::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 60px;
          height: 4px;
          background-color: var(--racing-red);
          border-radius: 2px;
        }
        
        .profile-title {
          font-size: 1.4rem;
          color: rgba(255, 255, 255, 0.9);
          margin-top: 1.5rem;
          line-height: 1.4;
        }
        
        .profile-image-wrapper {
          margin: 2rem 0;
        }
        
        .profile-image {
          width: 100%;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
          border: 4px solid var(--racing-red);
          position: relative;
        }
        
        .company-box {
          display: flex;
          align-items: center;
          background: rgba(0, 0, 0, 0.2);
          padding: 1.3rem;
          border-radius: 10px;
          border-left: 4px solid var(--racing-red);
          margin-top: 2rem;
        }
        
        .company-logo {
          width: 50px;
          height: 50px;
          margin-right: 1rem;
          background: white;
          border-radius: 8px;
          padding: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .company-name {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--racing-red);
          margin-bottom: 0.3rem;
        }
        
        .position-title {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.9);
        }
        
        .profile-right-column {
          padding-top: 1rem;
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }
        
        .section-title {
          font-size: 1.6rem;
          font-weight: 700;
          color: white;
          margin-bottom: 1.5rem;
          position: relative;
          display: inline-block;
          padding-left: 1rem;
          border-left: 4px solid var(--racing-red);
        }
        
        .experience-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        
        .stat-box {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          padding: 1.5rem;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .stat-box:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          border-color: rgba(225, 6, 0, 0.3);
        }
        
        .stat-number {
          font-size: 2.8rem;
          font-weight: 800;
          color: var(--racing-red);
          margin-bottom: 0.8rem;
        }
        
        .stat-label {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.9);
        }
        
        .career-highlights {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-top: 1.5rem;
        }
        
        .highlight-item {
          display: flex;
          align-items: flex-start;
          background: rgba(0, 0, 0, 0.2);
          padding: 1.3rem;
          border-radius: 10px;
          transition: transform 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .highlight-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          border-color: rgba(225, 6, 0, 0.3);
        }
        
        .highlight-icon {
          width: 40px;
          height: 40px;
          background: var(--racing-red);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 1rem;
          flex-shrink: 0;
          font-size: 1.2rem;
        }
        
        .highlight-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.5rem;
        }
        
        .highlight-description {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.5;
        }
        
        .specialties-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        
        .specialty-item {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 8px;
          padding: 1rem 1.5rem;
          border-left: 3px solid var(--racing-red);
          transition: transform 0.3s ease;
        }
        
        .specialty-item:hover {
          transform: translateX(5px);
          background: rgba(225, 6, 0, 0.1);
        }
        
        .specialty-title {
          font-weight: 600;
          color: white;
        }
        
        .education-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        
        .edu-item {
          display: flex;
          align-items: center;
          background: rgba(0, 0, 0, 0.2);
          padding: 1rem;
          border-radius: 10px;
        }
        
        .edu-logo {
          width: 40px;
          height: 40px;
          background: var(--racing-red);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 1rem;
          flex-shrink: 0;
          font-size: 1.3rem;
        }
        
        .edu-name {
          font-weight: 700;
          margin-bottom: 0.3rem;
        }
        
        .edu-degree {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.9);
        }
        
        /* Responsive Adjustments */
        @media (max-width: 1200px) {
          .profile-name {
            font-size: 3rem;
          }
          
          .profile-title {
            font-size: 1.2rem;
          }
          
          .stat-number {
            font-size: 2.5rem;
          }
        }
        
        @media (max-width: 992px) {
          .profile-container {
            grid-template-columns: 40% 60%;
            gap: 2rem;
          }
          
          .profile-name {
            font-size: 2.5rem;
          }
          
          .section-title {
            font-size: 1.4rem;
          }
          
          .career-highlights {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 768px) {
          .slide-content {
            padding: 2rem 1.5rem;
            padding-bottom: 100px;
          }
          
          .profile-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .profile-left-column {
            border-right: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            padding-right: 0;
            padding-bottom: 2rem;
          }
          
          .profile-header {
            text-align: center;
          }
          
          .profile-name::after {
            left: 50%;
            transform: translateX(-50%);
          }
          
          .profile-image {
            max-width: 250px;
            margin: 0 auto;
          }
          
          .company-box {
            flex-direction: column;
            text-align: center;
          }
          
          .company-logo {
            margin: 0 auto 1rem;
          }
          
          .experience-stats {
            grid-template-columns: 1fr;
          }
          
          .specialties-grid,
          .education-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </SlideLayout>
  );
}
