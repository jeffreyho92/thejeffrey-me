import React, { Component } from 'react';
import './SecContact.css';
import img1 from '../img/mr.png';

class SecAbout extends React.Component {
  render() {
    return <div className="sec_contact" id="contact">
      <div className="container cont_contact">
        <h1 className="contact_title">
          Need Any Help?
          <br/>
          I am available for freelance hire
        </h1>
        <a href="mailto:jeffreyho92@gmail.com">
          <span className="hero_span">Hire me</span>
        </a>
      </div>
    </div>;
  }
}

export default SecAbout;
