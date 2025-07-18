import './Contents.css';
import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";

function Photos() {
  const [fullScreenImage, setFullScreenImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadedPhotos, setLoadedPhotos] = useState(0);
  const [loadedParts, setLoadedParts] = useState(0);
  const [loadedEngineAssembly, setLoadedEngineAssembly] = useState(0);

  // Add state to store scroll position
  const [scrollPosition, setScrollPosition] = useState(0);

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

  // Engine assembly images - compressed WebP versions
  const engineAssemblyImages = useMemo(() => [
    'IMG_3941.webp', 'IMG_3943.webp', 'IMG_3944.webp', 'IMG_3946.webp', 'IMG_3947.webp',
    'IMG_3948.webp', 'IMG_3949.webp', 'IMG_3950.webp', 'IMG_3951.webp', 'IMG_3953.webp',
    'IMG_3956.webp', 'IMG_3957.webp', 'IMG_4016.webp', 'IMG_4017.webp', 'IMG_4018.webp',
    'IMG_4028.webp', 'IMG_4038.webp', 'IMG_4039.webp', 'IMG_4040.webp', 'IMG_4041.webp',
    'IMG_4042.webp', 'IMG_4043.webp', 'IMG_4044.webp', 'IMG_4045.webp', 'IMG_4046.webp',
    'IMG_4047.webp', 'IMG_4048.webp', 'IMG_4049.webp', 'IMG_4050.webp', 'IMG_4053.webp',
    'IMG_4054.webp', 'IMG_4056.webp', 'IMG_4096.webp', 'IMG_4097.webp', 'IMG_4402.webp',
    'IMG_4403.webp', 'IMG_4404.webp', 'IMG_4405.webp', 'IMG_4406.webp', 'IMG_4407.webp',
    'IMG_4408.webp', 'IMG_4409.webp', 'IMG_4410.webp', 'IMG_4411.webp', 'IMG_4412.webp',
    'IMG_4058.webp', 'IMG_4094.webp', 'IMG_4432.webp', 'IMG_4433.webp', 'IMG_4434.webp',
    'IMG_4435.webp', 'IMG_4436.webp', 'IMG_4437.webp', 'IMG_4438.webp', 'IMG_4439.webp',
    'IMG_4440.webp', 'IMG_4441.webp', 'IMG_4442.webp'
  ], []);

  // Combined all images for navigation (photos + parts + engine assembly)
  const combinedImages = useMemo(() => [
    ...allImages,
    ...engineAssemblyImages
  ], [allImages, engineAssemblyImages]);

  const photoImages = useMemo(() => allImages.slice(0, 35), [allImages]); // First 35 are photos
  const partImages = useMemo(() => allImages.slice(35), [allImages]); // Rest are parts

  const handleImageClick = (src) => {
    const filename = src.split('/').pop();
    const index = combinedImages.indexOf(filename);
    setCurrentImageIndex(index);
    setFullScreenImage(src);

    // Store current scroll position
    setScrollPosition(window.pageYOffset || document.documentElement.scrollTop);

    // Prevent body scroll on mobile
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.top = `-${scrollPosition}px`;
  };

  const handleCloseFullScreen = () => {
    setFullScreenImage(null);

    // Restore body scroll
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.width = '';
    document.body.style.top = '';

    // Restore scroll position
    window.scrollTo(0, scrollPosition);
  };

  const handleNavigation = (direction) => {
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentImageIndex + 1) % combinedImages.length;
    } else {
      newIndex = currentImageIndex === 0 ? combinedImages.length - 1 : currentImageIndex - 1;
    }

    // Determine which folder the image is in
    let folder, newSrc;
    if (newIndex < 35) {
      // Photos folder
      folder = 'photos';
      newSrc = `${process.env.PUBLIC_URL}/${folder}/${combinedImages[newIndex]}`;
    } else if (newIndex < 63) {
      // Parts folder
      folder = 'parts';
      newSrc = `${process.env.PUBLIC_URL}/${folder}/${combinedImages[newIndex]}`;
    } else {
      // Engine assembly folder
      const engineIndex = newIndex - 63;
      const filename = engineAssemblyImages[engineIndex];
      // All engine assembly images are in engine-assembly-webp folder
      folder = 'engine-assembly-webp';
      newSrc = `${process.env.PUBLIC_URL}/${folder}/${filename}`;
    }

    setCurrentImageIndex(newIndex);
    setFullScreenImage(newSrc);
  };

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

      // After all parts, load engine assembly images
      for (let i = 0; i < engineAssemblyImages.length; i++) {
        try {
          await new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
              setLoadedEngineAssembly(i + 1);
              resolve();
            };
            img.onerror = reject;
            const filename = engineAssemblyImages[i];
            // All engine assembly images are in engine-assembly-webp folder
            img.src = `${process.env.PUBLIC_URL}/engine-assembly-webp/${filename}`;
          });
        } catch (error) {
          console.log(`Failed to load engine assembly ${engineAssemblyImages[i]}, continuing...`);
          setLoadedEngineAssembly(i + 1); // Still increment to continue loading
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
  }, [photoImages, partImages, engineAssemblyImages]);
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

            // Only swipe if horizontal movement is greater than vertical and significant
            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
              e.preventDefault();
              if (diffX > 0) {
                handleNavigation('next');
              } else {
                handleNavigation('prev');
              }
            }
          }}
        >
          <div className="full-screen-container">
            <button className="nav-btn nav-btn-left" onClick={(e) => {
              e.stopPropagation();
              handleNavigation('prev');
            }}>
              &#8249;
            </button>

            <img
              src={fullScreenImage}
              alt="Full Screen"
              className="full-screen-image"
              onClick={(e) => e.stopPropagation()}
            />

            <button className="nav-btn nav-btn-right" onClick={(e) => {
              e.stopPropagation();
              handleNavigation('next');
            }}>
              &#8250;
            </button>
          </div>
        </div>
      )}
      <div className="projectTitle">
        <Link to="/">
          <FaHome className='iconHome' />
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

      <div className='parte'>
        <h2>🔧🔧 SMONTAGGIO MOTORE 🔧🔧</h2>
        <h1>Processo completo di smontaggio e assemblaggio</h1>
      </div>

      <div className="projectRectangles">
        {engineAssemblyImages.map((filename, index) => (
          index < loadedEngineAssembly ? (
            <img
              key={index}
              src={`${process.env.PUBLIC_URL}/engine-assembly-webp/${filename}`}
              alt=""
              className="rectangle"
              onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/engine-assembly-webp/${filename}`)}
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