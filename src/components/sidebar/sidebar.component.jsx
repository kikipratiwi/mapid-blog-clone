/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

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
    return (
      <div className='side-bar-container'>
        <div 
        className={`sidebar sticky-sidebar ${this.state.isBtnOpen ? 'l-toggle-on':'l-toggle-off'}`} >
          <div className='flex-mb-500'>
            <div className='button-shadow'>BLOG</div>
            <div className="sub-bracket-collection">
              <div className='button-table-of-content parent-table-of-content'>
                  <span className='text-table-of-content'>SEMINAR &amp; WORKSHOP</span>
              </div>
              <div className='collection-item'>
                <a href='#' className='button-table-of-content item-table-of-content'>
                  <span className='text-table-of-content'>Webinar E-Learning &amp; IOT Platform Batch 2</span>
                </a>
                <a href='#' className='button-table-of-content item-table-of-content'>
                  <span className='text-table-of-content'>Webinar E-Learning &amp; IOT Platform Batch 2</span>
                </a>
                <a href='#' className='button-table-of-content item-table-of-content'>
                  <span className='text-table-of-content'>Webinar E-Learning &amp; IOT Platform Batch 2</span>
                </a>
                <a href='#' className='button-table-of-content item-table-of-content'>
                  <span className='text-table-of-content'>Webinar E-Learning &amp; IOT Platform Batch 2</span>
                </a>
              </div>
            </div>
          
            <div className="sub-bracket-collection">
              <div className='button-table-of-content parent-table-of-content'>
                  <span className='text-table-of-content'>SEMINAR &amp; WORKSHOP</span>
              </div>
              <div className='collection-item'>
                <a href='#' className='button-table-of-content item-table-of-content'>
                  <span className='text-table-of-content'>Webinar E-Learning &amp; IOT Platform Batch 2</span>
                </a>
                <a href='#' className='button-table-of-content item-table-of-content'>
                  <span className='text-table-of-content'>Webinar E-Learning &amp; IOT Platform Batch 2</span>
                </a>
                <a href='#' className='button-table-of-content item-table-of-content'>
                  <span className='text-table-of-content'>Webinar E-Learning &amp; IOT Platform Batch 2</span>
                </a>
                <a href='#' className='button-table-of-content item-table-of-content'>
                  <span className='text-table-of-content'>Webinar E-Learning &amp; IOT Platform Batch 2</span>
                </a>
              </div>
            </div>
          
            <div className="sub-bracket-collection">
              <div className='button-table-of-content parent-table-of-content'>
                  <span className='text-table-of-content'>SEMINAR &amp; WORKSHOP</span>
              </div>
              <div className='collection-item'>
                <a href='#' className='button-table-of-content item-table-of-content'>
                  <span className='text-table-of-content'>Webinar E-Learning &amp; IOT Platform Batch 2</span>
                </a>
                <a href='#' className='button-table-of-content item-table-of-content'>
                  <span className='text-table-of-content'>Webinar E-Learning &amp; IOT Platform Batch 2</span>
                </a>
                <a href='#' className='button-table-of-content item-table-of-content'>
                  <span className='text-table-of-content'>Webinar E-Learning &amp; IOT Platform Batch 2</span>
                </a>
                <a href='#' className='button-table-of-content item-table-of-content'>
                  <span className='text-table-of-content'>Webinar E-Learning &amp; IOT Platform Batch 2</span>
                </a>
              </div>
            </div>
          
          </div>
        </div>
        <div 
          className={`openbtn sticky-openbtn ${this.state.isBtnOpen ? 'ml-toggle-on':'ml-toggle-off'}`} 
          id='buttonSlider-js' 
          onClick={() => this.toggleSidebarOpenbtn()}>
            <span>{this.state.isBtnOpen ? '<':'>'}</span>
        </div>
      </div>
    );
  }
}

export default SideBar;
