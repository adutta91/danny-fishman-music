import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import Footer from './footer';
import $ from 'jquery';

import { images } from '../app/app';
import { load } from '../app/actions';

export default class Main extends Component {
  state = {
    show : this.props.page == 'main'
  }

  componentWillReceiveProps(next) {
    this.setState({ show : next.page == 'main' });
  }

  componentDidMount() {
    var $div = $(`.${this.props.page}.backdrop`),
    bg = $div.css('background-image');
    const page = 'main';

    if (bg) {
      var src = bg.replace(/(^url\()|(\)$|[\"\'])/g, ''),
      $img = $('<img>').attr('src', src).on('load', function() {
        load(page);
      });
    }
  }

  getStyle() {
    let style = {
      background: `no-repeat center url('${images.main}')`,
      backgroundSize: "cover"
    };

    switch(this.props.page) {
      case 'main': break;
      case 'about':
        style.width = 0;
        style.overflow = 'hidden';
        break;
      case 'tour':
        style.width = 0;
        style.overflow = 'hidden';
        break;
      case 'media':
        style.width = 0;
        style.overflow = 'hidden';
        break;
      default: break;
    }

    return style;
  }

  render() {
    return (
      <div style={this.getStyle()} className='main backdrop'>
        <Header show={this.state.show} />
        <Footer show={this.state.show} />
      </div>
    );
  }
};

Main.propTypes = {
  page   : PropTypes.string.isRequired,
  loaded : PropTypes.array
};
