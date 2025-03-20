import React from 'react';

const ProgressBar = ({ currentSlide, totalSlides }) => {
  const progress = (currentSlide / totalSlides) * 100;
  
  return (
    <div className="progress-bar">
      <div 
        className="progress-indicator" 
        style={{
          width: `${progress}%`
        }}
      />
    </div>
  );
};

export default ProgressBar;
