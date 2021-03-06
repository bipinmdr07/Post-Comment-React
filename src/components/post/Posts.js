import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom'

import Post from './Post';
import withPostData from '../withPostData';

class PostComponent extends Component {

  renderPostItem = (postData) => {
    const {
      id,
      post
    } = postData;
    return (
      <Post id={id} post={post} key={id} />
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
        {this.props.posts.map(this.renderPostItem)}
      </div>
    );
  }
}

export default withRouter(withPostData(PostComponent));