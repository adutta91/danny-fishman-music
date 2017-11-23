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
        {this.props.loaded.length < 4 ? <div className='loading-wrapper'><div className='spinner'></div></div> : null}
        <About loaded={this.props.loaded} page={page} />
        <Media loaded={this.props.loaded} page={page} />
        <Main loaded={this.props.loaded} page={page} />
        <Tour loaded={this.props.loaded} page={page} />
      </div>
    );
  }
};

App.propTypes = {
  page  : PropTypes.string,
  loaded : PropTypes.arrayOf(PropTypes.string.isRequired)
};
