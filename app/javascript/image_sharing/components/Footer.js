import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

class Footer extends Component {
  /* Implement your Footer component here */

  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    const title = this.props.title
    return (
      <div>
        <Row>
          <Col lg={{ size: 4, offset: 4 }}>
            <p style={{ "fontSize": "10px" }} className="text-center">
              {title}
            </p>
          </Col>
        </Row>
      </div>
    )
  }
}
export default Footer
