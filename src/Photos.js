
import './Contents.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import WebPImage from './components/WebPImage';

function Photos() {

    const [fullScreenImage, setFullScreenImage] = useState(null);

    const handleImageClick = (src) => {
      // Convert JPEG src to WebP for fullscreen display
      const webpSrc = src.replace(/\.jpeg$/i, '.webp');
      setFullScreenImage(webpSrc);
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
      <WebPImage src={`${process.env.PUBLIC_URL}/photos/IMG_4749.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4749.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/photos/IMG_4750.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4750.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/photos/IMG_4751.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4751.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/photos/IMG_4752.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4752.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/photos/IMG_4753.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4753.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/photos/IMG_4754.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4754.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/photos/IMG_4755.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4755.jpeg`)} />  
      <WebPImage src={`${process.env.PUBLIC_URL}/photos/IMG_4756.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4756.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/photos/IMG_4759.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4759.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/photos/IMG_4760.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4760.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/photos/IMG_4761.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4761.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/photos/IMG_4762.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4762.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/photos/IMG_4763.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4763.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/photos/IMG_4764.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4764.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/photos/IMG_4765.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4765.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/photos/IMG_4766.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4766.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/photos/IMG_4767.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4767.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/photos/IMG_4768.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4768.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/photos/IMG_4769.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4769.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/photos/IMG_4770.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4770.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/photos/IMG_4771.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4771.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/photos/IMG_4772.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4772.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/photos/IMG_4773.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4773.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/photos/IMG_4774.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4774.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/photos/IMG_4775.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4775.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/photos/IMG_4776.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4776.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/photos/IMG_4777.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4777.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/photos/IMG_4778.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4778.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/photos/IMG_4779.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4779.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/photos/IMG_4780.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4780.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/photos/IMG_4781.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4781.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/photos/IMG_4783.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4783.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/photos/IMG_4791.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4791.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/photos/IMG_4792.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4792.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/photos/IMG_4799.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4799.jpeg`)} />
    </div>


    <div className='parte'>
      <h2>⬇️⬇️PEZZI VENDUTI A PARTE⬇️⬇️</h2>
      <h1>se comprati con la moto tutto a .... (da decidere)</h1>
    </div>

      <div className="projectRectangles">
      <WebPImage src={`${process.env.PUBLIC_URL}/parts/IMG_4793.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4793.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/parts/IMG_4794.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4794.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/parts/IMG_4795.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4795.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/parts/IMG_4796.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4796.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/parts/IMG_4797.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4797.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/parts/IMG_4798.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4798.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/parts/IMG_4800.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4800.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/parts/IMG_4801.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4801.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/parts/IMG_4803.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4803.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/parts/IMG_4806.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4806.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/parts/IMG_4807.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4807.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/parts/IMG_4808.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4808.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/parts/IMG_4809.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4809.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/parts/IMG_4810.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4810.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/parts/IMG_4811.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4811.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/parts/IMG_4812.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4812.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/parts/IMG_4813.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4813.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/parts/IMG_4814.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4814.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/parts/IMG_4815.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4815.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/parts/IMG_4816.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4816.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/parts/IMG_4817.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4817.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/parts/IMG_4818.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4818.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/parts/IMG_4819.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4819.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/parts/IMG_4820.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4820.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/parts/IMG_4821.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4821.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/parts/IMG_4822.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4822.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/parts/IMG_4823.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4823.jpeg`)} />
      <WebPImage src={`${process.env.PUBLIC_URL}/parts/IMG_4824.jpeg`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4824.jpeg`)} />
  
      <br />
    </div>

    
    <br />
    </div>
    )
}

export default Photos