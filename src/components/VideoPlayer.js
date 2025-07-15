import React, { useState, useRef, useCallback } from 'react';

const VideoPlayer = ({ 
  src, 
  title, 
  thumbnail, 
  className = "rectangle",
  preload = "metadata" 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showThumbnail, setShowThumbnail] = useState(true);
  const videoRef = useRef(null);

  const handleThumbnailClick = useCallback(() => {
    setShowThumbnail(false);
    // Start loading the video when user shows interest
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, []);

  const handleVideoLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handlePlay = useCallback(() => {
    setShowThumbnail(false);
  }, []);

  return (
    <div className="video-container" style={{ position: 'relative', display: 'inline-block' }}>
      {showThumbnail && (
        <div 
          className="video-thumbnail"
          onClick={handleThumbnailClick}
          style={{
            position: 'relative',
            cursor: 'pointer',
            transition: 'transform 0.2s ease',
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          <img
            src={thumbnail}
            alt={title}
            className={className}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}
          />
          <div 
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'rgba(0,0,0,0.7)',
              borderRadius: '50%',
              width: '60px',
              height: '60px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '24px',
              transition: 'all 0.3s ease'
            }}
          >
            ▶️
          </div>
          <div 
            style={{
              position: 'absolute',
              bottom: '10px',
              left: '10px',
              right: '10px',
              backgroundColor: 'rgba(0,0,0,0.8)',
              color: 'white',
              padding: '8px',
              borderRadius: '4px',
              fontSize: '12px',
              lineHeight: '1.3'
            }}
          >
            {title}
          </div>
        </div>
      )}
      
      <video
        ref={videoRef}
        title={title}
        controls
        className={className}
        preload={showThumbnail ? "none" : preload}
        onLoadedMetadata={handleVideoLoad}
        onPlay={handlePlay}
        style={{
          display: showThumbnail ? 'none' : 'block',
          opacity: isLoaded ? 1 : 0.7,
          transition: 'opacity 0.3s ease',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {!showThumbnail && !isLoaded && (
        <div 
          className="loading-spinner"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: '#666',
            fontSize: '14px'
          }}
        >
          Caricamento video...
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
