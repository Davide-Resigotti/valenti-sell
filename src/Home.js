
import './Home.css'; // Assicurati di avere il CSS per lo stile
import './buttons.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Home = () => {
  
  useEffect(() => {
    // Preload first few critical images and video thumbnails when home loads
    const criticalImages = [
      '/photos/IMG_4749.webp',
      '/photos/IMG_4750.webp', 
      '/photos/IMG_4751.webp',
      '/photos/IMG_4752.webp',
      '/photos/IMG_4753.webp',
      '/photos/IMG_4754.webp',
      '/thumbnails/IMG_4784.webp',
      '/thumbnails/IMG_4785.webp',
      '/thumbnails/IMG_4786.webp'
    ];

    criticalImages.forEach(src => {
      const img = new Image();
      img.src = `${process.env.PUBLIC_URL}${src}`;
    });
  }, []);
 
  return (
    
    <div className="home">


      <div className="first-page">
        <p className="text-1">
          Valenti SM 50 2018
        </p>
        <div className="buttons">
        <Link to="/photos">
            <button>FOTO</button>
          </Link>
          <Link to="/videos">
            <button>VIDEO</button>
          </Link>
          <Link to="/info">
            <button>INFO</button>
          </Link>
          <Link to="/contacts">
            <button>CONTATTI</button>
          </Link>
        </div>


        <p className="text-2">
          qualsiasi tipo di informazione o foto o video potete trovarla qui
        </p>

    
      </div>
      
    </div>
  );
};

export default Home;