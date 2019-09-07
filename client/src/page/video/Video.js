import React from 'react';

import './Video.css';

class Video extends React.Component {

  render() {
    return (
      <div className="page-contents">
        <div className="media-container" id="youtube">
          <div className="youtube-item media-item">
            <iframe title="video1" className="video" src="https://www.youtube.com/embed/cR9UyFXeYKU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="youtube-item media-item">
            <iframe title="video2" className="video" src="https://www.youtube.com/embed/bBBtbMBbqe0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="youtube-item media-item">
            <iframe title="video3" class="video" src="https://www.youtube.com/embed/jIjgk3crOYM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default Video