import Image from 'next/image';
import SlideLayout from '@/app/components/SlideLayout';
import TouchNavigation from '@/app/components/TouchNavigation';

export default function ContactInfo() {
  return (
    <SlideLayout slideNumber={8} totalSlides={8} slideId="slide-7">
      <div className="diagonal-divider"></div>
      <div className="thank-you-bg"></div>
      
      <div className="slide-content">
        <div className="thank-you-wrapper animate">
          <h2 className="thank-you-heading">THANK <span>YOU</span></h2>
          <div className="questions-text animate delay-1">Questions?</div>
        </div>
        
        <div className="contact-container animate delay-2">
          <div className="contact-card">
            <div className="contact-header">
              <h3>Get In Touch</h3>
              <p>For questions about RevOps, sales engineering, or career opportunities in the field</p>
            </div>
            
            <div className="contact-details">
              <div className="contact-photo">
                <Image 
                  src="/images/profile.jpeg" 
                  alt="Drew Lambert" 
                  width={100} 
                  height={100}
                  layout="responsive"
                />
              </div>
              
              <div className="contact-info">
                <div className="contact-name">Drew Lambert</div>
                <div className="contact-title">Revenue Operations Expert & Salesforce Engineer</div>
                
                <div className="contact-methods">
                  <div className="contact-method">
                    <div className="method-icon">✉️</div>
                    <div className="method-detail">drew@revelateops.com</div>
                  </div>
                  
                  <div className="contact-method">
                    <div className="method-icon">🔗</div>
                    <div className="method-detail">linkedin.com/in/drewlambert</div>
                  </div>
                  
                  <div className="contact-method">
                    <div className="method-icon">🌐</div>
                    <div className="method-detail">revelateops.com</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="resource-links animate delay-3">
              <h4>Useful Resources</h4>
              <div className="resource-grid">
                <div className="resource-item">
                  <div className="resource-icon">📚</div>
                  <div className="resource-title">Salesforce Trailhead</div>
                </div>
                
                <div className="resource-item">
                  <div className="resource-icon">🎓</div>
                  <div className="resource-title">HubSpot Academy</div>
                </div>
                
                <div className="resource-item">
                  <div className="resource-icon">📊</div>
                  <div className="resource-title">Google Analytics Cert</div>
                </div>
                
                <div className="resource-item">
                  <div className="resource-icon">🎯</div>
                  <div className="resource-title">Revenue Collective</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="feedback-form animate delay-4">
            <h3>Presentation Feedback</h3>
            <p>Scan the QR code to provide feedback or access today's slides</p>
            
            <div className="qr-container">
              <div className="qr-code">
                <Image 
                  src="/images/qr-code.png" 
                  alt="Feedback QR Code" 
                  width={150} 
                  height={150}
                />
              </div>
              <div className="qr-instructions">
                Scan me!
              </div>
            </div>
          </div>
        </div>
        
        <div className="quote-banner animate delay-4">
          "Success in business is about connecting technology with humanity."
        </div>
      </div>

      <TouchNavigation prevLink="/slides/7" nextLink={null} />

      <style jsx>{`
        .slide-content {
          position: relative;
          z-index: 5;
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 3rem;
          height: 100%;
          overflow-y: auto;
          color: white;
        }
        
        .thank-you-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at top right, rgba(225, 6, 0, 0.2), transparent 60%);
          z-index: 1;
        }
        
        .diagonal-divider {
          position: absolute;
          top: 0;
          right: 0;
          width: 25%;
          height: 100%;
          background-color: rgba(225, 6, 0, 0.05);
          clip-path: polygon(100% 0, 0% 100%, 100% 100%);
          z-index: 3;
        }
        
        .thank-you-wrapper {
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .thank-you-heading {
          font-size: 5rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: -2px;
          margin-bottom: 0.5rem;
          line-height: 1;
          text-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }
        
        .thank-you-heading span {
          color: var(--racing-red);
          font-style: italic;
        }
        
        .questions-text {
          font-size: 2.5rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 2rem;
        }
        
        .contact-container {
          display: grid;
          grid-template-columns: 60% 40%;
          gap: 2rem;
          margin-top: 1rem;
        }
        
        .contact-card {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }
        
        .contact-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: linear-gradient(90deg, var(--racing-red), transparent);
        }
        
        .contact-header h3 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: white;
        }
        
        .contact-header p {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }
        
        .contact-details {
          display: flex;
          margin: 1.5rem 0;
          background: rgba(0, 0, 0, 0.2);
          padding: 1.5rem;
          border-radius: 12px;
          border-left: 4px solid var(--racing-red);
        }
        
        .contact-photo {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid var(--racing-red);
          margin-right: 1.5rem;
          flex-shrink: 0;
        }
        
        .contact-info {
          flex: 1;
        }
        
        .contact-name {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 0.3rem;
          color: white;
        }
        
        .contact-title {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 1rem;
        }
        
        .contact-methods {
          margin-top: 1rem;
        }
        
        .contact-method {
          display: flex;
          align-items: center;
          margin-bottom: 0.8rem;
        }
        
        .method-icon {
          font-size: 1.2rem;
          margin-right: 0.8rem;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .method-detail {
          font-size: 1rem;
          color: var(--racing-silver);
        }
        
        .resource-links {
          margin-top: 2rem;
        }
        
        .resource-links h4 {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: white;
          position: relative;
          display: inline-block;
          padding-left: 1rem;
          border-left: 3px solid var(--racing-red);
        }
        
        .resource-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        
        .resource-item {
          display: flex;
          align-items: center;
          background: rgba(0, 0, 0, 0.15);
          padding: 0.8rem 1rem;
          border-radius: 8px;
          transition: transform 0.3s ease;
        }
        
        .resource-item:hover {
          transform: translateX(5px);
          background: rgba(225, 6, 0, 0.1);
        }
        
        .resource-icon {
          font-size: 1.2rem;
          margin-right: 0.8rem;
        }
        
        .resource-title {
          font-size: 0.95rem;
          font-weight: 500;
        }
        
        .feedback-form {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
          position: relative;
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        
        .feedback-form::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: linear-gradient(90deg, var(--racing-red), transparent);
        }
        
        .feedback-form h3 {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: white;
        }
        
        .feedback-form p {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 1.5rem;
        }
        
        .qr-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex: 1;
        }
        
        .qr-code {
          background: white;
          padding: 1rem;
          border-radius: 10px;
          margin-bottom: 1rem;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }
        
        .qr-instructions {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--racing-red);
        }
        
        .quote-banner {
          background: rgba(0, 0, 0, 0.3);
          padding: 1.5rem;
          border-radius: 10px;
          text-align: center;
          font-size: 1.4rem;
          font-weight: 600;
          font-style: italic;
          color: rgba(255, 255, 255, 0.95);
          margin: 2rem 0 1rem;
          position: relative;
          border-left: 4px solid var(--racing-red);
          border-right: 4px solid var(--racing-red);
        }
        
        /* Responsive adjustments */
        @media (max-width: 992px) {
          .thank-you-heading {
            font-size: 4rem;
          }
          
          .questions-text {
            font-size: 2rem;
          }
          
          .contact-container {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
        
        @media (max-width: 768px) {
          .slide-content {
            padding: 1.5rem;
            padding-bottom: 100px;
          }
          
          .thank-you-heading {
            font-size: 3rem;
          }
          
          .questions-text {
            font-size: 1.6rem;
          }
          
          .contact-details {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          
          .contact-photo {
            margin-right: 0;
            margin-bottom: 1rem;
          }
          
          .contact-method {
            justify-content: center;
          }
          
          .resource-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </SlideLayout>
  );
}
