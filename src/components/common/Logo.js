import React, { Component } from 'react';
import logo from '../../logo.svg';

class Logo extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <a className="item">
        <img src={logo} style={{width : 50}}/>
        Post-Comment
      </a>
    )
  }
}

export default Logo;