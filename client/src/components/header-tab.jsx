import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { toTitle } from '../app/app';

export default class HeaderTab extends Component {
  render() {
    return (
      <div className='header-tab'>
        {toTitle(this.props.type)}
      </div>
    );
  }
};

HeaderTab.propTypes = {
  type : PropTypes.string.isRequired
};
