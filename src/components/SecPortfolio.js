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
import img13 from "../img/thebookme.png";
import img14 from "../img/private-ecommerce-app.png";
import img15 from "../img/hotspot-app.png";
import img16 from "../img/hotspot-web.png";
import img17 from "../img/manufacturer-web.png";
import img11 from "../img/web3/staking-dapp.png";
import img12 from "../img/web3/random-banana-nft.png";
import img18 from "../img/web3/nft-martketplace.jpg";

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
      lightbox10IsOpen: false,
      lightbox11IsOpen: false,
      lightbox12IsOpen: false,
      lightbox13IsOpen: false,
      lightbox14IsOpen: false,
      lightbox15IsOpen: false,
      lightbox16IsOpen: false,
      lightbox17IsOpen: false,
      lightbox18IsOpen: false,
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
      lightbox10IsOpen: false,
      lightbox11IsOpen: false,
      lightbox12IsOpen: false,
      lightbox13IsOpen: false,
      lightbox14IsOpen: false,
      lightbox15IsOpen: false,
      lightbox16IsOpen: false,
      lightbox17IsOpen: false,
      lightbox18IsOpen: false,
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
    var lightbox11 = false;
    var lightbox12 = false;
    var lightbox13 = false;
    var lightbox14 = false;
    var lightbox15 = false;
    var lightbox16 = false;
    var lightbox17 = false;
    var lightbox18 = false;
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
    } else if (number == 11) {
      lightbox11 = true;
    } else if (number == 12) {
      lightbox12 = true;
    } else if (number == 13) {
      lightbox13 = true;
    } else if (number == 14) {
      lightbox14 = true;
    } else if (number == 15) {
      lightbox15 = true;
    } else if (number == 16) {
      lightbox16 = true;
    } else if (number == 17) {
      lightbox17 = true;
    } else if (number == 18) {
      lightbox18 = true;
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
      lightbox10IsOpen: lightbox10,
      lightbox11IsOpen: lightbox11,
      lightbox12IsOpen: lightbox12,
      lightbox13IsOpen: lightbox13,
      lightbox14IsOpen: lightbox14,
      lightbox15IsOpen: lightbox15,
      lightbox16IsOpen: lightbox16,
      lightbox17IsOpen: lightbox17,
      lightbox18IsOpen: lightbox18,
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
              <h1 className="title_profile2">NFT Marketplace</h1>
              <p>Create new NFT or list existing NFT for sale, withdraw proceeded balance after sold</p>
              <hr className="title_hr2" />
              <p>
                Solidity NFT and marketplace smart contracts
                <br/>
                <a href='https://alchemy-nft-marketplace.on.fleek.co' target='_blank'>https://alchemy-nft-marketplace.on.fleek.co</a>
              </p>
            </div>
            <div className="column">
              <div className="img_portfolio">
                <img src={img18} onClick={e => this.openLightbox(18, e)} />
              </div>
            </div>
          </div>

          <hr />
          <br />

          <div className="columns">
            <div className="column">
              <h1 className="title_profile2">Staking dApp</h1>
              <p>Staking and Reward</p>
              <hr className="title_hr2" />
              <p>
                Solidity staking smart contract
                <br/>
                <a href='https://staking-dapp.on.fleek.co' target='_blank'>https://staking-dapp.on.fleek.co</a>
              </p>
            </div>
            <div className="column">
              <div className="img_portfolio">
                <img src={img11} onClick={e => this.openLightbox(11, e)} />
              </div>
            </div>
          </div>

          <hr />
          <br />

          <div className="columns">
            <div className="column">
              <h1 className="title_profile2">Random Banana NFT</h1>
              <p>Powered by Chainlink VRF</p>
              <hr className="title_hr2" />
              <p>
                On-chain NFT, Base64 SVG, Chainlink randomize
                <br/>
                <a href='https://random-banana-nft.on.fleek.co' target='_blank'>https://random-banana-nft.on.fleek.co</a>
              </p>
            </div>
            <div className="column">
              <div className="img_portfolio">
                <img src={img12} onClick={e => this.openLightbox(12, e)} />
              </div>
            </div>
          </div>

          <hr />
          <br />

          <h1 className="title_profile">Software Development</h1>
          <br />
          <br />

          <div className="columns">
            <div className="column">
              <h1 className="title_profile2">Hotspot Booking</h1>
              <p>Booking Mobile App</p>
              <hr className="title_hr2" />
              <p>React Native, iOS, Android</p>
            </div>
            <div className="column">
              <div className="img_portfolio">
                <img src={img15} onClick={e => this.openLightbox(15, e)} />
              </div>
            </div>
          </div>

          <hr />
          <br />

          <div className="columns">
            <div className="column">
              <h1 className="title_profile2">Hotspot Booking</h1>
              <p>Booking Website</p>
              <hr className="title_hr2" />
              <p>ReactJS, Google Map, Chat Message</p>
            </div>
            <div className="column">
              <div className="img_portfolio">
                <img src={img16} onClick={e => this.openLightbox(16, e)} />
              </div>
            </div>
          </div>

          <hr />
          <br />

          <div className="columns">
            <div className="column">
              <h1 className="title_profile2">Thebookme</h1>
              <p>Booking Mobile App</p>
              <hr className="title_hr2" />
              <p>React Native, iOS, Android</p>
            </div>
            <div className="column">
              <div className="img_portfolio">
                <img src={img13} onClick={e => this.openLightbox(13, e)} />
              </div>
            </div>
          </div>

          <hr />
          <br />

          <div className="columns">
            <div className="column">
              <h1 className="title_profile2">Private Ecommerce App</h1>
              <p>Ecommerce Ordering App</p>
              <hr className="title_hr2" />
              <p>React Native, iOS, Android</p>
            </div>
            <div className="column">
              <div className="img_portfolio">
                <img src={img14} onClick={e => this.openLightbox(14, e)} />
              </div>
            </div>
          </div>

          <hr />
          <br />

          <div className="columns">
            <div className="column">
              <h1 className="title_profile2">Manufacturer Operation</h1>
              <p>Manufacturer Backend System</p>
              <hr className="title_hr2" />
              <p>PO, BOM, CRM, Reporting</p>
            </div>
            <div className="column">
              <div className="img_portfolio">
                <img src={img17} onClick={e => this.openLightbox(17, e)} />
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
              <p>Customize, PWA, ReactJS</p>
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
              <h1 className="title_profile2">ICT helpdesk</h1>
              <hr className="title_hr2" />
              <p>Customize, ReactJS, Email notifications</p>
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
              <h1 className="title_profile2">Mr Tailor</h1>
              <hr className="title_hr2" />
              <p>E-Commerce, Wordpress, Self-hosted</p>
            </div>
            <div className="column">
              <div className="img_portfolio1">
                <img src={img1} onClick={e => this.openLightbox(1, e)} />
              </div>
            </div>
          </div>

          <hr />
          <br />

          {/* <div className="columns">
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
          <br /> */}

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
          <Lightbox images={[{ src: img11 }]} isOpen={this.state.lightbox11IsOpen} onClose={this.closeLightbox} />
          <Lightbox images={[{ src: img12 }]} isOpen={this.state.lightbox12IsOpen} onClose={this.closeLightbox} />
          <Lightbox images={[{ src: img13 }]} isOpen={this.state.lightbox13IsOpen} onClose={this.closeLightbox} />
          <Lightbox images={[{ src: img14 }]} isOpen={this.state.lightbox14IsOpen} onClose={this.closeLightbox} />
          <Lightbox images={[{ src: img15 }]} isOpen={this.state.lightbox15IsOpen} onClose={this.closeLightbox} />
          <Lightbox images={[{ src: img16 }]} isOpen={this.state.lightbox16IsOpen} onClose={this.closeLightbox} />
          <Lightbox images={[{ src: img17 }]} isOpen={this.state.lightbox17IsOpen} onClose={this.closeLightbox} />
          <Lightbox images={[{ src: img18 }]} isOpen={this.state.lightbox18IsOpen} onClose={this.closeLightbox} />
        </div>
      </div>
    );
  }
}

export default SecPortfolio;
