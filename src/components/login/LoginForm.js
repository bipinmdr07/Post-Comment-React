import React, { Component } from 'react';
import { Image, Segment, Button } from 'semantic-ui-react';
import loginImage from '../../login.png';
import { Link, withRouter } from 'react-router-dom';
import { login } from '../../services/loginForm';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleLoginButtonClick = this.handleLoginButtonClick.bind(this);
  }

  usernameChangeHandler = (e) => {
    e.preventDefault();
    this.setState({ username: e.target.value });
  }

  passwordChangeHandler = (e) => {
    e.preventDefault();
    this.setState({ password: e.target.value });
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