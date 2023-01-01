import React, { Component } from 'react';
import logo from './logo.svg';
import 'bulma/css/bulma.css'
import './App.css';
import NavBar from './components/NavBar.js';
import SecHome from './components/SecHome.js';
import SecPortfolio from './components/SecPortfolio.js';
import SecServices from './components/SecServices.js';
import SecAbout from './components/SecAbout.js';
import SecHero from './components/SecHero.js';
import SecContact from './components/SecContact.js';
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />

        <SecHome />
        <SecHero />
        <SecServices />
        <SecPortfolio />
        <SecAbout />
        <SecContact />

        <p className="footer">
          © 2015 - {new Date().getFullYear()} | Jeffrey Ho | jeffreyho92@gmail.com
        </p>
      </div>
    );
  }
}

export default App;
