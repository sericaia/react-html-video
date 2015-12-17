import React, { Component, PropTypes } from 'react';
import styles from './Video.css';

export default class Video extends Component {

  constructor (props, context) {
    super(props, context);

    this.state = {};
  }

  componentDidMount () {  }
  componentWillUnmount () { // pause
  }
  componentDidUpdate (prevProps, prevState) { }
  componentWillUpdate (prevProps, prevState) { }

  getExtension (itemSrc) {
    return 'video/' + itemSrc.split('.').pop();
  }

  render () {
    const {width, height, src} = this.props;

    let videoSources = src.map(function(item) {
      return (<source src={item} key={item} type={this.getExtension(item)} />);
    }, this);

    return (
      <video width={width} height={height} controls className={styles.VideoSource} >
        { videoSources }
        Your browser does not support the video tag.
      </video>
    );
  }
}

Video.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  src: PropTypes.array.isRequired
// autoplay: PropTypes.bool
};

Video.defaultProps = {
  // autoplay: true
};
