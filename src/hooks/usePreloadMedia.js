import { useEffect, useState } from 'react';

const usePreloadMedia = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Lista delle immagini da precaricare
  const imageUrls = [
    `${process.env.PUBLIC_URL}/photos/IMG_4749-min.jpeg`,
    `${process.env.PUBLIC_URL}/photos/IMG_4750-min.jpeg`,
    `${process.env.PUBLIC_URL}/photos/IMG_4751-min.jpeg`,
    `${process.env.PUBLIC_URL}/photos/IMG_4752-min.jpeg`,
    `${process.env.PUBLIC_URL}/photos/IMG_4753-min.jpeg`,
    `${process.env.PUBLIC_URL}/photos/IMG_4754-min.jpeg`,
    `${process.env.PUBLIC_URL}/photos/IMG_4755-min.jpeg`,
    `${process.env.PUBLIC_URL}/photos/IMG_4756-min.jpeg`,
    `${process.env.PUBLIC_URL}/photos/IMG_4759-min.jpeg`,
    `${process.env.PUBLIC_URL}/photos/IMG_4760-min.jpeg`,
    `${process.env.PUBLIC_URL}/photos/IMG_4761-min.jpeg`,
    `${process.env.PUBLIC_URL}/photos/IMG_4762-min.jpeg`,
    `${process.env.PUBLIC_URL}/photos/IMG_4763-min.jpeg`,
    `${process.env.PUBLIC_URL}/photos/IMG_4764-min.jpeg`,
    `${process.env.PUBLIC_URL}/photos/IMG_4765-min.jpeg`,
    `${process.env.PUBLIC_URL}/photos/IMG_4766-min.jpeg`,
    `${process.env.PUBLIC_URL}/photos/IMG_4767-min.jpeg`,
    `${process.env.PUBLIC_URL}/photos/IMG_4768-min.jpeg`,
    `${process.env.PUBLIC_URL}/photos/IMG_4769-min.jpeg`,
    `${process.env.PUBLIC_URL}/photos/IMG_4770-min.jpeg`,
    `${process.env.PUBLIC_URL}/photos/IMG_4771-min.jpeg`,
    `${process.env.PUBLIC_URL}/photos/IMG_4772-min.jpeg`,
    `${process.env.PUBLIC_URL}/photos/IMG_4773-min.jpeg`,
    `${process.env.PUBLIC_URL}/photos/IMG_4774-min.jpeg`,
    `${process.env.PUBLIC_URL}/photos/IMG_4775-min.jpeg`,
    `${process.env.PUBLIC_URL}/photos/IMG_4776-min.jpeg`,
    `${process.env.PUBLIC_URL}/photos/IMG_4777-min.jpeg`,
    `${process.env.PUBLIC_URL}/photos/IMG_4778-min.jpeg`,
    `${process.env.PUBLIC_URL}/photos/IMG_4779-min.jpeg`,
    `${process.env.PUBLIC_URL}/photos/IMG_4780-min.jpeg`,
    `${process.env.PUBLIC_URL}/photos/IMG_4781-min.jpeg`,
    `${process.env.PUBLIC_URL}/photos/IMG_4783-min.jpeg`,
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

    const imagePromises = imageUrls.map((url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          loadedImages++;
          setLoadingProgress((loadedImages / totalImages) * 70); // 70% per le immagini
          resolve(img);
        };
        img.onerror = reject;
        img.src = url;
      });
    });

    try {
      await Promise.all(imagePromises);
      console.log('Tutte le immagini sono state precaricate');
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
        video.preload = 'metadata'; // Carica solo i metadati, non tutto il video
        video.onloadedmetadata = () => {
          loadedVideos++;
          setLoadingProgress(70 + (loadedVideos / totalVideos) * 30); // 30% per i video
          resolve(video);
        };
        video.onerror = reject;
        video.src = url;
      });
    });

    try {
      await Promise.all(videoPromises);
      console.log('Metadati di tutti i video sono stati precaricati');
    } catch (error) {
      console.error('Errore nel precaricamento dei video:', error);
    }
  };

  const startPreloading = async () => {
    setIsLoading(true);
    setLoadingProgress(0);

    try {
      // Precarica prima le immagini, poi i video
      await preloadImages();
      await preloadVideos();
      setLoadingProgress(100);
    } catch (error) {
      console.error('Errore durante il precaricamento:', error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 500); // Piccolo delay per mostrare il completamento
    }
  };

  useEffect(() => {
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
