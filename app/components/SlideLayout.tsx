import { useEffect } from 'react';
import SlideNavigation from './SlideNavigation';
import KeyboardNavigation from './KeyboardNavigation';

interface SlideLayoutProps {
  children: React.ReactNode;
  slideNumber: number;
  totalSlides: number;
  slideId: string;
}

const TOTAL_SLIDES = 8; // Total number of slides in the presentation

const SlideLayout: React.FC<SlideLayoutProps> = ({ 
  children, 
  slideNumber, 
  totalSlides = TOTAL_SLIDES,
  slideId 
}) => {
  const getPageUrl = (slideNum: number) => {
    if (slideNum === 1) return '/';
    return `/slides/${slideNum}`;
  };

  const prevLink = slideNumber > 1 ? getPageUrl(slideNumber - 1) : null;
  const nextLink = slideNumber < totalSlides ? getPageUrl(slideNumber + 1) : null;

  // Handle animations when the slide loads
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

  return (
    <div className="presentation-container">
      <div className="slides-wrapper">
        <section className="slide active" id={slideId}>
          {children}
        </section>
      </div>

      <SlideNavigation 
        slideNumber={slideNumber}
        totalSlides={totalSlides}
      />

      <KeyboardNavigation 
        prevLink={prevLink}
        nextLink={nextLink}
      />
    </div>
  );
};

export default SlideLayout;
