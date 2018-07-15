import React, { Component } from 'react';
import { Image, Segment, Input, Button } from 'semantic-ui-react';
import loginImage from '../../login.png'

class LoginForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Segment style = {{width: 500, margin: "0 auto"}} className="ui form" >
        <div style={{textAlign: "center"}} >
          <Image src={loginImage} style = {{width: 100}} centered/>
          <span style = {{fontSize: 24}} >Login</span>
        </div>
        <div className="field">
          <label>Username</label>
          <div className="ui left icon input">
            <i className="user icon"></i>
            <input type="text" placeholder="Username" />
          </div>
        </div>

        <div className="field">
          <label>Password</label>
          <div className="ui left icon input">
            <i className="lock icon"></i>
            <input type="password" placeholder="Password" />
          </div>
        </div>

        <Button className="green" fluid>
          Login
        </Button>

        <div className="ui horizontal divider" >
        Or
        </div>

        <Button className="blue" fluid>
          Register
        </Button>
      </Segment>
    );
  }
}

export default LoginForm;