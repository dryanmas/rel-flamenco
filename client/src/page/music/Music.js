import React from 'react';

import './Music.css';

class Music extends React.Component {

  render() {
    return (
      <div className="page-contents">
        <div className="quote-container text-container">
          <div>
            "There's nothing legitimate about what I do. I know I am the bastard child of flamenco and classical guitar, and I prefer it that way."
          </div>
        </div>
        <div className="media-container" id="soundcloud"> 
          <iframe title="hand-of-glory" className="soundcloud-item media-item" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/289196556&color=%230e0e0e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
          <iframe title="capriccio" className="soundcloud-item media-item" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/289195848&color=%230e0e0e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
          <iframe title="the desperado" className="no-mobile soundcloud-item media-item" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/289195417&color=%230e0e0e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
          <iframe title="we-three-kings" className="no-mobile soundcloud-item media-item" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/289193980&color=%230e0e0e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
          <iframe title="silent-night" className="no-mobile soundcloud-item media-item" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/289193334&color=%23090909&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
          <iframe title="rex" className="no-mobile soundcloud-item media-item" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/286524158&color=%23090909&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        </div>
        <hr className="page-divide" />
        <div>
          <h4 className="section-header">For Purchase</h4>
          <div className="media-container" id="amazon">
            <a target="_blank" rel="noopener noreferrer" className="amazon-item media-item" href="https://www.amazon.com/Baraka-Robert-Earl-Longley/dp/B0015KMTZS"><img alt="Baraka album on Amazon" className="amazon-img" src="https://m.media-amazon.com/images/I/911fBqXPq8L._SS500_.jpg" /></a>
            <a target="_blank" rel="noopener noreferrer" className="amazon-item media-item" href="https://www.amazon.com/Guitar-Royale-Robert-Earl-Longley/dp/B00GWVBHVC/"><img alt="Guitar Royale album on Amazon" className="amazon-img" src="https://m.media-amazon.com/images/I/71o9XLqLI3L._SS500_.jpg" /></a>
            <a target="_blank" rel="noopener noreferrer" className="amazon-item media-item" href="https://www.amazon.com/Chasing-Dragon-Robert-Earl-Longley/dp/B001AIU6EG"><img alt="Chasing the Dragon album on Amazon" className="amazon-img" src="https://m.media-amazon.com/images/I/91EBqQw00ML._SS500_.jpg" /></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Music