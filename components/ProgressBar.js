import React from 'react';

const ProgressBar = ({ currentSlide, totalSlides }) => {
  // Calculate progress percentage
  const progressPercentage = (currentSlide / totalSlides) * 100;
  
  return (
    <div className="progress-bar">
      <div 
        className="progress-indicator" 
        style={{ width: `${progressPercentage}%` }}
      />
    </div>
  );
};

export default ProgressBar;
