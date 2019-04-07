import React, { Component } from 'react';
import './Logos.css';

class Logos extends Component {

  render() {
    return (
      <div className="logos">
        <a href="https://instagram.com/pawnjefferson/">
          <img src="/img/insta.png"/>
        </a>
        <a href="https://www.youtube.com/channel/UCPfJsoFx19BaO1sDbkrrOIA">
          <img src="/img/youtube.png"/>
        </a>
        <a href="https://www.periscope.tv/pawnjefferson10">
          <img src="/img/periscope.png"/>
        </a>
      </div>
    );
  }
}

export default Logos;
