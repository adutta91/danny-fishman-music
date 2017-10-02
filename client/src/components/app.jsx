import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MobileWarning from './mobile-warning';
import Main from './main';
import About from './about';
import Tour from './tour';
import Media from './media';

export default class App extends Component {

  render() {
    if (window.innerWidth < 1048) return <MobileWarning />

    return (
      <div className='root'>
        {this.props.loaded.length < 4 ? <div>loading...</div> : null}
        <About page={this.props.page} />
        <Media page={this.props.page} />
        <Main page={this.props.page} />
        <Tour page={this.props.page} />
      </div>
    );
  }
};

App.propTypes = {
  page  : PropTypes.string.isRequired,
  loaded : PropTypes.arrayOf(PropTypes.string.isRequired)
};
