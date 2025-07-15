
import './Contents.css';
import { useState } from 'react';
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
        <h2>FOTO</h2>
      </div>
      <div className="projectRectangles">
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4749.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4749.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4750.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4750.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4751.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4751.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4752.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4752.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4753.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4753.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4754.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4754.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4755.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4755.webp`)} />  
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4756.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4756.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4759.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4759.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4760.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4760.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4761.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4761.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4762.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4762.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4763.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4763.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4764.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4764.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4765.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4765.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4766.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4766.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4767.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4767.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4768.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4768.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4769.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4769.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4770.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4770.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4771.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4771.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4772.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4772.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4773.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4773.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4774.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4774.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4775.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4775.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4776.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4776.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4777.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4777.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4778.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4778.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4779.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4779.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4780.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4780.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4781.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4781.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4783.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4783.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4791.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4791.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4792.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4792.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/photos/IMG_4799.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/photos/IMG_4799.webp`)} />
      </div>

      <div className='parte'>
        <h2>⬇️⬇️PEZZI VENDUTI A PARTE⬇️⬇️</h2>
        <h1>se comprati con la moto tutto a .... (da decidere)</h1>
      </div>

      <div className="projectRectangles">
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4793.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4793.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4794.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4794.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4795.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4795.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4796.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4796.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4797.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4797.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4798.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4798.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4800.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4800.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4801.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4801.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4803.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4803.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4806.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4806.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4807.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4807.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4808.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4808.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4809.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4809.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4810.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4810.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4811.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4811.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4812.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4812.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4813.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4813.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4814.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4814.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4815.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4815.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4816.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4816.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4817.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4817.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4818.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4818.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4819.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4819.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4820.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4820.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4821.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4821.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4822.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4822.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4823.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4823.webp`)} />
        <img src={`${process.env.PUBLIC_URL}/parts/IMG_4824.webp`} alt="" className="rectangle" onClick={() => handleImageClick(`${process.env.PUBLIC_URL}/parts/IMG_4824.webp`)} />
      </div>
      <br />
    </div>
  );
}

export default Photos;