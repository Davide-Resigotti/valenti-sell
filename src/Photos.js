
import './Contents.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";

function Photos() {

    const [fullScreenImage, setFullScreenImage] = useState(null);

    const handleImageClick = (src) => {
      setFullScreenImage(src);
    };
  
    const handleCloseFullScreen = () => {
      setFullScreenImage(null);
    };
  

  return (
    <div className="projectsPage">
        {fullScreenImage && (
      <div className="full-screen-overlay" onClick={handleCloseFullScreen}>
        <img src={fullScreenImage} alt="Full Screen" className="full-screen-image" />
      </div>
      )}
    <div className="projectTitle">
      <Link to="/">
      <FaHome className='iconHome'/>
      </Link>
      <h2 >FOTO</h2>
    </div>
    <div className="projectRectangles">
      <img src={`${process.env.PUBLIC_URL}/photos/IMG_4749-min.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4749-min.jpeg`)} loading="lazy" />
      <img src={`${process.env.PUBLIC_URL}/photos/IMG_4750-min.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4750-min.jpeg`)} loading="lazy" />
      <img src={`${process.env.PUBLIC_URL}/photos/IMG_4751-min.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4751-min.jpeg`)} loading="lazy" />
      <img src={`${process.env.PUBLIC_URL}/photos/IMG_4752-min.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4752-min.jpeg`)} loading="lazy" />
      <img src={`${process.env.PUBLIC_URL}/photos/IMG_4753-min.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4753-min.jpeg`)} loading="lazy" />
      <img src={`${process.env.PUBLIC_URL}/photos/IMG_4754-min.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4754-min.jpeg`)} loading="lazy" />
      <img src={`${process.env.PUBLIC_URL}/photos/IMG_4755-min.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4755-min.jpeg`)} loading="lazy" />  
      <img src={`${process.env.PUBLIC_URL}/photos/IMG_4756-min.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4756-min.jpeg`)} loading="lazy" />
      <img src={`${process.env.PUBLIC_URL}/photos/IMG_4759-min.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4759-min.jpeg`)} loading="lazy" />
      <img src={`${process.env.PUBLIC_URL}/photos/IMG_4760-min.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4760-min.jpeg`)} loading="lazy" />
      <img src={`${process.env.PUBLIC_URL}/photos/IMG_4761-min.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4761-min.jpeg`)} loading="lazy" />
      <img src={`${process.env.PUBLIC_URL}/photos/IMG_4762-min.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4762-min.jpeg`)} loading="lazy" />
      <img src={`${process.env.PUBLIC_URL}/photos/IMG_4763-min.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4763-min.jpeg`)} loading="lazy" />
      <img src={`${process.env.PUBLIC_URL}/photos/IMG_4764-min.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4764-min.jpeg`)} loading="lazy" />
      <img src={`${process.env.PUBLIC_URL}/photos/IMG_4765-min.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4765-min.jpeg`)} loading="lazy" />
      <img src={`${process.env.PUBLIC_URL}/photos/IMG_4766-min.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4766-min.jpeg`)} loading="lazy" />
      <img src={`${process.env.PUBLIC_URL}/photos/IMG_4767-min.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4767-min.jpeg`)} loading="lazy" />
      <img src={`${process.env.PUBLIC_URL}/photos/IMG_4768-min.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4768-min.jpeg`)} loading="lazy" />
      <img src={`${process.env.PUBLIC_URL}/photos/IMG_4769-min.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4769-min.jpeg`)} loading="lazy" />
      <img src={`${process.env.PUBLIC_URL}/photos/IMG_4770-min.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4770-min.jpeg`)} loading="lazy" />
      <img src={`${process.env.PUBLIC_URL}/photos/IMG_4771-min.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4771-min.jpeg`)} loading="lazy" />
      <img src={`${process.env.PUBLIC_URL}/photos/IMG_4772-min.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4772-min.jpeg`)} loading="lazy" />
      <img src={`${process.env.PUBLIC_URL}/photos/IMG_4773-min.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4773-min.jpeg`)} loading="lazy" />
      <img src={`${process.env.PUBLIC_URL}/photos/IMG_4774-min.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4774-min.jpeg`)} loading="lazy" />
      <img src={`${process.env.PUBLIC_URL}/photos/IMG_4775-min.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4775-min.jpeg`)} loading="lazy" />
      <img src={`${process.env.PUBLIC_URL}/photos/IMG_4776-min.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4776-min.jpeg`)} loading="lazy" />
      <img src={`${process.env.PUBLIC_URL}/photos/IMG_4777-min.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4777-min.jpeg`)} loading="lazy" />
      <img src={`${process.env.PUBLIC_URL}/photos/IMG_4778-min.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4778-min.jpeg`)} loading="lazy" />
      <img src={`${process.env.PUBLIC_URL}/photos/IMG_4779-min.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4779-min.jpeg`)} loading="lazy" />
      <img src={`${process.env.PUBLIC_URL}/photos/IMG_4780-min.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4780-min.jpeg`)} loading="lazy" />
      <img src={`${process.env.PUBLIC_URL}/photos/IMG_4781-min.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4781-min.jpeg`)} loading="lazy" />
      <img src={`${process.env.PUBLIC_URL}/photos/IMG_4783-min.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4783-min.jpeg`)} loading="lazy" />

    </div>


    {/* <div className='parte'>
      <h2>⬇️⬇️PEZZI VENDUTI A PARTE⬇️⬇️</h2>
      <h1>se comprati con la moto tutto a .... (da decidere)</h1>
    </div>

      <div className="projectRectangles">
      <img src={`${process.env.PUBLIC_URL}/parts/IMG_3765.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_3765.jpeg`)} loading="lazy" />
      <img src={`${process.env.PUBLIC_URL}/parts/IMG_3766.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_3766.jpeg`)} loading="lazy" />

      <br />
    </div> */}

    
    <br />
    </div>
    )
}

export default Photos