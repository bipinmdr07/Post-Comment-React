import React from 'react';
import Logo from './Logo';
import RightNav from './RightNav';

const Navbar = () => {
  return (
    <div className="ui menu">
      <div className="ui container">
        <Logo />
        <RightNav className="right menu" />
      </div>
    </div>
  );
}

export default Navbar;