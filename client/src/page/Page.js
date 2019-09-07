import React from 'react';

import './Page.css';
import Music from './music/Music.js';
import Video from './video/Video.js';
import About from './about/About.js';
import Booking from './booking/Booking.js';

class Page extends React.Component {

  render() {
    const pageName = this.props.name;
    const pages = {
      music: <Music />,
      videos: <Video />,
      about: <About />,
      booking: <Booking />
    }

    return (
      <>
        <div id="page-header">
          <div className="banner" id="banner-page">
            <h3 className="page-header">{pageName}</h3>
          </div>
        </div>
        { pages[pageName.toLowerCase()] }
      </>
    );
  }
}

export default Page