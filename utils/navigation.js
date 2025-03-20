// Slide paths in order
export const SLIDE_PATHS = [
  '/slides/01-introduction',
  '/slides/02-presenter-profile',
  '/slides/03-revenue-acceleration',
  '/slides/04-sales-tech-evolution',
  '/slides/05-automation-solutions',
  '/slides/06-human-vs-automation',
  '/slides/07-future-of-sales-tech',
  '/slides/08-contact-info'
];

/**
 * Get the current slide number based on the current pathname
 * @param {string} pathname - Current pathname from usePathname()
 * @returns {number} - Current slide number (1-based)
 */
export const getCurrentSlideNumber = (pathname) => {
  const index = SLIDE_PATHS.findIndex(path => path === pathname);
  return index !== -1 ? index + 1 : 1;
};

/**
 * Get the next slide path
 * @param {string} pathname - Current pathname from usePathname()
 * @returns {string|null} - Next slide path or null if on last slide
 */
export const getNextSlidePath = (pathname) => {
  const index = SLIDE_PATHS.findIndex(path => path === pathname);
  if (index === -1 || index === SLIDE_PATHS.length - 1) return null;
  return SLIDE_PATHS[index + 1];
};

/**
 * Get the previous slide path
 * @param {string} pathname - Current pathname from usePathname()
 * @returns {string|null} - Previous slide path or null if on first slide
 */
export const getPrevSlidePath = (pathname) => {
  const index = SLIDE_PATHS.findIndex(path => path === pathname);
  if (index <= 0) return null;
  return SLIDE_PATHS[index - 1];
};

/**
 * Get total number of slides
 * @returns {number} - Total number of slides
 */
export const getTotalSlides = () => SLIDE_PATHS.length;
