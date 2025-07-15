import { useEffect, useState } from 'react';

const usePreloadMedia = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Lista delle immagini da precaricare (WebP con fallback JPEG)
  const imageUrls = [
    `${process.env.PUBLIC_URL}/photos/IMG_4749.webp`,
    `${process.env.PUBLIC_URL}/photos/IMG_4750.webp`,
    `${process.env.PUBLIC_URL}/photos/IMG_4751.webp`,
    `${process.env.PUBLIC_URL}/photos/IMG_4752.webp`,
    `${process.env.PUBLIC_URL}/photos/IMG_4753.webp`,
    `${process.env.PUBLIC_URL}/photos/IMG_4754.webp`,
    `${process.env.PUBLIC_URL}/photos/IMG_4755.webp`,
    `${process.env.PUBLIC_URL}/photos/IMG_4756.webp`,
    `${process.env.PUBLIC_URL}/photos/IMG_4759.webp`,
    `${process.env.PUBLIC_URL}/photos/IMG_4760.webp`,
    `${process.env.PUBLIC_URL}/photos/IMG_4761.webp`,
    `${process.env.PUBLIC_URL}/photos/IMG_4762.webp`,
    `${process.env.PUBLIC_URL}/photos/IMG_4763.webp`,
    `${process.env.PUBLIC_URL}/photos/IMG_4764.webp`,
    `${process.env.PUBLIC_URL}/photos/IMG_4765.webp`,
    `${process.env.PUBLIC_URL}/photos/IMG_4766.webp`,
    `${process.env.PUBLIC_URL}/photos/IMG_4767.webp`,
    `${process.env.PUBLIC_URL}/photos/IMG_4768.webp`,
    `${process.env.PUBLIC_URL}/photos/IMG_4769.webp`,
    `${process.env.PUBLIC_URL}/photos/IMG_4770.webp`,
    `${process.env.PUBLIC_URL}/photos/IMG_4771.webp`,
    `${process.env.PUBLIC_URL}/photos/IMG_4772.webp`,
    `${process.env.PUBLIC_URL}/photos/IMG_4773.webp`,
    `${process.env.PUBLIC_URL}/photos/IMG_4774.webp`,
    `${process.env.PUBLIC_URL}/photos/IMG_4775.webp`,
    `${process.env.PUBLIC_URL}/photos/IMG_4776.webp`,
    `${process.env.PUBLIC_URL}/photos/IMG_4777.webp`,
    `${process.env.PUBLIC_URL}/photos/IMG_4778.webp`,
    `${process.env.PUBLIC_URL}/photos/IMG_4779.webp`,
    `${process.env.PUBLIC_URL}/photos/IMG_4780.webp`,
    `${process.env.PUBLIC_URL}/photos/IMG_4781.webp`,
    `${process.env.PUBLIC_URL}/photos/IMG_4783.webp`,
  ];

  // Lista dei video da precaricare (solo i metadati per essere più leggeri)
  const videoUrls = [
    `${process.env.PUBLIC_URL}/videos/IMG_4784.mp4`,
    `${process.env.PUBLIC_URL}/videos/IMG_4785.mp4`,
    `${process.env.PUBLIC_URL}/videos/IMG_4786.mp4`,
    `${process.env.PUBLIC_URL}/videos/IMG_4787.mp4`,
    `${process.env.PUBLIC_URL}/videos/IMG_4788.mp4`,
    `${process.env.PUBLIC_URL}/videos/IMG_4789.mp4`,
    `${process.env.PUBLIC_URL}/videos/IMG_4790.mp4`,
  ];

  const preloadImages = async () => {
    const totalImages = imageUrls.length;
    let loadedImages = 0;

    const imagePromises = imageUrls.map((webpUrl) => {
      return new Promise((resolve) => {
        const img = new Image();
        
        img.onload = () => {
          loadedImages++;
          setLoadingProgress((loadedImages / totalImages) * 70); // 70% per le immagini
          console.log(`Caricato WebP: ${webpUrl}`);
          resolve(img);
        };
        
        img.onerror = () => {
          loadedImages++;
          setLoadingProgress((loadedImages / totalImages) * 70);
          console.warn(`Errore nel caricamento di ${webpUrl}`);
          resolve(null);
        };
        
        img.src = webpUrl;
      });
    });

    try {
      await Promise.all(imagePromises);
      console.log('Tutte le immagini WebP sono state precaricate');
    } catch (error) {
      console.error('Errore nel precaricamento delle immagini:', error);
    }
  };

  const preloadVideos = async () => {
    const totalVideos = videoUrls.length;
    let loadedVideos = 0;

    const videoPromises = videoUrls.map((url) => {
      return new Promise((resolve, reject) => {
        const video = document.createElement('video');
        video.preload = 'auto'; // Carica tutto il video per metterlo in cache
        video.muted = true; // Necessario per autoplay in alcuni browser
        video.playsInline = true; // Per dispositivi mobile
        
        // Cache del video nel localStorage per sessioni future
        video.oncanplaythrough = () => {
          loadedVideos++;
          setLoadingProgress(70 + (loadedVideos / totalVideos) * 30);
          
          // Salva informazioni sulla cache nel localStorage
          try {
            const cachedVideos = JSON.parse(localStorage.getItem('cachedVideos') || '{}');
            cachedVideos[url] = {
              cached: true,
              timestamp: Date.now(),
              size: video.duration || 0
            };
            localStorage.setItem('cachedVideos', JSON.stringify(cachedVideos));
          } catch (e) {
            console.warn('Impossibile salvare cache info:', e);
          }
          
          resolve(video);
        };
        
        video.onerror = (e) => {
          console.warn(`Errore caricamento video ${url}:`, e);
          loadedVideos++;
          setLoadingProgress(70 + (loadedVideos / totalVideos) * 30);
          resolve(null); // Continua anche se un video fallisce
        };
        
        video.src = url;
        
        // Forza il caricamento
        video.load();
      });
    });

    try {
      const results = await Promise.all(videoPromises);
      const successfulLoads = results.filter(v => v !== null).length;
      console.log(`${successfulLoads}/${totalVideos} video sono stati precaricati e cachati`);
    } catch (error) {
      console.error('Errore nel precaricamento dei video:', error);
    }
  };

  // Controlla se i video sono già stati cachati di recente (ultimi 24 ore)
  const areVideosCached = () => {
    try {
      const cachedVideos = JSON.parse(localStorage.getItem('cachedVideos') || '{}');
      const oneDayAgo = Date.now() - (24 * 60 * 60 * 1000);
      
      return videoUrls.every(url => {
        const cached = cachedVideos[url];
        return cached && cached.cached && cached.timestamp > oneDayAgo;
      });
    } catch (e) {
      return false;
    }
  };

  const startPreloading = async () => {
    setIsLoading(true);
    setLoadingProgress(0);

    try {
      // Precarica sempre le immagini
      await preloadImages();
      
      // Controlla se i video sono già in cache
      if (areVideosCached()) {
        console.log('Video già in cache, skip precaricamento');
        setLoadingProgress(100);
      } else {
        console.log('Precaricamento video...');
        await preloadVideos();
        setLoadingProgress(100);
      }
    } catch (error) {
      console.error('Errore durante il precaricamento:', error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  };

  useEffect(() => {
    // Pulisci cache vecchia al mount
    const cleanOldCache = () => {
      try {
        const cachedVideos = JSON.parse(localStorage.getItem('cachedVideos') || '{}');
        const oneDayAgo = Date.now() - (24 * 60 * 60 * 1000);
        const cleanedCache = {};
        
        Object.keys(cachedVideos).forEach(url => {
          if (cachedVideos[url].timestamp > oneDayAgo) {
            cleanedCache[url] = cachedVideos[url];
          }
        });
        
        localStorage.setItem('cachedVideos', JSON.stringify(cleanedCache));
      } catch (e) {
        console.warn('Errore pulizia cache:', e);
      }
    };

    cleanOldCache();
    // Avvia il precaricamento automaticamente quando l'hook viene montato
    startPreloading();
  }, []);

  return {
    isLoading,
    loadingProgress,
    startPreloading
  };
};

export default usePreloadMedia;
