import React, { Component } from 'react';
import { fetchPosts } from '../services/post';

const withPostData = (WrappedComponent) => {

  class EnhancedComponent extends Component {

    state = {
      id: this.props.match.params.id,
      posts: [],
      post: this.props.post
    }

    async componentDidMount() {
      const posts = await this.fetchPosts();
      this.setState({ posts });

      if (typeof(this.state.id) !== "undefined") {
        const post = this.filterPost(this.state.id);
        this.setState({post: post, id: this.props.match.params.id})
      }
    }

    fetchPosts = async () => {
      return await fetchPosts();
    }

    filterPost = (id) => {

      const postData = this.state.posts.filter((post) => {
        return id == post.id;
      });
      return postData[0].post;
    }

    render() {
      const propsToSend = (typeof(this.state.id) !== 'undefined')? this.state : {post: this.state.post, posts: this.state.posts};
      return (
      (!this.state.posts) ? 
      (<h1>
        Loading...
      </h1>) : (
      <WrappedComponent 
      {...this.props}
      title="No title"
      {...propsToSend}
      />
      )
      );
    }
  }

  return EnhancedComponent;
}

export default withPostData;