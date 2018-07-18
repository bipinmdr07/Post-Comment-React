import React, { Component } from 'react';
import { TextArea, Button, Segment, Form } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { updatePost, fetchPost } from '../../services/post';
import withPostData from '../withPostData';

class PostEditForm extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    id: this.props.match.params.id,
    post: this.props.post
  }

  componentDidMount = async () => {
    this.setState({ 
      id: this.props.match.params.id,
      post: this.props.post
     });
  }

  textAreaChangeHandler = (e) => {
    e.preventDefault();
    this.setState({ post: e.target.value })
  }

  updateClickHandler = async (e) => {
    e.preventDefault();
    await updatePost(this.state.id, {post: this.state.post})
    this.props.history.goBack();
  }

  cancelClickHandler = (e) => {
    e.preventDefault();
    this.props.history.goBack();
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.post !== this.props.post) {
      this.setState({post: this.props.post});
    }
  }
  
  render() {
    return (
      <Segment style={{ maxWidth: 700, margin: '0 auto' }} >
        <Form>
          <TextArea autoHeight className="fluid" placeholder = "Write your post" style = {{ minHeight: 100 }} onChange={this.textAreaChangeHandler} value={this.state.post} />
          <Button.Group fluid className="field">
            <Button positive onClick={this.updateClickHandler} >Update</Button>
            <Button.Or />
            <Button onClick={this.cancelClickHandler} >Cancel</Button>
          </Button.Group>
        </Form> 
      </Segment> 
    );
  }
}

export default withRouter(withPostData(PostEditForm));