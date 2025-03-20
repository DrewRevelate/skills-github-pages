import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const MobileTouchNav = ({ prevSlide, nextSlide }) => {
  const router = useRouter();

  useEffect(() => {
    // Only initialize touch navigation on client-side
    if (typeof window === 'undefined') return;

    // Check if we're on a mobile/touch device
    const isTouchDevice = 'ontouchstart' in window || 
                         navigator.maxTouchPoints > 0 || 
                         navigator.msMaxTouchPoints > 0;
    
    if (!isTouchDevice) return; // Only proceed on touch devices
    
    // Apply mobile specific class to body
    document.body.classList.add('mobile-device');
    
    // Track touch positions
    let touchStartX = 0;
    let touchEndX = 0;
    let touchStartY = 0;
    let touchEndY = 0;
    let isVerticalScroll = false;
    let isScrollingElement = false;
    let touchStartTime = 0;
    let touchEndTime = 0;
    
    // Configuration parameters
    const MIN_SWIPE_DISTANCE = 40; // Reduced minimum distance for more responsive swipes (px)
    const MIN_HORIZONTAL_RATIO = 1.5; // Min horizontal/vertical ratio for swipe
    const MAX_SWIPE_TIME = 1000; // Maximum time for a swipe to be valid (ms)
    
    // Interactive elements that should not trigger navigation
    const interactiveSelectors = [
      '.poll-option', 'button', 'a', '.specialty-item', '.timeline-point',
      '.era-button', '.tech-icon', '.trend-item', '.future-card',
      '.nav-button', '.poll-submit', '.poll-skip', 'input', 'select',
      '.timeline-point-marker', '.speedometer-needle', '.arrow-icon'
    ].join(', ');

    // Add swipe hint
    const addSwipeHint = () => {
      // Show hint only on first visit or if reset
      const swipeHintState = localStorage.getItem('swipeHintSeen');
      
      // Only show if explicitly requested
      if (swipeHintState === 'true' && !window.location.search.includes('resetHint')) {
        return;
      }
      
      const swipeHint = document.createElement('div');
      swipeHint.className = 'swipe-hint';
      swipeHint.innerHTML = `
        <div class="swipe-hint-content">
          <div class="swipe-icon">←</div>
          <div class="swipe-text">Swipe to navigate slides</div>
          <div class="swipe-icon">→</div>
          <div class="swipe-close">×</div>
        </div>
      `;
      
      document.body.appendChild(swipeHint);
      
      // Add click handler to dismiss
      const closeBtn = swipeHint.querySelector('.swipe-close');
      if (closeBtn) {
        closeBtn.addEventListener('click', () => {
          swipeHint.remove();
          localStorage.setItem('swipeHintSeen', 'true');
        });
      }
      
      // Add the styles
      if (!document.getElementById('swipe-hint-styles')) {
        const style = document.createElement('style');
        style.id = 'swipe-hint-styles';
        style.textContent = `
          .swipe-hint {
            position: fixed;
            bottom: 17%;
            left: 0;
            right: 0;
            text-align: center;
            z-index: 9999;
            animation: swipe-hint-fade-in 0.5s ease-out forwards, swipe-hint-fade-out 0.5s ease-in forwards 5.5s;
          }
          
          .swipe-hint-content {
            display: inline-flex;
            align-items: center;
            background-color: rgba(14, 14, 14, 0.85);
            color: white;
            padding: 12px 20px;
            border-radius: 30px;
            box-shadow: 0 5px 25px rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(5px);
            position: relative;
            border: 1px solid rgba(225, 6, 0, 0.3);
          }
          
          .swipe-close {
            position: absolute;
            top: -8px;
            right: -8px;
            width: 22px;
            height: 22px;
            background: var(--racing-red);
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            cursor: pointer;
            line-height: 1;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
          }
          
          .swipe-icon {
            font-size: 24px;
            margin: 0 12px;
            color: var(--racing-red);
            animation: swipe-arrow 1.5s infinite ease-in-out;
            text-shadow: 0 0 10px rgba(225, 6, 0, 0.4);
          }
          
          .swipe-icon:first-child {
            animation-delay: 0.5s;
          }
          
          .swipe-text {
            font-size: 16px;
            font-weight: 600;
            letter-spacing: 0.5px;
          }
          
          @keyframes swipe-hint-fade-in {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes swipe-hint-fade-out {
            0% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(20px); visibility: hidden; }
          }
          
          @keyframes swipe-arrow {
            0%, 100% { transform: translateX(0); opacity: 0.8; }
            50% { transform: translateX(8px); opacity: 1; }
          }
          
          /* Visual feedback for swipe actions */
          .swipe-left {
            animation: slide-left 0.3s ease-out;
          }
          
          .swipe-right {
            animation: slide-right 0.3s ease-out;
          }
          
          @keyframes slide-left {
            0% { transform: translateX(0); }
            50% { transform: translateX(-15px); }
            100% { transform: translateX(0); }
          }
          
          @keyframes slide-right {
            0% { transform: translateX(0); }
            50% { transform: translateX(15px); }
            100% { transform: translateX(0); }
          }
          
          .touch-active {
            transform: scale(0.97) !important;
            opacity: 0.9 !important;
            transition: transform 0.1s ease-out, opacity 0.1s ease-out !important;
          }
        `;
        document.head.appendChild(style);
      }
      
      // Auto-remove after animation completes
      setTimeout(() => {
        swipeHint.remove();
        localStorage.setItem('swipeHintSeen', 'true');
      }, 6000);
    };
    
    // Handle touch start
    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
      touchStartTime = new Date().getTime();
      isVerticalScroll = false;
      
      // Check if we're touching a scrollable or interactive element
      isScrollingElement = e.target.closest('.scrollable') !== null ||
                         e.target.closest(interactiveSelectors) !== null;
                          
      // Add subtle visual feedback
      const target = e.target;
      if (target.closest(interactiveSelectors)) {
        target.closest(interactiveSelectors).classList.add('touch-active');
      }
    };
    
    // Monitor touch movement to detect scrolling direction
    const handleTouchMove = (e) => {
      // If we already determined this is a vertical scroll, no need to keep checking
      if (isVerticalScroll) return;
      
      const currentY = e.changedTouches[0].screenY;
      const currentX = e.changedTouches[0].screenX;
      
      // Calculate vertical and horizontal distance moved
      const verticalDistance = Math.abs(currentY - touchStartY);
      const horizontalDistance = Math.abs(currentX - touchStartX);
      
      // If vertical movement is significantly greater than horizontal, mark as vertical scroll
      if (verticalDistance > horizontalDistance / MIN_HORIZONTAL_RATIO) {
        isVerticalScroll = true;
      }
    };
    
    // Handle touch end - determine if it was a swipe
    const handleTouchEnd = (e) => {
      touchEndTime = new Date().getTime();
      const swipeDuration = touchEndTime - touchStartTime;
      
      // Remove visual feedback
      document.querySelectorAll('.touch-active').forEach(el => {
        el.classList.remove('touch-active');
      });
      
      // Don't process swipe if:
      // 1. We detected vertical scrolling
      // 2. We're on a scrollable element
      // 3. Swipe took too long (likely a scroll or drag)
      if (isVerticalScroll || isScrollingElement || swipeDuration > MAX_SWIPE_TIME) return;
      
      touchEndX = e.changedTouches[0].screenX;
      touchEndY = e.changedTouches[0].screenY;
      
      // Calculate horizontal and vertical distances
      const horizontalDist = touchEndX - touchStartX;
      const verticalDist = Math.abs(touchEndY - touchStartY);
      
      // Only process if:
      // 1. Horizontal movement is significant
      // 2. Horizontal movement is greater than vertical movement by defined ratio
      if (Math.abs(horizontalDist) > MIN_SWIPE_DISTANCE && 
          Math.abs(horizontalDist) > verticalDist * MIN_HORIZONTAL_RATIO) {
        
        // Ensure we're not swiping on interactive elements
        if (e.target.closest(interactiveSelectors)) {
          return;
        }
        
        // Navigate based on swipe direction
        if (horizontalDist > 0) {
          // Swipe right - go back
          if (prevSlide) {
            // Add visual feedback for swipe
            document.body.classList.add('swipe-right');
            
            // Play haptic feedback if available
            if (window.navigator && window.navigator.vibrate) {
              window.navigator.vibrate(50);
            }
            
            // Navigate to previous slide
            window.location.href = prevSlide;
            
            // Remove the visual feedback class after animation
            setTimeout(() => {
              document.body.classList.remove('swipe-right');
            }, 300);
          }
        } else {
          // Swipe left - go forward
          if (nextSlide) {
            // Add visual feedback for swipe
            document.body.classList.add('swipe-left');
            
            // Play haptic feedback if available
            if (window.navigator && window.navigator.vibrate) {
              window.navigator.vibrate(50);
            }
            
            // Navigate to next slide
            window.location.href = nextSlide;
            
            // Remove the visual feedback class after animation
            setTimeout(() => {
              document.body.classList.remove('swipe-left');
            }, 300);
          }
        }
      }
    };
    
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    // Show swipe hint after a short delay
    setTimeout(addSwipeHint, 1500);
    
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [prevSlide, nextSlide, router]);

  // This component doesn't render anything visible
  return null;
};

export default MobileTouchNav;
