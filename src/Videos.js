
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
      <div className="projectRectangles" >
      <video alt="Prima di mettere olio nel miscelatore per fare vedere che la spia funziona, tutte le spie funzionano correttamente" controls className="rectangle" >
        <source src={`${process.env.PUBLIC_URL}/videos/IMG_4784.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video alt="Video 2" controls className="rectangle" >
        <source src={`${process.env.PUBLIC_URL}/videos/IMG_4785.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video alt="Video 3" controls className="rectangle" >
        <source src={`${process.env.PUBLIC_URL}/videos/IMG_4786.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video alt="Video 4" controls className="rectangle" >
        <source src={`${process.env.PUBLIC_URL}/videos/IMG_4787.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video alt="Video 5" controls className="rectangle" >
        <source src={`${process.env.PUBLIC_URL}/videos/IMG_4788.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video alt="Video 6" controls className="rectangle" >
        <source src={`${process.env.PUBLIC_URL}/videos/IMG_4789.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video alt="Video 7" controls className="rectangle" >
        <source src={`${process.env.PUBLIC_URL}/videos/IMG_4790.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    
      </div>
      <br />

      
    </div>
    )
}

export default Videos