import React, { Component } from 'react';
// import logo from './logo.svg';
import Post from './components/post/PostComponent';
import './App.css';
import Navigation from './components/common/Navbar';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Post />
      </React.Fragment>
    );
  }
}

export default App;
