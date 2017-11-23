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
    let page = this.props.page || 'main';
    return (
      <div className='root'>
        {this.props.loaded.length < 4 ? <div>loading...</div> : null}
        <About page={page} />
        <Media page={page} />
        <Main page={page} />
        <Tour page={page} />
      </div>
    );
  }
};

App.propTypes = {
  page  : PropTypes.string,
  loaded : PropTypes.arrayOf(PropTypes.string.isRequired)
};
