import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icons from './icons';

export default class Footer extends Component {
  render() {
    return (
      <div className={`footer ${this.props.show ? '' : 'hidden'}`}>
        <Icons />
      </div>
    );
  };
};

Footer.propTypes = {
  show : PropTypes.bool.isRequired
}
