import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MobileWarning from './mobile-warning';
import Header from './header';
import Footer from './footer';

export default class App extends Component {

  render() {
    if (window.innerWidth < 1048) return <MobileWarning />

    return (
      <div className={`landing ${this.props.page}`}>
        <Header />
        <Footer />
      </div>
    );
  }
};

App.propTypes = {
  entered : PropTypes.bool.isRequired,
  page    : PropTypes.string
};
