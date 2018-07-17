import React, { Component } from 'react';
import { Segment, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { signUpUser } from '../../services/signup';
import InputField from '../common/InputField';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    }
  }

  inputFieldChangeHandler = (key, value) => {
    this.setState({ [key]: value });
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
       
        <InputField 
        type="text"
        name="username"
        placeholder="Username"
        value={ this.state.username }
        iconType="user"
        inputFieldChangeHandler={ this.inputFieldChangeHandler }
        />

        <InputField
        type="text"
        name="email"
        placeholder="Email"
        value={this.state.email}
        iconType='at'
        inputFieldChangeHandler={ this.inputFieldChangeHandler }
        />

        <InputField
        type='password'
        name='password'
        placeholder='Password'
        value={this.state.password}
        iconType='lock'
        inputFieldChangeHandler={ this.inputFieldChangeHandler }
        />

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