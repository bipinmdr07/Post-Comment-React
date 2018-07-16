import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/common/Navbar';
import LoginForm from './components/login/LoginForm';
import RegisterForm from './components/register/RegisterForm';
import Post from './components/post/Posts';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/register" component={RegisterForm} />
          <Route exact path="/posts" component={Post} />
        </div>
      </Router>
    );
  }
}

export default App;
