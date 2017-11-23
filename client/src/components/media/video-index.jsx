import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { setVideo } from '../../app/actions.js';
import { videos } from '../../app/app.js';

export default class VideoIndex extends Component {
  getID(src) {
      let parts = src.split('/');
      return parts[parts.length - 1];
  }

  render() {
    return (
      <div className='video-index'>
        {videos.map((video, idx) => {
          return (
            <img className='video-thumbnail' key={idx}
              src={`http://img.youtube.com/vi/${this.getID(video.src)}/0.jpg`}
              onClick={() => { setVideo(video); }}/>
          );
        })}
      </div>
    );
  }
}

VideoIndex.propTypes = {};
