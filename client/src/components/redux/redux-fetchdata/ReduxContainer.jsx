import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';
import ScrollBar from 'react-perfect-scrollbar';
import Users from './Users';
import Products from './Products';

import 'react-perfect-scrollbar/dist/css/styles.css';
import '../../../assets/css/reduxcontainer.css'; // override the styles to display ScrollBar always.

class ReduxContainer extends Component {
  render() {
    const { history } = this.props;
    return (
      <Container style={{ textAlign: 'center' }}>
        <Row>
          <Col md="6">
            <Button className="my-2" color="success" block disabled>
              ADD USER
            </Button>
            <ScrollBar>
              <div style={{ height: '90vh' }}>
                <Users />
              </div>
            </ScrollBar>
          </Col>
          <Col md="6">
            <Button
              className="my-2"
              color="success"
              block
              onClick={() => history.push('/reduxform-productadd')}>
              ADD PRODUCT
            </Button>
            <ScrollBar>
              <div style={{ height: '90vh' }}>
                <Products />
              </div>
            </ScrollBar>
          </Col>
        </Row>
      </Container>
    );
  }
}

ReduxContainer.propTypes = {
  history: PropTypes.shape.isRequired,
};

export default withRouter(ReduxContainer);
