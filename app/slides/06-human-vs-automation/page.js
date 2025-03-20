'use client';

import React from 'react';
import Layout from '../../../components/Layout';
import { usePathname } from 'next/navigation';
import { getNextSlidePath, getPrevSlidePath, getTotalSlides, getCurrentSlideNumber } from '../../../utils/navigation';

export default function HumanVsAutomation() {
  const pathname = usePathname();
  
  return (
    <Layout
      title="Human vs Automation - Full Throttle Revenue"
      currentSlide={getCurrentSlideNumber(pathname)}
      totalSlides={getTotalSlides()}
      prevSlide={getPrevSlidePath(pathname)}
      nextSlide={getNextSlidePath(pathname)}
    >
      <section className="slide" id="human-vs-automation">
        <div className="slide-content">
          <h2 className="slide-title animate">Human vs Automation</h2>
          {/* Slide content */}
        </div>
      </section>
    </Layout>
  );
}