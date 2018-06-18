import React, { Component } from "react";
import Lightbox from "react-images";
import "./SecPortfolio.css";
import img1 from "../img/mr_tailor.png";
import img2 from "../img/sekenhan.png";
import img3 from "../img/task_management.png";
import img4 from "../img/utm_android1.png";
import img5 from "../img/reservation.png";
import img6 from "../img/inventory.png";
import img7 from "../img/ICT_Helpdesk.png";
import img8 from "../img/coin_calendar.jpg";
import img9 from "../img/coldblood_pwa.jpg";
import img10 from "../img/CoinCalendar.png";

class SecPortfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lightbox1IsOpen: false,
      lightbox2IsOpen: false,
      lightbox3IsOpen: false,
      lightbox4IsOpen: false,
      lightbox5IsOpen: false,
      lightbox6IsOpen: false,
      lightbox7IsOpen: false,
      lightbox8IsOpen: false,
      lightbox9IsOpen: false,
      lightbox10IsOpen: false
    };
    this.closeLightbox = this.closeLightbox.bind(this);
  }
  closeLightbox() {
    this.setState({
      lightbox1IsOpen: false,
      lightbox2IsOpen: false,
      lightbox3IsOpen: false,
      lightbox4IsOpen: false,
      lightbox5IsOpen: false,
      lightbox6IsOpen: false,
      lightbox7IsOpen: false,
      lightbox8IsOpen: false,
      lightbox9IsOpen: false,
      lightbox10IsOpen: false
    });
  }
  openLightbox(number, event) {
    event.preventDefault();

    var lightbox1 = false;
    var lightbox2 = false;
    var lightbox3 = false;
    var lightbox4 = false;
    var lightbox5 = false;
    var lightbox6 = false;
    var lightbox7 = false;
    var lightbox8 = false;
    var lightbox9 = false;
    var lightbox10 = false;
    if (number == 1) {
      lightbox1 = true;
    } else if (number == 2) {
      lightbox2 = true;
    } else if (number == 3) {
      lightbox3 = true;
    } else if (number == 4) {
      lightbox4 = true;
    } else if (number == 5) {
      lightbox5 = true;
    } else if (number == 6) {
      lightbox6 = true;
    } else if (number == 7) {
      lightbox7 = true;
    } else if (number == 8) {
      lightbox8 = true;
    } else if (number == 9) {
      lightbox9 = true;
    } else if (number == 10) {
      lightbox10 = true;
    }

    this.setState({
      lightbox1IsOpen: lightbox1,
      lightbox2IsOpen: lightbox2,
      lightbox3IsOpen: lightbox3,
      lightbox4IsOpen: lightbox4,
      lightbox5IsOpen: lightbox5,
      lightbox6IsOpen: lightbox6,
      lightbox7IsOpen: lightbox7,
      lightbox8IsOpen: lightbox8,
      lightbox9IsOpen: lightbox9,
      lightbox10IsOpen: lightbox10
    });
  }
  render() {
    return (
      <div className="sec_portfolio" id="portfolio">
        <div className="container cont_portfolio">
          <h1 className="title_profile">Portfolio</h1>
          <br />
          <br />

          <div className="columns">
            <div className="column">
              <h1 className="title_profile2">ICT helpdesk</h1>
              <hr className="title_hr2" />
              <p>Customize, React, Email notifications</p>
            </div>
            <div className="column">
              <div className="img_portfolio">
                <img src={img7} onClick={e => this.openLightbox(7, e)} />
              </div>
            </div>
          </div>

          <hr />
          <br />

          <div className="columns">
            <div className="column">
              <h1 className="title_profile2">Task Management</h1>
              <hr className="title_hr2" />
              <p>Customize, Vuejs</p>
            </div>
            <div className="column">
              <div className="img_portfolio3">
                <img src={img3} onClick={e => this.openLightbox(3, e)} />
              </div>
            </div>
          </div>

          <hr />
          <br />

          <div className="columns">
            <div className="column">
              <h1 className="title_profile2">Coin Calendar</h1>
              <hr className="title_hr2" />
              <p>React Native, iOS, Android</p>
            </div>
            <div className="column">
              <div className="img_portfolio">
                <img src={img10} onClick={e => this.openLightbox(10, e)} />
              </div>
            </div>
          </div>

          <hr />
          <br />

          <div className="columns">
            <div className="column">
              <h1 className="title_profile2">ColdBlood</h1>
              <hr className="title_hr2" />
              <p>Customize, PWA, React</p>
            </div>
            <div className="column">
              <div className="img_portfolio">
                <img src={img9} onClick={e => this.openLightbox(9, e)} />
              </div>
            </div>
          </div>

          <hr />
          <br />

          <div className="columns">
            <div className="column">
              <h1 className="title_profile2">Coin Calendar</h1>
              <hr className="title_hr2" />
              <p>Customize, Discord bot, NodeJS</p>
            </div>
            <div className="column">
              <div className="img_portfolio">
                <img src={img8} onClick={e => this.openLightbox(8, e)} />
              </div>
            </div>
          </div>

          <hr />
          <br />

          <div className="columns">
            <div className="column">
              <h1 className="title_profile2">Mr Tailor</h1>
              <hr className="title_hr2" />
              <p>E-Commerce, Wordpress</p>
            </div>
            <div className="column">
              <div className="img_portfolio1">
                <img src={img1} onClick={e => this.openLightbox(1, e)} />
              </div>
            </div>
          </div>

          <hr />
          <br />

          <div className="columns">
            <div className="column">
              <h1 className="title_profile2">Sekenhan</h1>
              <hr className="title_hr2" />
              <p>E-Commerce, Wordpress</p>
            </div>
            <div className="column">
              <div className="img_portfolio2">
                <img src={img2} onClick={e => this.openLightbox(2, e)} />
              </div>
            </div>
          </div>

          <hr />
          <br />

          <div className="columns">
            <div className="column">
              <h1 className="title_profile2">Android Applications</h1>
              <hr className="title_hr2" />
              <p>Customize, Android, Java</p>
            </div>
            <div className="column">
              <div className="img_portfolio4">
                <img src={img4} onClick={e => this.openLightbox(4, e)} />
              </div>
            </div>
          </div>

          <hr />
          <br />

          <div className="columns">
            <div className="column">
              <h1 className="title_profile2">Reservation System</h1>
              <hr className="title_hr2" />
              <p>Customize, PHP, JavaScript</p>
            </div>
            <div className="column">
              <div className="img_portfolio5">
                <img src={img5} onClick={e => this.openLightbox(5, e)} />
              </div>
            </div>
          </div>

          <hr />
          <br />

          <div className="columns">
            <div className="column">
              <h1 className="title_profile2">Inventory System</h1>
              <hr className="title_hr2" />
              <p>Customize, PHP, JavaScript</p>
            </div>
            <div className="column">
              <div className="img_portfolio6">
                <img src={img6} onClick={e => this.openLightbox(6, e)} />
              </div>
            </div>
          </div>

          <Lightbox images={[{ src: img1 }]} isOpen={this.state.lightbox1IsOpen} onClose={this.closeLightbox} />
          <Lightbox images={[{ src: img2 }]} isOpen={this.state.lightbox2IsOpen} onClose={this.closeLightbox} />
          <Lightbox images={[{ src: img3 }]} isOpen={this.state.lightbox3IsOpen} onClose={this.closeLightbox} />
          <Lightbox images={[{ src: img4 }]} isOpen={this.state.lightbox4IsOpen} onClose={this.closeLightbox} />
          <Lightbox images={[{ src: img5 }]} isOpen={this.state.lightbox5IsOpen} onClose={this.closeLightbox} />
          <Lightbox images={[{ src: img6 }]} isOpen={this.state.lightbox6IsOpen} onClose={this.closeLightbox} />
          <Lightbox images={[{ src: img7 }]} isOpen={this.state.lightbox7IsOpen} onClose={this.closeLightbox} />
          <Lightbox images={[{ src: img8 }]} isOpen={this.state.lightbox8IsOpen} onClose={this.closeLightbox} />
          <Lightbox images={[{ src: img9 }]} isOpen={this.state.lightbox9IsOpen} onClose={this.closeLightbox} />
          <Lightbox images={[{ src: img10 }]} isOpen={this.state.lightbox10IsOpen} onClose={this.closeLightbox} />
        </div>
      </div>
    );
  }
}

export default SecPortfolio;
