import React, { Component } from 'react';
import Logo from './Logo';
import RightNav from './RightNav';

class Navbar extends Component {
  render() {
    return (
      <div className="ui menu">
        <div className="ui container">
          <Logo />
          <RightNav className="right menu" />
        </div>
      </div>
    );
  }
}

export default Navbar;