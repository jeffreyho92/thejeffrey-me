import React, { Component } from 'react';

class NavBar extends React.Component {
  render() {
    return <div className="container" id="navigation_bar">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="nav-brand">
          <a className="nav-item" href=".">
            JEFFREYHO
            {/*
              <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width={112} height={28} />
            */}
          </a>
        </div>

        <div className="navbar-end">
          <a className="nav-item " href="#services">
            SERVICES
          </a>
          <a className="nav-item" href="#portfolio">
            PORTFOLIO
          </a>
          <a className="nav-item " href="#about">
            ABOUT
          </a>
          <a className="nav-item " href="#contact">
            CONTACT
          </a>
        </div>
      </nav>
    </div>;
  }
}

export default NavBar;
