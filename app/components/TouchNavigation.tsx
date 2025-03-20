"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface TouchNavigationProps {
  prevLink: string | null;
  nextLink: string | null;
}

const TouchNavigation: React.FC<TouchNavigationProps> = ({ prevLink, nextLink }) => {
  const router = useRouter();
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if we're on a mobile device
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth <= 768 || 
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      );
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Only add touch handlers if we're on a mobile device
    if (isMobile) {
      const handleTouchStart = (e: TouchEvent) => {
        setTouchStartX(e.touches[0].clientX);
      };

      const handleTouchEnd = (e: TouchEvent) => {
        if (touchStartX === null) return;
        
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX - touchEndX;
        
        // Swipe threshold of 50px
        if (Math.abs(diff) > 50) {
          if (diff > 0 && nextLink) {
            // Swipe left -> next slide
            router.push(nextLink);
          } else if (diff < 0 && prevLink) {
            // Swipe right -> previous slide
            router.push(prevLink);
          }
        }
        
        setTouchStartX(null);
      };

      window.addEventListener('touchstart', handleTouchStart);
      window.addEventListener('touchend', handleTouchEnd);

      return () => {
        window.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchend', handleTouchEnd);
        window.removeEventListener('resize', checkMobile);
      };
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [touchStartX, prevLink, nextLink, router, isMobile]);

  // This component doesn't render anything visible
  return null;
};

export default TouchNavigation;
