import { useState, useEffect } from 'react';

const useMediaCache = () => {
  const [cachedImages, setCachedImages] = useState(new Map());
  const [cachedVideos, setCachedVideos] = useState(new Map());

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
      return cachedVideos.has(src);
    }
  };

  return {
    getCachedImage,
    getCachedVideo,
    isMediaLoaded
  };
};

export default useMediaCache;
