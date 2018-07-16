import React, { Component } from 'react';
import { Segment, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { signUpUser } from '../../services/signup';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    }
  }

  usernameChangeHandler = (e) => {
    e.preventDefault();
    this.setState({ username: e.target.value });
  }

  emailChangeHandler = (e) => {
    e.preventDefault();
    this.setState({ email: e.target.value });
  }

  passwordChangeHandler = (e) => {
    e.preventDefault();
    this.setState({ password: e.target.value });
  }

  registerButtonClickHandler = async (e) => {
    e.preventDefault();
    const user = await signUpUser( this.state );
    (user)? alert("User Created") : alert("User not created");
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
            <input type="text" placeholder="Username" value={this.state.username} onChange={this.usernameChangeHandler} />
          </div>
        </div>

        <div className="field">
          <label>Email</label>
          <div className="ui left icon input">
            <i className="at icon"></i>
            <input type="text" placeholder="Email address" value={this.state.email} onChange={this.emailChangeHandler} />
          </div>
        </div>

        <div className="field">
          <label>Password</label>
          <div className="ui left icon input">
            <i className="lock icon"></i>
            <input type="password" placeholder="Password" value={this.state.password} onChange={this.passwordChangeHandler} />
          </div>
        </div>

        <Button className="blue" fluid onClick={this.registerButtonClickHandler} >
          Register
        </Button>
        
        <div className="ui horizontal divider" >
        Or
        </div>
        
        <Link to='/'>
          <Button className="green" fluid>
            Login
          </Button>
         </Link>
        
      </Segment>
    );
  }
}

export default Register;