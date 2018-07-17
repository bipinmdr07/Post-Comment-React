import React from 'react';
import { Link } from 'react-router-dom';

const RightNav = () => {
  return (
    <div className="right menu">
      <Link to='/' className="item" >
        Login
      </Link> 
      <Link to='/register' className="item" >
        Sign Up
      </Link>
    </div>
  );
}

export default RightNav;