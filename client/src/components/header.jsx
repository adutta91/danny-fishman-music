import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HeaderTab from './header-tab';

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='tabs-wrapper'>
          <div className='tabs'>
            <HeaderTab type='about'/>
            <HeaderTab type='contact'/>
          </div>
        </div>
        <div className='header-title'>
          <div className='title'>Danny Fishman</div>
          <div className='sub-title'>Music</div>
        </div>
        <div className='tabs-wrapper'>
          <div className='tabs'>
            <HeaderTab type='media'/>
            <HeaderTab type='tour'/>
          </div>
        </div>
      </div>
    );
  }
}
