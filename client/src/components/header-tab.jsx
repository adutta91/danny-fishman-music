import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { toTitle } from '../app/app';
import { setPage } from '../app/actions';

export default class HeaderTab extends Component {
  onClick(e) {
    e.preventDefault();
    if (typeof this.props.onClick == 'function') this.props.onClick();
    else setPage(this.props.type);
  }

  render() {
    return (
      <div className='header-tab' onClick={this.onClick.bind(this)}>
        {toTitle(this.props.type)}
      </div>
    );
  }
};

HeaderTab.propTypes = {
  type    : PropTypes.string.isRequired,
  onClick : PropTypes.func
};
