import React, { Component } from 'react';
import './SecHome.css';
import logo from '../jyho.jpg';

class SecHome extends React.Component {
  render() {
    return <div className="sec_home">
      <img src={logo} className="pro_img" alt="logo" />
      <h1 className="title_name"><b>Jeffrey Ho</b></h1>
      <h1 className="title_profile">Full-stack Developer</h1>
      <hr className="title_hr" />
      Malaysia-base Freelancer
    </div>;
  }
}

export default SecHome;
