import React, { Component } from 'react';
import { Segment, Button, Image } from 'semantic-ui-react';

class Register extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Segment style = {{width: 500, margin: "0 auto"}} className="ui form" >
        <div style={{textAlign: "center"}} >
          <span style = {{fontSize: 24}} >Register</span>
        </div>
        <div className="field">
          <label>Username</label>
          <div className="ui left icon input">
            <i className="user icon"></i>
            <input type="text" placeholder="Username" />
          </div>
        </div>

        <div className="field">
          <label>Email</label>
          <div className="ui left icon input">
            <i className="at icon"></i>
            <input type="text" placeholder="Email address" />
          </div>
        </div>

        <div className="field">
          <label>Password</label>
          <div className="ui left icon input">
            <i className="lock icon"></i>
            <input type="password" placeholder="Password" />
          </div>
        </div>

        <Button className="blue" fluid>
          Register
        </Button>
        
        <div className="ui horizontal divider" >
        Or
        </div>
        
        <Button className="green" fluid>
          Login
        </Button>
        
      </Segment>
    );
  }
}

export default Register;