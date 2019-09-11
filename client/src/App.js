import React from 'react';

import './App.css';
import SocialMedia from './sm/SocialMedia.js';
import Home from './home/Home.js';
import Page from './page/Page.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {selected: 'Home'};
  }

  render() {
    const selected = this.state.selected;
    let mainContent;

    if (selected === 'Home') {
      mainContent = <Home />
    } else {
      mainContent = <Page name={selected}/>
    }
    
    return (
      <div className="App">
        <header>
          <div className="nav-container" id="upper-nav-container">
            <div id="open-menu">
              <button className="menu-toggle" onClick={this.openMenu}>
                Menu 
                {/* <i className="fa fa-angle-double-down"></i> */}
              </button>
            </div> 
            <nav id="upper-nav">
              <div className="sm" id="sm-nav">
                <SocialMedia />
              </div>
              <button className="menu-toggle" id="close-menu" onClick={this.closeMenu}><i className="fa fa-angle-double-up"></i></button>
              <hr className="nav-break" />
              <button className="nav-link selected" onClick={this.selectPage}>Home</button>
              <hr className="nav-break" />
              <button className="nav-link" onClick={this.selectPage}>Music</button>
              <hr className="nav-break" />
              <button className="nav-link" onClick={this.selectPage}>Videos</button>
              <hr className="nav-break" />
              <button className="nav-link" onClick={this.selectPage}>About</button>
              <hr className="nav-break" />
              <button className="nav-link" onClick={this.selectPage}>Booking</button>
              <hr className="nav-break" />
            </nav>
            <div className="sm" id="sm-lower">
              <SocialMedia />
            </div>
          </div>
        </header>
        <div id="main-content">
          {mainContent}
        </div>
      </div>
    );
  }

  selectPage = (e) => {
    const navButton = e.target;
    const currentPage = document.getElementsByClassName('selected')[0];

    currentPage.classList.remove('selected');
    navButton.classList.add('selected');

    this.setState({ selected: navButton.textContent });
    this.closeMenu();
  }

  openMenu = () => {
    const openButton = document.getElementById('open-menu');
    const nav = document.getElementById('upper-nav');

    openButton.style.display = "none";
    nav.style.display = "flex";
  }

  closeMenu = () => {
    const openButton = document.getElementById('open-menu');
    const nav = document.getElementById('upper-nav');

    openButton.style.display = "flex";
    nav.style.display = "none";
  }
}

export default App;
