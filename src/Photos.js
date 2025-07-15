
import './Contents.css';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";

function Photos() {
  const [fullScreenImage, setFullScreenImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentImageIndex + 1) % allImages.length;
    } else {
      newIndex = currentImageIndex === 0 ? allImages.length - 1 : currentImageIndex - 1;
    }
    setCurrentImageIndex(newIndex);
    
    const isPartImage = newIndex >= 35;
    const folder = isPartImage ? 'parts' : 'photos';
    const newSrc = `${process.env.PUBLIC_URL}/${folder}/${allImages[newIndex]}`;
    setFullScreenImage(newSrc);
  }, [currentImageIndex, allImages]);

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

  // Preload images in sequence: photos first, then videos
  useEffect(() => {
    const preloadPhotosFirst = async () => {
      // First, preload all photo images
      const photoPromises = photoImages.map(filename => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = resolve; // Still resolve on error to continue
          img.src = `${process.env.PUBLIC_URL}/photos/${filename}`;
        });
      });

      const partPromises = partImages.map(filename => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = resolve; // Still resolve on error to continue
          img.src = `${process.env.PUBLIC_URL}/parts/${filename}`;
        });
      });

      try {
        // Wait for all photos to load first
        await Promise.all([...photoPromises, ...partPromises]);
        
        // After photos are loaded, start preloading video thumbnails
        const videoThumbnails = [
          'IMG_4784.webp', 'IMG_4785.webp', 'IMG_4786.webp', 
          'IMG_4787.webp', 'IMG_4788.webp', 'IMG_4789.webp', 'IMG_4790.webp'
        ];

        videoThumbnails.forEach(filename => {
          const img = new Image();
          img.src = `${process.env.PUBLIC_URL}/thumbnails/${filename}`;
        });

        // Finally, start preloading actual videos (lowest priority)
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
        }, 1000); // Wait 1 second after photos before starting videos

      } catch (error) {
        console.log('Some images failed to preload, continuing anyway');
      }
    };

    // Start preloading after a short delay to not block initial render
    const timer = setTimeout(preloadPhotosFirst, 100);
    return () => clearTimeout(timer);
  }, [photoImages, partImages]);
  return (
    <div className="projectsPage">
      {fullScreenImage && (
        <div className="full-screen-overlay" onClick={handleCloseFullScreen}>
          <div className="full-screen-container">
            <button className="swipe-btn swipe-btn-left" onClick={(e) => {
              e.stopPropagation();
              handleSwipe('prev');
            }}>
              &#8249;
            </button>
            <img 
              src={fullScreenImage} 
              alt="Full Screen" 
              className="full-screen-image"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={(e) => {
                const touch = e.touches[0];
                e.currentTarget.touchStartX = touch.clientX;
              }}
              onTouchEnd={(e) => {
                const touch = e.changedTouches[0];
                const diff = e.currentTarget.touchStartX - touch.clientX;
                if (Math.abs(diff) > 50) {
                  if (diff > 0) {
                    handleSwipe('next');
                  } else {
                    handleSwipe('prev');
                  }
                }
              }}
            />
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
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4749.webp`} alt="" className="rectangle" loading="eager" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4749.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4750.webp`} alt="" className="rectangle" loading="eager" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4750.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4751.webp`} alt="" className="rectangle" loading="eager" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4751.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4752.webp`} alt="" className="rectangle" loading="eager" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4752.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4753.webp`} alt="" className="rectangle" loading="eager" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4753.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4754.webp`} alt="" className="rectangle" loading="eager" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4754.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4755.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4755.webp`)} />  
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4756.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4756.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4759.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4759.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4760.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4760.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4761.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4761.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4762.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4762.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4763.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4763.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4764.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4764.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4765.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4765.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4766.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4766.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4767.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4767.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4768.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4768.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4769.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4769.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4770.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4770.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4771.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4771.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4772.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4772.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4773.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4773.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4774.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4774.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4775.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4775.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4776.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4776.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4777.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4777.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4778.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4778.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4779.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4779.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4780.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4780.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4781.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4781.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4783.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4783.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4791.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4791.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4792.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4792.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4799.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4799.webp`)} />
      </div>

      <div className='parte'>
        <h2>⬇️⬇️PEZZI VENDUTI A PARTE⬇️⬇️</h2>
        <h1>se comprati con la moto tutto a .... (da decidere)</h1>
      </div>

      <div className="projectRectangles">
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4793.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4793.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4794.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4794.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4795.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4795.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4796.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4796.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4797.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4797.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4798.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4798.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4800.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4800.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4801.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4801.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4803.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4803.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4806.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4806.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4807.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4807.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4808.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4808.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4809.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4809.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4810.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4810.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4811.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4811.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4812.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4812.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4813.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4813.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4814.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4814.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4815.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4815.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4816.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4816.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4817.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4817.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4818.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4818.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4819.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4819.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4820.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4820.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4821.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4821.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4822.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4822.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4823.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4823.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4824.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4824.webp`)} />
      </div>
      <br />
    </div>
  );
}

export default Photos;