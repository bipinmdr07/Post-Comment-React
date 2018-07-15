import React, {Component} from 'react';
import { Button } from 'semantic-ui-react';

class RightNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="right menu">
        <a className="item">Login</a>
        <a className="item">Sign Up</a>
      </div>
    );
  }
}

export default RightNav;