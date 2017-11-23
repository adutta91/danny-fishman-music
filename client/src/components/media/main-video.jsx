import React, { Component } from 'react';
import PropTypes from 'prop-types';

import _ from 'lodash';

export default class MainVideo extends Component {

  renderVideo() {
    if (!_.size(this.props.activeVideo)) return null;
    return (
      <iframe width="840" height="530"
        src={this.props.activeVideo.src}>
        </iframe>
    );
  }

  render() {
    console.log(this.props.activeVideo);
    return (
      <div className='main-video'>
        {this.renderVideo()}
      </div>
    );
  }
}

MainVideo.propTypes = {
  activeVideo : PropTypes.object
};
