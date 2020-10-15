import React from 'react';

import './hero-title.styles.scss';

class HeroTitle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    const imgUrl = 'https://s3.us-west-2.amazonaws.com/machrus/doc_pictures/1598604952.jpeg';
    
    return (
      // eslint-disable-next-line no-sequences
      <div className='hero-title-container' style={{background: `linear-gradient(rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.733), rgb(255, 255, 255)) repeat scroll 0% 0%, rgba(0, 0, 0, 0) url(${imgUrl}) no-repeat scroll center 38% / cover`}}>
        <div className='dashboard-special'>
          <div className='title-document'>
            <strong>Making Indonesia 4.0 By KEMENPERIN</strong>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroTitle;
