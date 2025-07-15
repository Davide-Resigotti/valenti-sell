
import './Contents.css';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";

function Photos() {
  const [fullScreenImage, setFullScreenImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadedPhotos, setLoadedPhotos] = useState(0);
  const [loadedParts, setLoadedParts] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [nextImage, setNextImage] = useState(null);

  // All images in order - memoized to prevent recreation on each render
  const allImages = useMemo(() => [
    'IMG_4749.webp', 'IMG_4750.webp', 'IMG_4751.webp', 'IMG_4752.webp', 'IMG_4753.webp',
    'IMG_4754.webp', 'IMG_4755.webp', 'IMG_4756.webp', 'IMG_4759.webp', 'IMG_4760.webp',
    'IMG_4761.webp', 'IMG_4762.webp', 'IMG_4763.webp', 'IMG_4764.webp', 'IMG_4765.webp',
    'IMG_4766.webp', 'IMG_4767.webp', 'IMG_4768.webp', 'IMG_4769.webp', 'IMG_4770.webp',
    'IMG_4771.webp', 'IMG_4772.webp', 'IMG_4773.webp', 'IMG_4774.webp', 'IMG_4775.webp',
    'IMG_4776.webp', 'IMG_4777.webp', 'IMG_4778.webp', 'IMG_4779.webp', 'IMG_4780.webp',
    'IMG_4781.webp', 'IMG_4783.webp', 'IMG_4791.webp', 'IMG_4792.webp', 'IMG_4799.webp',
    'IMG_4793.webp', 'IMG_4794.webp', 'IMG_4795.webp', 'IMG_4796.webp', 'IMG_4797.webp',
    'IMG_4798.webp', 'IMG_4800.webp', 'IMG_4801.webp', 'IMG_4803.webp', 'IMG_4806.webp',
    'IMG_4807.webp', 'IMG_4808.webp', 'IMG_4809.webp', 'IMG_4810.webp', 'IMG_4811.webp',
    'IMG_4812.webp', 'IMG_4813.webp', 'IMG_4814.webp', 'IMG_4815.webp', 'IMG_4816.webp',
    'IMG_4817.webp', 'IMG_4818.webp', 'IMG_4819.webp', 'IMG_4820.webp', 'IMG_4821.webp',
    'IMG_4822.webp', 'IMG_4823.webp', 'IMG_4824.webp'
  ], []);

  const photoImages = useMemo(() => allImages.slice(0, 35), [allImages]); // First 35 are photos
  const partImages = useMemo(() => allImages.slice(35), [allImages]); // Rest are parts

  const handleImageClick = (src) => {
    const filename = src.split('/').pop();
    const index = allImages.indexOf(filename);
    setCurrentImageIndex(index);
    setFullScreenImage(src);
  };

  const handleCloseFullScreen = useCallback(() => {
    setFullScreenImage(null);
  }, []);

  const handleSwipe = useCallback((direction) => {
    if (isTransitioning) return; // Prevent rapid swipes
    
    setIsTransitioning(true);
    
    // Calculate next image
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentImageIndex + 1) % allImages.length;
    } else {
      newIndex = currentImageIndex === 0 ? allImages.length - 1 : currentImageIndex - 1;
    }
    
    const isPartImage = newIndex >= 35;
    const folder = isPartImage ? 'parts' : 'photos';
    const newSrc = `${process.env.PUBLIC_URL}/${folder}/${allImages[newIndex]}`;
    
    // Set next image for dual-image transition
    setNextImage({ src: newSrc, direction });
    
    // Start transition animations
    const currentImageElement = document.querySelector('.full-screen-image.current');
    const nextImageElement = document.querySelector('.full-screen-image.next');
    
    if (currentImageElement && nextImageElement) {
      // Current image slides out
      const currentSlideDirection = direction === 'next' ? '-100vw' : '100vw';
      currentImageElement.style.transform = `translateX(${currentSlideDirection})`;
      
      // Next image slides in from opposite side
      const nextSlideDirection = direction === 'next' ? '0' : '0';
      nextImageElement.style.transform = `translateX(${nextSlideDirection})`;
    }
    
    // Complete transition
    setTimeout(() => {
      setCurrentImageIndex(newIndex);
      setFullScreenImage(newSrc);
      setNextImage(null);
      setIsTransitioning(false);
    }, 400);
  }, [currentImageIndex, allImages, isTransitioning]);

  const handleKeyDown = useCallback((e) => {
    if (fullScreenImage) {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        handleSwipe('next');
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handleSwipe('prev');
      } else if (e.key === 'Escape') {
        handleCloseFullScreen();
      }
    }
  }, [fullScreenImage, handleSwipe, handleCloseFullScreen]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Progressive loading: photos first, then videos
  useEffect(() => {
    const loadImagesSequentially = async () => {
      // Load photos in order
      for (let i = 0; i < photoImages.length; i++) {
        try {
          await new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
              setLoadedPhotos(i + 1);
              resolve();
            };
            img.onerror = reject;
            img.src = `${process.env.PUBLIC_URL}/photos/${photoImages[i]}`;
          });
        } catch (error) {
          console.log(`Failed to load photo ${photoImages[i]}, continuing...`);
          setLoadedPhotos(i + 1); // Still increment to continue loading
        }
      }

      // After all photos, load parts in order
      for (let i = 0; i < partImages.length; i++) {
        try {
          await new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
              setLoadedParts(i + 1);
              resolve();
            };
            img.onerror = reject;
            img.src = `${process.env.PUBLIC_URL}/parts/${partImages[i]}`;
          });
        } catch (error) {
          console.log(`Failed to load part ${partImages[i]}, continuing...`);
          setLoadedParts(i + 1); // Still increment to continue loading
        }
      }

      // After all images, start video thumbnails
      setTimeout(() => {
        const videoThumbnails = [
          'IMG_4784.webp', 'IMG_4785.webp', 'IMG_4786.webp', 
          'IMG_4787.webp', 'IMG_4788.webp', 'IMG_4789.webp', 'IMG_4790.webp'
        ];

        videoThumbnails.forEach(filename => {
          const img = new Image();
          img.src = `${process.env.PUBLIC_URL}/thumbnails/${filename}`;
        });

        // Finally videos
        setTimeout(() => {
          const videoFiles = [
            'IMG_4784.mp4', 'IMG_4785.mp4', 'IMG_4786.mp4',
            'IMG_4787.mp4', 'IMG_4788.mp4', 'IMG_4789.mp4', 'IMG_4790.mp4'
          ];

          videoFiles.forEach(filename => {
            const video = document.createElement('video');
            video.preload = 'metadata';
            video.src = `${process.env.PUBLIC_URL}/videos/${filename}`;
          });
        }, 500);
      }, 500);
    };

    // Start progressive loading after component mounts
    const timer = setTimeout(loadImagesSequentially, 100);
    return () => clearTimeout(timer);
  }, [photoImages, partImages]);
  return (
    <div className="projectsPage">
      {fullScreenImage && (
        <div 
          className="full-screen-overlay" 
          onClick={handleCloseFullScreen}
          onTouchStart={(e) => {
            const touch = e.touches[0];
            e.currentTarget.touchStartX = touch.clientX;
            e.currentTarget.touchStartY = touch.clientY;
          }}
          onTouchEnd={(e) => {
            const touch = e.changedTouches[0];
            const diffX = e.currentTarget.touchStartX - touch.clientX;
            const diffY = e.currentTarget.touchStartY - touch.clientY;
            
            // Only swipe if horizontal movement is greater than vertical
            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
              e.preventDefault();
              if (diffX > 0) {
                handleSwipe('next');
              } else {
                handleSwipe('prev');
              }
            }
          }}
        >
          <div className="full-screen-container">
            <button className="swipe-btn swipe-btn-left" onClick={(e) => {
              e.stopPropagation();
              handleSwipe('prev');
            }}>
              &#8249;
            </button>
            
            {/* Current Image */}
            <img 
              src={fullScreenImage} 
              alt="Full Screen" 
              className="full-screen-image current"
              style={{
                transform: 'translateX(0)',
                opacity: 1,
                transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                position: 'absolute',
                zIndex: 1
              }}
              onClick={(e) => e.stopPropagation()}
              onTouchStart={(e) => {
                const touch = e.touches[0];
                e.currentTarget.touchStartX = touch.clientX;
                e.currentTarget.touchStartTime = Date.now();
              }}
              onTouchMove={(e) => {
                if (!e.currentTarget.touchStartX || isTransitioning) return;
                const touch = e.touches[0];
                const diff = e.currentTarget.touchStartX - touch.clientX;
                
                // Visual feedback during swipe with horizontal translation (no opacity change)
                if (Math.abs(diff) > 10) {
                  const translateX = -diff * 0.8;
                  e.currentTarget.style.transform = `translateX(${translateX}px)`;
                  e.currentTarget.style.transition = 'none'; // Disable transition during drag
                }
              }}
              onTouchEnd={(e) => {
                if (isTransitioning) return;
                const touch = e.changedTouches[0];
                const diff = e.currentTarget.touchStartX - touch.clientX;
                const timeDiff = Date.now() - e.currentTarget.touchStartTime;
                
                // Reset transition (no opacity transition)
                e.currentTarget.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                
                // Swipe detection with velocity consideration
                if (Math.abs(diff) > 80 && timeDiff < 500) {
                  e.preventDefault();
                  if (diff > 0) {
                    handleSwipe('next');
                  } else {
                    handleSwipe('prev');
                  }
                } else {
                  // Reset to center if swipe wasn't strong enough (no opacity reset)
                  e.currentTarget.style.transform = 'translateX(0)';
                }
              }}
            />
            
            {/* Next Image (during transition) */}
            {nextImage && (
              <img 
                src={nextImage.src} 
                alt="" 
                className="full-screen-image next"
                style={{
                  transform: `translateX(${nextImage.direction === 'next' ? '100vw' : '-100vw'})`,
                  opacity: 1,
                  transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  position: 'absolute',
                  zIndex: 2
                }}
                onClick={(e) => e.stopPropagation()}
              />
            )}
            
            <button className="swipe-btn swipe-btn-right" onClick={(e) => {
              e.stopPropagation();
              handleSwipe('next');
            }}>
              &#8250;
            </button>
          </div>
        </div>
      )}
      <div className="projectTitle">
        <Link to="/">
          <FaHome className='iconHome'/>
        </Link>
        <h2>FOTO</h2>
      </div>
      <div className="projectRectangles">
        {photoImages.map((filename, index) => (
          index < loadedPhotos ? (
            <img 
              key={index}
              src={`${process.env.PUBLIC_URL}/photos/${filename}`} 
              alt="" 
              className="rectangle" 
              loading="eager" 
              onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/${filename}`)} 
            />
          ) : (
            <div 
              key={index}
              className="rectangle"
              style={{
                backgroundColor: '#f0f0f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#999',
                fontSize: '12px'
              }}
            >
              Loading...
            </div>
          )
        ))}
      </div>

      <div className='parte'>
        <h2>⬇️⬇️PEZZI VENDUTI A PARTE⬇️⬇️</h2>
        <h1>se comprati con la moto tutto a .... (da decidere)</h1>
      </div>

      <div className="projectRectangles">
        {partImages.map((filename, index) => (
          index < loadedParts ? (
            <img 
              key={index}
              src={`${process.env.PUBLIC_URL}/parts/${filename}`} 
              alt="" 
              className="rectangle" 
              onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/${filename}`)} 
            />
          ) : (
            <div 
              key={index}
              className="rectangle"
              style={{
                backgroundColor: '#f0f0f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#999',
                fontSize: '12px'
              }}
            >
              Loading...
            </div>
          )
        ))}
      </div>
      <br />
    </div>
  );
}

export default Photos;