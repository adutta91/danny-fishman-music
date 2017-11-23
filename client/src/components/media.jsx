import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BackButton from './back-button';

import { images } from '../app/app';
import { setPage, load } from '../app/actions';
import $ from 'jquery';

import Videos from './media/videos';

export default class Media extends Component {

  componentDidMount() {
    var $div = $(`.${this.props.page}.backdrop`),
    bg = $div.css('background-image');
    const page = 'media';

    if (bg) {
      var src = bg.replace(/(^url\()|(\)$|[\"\'])/g, ''),
      $img = $('<img>').attr('src', src).on('load', function() {
        load(page);
      });
    }
  }

  getStyle() {
    let style = {
      background: `no-repeat center url('${images.media}')`,
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
      case 'tour':
        style.width = 0;
        style.overflow = 'hidden';
        break;
      case 'media': break;
      default: break;
    }

    return style;
  }

  render() {
    return (
      <div style={this.getStyle()} className='media backdrop'>
        {this.props.page == 'media' ? <BackButton position='right' /> : null}
        <Videos />
      </div>
    );
  }
};

Media.propTypes = {
  page : PropTypes.string.isRequired
};
