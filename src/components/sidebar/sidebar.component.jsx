/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import SubBracketCollection from '../sub-bracket-collection/sub-bracket-collection.component';

import './sidebar.styles.scss';

class SideBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isBtnOpen: true
    }

    this.toggleSidebarOpenbtn = this.toggleSidebarOpenbtn.bind(this);  
  }

  toggleSidebarOpenbtn() {
    this.setState(prevState => ({
      isBtnOpen: !prevState.isBtnOpen
    }));
  }

  render() {
    const blogCollection = this.props.blogCollection;
    return (
      <div className='side-bar-container'>
        <div className={`sidebar sticky-sidebar ${this.state.isBtnOpen ? 'l-toggle-on':'l-toggle-off'}`} >
          <div className='flex-mb-500'>
            <div className='button-shadow'>BLOG</div>
              {blogCollection ? (
                Object.keys(blogCollection).map((key) => (
                  <SubBracketCollection key={key} subBracketTitle={key} items={blogCollection[key]} />
                ))
              ) : (
                null
              )}
          </div>
        </div>
        <div 
          className={`openbtn sticky-openbtn ${this.state.isBtnOpen ? 'ml-toggle-on':'ml-toggle-off'}`} 
          id='buttonSlider-js' 
          onClick={() => this.toggleSidebarOpenbtn()}
        >
          <span>{this.state.isBtnOpen ? '<':'>'}</span>
        </div>
      </div>
    );
  }
}

export default SideBar;
