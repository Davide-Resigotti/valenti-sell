import { useState, useEffect } from 'react';

const useMediaCache = () => {
  const [cachedImages, setCachedImages] = useState(new Map());
  const [cachedVideos, setCachedVideos] = useState(new Map());

  // Verifica se un video è in cache del browser
  const isVideoCached = (src) => {
    try {
      const cachedVideos = JSON.parse(localStorage.getItem('cachedVideos') || '{}');
      const cached = cachedVideos[src];
      const oneDayAgo = Date.now() - (24 * 60 * 60 * 1000);
      
      return cached && cached.cached && cached.timestamp > oneDayAgo;
    } catch (e) {
      return false;
    }
  };

  // Funzione per ottenere un'immagine dalla cache del browser
  const getCachedImage = (src) => {
    if (cachedImages.has(src)) {
      return cachedImages.get(src);
    }
    
    // Se non è in cache, ritorna l'src normale
    return src;
  };

  // Funzione per ottenere un video dalla cache del browser
  const getCachedVideo = (src) => {
    if (cachedVideos.has(src)) {
      return cachedVideos.get(src);
    }
    
    // Se non è in cache, ritorna l'src normale
    return src;
  };

  // Funzione per controllare se un media è già stato caricato
  const isMediaLoaded = (src, type = 'image') => {
    if (type === 'image') {
      return cachedImages.has(src);
    } else {
      return isVideoCached(src);
    }
  };

  // Funzione per marcare un video come caricato
  const markVideoAsLoaded = (src) => {
    try {
      const cachedVideos = JSON.parse(localStorage.getItem('cachedVideos') || '{}');
      cachedVideos[src] = {
        cached: true,
        timestamp: Date.now()
      };
      localStorage.setItem('cachedVideos', JSON.stringify(cachedVideos));
    } catch (e) {
      console.warn('Impossibile salvare cache info per video:', e);
    }
  };

  return {
    getCachedImage,
    getCachedVideo,
    isMediaLoaded,
    isVideoCached,
    markVideoAsLoaded
  };
};

export default useMediaCache;
