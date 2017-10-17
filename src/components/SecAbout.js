import React, { Component } from 'react';
import './SecAbout.css';
import img1 from '../img/mr.png';

class SecAbout extends React.Component {
  render() {
    return <div className="sec_about" id="about">
      <div className="container cont_about">
        <div className="columns">
          <div className="column is-two-thirds">
            <h1 className="title_about">
              <i className="fa fa-user" aria-hidden="true"></i>
              About Me
            </h1>
            <p>
            I am a passionate Web Development and Sofeware Development who has been working
            in this field for more than 3 years now.
            <br/>
            My skills are broad: from feasibility study to design, front end to back end development.
            I enjoy each aspect, and love building something awesome from start to finish,
            for clients all over the world.
            <br/><br/>
            I'm available for remote work - if you would like to build something together, get in touch?
            </p>
          </div>
          <div className="column">

            <h1 className="title_about">
              <i className="fa fa-building" aria-hidden="true"></i>
              Work history
            </h1>
            <p>
              Engineer | Panasonic
              <br/>
              <span className="small_p">2015 - Present</span>
            </p>

            <br/><br/>

            <h1 className="title_about">
              <i className="fa fa-graduation-cap" aria-hidden="true"></i>
              Education
            </h1>
            <p>
              Diploma in Programming | Politeknik
              <br/>
              <span className="small_p">2012 - 2014</span>
            </p>
            <p>
              Bachelor of Computer Science | UTM
              <br/>
              <span className="small_p">2015 - Present</span>
            </p>

          </div>
        </div>
      </div>
    </div>;
  }
}

export default SecAbout;
