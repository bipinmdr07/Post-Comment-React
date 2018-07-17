import React, { Component, Fragment } from 'react';
import Post from './Post';
import { fetchComments } from '../../services/comment';
import Comment from '../comment/Comment';

class PostAndComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postId: this.props.match.params.id,
      comments: []
    }
  }

  componentDidMount = async () => {
    const { data } = await fetchComments(this.state.postId);
    this.setState({ comments: data });
  }

  renderComment = (comment) => {
    return <Comment key={comment.id} id={comment.id} postId={this.state.postId} userId={comment.user_id} comment={comment.comment} />
  }

  render() {
    return (
      <Fragment>
        <Post />
        <div className="ui container comments">
          <h3 className="ui divider header">Comments</h3>
          {this.state.comments.map(this.renderComment)}
          <form class="ui reply form">
          <div class="field">
            <textarea></textarea>
          </div>
          <div class="ui blue labeled submit icon button">
            <i class="icon edit"></i> Add Reply
          </div>
        </form>
        </div> 
      </Fragment>
    );
  }
}

export default PostAndComments;