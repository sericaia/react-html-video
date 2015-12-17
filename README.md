### Getting started

```shell
npm install
npm start
```


#### Example

```js
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
      'bunny.mp4',
      'bunny.ogg'
    ];

    return (
        <Video
          width={400}
          src={videoSrc}
        />
    );
  }
}
```
