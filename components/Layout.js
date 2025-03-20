import React, { useEffect } from 'react';
import Head from 'next/head';
import ProgressBar from './ProgressBar';
import Navigation from './Navigation';
import MobileTouchNav from './MobileTouchNav';

const Layout = ({ children, title, currentSlide, totalSlides, prevSlide, nextSlide }) => {
  useEffect(() => {
    // Check if we're on a mobile device
    const isMobile = window.innerWidth <= 768 || 
                   /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Apply mobile-specific class
    if (isMobile) {
      document.body.classList.add('mobile-device');
    }

    // Add keyboard navigation
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        if (nextSlide) window.location.href = nextSlide;
      } else if (event.key === 'ArrowLeft') {
        if (prevSlide) window.location.href = prevSlide;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    // Animation for slide elements
    setTimeout(() => {
      const elements = document.querySelectorAll('.animate');
      elements.forEach((element, index) => {
        setTimeout(() => {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }, 100 * index);
      });
    }, 200);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [prevSlide, nextSlide]);

  return (
    <>
      <Head>
        <title>{title || 'Full Throttle Revenue: How RevOps & Automation Drive Success'}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#121212" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Head>

      <div className="presentation-container">
        <div className="slides-wrapper">
          {children}
        </div>
        
        <ProgressBar 
          currentSlide={currentSlide} 
          totalSlides={totalSlides} 
        />
        
        <Navigation 
          currentSlide={currentSlide} 
          totalSlides={totalSlides} 
          prevSlide={prevSlide} 
          nextSlide={nextSlide} 
        />
        
        <div className="slide-indicator">Slide {currentSlide}/{totalSlides}</div>
        
        <div className="keyboard-instructions">Use ← → arrows or Space to navigate</div>
      </div>

      <MobileTouchNav 
        currentSlide={currentSlide} 
        totalSlides={totalSlides}
        prevSlide={prevSlide}
        nextSlide={nextSlide}
      />
    </>
  );
};

export default Layout;
