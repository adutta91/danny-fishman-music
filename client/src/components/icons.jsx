import React, { Component } from 'react';

export default class Icons extends Component {
  goTo(link) {
    window.open(
      link,
      "_blank"
    )
  };

  render() {
    return (
      <div className='icons'>
        <i onClick={this.goTo.bind(this, "https://www.facebook.com/dannyfishmanmusic/")} className="icon fa fa-2x fa-facebook-official"/>
        <i onClick={this.goTo.bind(this, "https://www.youtube.com/channel/UCKEqnVJK5vtEBSXRQu1gzig")} className="icon fa fa-2x fa-youtube"/>
        <i onClick={this.goTo.bind(this, "https://twitter.com/dannythefishman")} className="icon fa fa-2x fa-twitter"/>
        <i onClick={this.goTo.bind(this, "https://www.instagram.com/dannyfishmanmusic/")} className="icon fa fa-2x fa-instagram"/>
        <i onClick={this.goTo.bind(this, "https://soundcloud.com/danny-fishman")} className="icon fa fa-2x fa-soundcloud"/>
        <i onClick={this.goTo.bind(this, "https://dannyfishmanmusic.tumblr.com")} className="icon fa fa-2x fa-tumblr"/>
      </div>
    )
  };

};
