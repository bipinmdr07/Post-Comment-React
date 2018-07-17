import React, { Component } from 'react';
import { fetchPosts } from '../services/post';

const withPostData = (WrappedComponent) => {

  class EnhancedComponent extends Component {

    state = {
      posts: []
    }

    async componentDidMount() {
      const posts = await this.fetchPosts();
      this.setState({ posts });
    }

    fetchPosts = async () => {
      return await fetchPosts();
    }

    render() {
      return (
      (!this.state.posts)? <h1>Loading...</h1> : <WrappedComponent {...this.props} posts={this.state.posts} />
      );
    }
  }

  return EnhancedComponent;
}

export default withPostData;