import React from 'react';

import './Video.css';

class Video extends React.Component {

  render() {
    return (
      <div className="page-contents">
        <div className="quote-container text-container">
          <div>
            "Flamenco has always been about intimacy, the connection with the audience. You’re in it with them and they’re in it with you.  "
          </div>
        </div>
        <div className="media-container" id="youtube">
          <div className="youtube-item media-item">
            <iframe title="video1" className="video" src="https://www.youtube.com/embed/cR9UyFXeYKU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="youtube-item media-item">
            <iframe title="video2" className="video" src="https://www.youtube.com/embed/bBBtbMBbqe0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="youtube-item media-item">
            <iframe title="video3" src="https://www.youtube.com/embed/jIjgk3crOYM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default Video