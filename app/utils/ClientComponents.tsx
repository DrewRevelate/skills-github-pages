"use client";

import { useEffect, useState } from 'react';

export function useSlideClient() {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  return isClient;
}

export function useSlideAnimations() {
  useEffect(() => {
    setTimeout(() => {
      const elements = document.querySelectorAll('.animate');
      elements.forEach((element, index) => {
        setTimeout(() => {
          (element as HTMLElement).style.opacity = '1';
          (element as HTMLElement).style.transform = 'translateY(0)';
        }, 100 * index);
      });
    }, 200);
  }, []);
}

export function useKeyboardNavigation(prevLink: string | null, nextLink: string | null) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === 'ArrowRight' || e.key === ' ') && nextLink) {
        window.location.href = nextLink;
      } else if (e.key === 'ArrowLeft' && prevLink) {
        window.location.href = prevLink;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [prevLink, nextLink]);
}

export function useTouchNavigation(prevLink: string | null, nextLink: string | null) {
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartX(e.touches[0].clientX);
    };
    
    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartX === null) return;
      
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;
      
      if (Math.abs(diff) > 50) {
        if (diff > 0 && nextLink) {
          window.location.href = nextLink;
        } else if (diff < 0 && prevLink) {
          window.location.href = prevLink;
        }
      }
      
      setTouchStartX(null);
    };
    
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [touchStartX, prevLink, nextLink]);
}
