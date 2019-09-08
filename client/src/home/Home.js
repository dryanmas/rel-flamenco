import React from 'react';

import './Home.css';

class Home extends React.Component {

  render() {
    return (
      <>
        <div className="heading-container">
          <h1 id="name">ROBERT EARL LONGLEY</h1>
        </div>
        <div className="banner" id="banner-main"></div>
      </>
    );
  }
}

export default Home