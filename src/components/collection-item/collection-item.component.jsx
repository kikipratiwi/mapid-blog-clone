import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({ _id, title, link }) => (
  <a href={link} className='button-table-of-content item-table-of-content'>
    <span className='text-table-of-content'>{title}</span>
  </a>
);

export default CollectionItem;
