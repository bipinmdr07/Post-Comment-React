import React, { Component } from 'react';
import logo from '../../logo.svg';

class Logo extends Component {
  render() {
    return (
      <a className="item">
        <img src={logo} style={{width : 50}} alt="logo"/>
        Post-Comment
      </a>
    )
  }
}

export default Logo;