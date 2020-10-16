import React from 'react';

import './author.styles.scss';

const Author = ({ imageUrl, name, date }) => (
  <div className='mt-30'>
    <div className='author-profile-image' style={{background: `url(${imageUrl}) no-repeat center center/ cover`}}></div>
    <div className='profile-detail'>
      {name}<br/>
      <div className='date'>{extractDate(date)}</div>
    </div>
  </div>
);

export const extractDate = (isoDate) => {
  const _date = new Date(isoDate);
  const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(_date);
  const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(_date);
  const date = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(_date);

  return (`${month} ${date} ${year}`)
}

export default Author;
