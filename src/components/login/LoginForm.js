import React, { Component } from 'react';
import { Image, Segment, Button } from 'semantic-ui-react';
import loginImage from '../../login.png';
import { Link } from 'react-router-dom';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  usernameChangeHandler = (e) => {
    this.setState({ username: e.target.value });
  }

  passwordChangeHandler = (e) => {
    this.setState({ password: e.target.value });
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
            <input type="text" placeholder="Username" value={this.state.username} onChange={this.usernameChangeHandler} />
          </div>
        </div>

        <div className="field">
          <label>Password</label>
          <div className="ui left icon input">
            <i className="lock icon"></i>
            <input type="password" placeholder="Password" value={this.state.password} onChange={this.passwordChangeHandler} />
          </div>
        </div>

        <Button className="green" fluid>
          Login
        </Button>

        <div className="ui horizontal divider" >
        Or
        </div>

        <Link to='/register'>
          <Button className="blue" fluid>
            Register
          </Button>
        </Link>
      </Segment>
    );
  }
}

export default LoginForm;