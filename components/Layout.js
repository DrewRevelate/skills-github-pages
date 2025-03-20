'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import MobileTouchNav from './MobileTouchNav';

const Layout = ({ children, title, currentSlide, totalSlides, prevSlide, nextSlide }) => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
    
    // Check if we're on a mobile device - client-side only
    if (typeof window !== 'undefined') {
      const detectMobile = window.innerWidth <= 768 || 
                   /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      setIsMobile(detectMobile);
      
      // Apply mobile-specific class
      if (detectMobile) {
        document.body.classList.add('mobile-device');
      } else {
        document.body.classList.remove('mobile-device');
      }
    }

    // Add keyboard navigation using Next.js router
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        if (nextSlide) router.push(nextSlide);
      } else if (event.key === 'ArrowLeft') {
        if (prevSlide) router.push(prevSlide);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
  }, [prevSlide, nextSlide, router]);
  
  // Add a second useEffect for animations to avoid dependency issues
  useEffect(() => {
    // Only run animations on client-side
    if (typeof window === 'undefined') return;
    
    // Make sure the slide is active
    const slideElement = document.querySelector('.slide');
    if (slideElement && !slideElement.classList.contains('active')) {
      slideElement.classList.add('active');
    }
    
    // Animation for slide elements with the animate class
    const animationTimeout = setTimeout(() => {
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
      clearTimeout(animationTimeout);
    };

  }, []);

  // Calculate progress percentage
  const progressPercentage = (currentSlide / totalSlides) * 100;

  return (
    <>

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

      <style jsx global>{`
        .nav-button {
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          color: white;
        }
      `}</style>
    </>
  );
};

export default Layout;