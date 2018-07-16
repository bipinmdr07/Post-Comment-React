import React, { Component } from 'react';
import { fetchPosts } from '../../services/post';
import Post from './Post';

class PostComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  async componentDidMount() {
    console.log("fetching post");
    const posts = await fetchPosts();
    // console.log(posts);
    this.setState({ posts });
  }

  renderPostItem = (post) => {
    return (
      <Post id={post.id} post={post.post} key={post.id} />
    )
  }

  render() {
    return (
      <div className="ui container">
        {this.state.posts.map(this.renderPostItem)}
      </div>
    );
  }
}

export default PostComponent;