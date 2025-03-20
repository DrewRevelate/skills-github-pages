"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface KeyboardNavigationProps {
  prevLink: string | null;
  nextLink: string | null;
}

const KeyboardNavigation: React.FC<KeyboardNavigationProps> = ({ prevLink, nextLink }) => {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Navigate with arrow keys or space
      if ((event.key === 'ArrowRight' || event.key === ' ') && nextLink) {
        router.push(nextLink);
      } else if (event.key === 'ArrowLeft' && prevLink) {
        router.push(prevLink);
      }
    };

    // Add event listener
    window.addEventListener('keydown', handleKeyDown);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [prevLink, nextLink, router]);

  // This component doesn't render anything
  return null;
};

export default KeyboardNavigation;
