import React, { Component } from 'react';
import './SecHero.css';
import img1 from '../img/mr.png';

class SecHero extends React.Component {
  render() {
    return <div className="sec_portfolio">
      <div className="container cont_hero">
        <h1 className="hero_title">
          <br/>
          A dream is just a dream.
          A goal is a
          <br/>
          dream with a plan and a deadline.
          <br/>
        </h1>

        <span className="hero_span">Harvey Mackay</span>

        <br/><br/>
      </div>
    </div>;
  }
}

export default SecHero;
