"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function OptimizedImage({ src, alt, width, height, className }: OptimizedImageProps) {
  const [imageSrc, setImageSrc] = useState(src);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Check if the image exists, otherwise use SVG placeholder
    const img = new window.Image();
    img.src = src;
    
    img.onload = () => {
      setImageSrc(src);
      setError(false);
    };
    
    img.onerror = () => {
      // Try the SVG placeholder
      const svgSrc = `${src}.svg`;
      const svgImg = new window.Image();
      svgImg.src = svgSrc;
      
      svgImg.onload = () => {
        setImageSrc(svgSrc);
        setError(false);
      };
      
      svgImg.onerror = () => {
        // If both fail, keep original source but mark as error
        setImageSrc(src);
        setError(true);
      };
    };
  }, [src]);

  if (error) {
    // Render a placeholder div with the same dimensions if both image and SVG fail
    return (
      <div 
        style={{ 
          width: `${width}px`, 
          height: `${height}px`,
          background: '#333',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '14px'
        }}
        className={className}
      >
        {alt}
      </div>
    );
  }

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={{ objectFit: 'cover' }}
    />
  );
}
