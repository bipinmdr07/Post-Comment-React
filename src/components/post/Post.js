import React, { Component, Fragment } from 'react';
import { Segment } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { fetchPost, deletePost } from '../../services/post';
import withPostData from '../withPostData';

class Post extends Component {

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
            {console.log(this.props.id)}
            <Link to={'/posts/' + this.props.id}>
              {this.props.title}
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
            { this.props.post }
          </div>
        </Segment>

        <span className="ui horizontal divider"></span>
      </Fragment>
    );
  }
}

export default withRouter(withPostData(Post));