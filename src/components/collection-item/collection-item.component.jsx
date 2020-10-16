import React from 'react';
import { Link } from 'react-router-dom';

import './collection-item.styles.scss';

const CollectionItem = ({ _id, title, link }) => (
    <div 
      className='button-table-of-content item-table-of-content'
    >
      <span className='text-table-of-content'>{title}</span>
    </div>
);

export default CollectionItem;
