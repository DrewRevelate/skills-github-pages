'use client';

import React from 'react';
import Layout from '../../../components/Layout';
import { usePathname } from 'next/navigation';
import { getNextSlidePath, getPrevSlidePath, getTotalSlides, getCurrentSlideNumber } from '../../../utils/navigation';

export default function SalesTechEvolution() {
  const pathname = usePathname();
  
  return (
    <Layout
      title="Sales Tech Evolution - Full Throttle Revenue"
      currentSlide={getCurrentSlideNumber(pathname)}
      totalSlides={getTotalSlides()}
      prevSlide={getPrevSlidePath(pathname)}
      nextSlide={getNextSlidePath(pathname)}
    >
      <section className="slide" id="sales-tech-evolution">
        <div className="slide-content">
          <h2 className="slide-title animate">Sales Tech Evolution</h2>
          {/* Slide content */}
        </div>
      </section>
    </Layout>
  );
}