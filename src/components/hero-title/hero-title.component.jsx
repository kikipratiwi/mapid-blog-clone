import React from 'react';

import './hero-title.styles.scss';

const HeroTitle = ({ imageUrl, title }) => (
  <div 
    className='hero-title-container' 
    style={{background: `linear-gradient(rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.733), rgb(255, 255, 255)) repeat scroll 0% 0%, rgba(0, 0, 0, 0) url(${imageUrl}) no-repeat scroll center 38% / cover`}}
  >
    <div className='dashboard-special'>
      <div className='title-document'>
        <strong>{title}</strong>
      </div>
    </div>
  </div>
);

export default HeroTitle;
