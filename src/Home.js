
import './Home.css'; // Assicurati di avere il CSS per lo stile
import './buttons.css';
import { Link } from 'react-router-dom';
import usePreloadMedia from './hooks/usePreloadMedia';


const Home = () => {
  const { isLoading, loadingProgress } = usePreloadMedia();
 
  return (
    
    <div className="home">

      {/* Indicatore di caricamento */}
      {isLoading && (
        <div className="loading-overlay">
          <div className="loading-container">
            <h3>Caricamento contenuti...</h3>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${loadingProgress}%` }}
              ></div>
            </div>
            <p>{Math.round(loadingProgress)}%</p>
          </div>
        </div>
      )}

      <div className="first-page">
        <p className="text-1">
          Valenti SM 50 2018
        </p>
        <div className="buttons">
        <Link to="/photos">
            <button disabled={isLoading}>FOTO</button>
          </Link>
          <Link to="/videos">
            <button disabled={isLoading}>VIDEO</button>
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