'use client';

import React from 'react';
import Layout from '../../../components/Layout';
import { usePathname } from 'next/navigation';
import { getNextSlidePath, getPrevSlidePath, getTotalSlides, getCurrentSlideNumber } from '../../../utils/navigation';

export default function ContactInfo() {
  const pathname = usePathname();
  
  return (
    <Layout
      title="Contact Information - Full Throttle Revenue"
      currentSlide={getCurrentSlideNumber(pathname)}
      totalSlides={getTotalSlides()}
      prevSlide={getPrevSlidePath(pathname)}
      nextSlide={getNextSlidePath(pathname)}
    >
      <section className="slide" id="contact-info">
        <div className="slide-content">
          <h2 className="slide-title animate">Contact Information</h2>
          {/* Slide content */}
        </div>
      </section>
    </Layout>
  );
}