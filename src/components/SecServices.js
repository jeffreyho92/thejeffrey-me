import React, { Component } from 'react';
import './SecServices.css';

class SecHome extends React.Component {
  render() {
    return <div className="sec_services" id="services">
      <div className="container">
        <h1 className="title_profile">
          What I Do
        </h1>
        <br/><br/>

        <div className="columns">
          <div className="column">
            <div className="icon_box">
              <i className="fa fa-cube fa-3x" aria-hidden="true"></i>
            </div>
            <h1 className="title_service">Blockchain / Solidity</h1>
            <p>Blockchain enthusiast, Smart contract developer</p>
          </div>
          <div className="column">
            <div className="icon_box">
              <i className="fa fa-laptop fa-3x" aria-hidden="true"></i>
            </div>
            <h1 className="title_service">Web Development</h1>
            <p>Custom development of web applications or migration from legacy systems to the web</p>
          </div>
          <div className="column">
            <div className="icon_box">
              <i className="fa fa-cog fa-3x" aria-hidden="true"></i>
            </div>
            <h1 className="title_service">Sofeware Development</h1>
            <p>Javascript, Python, C#, Electron</p>
          </div>
        </div>

        <br/><br/>

        <div className="columns">
          <div className="column">
            <div className="icon_box">
              <i className="fa fa-mobile fa-4x" aria-hidden="true"></i>
            </div>
            <h1 className="title_service">Apps</h1>
            <p>Mobile, React Native, Hybrid</p>
          </div>
          <div className="column">
            <div className="icon_box">
              <i className="fa fa-html5 fa-3x" aria-hidden="true"></i>
            </div>
            <h1 className="title_service">Front-end</h1>
            <p>ReactJS, VueJS, CSS3</p>
          </div>
          <div className="column">
            <div className="icon_box">
              <i className="fa fa-server fa-3x" aria-hidden="true"></i>
            </div>
            <h1 className="title_service">Back-end</h1>
            <p>NodeJS, Python, API, Microservice, SQL, Devops</p>
          </div>
        </div>

        <br/>

      </div>
    </div>;
  }
}

export default SecHome;
