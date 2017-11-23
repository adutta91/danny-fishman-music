import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { images } from '../app/app';
import { setPage, load } from '../app/actions';
import $ from 'jquery';
import BackButton from './back-button';

export default class Tour extends Component {

  componentDidMount() {
    var $div = $(`.${this.props.page}.backdrop`),
    bg = $div.css('background-image');
    const page = 'tour';

    if (bg) {
      var src = bg.replace(/(^url\()|(\)$|[\"\'])/g, ''),
      $img = $('<img>').attr('src', src).on('load', function() {
        load(page);
      });
    }
  }

  getStyle() {
    let style = {
      background: `no-repeat center url('${images.tour}')`,
      backgroundSize: "cover"
    };

    switch(this.props.page) {
      case 'main':
        style.width = 0;
        style.overflow = 'hidden';
        break;
      case 'about':
        style.width = 0;
        style.overflow = 'hidden';
        break;
      case 'tour': break;
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
      <div style={this.getStyle()} className='tour backdrop'>
        {this.props.page == 'tour' ? <BackButton position='left' /> : null}
        Tour
      </div>
    );
  }
};

Tour.propTypes = {
  page : PropTypes.string.isRequired
};
