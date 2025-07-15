import './Contents.css';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import VideoPlayer from './components/VideoPlayer';

function Videos() {
  const videoData = [
    {
      id: 'IMG_4784',
      title: "Prima di mettere olio nel miscelatore per fare vedere che la spia funziona, tutte le spie funzionano correttamente",
      src: `${process.env.PUBLIC_URL}/videos/IMG_4784.mp4`,
      thumbnail: `${process.env.PUBLIC_URL}/videos/IMG_4784_thumb.webp`
    },
    {
      id: 'IMG_4785',
      title: "Video del motore in funzione",
      src: `${process.env.PUBLIC_URL}/videos/IMG_4785.mp4`,
      thumbnail: `${process.env.PUBLIC_URL}/videos/IMG_4785_thumb.webp`
    },
    {
      id: 'IMG_4786',
      title: "Test funzionalità elettriche",
      src: `${process.env.PUBLIC_URL}/videos/IMG_4786.mp4`,
      thumbnail: `${process.env.PUBLIC_URL}/videos/IMG_4786_thumb.webp`
    },
    {
      id: 'IMG_4787',
      title: "Prova di guida",
      src: `${process.env.PUBLIC_URL}/videos/IMG_4787.mp4`,
      thumbnail: `${process.env.PUBLIC_URL}/videos/IMG_4787_thumb.webp`
    },
    {
      id: 'IMG_4788',
      title: "Test frenata",
      src: `${process.env.PUBLIC_URL}/videos/IMG_4788.mp4`,
      thumbnail: `${process.env.PUBLIC_URL}/videos/IMG_4788_thumb.webp`
    },
    {
      id: 'IMG_4789',
      title: "Panoramica generale",
      src: `${process.env.PUBLIC_URL}/videos/IMG_4789.mp4`,
      thumbnail: `${process.env.PUBLIC_URL}/videos/IMG_4789_thumb.webp`
    },
    {
      id: 'IMG_4790',
      title: "Dettagli finali",
      src: `${process.env.PUBLIC_URL}/videos/IMG_4790.mp4`,
      thumbnail: `${process.env.PUBLIC_URL}/videos/IMG_4790_thumb.webp`
    }
  ];

  return (
    <div className="projectsPage">
      <div className="projectTitle">
        <Link to="/">
          <FaHome className='iconHome' />
        </Link>
        <h2 className='foto'>VIDEO</h2>
      </div>
      <div className="projectRectangles">
        {videoData.map((video) => (
          <VideoPlayer
            key={video.id}
            src={video.src}
            title={video.title}
            thumbnail={video.thumbnail}
            className="rectangle"
            preload="metadata"
          />
        ))}
      </div>
      <br />
    </div>
  );
}

export default Videos;