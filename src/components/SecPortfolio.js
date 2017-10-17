import React, { Component } from 'react';
import './SecPortfolio.css';
import img1 from '../img/mr.png';
import img2 from '../img/sekenhan.png';
import img3 from '../img/task_management.png';

class SecPortfolio extends React.Component {
  render() {
    return <div className="sec_portfolio" id="portfolio">
      <div className="container cont_portfolio">
        <h1 className="title_profile">
          Portfolio
        </h1>
        <br/><br/>

        <div className="columns">
          <div className="column">
            <h1 className="title_profile2">Mr Tailor</h1>
            <hr className="title_hr2" />
            <p>E-Commerce, Wordpress</p>
          </div>
          <div className="column">
            <div className="img_portfolio">
              <a href={img1}>
                <img src={img1} />
              </a>
            </div>
          </div>
        </div>

        <hr/><br/>

        <div className="columns">
          <div className="column">
            <h1 className="title_profile2">Sekenhan</h1>
            <hr className="title_hr2" />
            <p>E-Commerce, Wordpress</p>
          </div>
          <div className="column">
            <div className="img_portfolio2">
              <a href={img2}>
                <img src={img2} />
              </a>
            </div>
          </div>
        </div>

        <hr/><br/>

        <div className="columns">
          <div className="column">
            <h1 className="title_profile2">Task Management</h1>
            <hr className="title_hr2" />
            <p>Customize, Vuejs</p>
          </div>
          <div className="column">
            <div className="img_portfolio3">
              <a href={img3}>
                <img src={img3} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>;
  }
}

export default SecPortfolio;
