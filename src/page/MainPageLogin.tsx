import React, { useState } from 'react';
import './MainPageStyle.css'; 
import oyunLego from '../Material/Illusıonary echoes-icon.png';
import image1 from '../Material/resim1.webp';
import image2 from '../Material/resim1.webp';
import image3 from '../Material/resim1.webp';
import image4 from '../Material/resim1.webp';
import image5 from '../Material/resim1.webp';
import character1 from '../Material/karakter1.jpg';
import character2 from '../Material/karakter2.jpg';
import Slider from './Slider';
import VRSystemInfo from './Requirement';
import { useNavigate } from 'react-router-dom'

import LogoutIcon from '@mui/icons-material/Logout';
const images = [image1, image2, image3, image4, image5];
const characters = [character1, character2, image3, image4, image1, image5];


const MainPageLogin:  React.FC = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        sessionStorage.clear();
        navigate('/');
      };
  const [selectedImage, setSelectedImage] = useState(images[0]);
  return (
    <div className="App">
          <div className="App-user-info">
          {<span>Merhaba, {sessionStorage.getItem('name')}</span>}
          <LogoutIcon onClick={handleLogout} style={{ cursor: 'pointer' }} />
        </div>
      <header className="App-header">
        <div className="App-banner">
          <img src={oyunLego} alt="Oyun Lego" className="oyunLegoImage"/>
          <div className="App-banner-text">
            <h1>Illusionary Echoes</h1>
            <p>...</p>
          </div>
        </div>
      </header>
      <div className="App-container"> 
      <main className="App-main">
        <div className="App-gallery">
          <div className="App-large-image-container">
            <img className="App-large-image" src={selectedImage} alt="Selected" />
          </div>
          <div className="App-thumbnails-wrapper">
            <div className="App-thumbnails">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Preview ${index}`}
                  className="App-thumbnail"
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="App-text">
          <p>Here is some text content that can be added to the right side of </p>
        </div>
      </main>
      <div className="App-characters-section">
        <h2>Karakterler</h2>
        <div className="App-character-thumbnails">
          {characters.map((character, index) => (
            <img
              key={index}
              src={character}
              alt={`Character ${index}`}
              className="App-character-thumbnail"
            />
          ))}
        </div>
        <div className="App-footer-actions-container">
            <div className="App-purchase-section">
            <h2>Illusionary Echoes Ä°ndirin</h2>
          <button>Download</button>
            </div>
          </div>
        </div>
      </div>
      <Slider images={images} />
      <VRSystemInfo />
      <footer className="App-footer">
      </footer>
      </div>
  );
};

export default MainPageLogin;
