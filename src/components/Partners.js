import React from 'react';
import './partners.css'; // Import the CSS file for the component

import instagramLogo from '../img/instagram.png';
import nikeLogo from '../img/nike.png';
import twitterLogo from '../img/twitter.png';
import uberLogo from '../img/uber.png';
import youtubeLogo from '../img/youtube.png';
import festive from '../img/festive.png';

const logos = [nikeLogo, instagramLogo, uberLogo, twitterLogo, youtubeLogo, festive];

const partners = () => {
  const combinedLogos = [...logos, ...logos]; // Duplicate the logos array to create a continuous loop

  return (
    <div className="logo-carousel">
      <h1 className="partners-heading">OUR PARTNERS</h1>
      <div className="carousel-inner">
        {combinedLogos.map((logo, index) => (
          <div className="carousel-item" key={index}>
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default partners;
