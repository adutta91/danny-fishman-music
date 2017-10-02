import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HeaderTab from './header-tab';
import { data } from '../app/app';

export default class Header extends Component {
  render() {
    return (
      <div className={`header ${this.props.show ? '' : 'hidden'}`}>
        <div className='tabs-wrapper'>
          <div className='tabs'>
            <HeaderTab type='about'/>
            <HeaderTab type='media'/>
          </div>
        </div>
        <div className='header-title'>
          <div className='title'>Danny Fishman</div>
          <div className='sub-title'>Music</div>
        </div>
        <div className='tabs-wrapper'>
          <div className='tabs'>
            <HeaderTab type='tour'/>
            <HeaderTab type='contact' onClick={() => { window.location.href = `mailto:${data.email}` }}/>
          </div>
        </div>
      </div>
    );
  }
};

Header.propTypes = {
  show : PropTypes.bool.isRequired
};
