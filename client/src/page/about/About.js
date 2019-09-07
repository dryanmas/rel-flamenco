import React from 'react';

import './About.css';
import bioPic from './bio.jpeg';

class About extends React.Component {

  render() {
    return (
      <div className="page-contents" id="bio-page">
        <div className="text-container" id="bio-container">
        <div class="img-container">
          <img id="bio-img" alt="Robert Earl Longley" src={bioPic}/> 
        </div>
          <h3>Robert Earl Longley</h3>
          <p>Robert Earl Longley, also known as "Robby" to his friends and fans, is a world-class level guitarist and symphonic composer. His original compositions include ten of his own CDs, three theatrical films, and a two-hour long improvisational performance to a silent film.  Robert’s concert material is a presentation of masterfully executed fingerstyle techniques on the flamenco guitar that delivers sophisticated melodies in symphonic movements unprecedented on solo guitar.</p>

          <p>Defying the accepted genres of style, the dogma of tradition to Robert is quite stifling.  Robert’s music is not straight flamenco. Although it sounds Spanish, it is not that. It could have been lifted out of a classical film score, but it wasn't. Its rhythmic improvisations are jazz-like, but it is not jazz. It wrenches your emotions like blues, but it isn't that either.</p>

          <p>Robert grew up in Louisiana, where he was shaped by continuous classical music and traditional flamenco in his home, along with the inescapable influence of jazz and blues from nearby New Orleans. He currently resides in the historic town of Bisbee, Arizona, where in addition to his fingerstyle guitar playing, he has established a production studio. 
          </p>
        </div>
      </div>
    );
  }
}

export default About