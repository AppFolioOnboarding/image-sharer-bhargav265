import React, { Component } from 'react';
import { Row, Col, Container, Button, FormRow} from 'react-gears';
import { observer, inject} from 'mobx-react';
import PropTypes from 'prop-types';
import PostFeedbackService from '../services/PostFeedbackService';
import FlashMessage from '../components/FlashMessage';

@inject('stores')

@observer
class FormComponent extends Component {

  constructor() {
    super();
    this.postFeedbackService = new PostFeedbackService();
  }

  updateName = (event) => {
    this.props.stores.feedbackStore.updateName(event.target.value);
  };
  updateComment = (event) => {
    this.props.stores.feedbackStore.updateComment(event.target.value);
  };

  submitFeedback = (event) => {
    this.postFeedbackService.postFeedback(this.props.stores);
  };

  render() {
    return (
      <Container className='d-flex flex-column' >
        <FormRow label="Name"
                 value={this.props.stores.feedbackStore.name}
                 onChange={this.updateName}
        rowClassName = "name"/>
        <FormRow type="textarea"
                 label="Comments"
                 value={this.props.stores.feedbackStore.comment}
                 onChange={this.updateComment}
                 rowClassName = "comment"
        />
        {this.props.stores.feedbackStore.displayFlashMessage &&
        <FlashMessage />}
              <Button
                color="primary"
                className='align-self-center'
                onClick={this.submitFeedback}
              >
                Submit
              </Button>


      </Container> )
  }
}
FormComponent.propTypes = {
  stores: PropTypes.object.isRequired
};

export default FormComponent;
