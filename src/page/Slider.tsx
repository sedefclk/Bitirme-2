import React, { useState } from 'react';
import './Slider.css'; // Stilleri bu CSS dosyasÄ±nda tanÄ±mlayÄ±n

interface SliderProps {
  images: string[];
}


const Slider: React.FC<SliderProps> = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const selectImage = (index: number) => {
    setSelectedImageIndex(index);
  };
  const previous = () => {
    if (selectedImageIndex > 0) {
      selectImage(selectedImageIndex - 1);
    }
  };
  const next = () => {
    if (selectedImageIndex < images.length - 1) {
      selectImage(selectedImageIndex + 1);
    }
  };

  return (
    <div className="slider">
      <div className="slider-main-image">
        <img src={images[selectedImageIndex]} alt="Selected" />
      </div>
      <div className="slider-controls">
        <button onClick={previous} className="slider-arrow">{'<'}</button>
        <div className="slider-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === selectedImageIndex ? 'active' : ''}`}
              onClick={() => selectImage(index)}
            />
          ))}
        </div>
        <button onClick={next} className="slider-arrow">{'>'}</button>
      </div>
    </div>
  );
};

export default Slider;
