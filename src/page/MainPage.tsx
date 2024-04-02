import React, { useState } from 'react';
import './MainPageStyle.css'; 
import oyunLego from '../Material/Illusıonary echoes-icon.png';
import image1 from '../Material/resim1.webp';
import image2 from '../Material/resim2.webp';
import image3 from '../Material/resim3.webp';
import image4 from '../Material/resim4.webp';
import image5 from '../Material/resim5.webp';
import image6 from '../Material/resim6.webp';
import image8 from '../Material/WhatsApp Görsel 2024-04-01 saat 15.21.24_a3c94d1f.jpg';
import image9 from '../Material/WhatsApp Görsel 2024-04-01 saat 15.21.24_b2483b37.jpg';
import image10 from '../Material/WhatsApp Görsel 2024-04-01 saat 15.21.24_b2483b37.jpg';
import image11 from '../Material/WhatsApp Görsel 2024-04-01 saat 15.21.24_b2483b37.jpg';
import image12 from '../Material/WhatsApp Görsel 2024-04-01 saat 15.21.24_b2483b37.jpg';
import image13 from '../Material/WhatsApp Görsel 2024-04-01 saat 15.21.24_b2483b37.jpg';

import character1 from '../Material/karakter1.jpg';
import character2 from '../Material/karakter2.jpg';
import Slider from './Slider';
import VRSystemInfo from './Requirement';
import { useNavigate } from 'react-router-dom'

const images = [image1, image2, image3, image4, image5, image6, image8, image9, image10, image11, image12, image13];
const characters = [character1, character2];

const MainPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const navigate = useNavigate(); 

  const handleLoginClick = () => {
    navigate('/login'); 
  };

  const handleRegisterClick = () => {
    navigate('/register'); 
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-banner">
          <img src={oyunLego} alt="Oyun Lego" className="oyunLegoImage"/>
          <div className="App-banner-text">
            <h1>Illusionary Echoes</h1>
          </div>
        </div>
        <div className="App-header-buttons">
          <button onClick={handleLoginClick}>GiriÅŸ Yap</button>
          <button onClick={handleRegisterClick}>KayÄ±t Ol</button>
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
          {/* Metin iÃ§eriÄŸi buraya gelecek */}
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
            <div className="App-login-section">
              <h2>Bu oyun sizin iÃ§in ilginÃ§ mi?</h2>
              <p>Bildirimlerden haberdar olmak iÃ§in kayÄ±t ol ya da giriÅŸ yap.</p>
              
            </div>
          </div>
        </div>
      </div>
      <Slider images={images} />
      <VRSystemInfo />
      <footer className="App-footer">
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default MainPage;
