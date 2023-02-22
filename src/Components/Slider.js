import { useState, useEffect } from 'react';
import "./Slider.css"

import karta4 from '../images/karta4.png';

import karta6 from '../images/karta6.png';

// npm install react react-dom

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [karta6, karta4, karta6];
  // captions1 je první text o shora nadpis
  const captions1 = [
    "Vítejte na naší prezentační stránce!",
    "Zjistěte více o našich produktech a službách",
    "Kontaktujte nás pro více informací a spolupráci"
  ];
  // captions2 je druhý text o shora a dále se přidává 3,4,5, obsah
  const captions2 = [
    "Představujeme Vám naši společnost a naše produkty a služby prostřednictvím interaktivní prezentace",
    "Jsme tým zkušených odborníků, kteří Vám pomohou s řešením jakéhokoli problému v oblasti našich produktů a služeb",
    "Soustředíme se na kvalitu našich produktů a služeb a neustále pracujeme na zlepšení, aby naši zákazníci byli plně spokojeni s našimi výrobky a službami."
  ];
// zde se přidává text a dole v slider-caption se přidá classa 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentImage, images.length]);

  return (
    <div className="slider-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slider-image ${index === currentImage ? "active" : ""}`}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="slider-caption">
            <div className='hero'><h1>{captions1[index]}</h1></div>
            
            <h2>{captions2[index]}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};


export default Slider;
