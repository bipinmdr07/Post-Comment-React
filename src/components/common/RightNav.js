import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class RightNav extends Component {
  render() {
    return (
      <div className="right menu">
        <Link to='/'>
          <a className="item">Login</a>
        </Link> 
        <Link to='/register'>
          <a className="item">Sign Up</a>
        </Link> 
      </div>
    );
  }
}

export default RightNav;