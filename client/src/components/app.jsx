import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class App extends Component {

  render() {
    if (window.innerWidth < 1048) return (
      <div>
        Oops! The mobile site is under construction...
        <br />
        Please come back soon, or visit the site on device with a wider screen.
        <br /> <br />
        Sorry for the inconvenience! Working on making this great! :)
        <br/> <br/>
        Thanks!
        <br/>
        Arjun
      </div>
    );

    return (
      <div>
        Test
      </div>
    );
  }
};

App.propTypes = {
  entered : PropTypes.bool.isRequired,
  page    : PropTypes.string
};
