import React, { Component } from 'react';
import PropTypes from 'prop-types';

import VideoIndex from './video-index';
import MainVideoContainer from '../../containers/main-video-container';

export default class Videos extends Component {
  render() {
    return (
      <div className='videos'>
        <MainVideoContainer />
        <VideoIndex />
      </div>
    );
  }
}

Videos.propTypes = {};
