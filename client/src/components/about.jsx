import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { images } from '../app/app';
import { setPage, load } from '../app/actions';
import $ from 'jquery';
import BackButton from './back-button.jsx';

export default class About extends Component {

  componentDidMount() {
    var $div = $(`.${this.props.page}.backdrop`),
    bg = $div.css('background-image');
    const page = 'about';

    if (bg) {
      var src = bg.replace(/(^url\()|(\)$|[\"\'])/g, ''),
      $img = $('<img>').attr('src', src).on('load', function() {
        load(page);
      });
    }
  }

  getStyle() {
    let style = {
      background: `no-repeat center url('${images.about}')`,
      backgroundSize: "cover"
    };

    switch(this.props.page) {
      case 'main':
        style.width = 0;
        style.overflow = 'hidden';
        break;
      case 'about': break;
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
      <div style={this.getStyle()} className='about backdrop'>
        {this.props.loaded.length < 4 ? <div className='loading-wrapper'><div className='spinner'></div></div> : null}
        {this.props.page == 'about' ? <BackButton position='right' /> : null}
        About
      </div>
    );
  }
};

About.propTypes = {
  page   : PropTypes.string.isRequired,
  loaded : PropTypes.array
};
