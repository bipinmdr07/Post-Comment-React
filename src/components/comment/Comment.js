import React, { Component } from 'react';
import avatar from '../../person-flat.png';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      postId: this.props.postId,
      userId: this.props.userId,
      comment: this.props.comment
    };
  }

  render() {
    console.log("Helo");
    return (
      // <div className="ui comments" >
      <div className="comment" style={{margin: 'auto 0'}} >
        <a className="avatar">
          <img src={avatar} alt="avatar" />
        </a>
        <div className="content">
          <a className="author"> { this.state.userId } </a> 
          <div className="metadata">
            <span className="date"></span>
          </div>
          <div className="text" >
            {this.state.comment}
          </div>
        </div>
      </div>
      // </div>
    );
  }
}

export default Comments;