import React from 'react';

const WebPImage = ({ src, alt, className, onClick, loading = "lazy" }) => {
  // Convert JPEG path to WebP path
  const webpSrc = src.replace(/\.jpeg$/i, '.webp');
  
  return (
    <img 
      src={webpSrc} 
      alt={alt} 
      className={className} 
      onClick={onClick} 
      loading={loading}
    />
  );
};

export default WebPImage;
