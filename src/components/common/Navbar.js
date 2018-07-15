import React, { Component, Fragment } from 'react';
import Logo from './Logo';
import RightNav from './RightNav';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

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