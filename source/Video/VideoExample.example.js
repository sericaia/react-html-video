import React, { Component } from 'react';
import Video from './Video';

export default class VideoExample extends Component {
  constructor (props) {
    super(props);

    this.state = {
    };
  }

  render () {
    var videoSrc = [
      '../demo/big_buck_bunny.mp4',
      '../demo/big_buck_bunny.ogv'
    ];

    return (
        <Video
          width={400}
          src={videoSrc}
        />
    );
  }
}
