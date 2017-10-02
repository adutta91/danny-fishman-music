import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { images } from '../app/app';
import { setPage, load } from '../app/actions';
import $ from 'jquery';

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
      case 'about': break;
      case 'tour':
        style.width = 0;
        style.overflow = 'hidden';
      case 'media':
        style.width = 0;
        style.overflow = 'hidden';
      default: break;
    }

    return style;
  }

  render() {
    return (
      <div style={this.getStyle()} className='about backdrop'>
        <i className='fa fa-2x fa-chevron-right' onClick={() => { console.log('clicked'); setPage('main');}}/>
        About
      </div>
    );
  }
};

About.propTypes = {
  page : PropTypes.string.isRequired
};
