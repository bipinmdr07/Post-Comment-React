import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      title: 'No Title',
      post: ''
    }
  }

  render() {
    return (
      <div>
        <Segment style={{width: 600, margin: "0 auto"}} className="ui centered">
          <div className="ui top attached header clearing">
            {this.state.title}
            <div className="ui right floated compact button red">
              <i className="trash icon"></i>
              Delete
            </div>

            <div className="ui right floated compact button">
              <i className="edit icon"></i>
              Edit
            </div>

          </div>
          <div className="ui attached segment">
            { this.props.post }
          </div>
        </Segment>

        <span className="ui horizontal divider"></span>
      </div>
    );
  }
}

export default Post;