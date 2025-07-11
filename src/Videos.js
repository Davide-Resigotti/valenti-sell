import './Contents.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import useMediaCache from './hooks/useMediaCache';

function Videos() {
  const { getCachedVideo, isVideoCached, markVideoAsLoaded } = useMediaCache();
  const [loadedVideos, setLoadedVideos] = useState(new Set());

  const handleVideoLoad = (src) => {
    setLoadedVideos(prev => new Set([...prev, src]));
    markVideoAsLoaded(src);
  };

  const VideoWithLoader = ({ src, title }) => {
    const isCached = isVideoCached(src);
    const isLoaded = loadedVideos.has(src) || isCached;
    
    return (
      <div className="video-container">
        {!isLoaded && (
          <div className="video-placeholder">
            <div className="spinner"></div>
            <p>Caricamento video...</p>
          </div>
        )}
        <video 
          title={title}
          controls 
          className={`rectangle ${isLoaded ? 'loaded' : 'loading'}`}
          onCanPlayThrough={() => handleVideoLoad(src)}
          onLoadedData={() => handleVideoLoad(src)}
          style={{ display: isLoaded ? 'block' : 'none' }}
          preload={isCached ? "metadata" : "auto"}
          playsInline
          muted={false}
        >
          <source src={getCachedVideo(src)} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };


  return (
    <div className="projectsPage">

      <div className="projectTitle">
      <Link to="/">
        <FaHome className='iconHome' />
      </Link>
      <h2 className='foto'>VIDEO</h2>
      </div>
      <div className="projectRectangles" >
      <VideoWithLoader 
        src={`${process.env.PUBLIC_URL}/videos/IMG_4784.mp4`}
        title="Prima di mettere olio nel miscelatore per fare vedere che la spia funziona, tutte le spie funzionano correttamente"
      />
      <VideoWithLoader 
        src={`${process.env.PUBLIC_URL}/videos/IMG_4785.mp4`}
        title="Video del motore in funzione"
      />
      <VideoWithLoader 
        src={`${process.env.PUBLIC_URL}/videos/IMG_4786.mp4`}
        title="Test funzionalità elettriche"
      />
      <VideoWithLoader 
        src={`${process.env.PUBLIC_URL}/videos/IMG_4787.mp4`}
        title="Prova di guida"
      />
      <VideoWithLoader 
        src={`${process.env.PUBLIC_URL}/videos/IMG_4788.mp4`}
        title="Test frenata"
      />
      <VideoWithLoader 
        src={`${process.env.PUBLIC_URL}/videos/IMG_4789.mp4`}
        title="Panoramica generale"
      />
      <VideoWithLoader 
        src={`${process.env.PUBLIC_URL}/videos/IMG_4790.mp4`}
        title="Dettagli finali"
      />
    
      </div>
      <br />

      
    </div>
    )
}

export default Videos