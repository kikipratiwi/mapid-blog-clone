
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import { selectCurrentBlog } from '../../redux/blog/blog.selectors'
import { setCurrentBlog } from '../../redux/blog/blog.actions'

import './collection-item.styles.scss';

const CollectionItem = ({ item, setCurrentBlog, currentBlog }) => {
  const titleWrapperClassNames =  classNames(
    'text-table-of-content',  
    { 'activated': item._id === currentBlog._id }
  )

  return (
    <Link 
      className='button-table-of-content item-table-of-content'
      to={`/blog/${item.link}`}
      onClick={() => setCurrentBlog(item)}
    >
      <span className={titleWrapperClassNames}>{item.title}</span>
    </Link>
  );
}
const mapStateToProps = createStructuredSelector ({
  currentBlog: selectCurrentBlog
})

const mapDispatchToProps = dispatch => ({
  setCurrentBlog: item => dispatch(setCurrentBlog(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionItem);
