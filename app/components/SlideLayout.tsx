"use client";

import { useEffect } from 'react';
import SlideNavigation from './SlideNavigation';
import KeyboardNavigation from './KeyboardNavigation';
import Script from 'next/script';

interface SlideLayoutProps {
  children: React.ReactNode;
  slideNumber: number;
  totalSlides: number;
  slideId: string;
}

const TOTAL_SLIDES = 8; // Total number of slides in the presentation

const SlideLayout: React.FC<SlideLayoutProps> = ({ 
  children, 
  slideNumber, 
  totalSlides = TOTAL_SLIDES,
  slideId 
}) => {
  const getPageUrl = (slideNum: number) => {
    if (slideNum === 1) return '/';
    return `/slides/${slideNum}`;
  };

  const prevLink = slideNumber > 1 ? getPageUrl(slideNumber - 1) : null;
  const nextLink = slideNumber < totalSlides ? getPageUrl(slideNumber + 1) : null;

  // Handle animations when the slide loads
  useEffect(() => {
    setTimeout(() => {
      const elements = document.querySelectorAll('.animate');
      elements.forEach((element, index) => {
        setTimeout(() => {
          (element as HTMLElement).style.opacity = '1';
          (element as HTMLElement).style.transform = 'translateY(0)';
        }, 100 * index);
      });
      
      // Add race-in animation class to elements
      document.querySelectorAll('.racing-stripes .stripe').forEach((stripe, i) => {
        stripe.classList.add('animate', 'race');
        (stripe as HTMLElement).style.animationDelay = `${0.1 * i}s`;
      });
      
      // Add bounce animation to presenter image
      const presenterImage = document.querySelector('.presenter-image');
      if (presenterImage) {
        presenterImage.classList.add('animate', 'bounce');
        (presenterImage as HTMLElement).style.animationDelay = '0.8s';
      }
      
      // Check if we're on a mobile device
      const isMobile = window.innerWidth <= 768 || 
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      // Apply mobile-specific enhancements
      if (isMobile) {
        document.body.classList.add('mobile-device');
        
        // Make nav buttons more prominent on mobile
        const navButtons = document.querySelectorAll('.nav-button');
        navButtons.forEach(btn => {
          (btn as HTMLElement).style.width = '65px';
          (btn as HTMLElement).style.height = '65px';
        });
      }
    }, 200);
  }, []);

  return (
    <div className="presentation-container">
      <div className="slides-wrapper">
        <section className="slide active" id={slideId}>
          {children}
        </section>
      </div>

      <SlideNavigation 
        slideNumber={slideNumber}
        totalSlides={totalSlides}
      />

      <KeyboardNavigation 
        prevLink={prevLink}
        nextLink={nextLink}
      />
      
      <Script src="/mobile-touch.js" strategy="afterInteractive" />
    </div>
  );
};

export default SlideLayout;
