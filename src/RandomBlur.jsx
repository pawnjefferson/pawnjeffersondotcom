import React, { Component } from 'react';

class RandomBlur extends Component {
  constructor() {
    super();
    this.state = {
      currentlySwapping: 0
    };
  }

  getRandBetween(l, h) {
    const dif = h - l;
    return l + Math.floor(Math.random() * dif);
  }

  initBlurStyles() {
    this.setState({
      blurStyles: Array.apply(null, {length: this.props.N}).map(() => {
        return this.getBlurStyle();
      })
    });
  }

  changeBlurStyle() {

    var getRand = () => {
      return this.getRandBetween(0, this.state.blurStyles.length);
    }
    Array.prototype.swapItems = function(a, b){
        this[a] = this.splice(b, 1, this[a])[0];
        return this;
    };
    const swaps = [this.state.currentlySwapping, getRand()];

    if (Math.random() > 0.2) {

      this.setState({
        blurStyles: this.state.blurStyles.swapItems.apply(this.state.blurStyles, swaps),
        currentlySwapping: (this.state.currentlySwapping === this.state.blurStyles.length - 1) ? 0 : ++this.state.currentlySwapping
      });

    } else {

      let tempBlurStyles = this.state.blurStyles;
      tempBlurStyles[getRand()] = this.getBlurStyle();
      this.setState({
        blurStyles: tempBlurStyles
      });

    }


  }

  startReblurFX() {
    this.changeBlurStyle();
    setTimeout(() => {
      this.startReblurFX();
    }, 20 + Math.random() * 1000);
  }

  getBlurStyle (N, index) {
    const scale = this.getRandBetween(80, 240);
    const opacity = this.getRandBetween(30, 80) / 100;

    let blur = this.getRandBetween(0, 10);
    // const perc = (N - index) / N;
    // blur = blur * perc;

    const left = this.getRandBetween(0, 100) + (160 - scale);

    const styles = {
      position: 'absolute',
      zoom: scale + '%',
      opacity,
      top: this.getRandBetween(0, 5) + 'px',
      left: left + 'px',
      filter: 'blur(' + blur + 'px)'
    };
    return styles;
  }

  componentDidMount() {
    this.initBlurStyles();
    setTimeout(() => {
      this.startReblurFX();
    }, 1000);
  }

  render() {
    const { N, url } = this.props;
    const pics = Array.apply(null, {length: N}).map((number, index) => {
      return (
        <div key={index} style={(this.state.blurStyles) ? this.state.blurStyles[index] : {}}>
          <img src={url} />
        </div>
      );
    });

    let styles = {
      opacity: 0.8,
      position: 'relative'
    };
    return (
      <div style={styles}>
        { pics }
      </div>
    );
  }
}

export default RandomBlur;
