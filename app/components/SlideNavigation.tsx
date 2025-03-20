"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

interface SlideNavigationProps {
  slideNumber: number;
  totalSlides: number;
}

const SlideNavigation: React.FC<SlideNavigationProps> = ({ slideNumber, totalSlides }) => {
  const pathname = usePathname();

  const getPageUrl = (slideNum: number) => {
    if (slideNum === 1) return '/';
    return `/slides/${slideNum}`;
  };

  const { prevLink, nextLink } = useMemo(() => {
    return {
      prevLink: slideNumber > 1 ? getPageUrl(slideNumber - 1) : null,
      nextLink: slideNumber < totalSlides ? getPageUrl(slideNumber + 1) : null,
    };
  }, [slideNumber, totalSlides]);

  return (
    <>
      {/* Progress Bar */}
      <div className="progress-bar">
        <div 
          className="progress-indicator" 
          style={{ width: `${(slideNumber / totalSlides) * 100}%` }}
        />
      </div>
      
      {/* Navigation Controls */}
      <div className="slide-navigation">
        {prevLink ? (
          <Link href={prevLink} className="nav-button prev">
            ←
          </Link>
        ) : (
          <span className="nav-button prev disabled">←</span>
        )}
        
        {nextLink ? (
          <Link href={nextLink} className="nav-button next">
            →
          </Link>
        ) : (
          <span className="nav-button next disabled">→</span>
        )}
      </div>
      
      {/* Slide Indicator */}
      <div className="slide-indicator">
        Slide {slideNumber}/{totalSlides}
      </div>
      
      {/* Keyboard Navigation Hint */}
      <div className="keyboard-instructions">
        Use ← → arrows or Space to navigate
      </div>
    </>
  );
};

export default SlideNavigation;
