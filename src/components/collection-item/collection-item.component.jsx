
import React from 'react';
import { connect } from 'react-redux';

import { setCurrentBlog } from '../../redux/blog/blog.actions'

import './collection-item.styles.scss';

const CollectionItem = ({ item, setCurrentBlog }) => (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <div 
      href={'#'}
      className='button-table-of-content item-table-of-content'
      onClick={() => setCurrentBlog(item)}
    >
      <span className='text-table-of-content'>{item.title}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
  setCurrentBlog: item => dispatch(setCurrentBlog(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
