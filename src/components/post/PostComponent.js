import React, { Component } from 'react';
import { fetchPosts } from '../../services/post';
import { Card } from 'semantic-ui-react';

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

  renderPostItem = (post, index) => {
    return (
      <Card key = {index} className="ui centered">
        <Card.Content>
          <Card.Header>
            { post.title }
          </Card.Header>

          <Card.Description>
            { post.body }
          </Card.Description>

        </Card.Content>
      </Card>
    )
  }

  render() {
    return (
      <div>
        {this.state.posts.map(this.renderPostItem)}
      </div>
    );
  }
}

export default PostComponent;