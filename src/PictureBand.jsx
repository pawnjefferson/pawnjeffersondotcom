import React, { Component } from 'react';
import Instafeed from 'instafeed.js';

class PictureBand extends Component {

  constructor() {
    super();
    this.state = {
      pictures: ['couch', 'dog', 'cat']
    };
  }

  componentDidMount() {
    console.log('mounted');
    var feed = new Instafeed({
        get: 'user',
        userId: '6275344042',
        accessToken: '6275344042.aaa8b66.d799b61c06364d87b6512104818e75a4'
    });
    feed.run();
  }
  render() {
    return (
      <div id="instafeed" />
    );
  }
}

export default PictureBand;
