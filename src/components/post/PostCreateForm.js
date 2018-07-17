import React, { Component } from "react";
import { TextArea, Button, Segment, Form } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import { createPost } from "../../services/post";

class PostCreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      post: ""
    };
  }

  textAreaChangeHandler = e => {
    e.preventDefault();
    this.setState({ post: e.target.value });
  };

  createClickHandler = async e => {
    e.preventDefault();
    await createPost({ post: this.state.post });
    this.props.history.goBack();
  };

  cancelClickHandler = e => {
    e.preventDefault();
    this.props.history.goBack();
  };

  render() {
    return (
      <Segment style={{ maxWidth: 700, margin: "0 auto" }}>
        Create New Post
        <Form>
          <TextArea
            autoHeight
            className="fluid"
            placeholder="Write your post"
            style={{ minHeight: 100 }}
            onChange={this.textAreaChangeHandler}
            value={this.state.post}
          />
          <Button.Group fluid className="field">
            <Button positive onClick={this.createClickHandler}>
              Create
            </Button>
            <Button.Or />
            <Button onClick={this.cancelClickHandler}>Cancel</Button>
          </Button.Group>
        </Form>
      </Segment>
    );
  }
}

export default withRouter(PostCreateForm);
