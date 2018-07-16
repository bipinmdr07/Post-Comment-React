import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class RightNav extends Component {
  render() {
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
}

export default RightNav;