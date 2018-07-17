import React, { Component } from 'react';
import { Image, Segment, Button } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';

import loginImage from '../../login.png';
import { login } from '../../services/loginForm';
import InputField from '../common/InputField';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleLoginButtonClick = this.handleLoginButtonClick.bind(this);
  }

  inputFieldChangeHandler = (key, value) => {
    this.setState({[key]: value});
  }

  async handleLoginButtonClick(e) {
    e.preventDefault();
    console.log(this.state);
    const loginData = {
      username: this.state.username,
      password: this.state.password
    }

    const { data } = await login(loginData);

    localStorage.setItem("token", data.token);
    localStorage.setItem("refreshToken", data.refreshToken);
    console.log(localStorage.token)

    this.props.history.push('/posts');
  }

  render() {
    return (
      <Segment style = {{width: 500, margin: "0 auto"}} className="ui form" >
        <div style={{textAlign: "center"}} >
          <Image src={loginImage} style = {{width: 100}} centered/>
          <span style = {{fontSize: 24}} >Login</span>
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
        type='password'
        name='password'
        placeholder='Password'
        value={this.state.password}
        iconType='lock'
        inputFieldChangeHandler={ this.inputFieldChangeHandler }
        />

        <Button className="green" fluid onClick={this.handleLoginButtonClick} >
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

export default withRouter(LoginForm);