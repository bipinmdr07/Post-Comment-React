import React, { Component } from 'react';
import { fetchPosts } from '../../services/post';
import Post from './Post';
import { Button, Icon } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom'

class PostComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  async componentDidMount() {
    const posts = await fetchPosts();
    this.setState({ posts });
  }

  renderPostItem = (post) => {
    return (
      <Post id={post.id} post={post.post} key={post.id} />
    )
  }

  createPostButtonHandler = (e) => {
    e.preventDefault();
    this.props.history.push('/post/new');
  }

  render() {
    return (
      <div className="ui container">
        <Button size="large" color="teal" onClick={this.createPostButtonHandler} >
          <Icon name="pencil alternate" /> Add New Post
        </Button>
        {this.state.posts.map(this.renderPostItem)}
      </div>
    );
  }
}

export default withRouter(PostComponent);