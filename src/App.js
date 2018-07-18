import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import LoginForm from './components/login/LoginForm';
import RegisterForm from './components/register/RegisterForm';
import Posts from './components/post/Posts';
import Post from './components/post/PostAndComments';
import PostEditForm from './components/post/PostEditForm';
import PostCreateForm from './components/post/PostCreateForm';

class App extends Component {
  state = {
    userLoggedIn: false
  }

  componentDidMount() {
    if (typeof(localStorage.token) === 'undefined') {
      this.setState({userLoggedIn: false})
    } else {
      this.setState({userLoggedIn: true})
    }
  }

  render() {

    return (
      <Router>
        <div className="ui container" >
          <Navbar />
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/register" component={RegisterForm} />
          <Route exact path="/posts" component={ Posts } />
          <Route exact path="/post/new" component={PostCreateForm} />
          <Route exact path="/posts/:id" component={Post} />
          <Route exact path="/posts/:id/edit" component={PostEditForm} />
        </div>
      </Router>
    );
  }
}

export default App;
