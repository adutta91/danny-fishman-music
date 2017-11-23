import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { setPage } from '../app/actions';
import { Redirect } from 'react-router';

export default class BackButton extends Component {
  state = {
    redirect : ''
  }

  render() {
    return (
      <div className={`back-button ${this.props.position}`} onClick={() => { setPage('main') }} >
        <i className={`fa fa-2x fa-chevron-${this.props.position}`}/>
        {this.state.redirect ? <Redirect to='/' push/>  : null}
      </div>
    );
  }
};

BackButton.propTypes = {
  position : PropTypes.oneOf(['left', 'right']).isRequired
}
