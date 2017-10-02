import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { images } from '../app/app';
import { setPage, load } from '../app/actions';
import $ from 'jquery';

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
      case 'about':
        style.width = 0;
        style.overflow = 'hidden';
      case 'tour':
        style.width = 0;
        style.overflow = 'hidden';
      case 'media': break;
      default: break;
    }

    return style;
  }

  render() {
    return (
      <div style={this.getStyle()} className='media backdrop'>
        <i className='fa fa-2x fa-chevron-right' onClick={() => { console.log('clicked'); setPage('main');}}/>
        Media
      </div>
    );
  }
};

Media.propTypes = {
  page : PropTypes.string.isRequired
};
