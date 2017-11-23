import React, { Component } from 'react';
import PropTypes from 'prop-types';

import VideoIndex from './video-index';
import MainVideo from './main-video';

export default class Videos extends Component {
  render() {
    return (
      <div className='videos'>
        <MainVideo />
        <VideoIndex />
      </div>
    );
  }
}

Videos.propTypes = {};
