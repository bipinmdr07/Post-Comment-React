import React, { Component } from 'react';
import { fetchPosts } from '../../services/post';
import { Segment } from 'semantic-ui-react';

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
    this.setState({ posts });
  }

  renderPostItem = (post, index) => {
    return (
      <div key = {post.id}>
        <Segment style={{width: 600, margin: "0 auto"}} key = {index} className="ui centered">
          <div className="ui top attached header clearing">
            { post.title }

            <div className="ui right floated compact button red">
              <i className="trash icon"></i>
            </div>

            <div className="ui right floated compact button">
              <i className="edit icon"></i>
            </div>

          </div>
          <div className="ui attached segment">
            { post.body }
          </div>
        </Segment>

        <span className="ui horizontal divider"></span>
      </div>
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