import './Contents.css';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";

function Videos() {
  return (
    <div className="projectsPage">
      <div className="projectTitle">
        <Link to="/">
          <FaHome className='iconHome' />
        </Link>
        <h2 className='foto'>VIDEO</h2>
      </div>
      <div className="projectRectangles">
        <video title="Prima di mettere olio nel miscelatore per fare vedere che la spia funziona, tutte le spie funzionano correttamente" controls className="rectangle">
          <source src={`${process.env.PUBLIC_URL}/videos/IMG_4784.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <video title="Video del motore in funzione" controls className="rectangle">
          <source src={`${process.env.PUBLIC_URL}/videos/IMG_4785.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <video title="Test funzionalità elettriche" controls className="rectangle">
          <source src={`${process.env.PUBLIC_URL}/videos/IMG_4786.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <video title="Prova di guida" controls className="rectangle">
          <source src={`${process.env.PUBLIC_URL}/videos/IMG_4787.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <video title="Test frenata" controls className="rectangle">
          <source src={`${process.env.PUBLIC_URL}/videos/IMG_4788.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <video title="Panoramica generale" controls className="rectangle">
          <source src={`${process.env.PUBLIC_URL}/videos/IMG_4789.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <video title="Dettagli finali" controls className="rectangle">
          <source src={`${process.env.PUBLIC_URL}/videos/IMG_4790.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <br />
    </div>
  );
}

export default Videos;