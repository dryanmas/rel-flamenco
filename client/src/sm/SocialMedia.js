import React from 'react';

import './SocialMedia.css';

class SocialMedia extends React.Component {

  render() {
    return (
      <>
        <a href="https://www.facebook.com/Robert-Earl-Longley-Music-643973815618328/" className="fa fa-facebook" target="_blank" rel="noopener noreferrer"></a>
        <a href="https://soundcloud.com/robert-earl-longley" target="_blank" className="fa fa-soundcloud" rel="noopener noreferrer"></a>
      </>
    );
  }
}

export default SocialMedia