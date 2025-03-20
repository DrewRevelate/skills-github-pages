'use client';

import React from 'react';
import Layout from '../../../components/Layout';
import { usePathname } from 'next/navigation';
import { getNextSlidePath, getPrevSlidePath, getTotalSlides, getCurrentSlideNumber } from '../../../utils/navigation';

export default function FutureOfSalesTech() {
  const pathname = usePathname();
  
  return (
    <Layout
      title="Future of Sales Tech - Full Throttle Revenue"
      currentSlide={getCurrentSlideNumber(pathname)}
      totalSlides={getTotalSlides()}
      prevSlide={getPrevSlidePath(pathname)}
      nextSlide={getNextSlidePath(pathname)}
    >
      <section className="slide" id="future-of-sales-tech">
        <div className="slide-content">
          <h2 className="slide-title animate">Future of Sales Tech</h2>
          {/* Slide content */}
        </div>
      </section>
    </Layout>
  );
}