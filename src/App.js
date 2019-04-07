import React, { Component } from 'react';
import Posts from './Posts';
import Logos from './Logos';
import PictureBand from './PictureBand';
import RandomBlur from './RandomBlur';
import './App.css';

const logoURLs = [
  '/img/face.jpg',
  '/img/facecomp.jpg',
  '/img/me head2.png',
  // '/img/outside.jpg',
  '/img/facecat.jpg'
];

class App extends Component {
  componentDidMount() {
    // google analytics
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    window.ga('create', 'UA-93007724-1', 'auto');
    window.ga('send', 'pageview');
  }
  render() {
    const fxOne = (Math.random() > 0.97);
    return (
      <div className="App">
        <div className="App-header">

          <div className="responsive">
            <div><img src="img/face.jpg"/></div>
            <div>
              <h1>Pawn Jefferson</h1>
              <h2>
                28 y/o piano playing nomad, mgtow, carnivore, coder and stock trader
              </h2>
              Currently traveling around the United States.  Posts are displayed in reverse chronological order.
              P.S. Nothing gets spell-checked around here!  Unless you count Ms. Rivera of course.  She's great and usually points that kind of thing out.
            </div>
          </div>

          <Logos/>

        </div>
        {/* <PictureBand/> */}
        <div className="App-content">
          <Posts/>
        </div>
        <div className="App-footer">
          copyright &copy; 2019<br/>Pawn Jefferson
        </div>

      </div>
    );

    // <iframe src='/crazytextanimation/'
    //     width="100%"
    //     height="68px"
    //     scrolling="no"
    //     style={{ filter: 'grayscale(50%) blur(0px)', opacity: '0.9', position: 'fixed', bottom: 0, left: 0, right: 0 }}
    //     />


    /*<div style={ (fxOne) ? { position: 'absolute' } : {} }>
      {
        (fxOne) ?
        logoURLs.map((url) => {
          return (
            <RandomBlur url={url} N={2} />
          );
        })
        : <RandomBlur url={logoURLs[0]} N={4} />
      }
    </div>*/

  }
}

export default App;
