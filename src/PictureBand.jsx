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
        accessToken: '45142970be83428ca29ae9d6f6c37095'
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
