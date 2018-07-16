import React, { Component, Fragment } from 'react';
import { Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { fetchPost } from '../../services/post';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      title: 'No Title',
      post: ''
    }
  }

  async componentDidMount() {
    const id = this.props.id || this.props.match.params.id;
    const post = (this.props.post)? this.props : await fetchPost(id);
    this.setState({id: id, post: post.post});
  }

  handleEditClick = () => {
    console.log("Edit Clicked", this.state.id);
  }

  handleDeleteClick = () => {
    console.log("Delete Clicked", this.state.id);
    const postPath = '/posts/' + this.state.id;
    console.log(postPath);
  }

  render() {
    return (
      <Fragment>
        <Segment style={{width: 600, margin: "0 auto"}} className="ui centered">
          <div className="ui top attached header clearing">

            <Link to={'/posts/' + this.state.id}>
              {this.state.title}
            </Link> 
            
            <div className="ui right floated compact button red" onClick={this.handleDeleteClick} >
              <i className="trash icon"></i>
              Delete
            </div>             
            

            <div className="ui right floated compact button" onClick={this.handleEditClick} >
              <i className="edit icon"></i>
              Edit
            </div>

          </div>
          <div className="ui attached segment">
            { this.state.post }
          </div>
        </Segment>

        <span className="ui horizontal divider"></span>
      </Fragment>
    );
  }
}

export default Post;