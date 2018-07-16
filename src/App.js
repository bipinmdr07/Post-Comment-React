import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/common/Navbar';
import LoginForm from './components/login/LoginForm';
import RegisterForm from './components/register/RegisterForm';
import Posts from './components/post/Posts';
import Post from './components/post/Post';
import PostEditForm from './components/post/PostEditForm';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Route exact path="/" component={LoginForm} />
          { /* <Route exact path='/' component={PostEditForm} /> */ }
          <Route exact path="/register" component={RegisterForm} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/posts/:id" component={Post} />
          <Route exact path="/posts/:id/new" />
          <Route exact path="/posts/:id/edit" component={PostEditForm} />
        </div>
      </Router>
    );
  }
}

export default App;
