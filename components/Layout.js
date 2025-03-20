import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import MobileTouchNav from './MobileTouchNav';

const Layout = ({ children, title, currentSlide, totalSlides, prevSlide, nextSlide }) => {
  useEffect(() => {
    // Set all slides to active in Next.js context (different from HTML version)
    const currentSlide = document.querySelector('.slide');
    if (currentSlide) {
      currentSlide.classList.add('active');
    }
    
    // Check if we're on a mobile device
    const isMobile = window.innerWidth <= 768 || 
                   /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Apply mobile-specific class
    if (isMobile) {
      document.body.classList.add('mobile-device');
      
      // Make nav buttons more prominent on mobile
      const navButtons = document.querySelectorAll('.nav-button');
      navButtons.forEach(btn => {
        btn.style.width = '65px';
        btn.style.height = '65px';
      });
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
    
    // Animation for slide elements with the animate class
    setTimeout(() => {
      const elements = document.querySelectorAll('.animate');
      elements.forEach((element, index) => {
        setTimeout(() => {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }, 100 * index);
      });
      
      // Add race-in animation class to racing stripe elements
      document.querySelectorAll('.racing-stripes .stripe').forEach((stripe, i) => {
        stripe.classList.add('animate', 'race');
        stripe.style.animationDelay = (0.1 * i) + 's';
      });
      
      // Add bounce animation to presenter image if it exists
      const presenterImage = document.querySelector('.presenter-image');
      if (presenterImage) {
        presenterImage.classList.add('animate', 'bounce');
        presenterImage.style.animationDelay = '0.8s';
      }
    }, 200);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [prevSlide, nextSlide]);

  // Calculate progress percentage
  const progressPercentage = (currentSlide / totalSlides) * 100;

  return (
    <>
      <Head>
        <title>{title || 'Full Throttle Revenue: How RevOps & Automation Drive Success'}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#121212" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600;700;900&display=swap" rel="stylesheet" />
      </Head>

      <div className="presentation-container">
        <div className="slides-wrapper">
          {children}
        </div>
        
        {/* Progress Bar */}
        <div className="progress-bar">
          <div className="progress-indicator" style={{ width: `${progressPercentage}%` }}></div>
        </div>
        
        {/* Navigation Controls */}
        <div className="slide-navigation">
          {prevSlide ? (
            <Link href={prevSlide} className="nav-button prev" prefetch={true}>
              ←
            </Link>
          ) : (
            <span className="nav-button prev disabled">←</span>
          )}
          
          {nextSlide ? (
            <Link href={nextSlide} className="nav-button next" prefetch={true}>
              →
            </Link>
          ) : (
            <span className="nav-button next disabled">→</span>
          )}
        </div>
        
        {/* Slide Indicator */}
        <div className="slide-indicator">Slide {currentSlide}/{totalSlides}</div>
        
        {/* Keyboard Navigation Hint */}
        <div className="keyboard-instructions">Use ← → arrows or Space to navigate</div>
      </div>

      <MobileTouchNav 
        prevSlide={prevSlide}
        nextSlide={nextSlide}
      />
    </>
  );
};

export default Layout;
