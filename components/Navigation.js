import React from 'react';
import Link from 'next/link';

const Navigation = ({ currentSlide, totalSlides, prevSlide, nextSlide }) => {
  return (
    <div className="slide-navigation">
      {prevSlide ? (
        <Link href={prevSlide} className="nav-button prev">
          ←
        </Link>
      ) : (
        <span className="nav-button prev disabled">←</span>
      )}
      
      {nextSlide ? (
        <Link href={nextSlide} className="nav-button next">
          →
        </Link>
      ) : (
        <span className="nav-button next disabled">→</span>
      )}
    </div>
  );
};

export default Navigation;
