import React, { Component, Fragment } from 'react';
import { Segment } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { fetchPost, deletePost } from '../../services/post';

class Post extends Component {

  state = {
    id: null,
    title: 'No Title',
    post: ''
  }

  async componentDidMount() {
    const id = this.props.id || this.props.match.params.id;
    const post = (this.props.post)? this.props : await fetchPost(id);
    this.setState({id: id, post: post.post});
  }

  handleEditClick = (e) => {
    e.preventDefault();
    this.props.history.push('/posts/' + this.state.id + '/edit');
  }

  handleDeleteClick = (e) => {
    e.preventDefault();
    deletePost(this.state.id);
    this.props.history.goBack();
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

export default withRouter(Post);