import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './sub-bracket-collection.styles.scss';

const SubBracketCollection = ({ subBracketTitle, items }) => (
  <div className='sub-bracket-collection'>
    <div className='button-table-of-content parent-table-of-content'>
      <span className='text-table-of-content'>
        {renderTitle(subBracketTitle)}
      </span>
    </div>
    <div className='collection-item'>
      {Object.keys(items)
        .map((_id) => (
          <CollectionItem key={_id} link={items[_id].link} title={items[_id].title} />
        ))}
    </div>
  </div>
);

export const renderTitle = (param) => {
  switch(param) {
    case 'teknis_kompetisi_mapid':
      return 'Kompetisi MAPID';
    case 'seminar':
      return 'SEMINAR & WORKSHOP';
    default:
      return param.toUpperCase();
  };
}

export default SubBracketCollection;
