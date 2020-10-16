/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import SubBracketCollection from '../sub-bracket-collection/sub-bracket-collection.component';

import './sidebar.styles.scss';

class SideBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isBtnOpen: true,
      isOnScroll: false
    }

    this.toggleSidebarOpenbtn = this.toggleSidebarOpenbtn.bind(this); 
    this.handleScroll = this.handleScroll.bind(this); 
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll (event) {
    let scrollTop = window.scrollY
    if (scrollTop >= 300) {
      this.setState(({
        isOnScroll: true
      }));
    } else {
      this.setState(({
        isOnScroll: false
      }));
    }
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
        <div className={`
          sidebar 
          ${this.state.isOnScroll ? 'sticky-sidebar':'scroll-sidebar'} 
          ${this.state.isBtnOpen ? 'l-toggle-on':'l-toggle-off'}`} 
        >
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
          className={`
            openbtn 
            ${this.state.isOnScroll ? 'sticky-openbtn':'scroll-openbtn'}  
            ${this.state.isBtnOpen ? 'ml-toggle-on':'ml-toggle-off'}`} 
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
