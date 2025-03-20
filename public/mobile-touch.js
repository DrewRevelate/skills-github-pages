document.addEventListener('DOMContentLoaded', function() {
  const isMobile = window.innerWidth <= 768 || 
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (isMobile) {
    let touchStartX = null;
    let touchStartY = null;
    
    window.addEventListener('touchstart', function(e) {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }, false);
    
    window.addEventListener('touchend', function(e) {
      if (!touchStartX || !touchStartY) return;
      
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      
      const diffX = touchStartX - touchEndX;
      const diffY = touchStartY - touchEndY;
      
      // Check if the swipe was more horizontal than vertical and exceeds threshold
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        // Get current slide number from the slide indicator
        const indicator = document.querySelector('.slide-indicator');
        const slideInfo = indicator ? indicator.textContent.match(/\d+/g) : null;
        
        if (slideInfo && slideInfo.length >= 2) {
          const currentSlide = parseInt(slideInfo[0]);
          const totalSlides = parseInt(slideInfo[1]);
          
          if (diffX > 0 && currentSlide < totalSlides) {
            // Swipe left -> next slide
            const nextBtn = document.querySelector('.nav-button.next');
            if (nextBtn && !nextBtn.classList.contains('disabled')) {
              nextBtn.click();
            }
          } else if (diffX < 0 && currentSlide > 1) {
            // Swipe right -> previous slide
            const prevBtn = document.querySelector('.nav-button.prev');
            if (prevBtn && !prevBtn.classList.contains('disabled')) {
              prevBtn.click();
            }
          }
        }
      }
      
      // Reset values
      touchStartX = null;
      touchStartY = null;
    }, false);
  }
});
