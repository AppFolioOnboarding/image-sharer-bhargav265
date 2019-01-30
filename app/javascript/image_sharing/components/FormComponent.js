import React, { Component } from 'react';
import { Row, Col, Container, Button, FormRow} from 'react-gears';
import { observer, inject} from 'mobx-react';
import PropTypes from 'prop-types';

@inject('stores')

@observer
class FormComponent extends Component {
  updateName = (event) => {
    this.props.stores.feedbackStore.updateName(event.target.value);
  };
  updateComment = (event) => {
    this.props.stores.feedbackStore.updateComment(event.target.value);
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
              <Button
                color="primary" className='align-self-center'>
                Submit
              </Button>


      </Container> )
  }
}
FormComponent.propTypes = {
  stores: PropTypes.object.isRequired
};

export default FormComponent;
