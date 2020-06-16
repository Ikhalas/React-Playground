import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { productsFetch, productDelete } from '../actions';

class Products extends Component {
  componentDidMount() {
    const { productsFetch } = this.props;
    productsFetch();
  }

  deleteProduct(id) {
    const { productDelete } = this.props;
    productDelete(id);
  }

  render() {
    const { products, history } = this.props;
    return (
      <>
        {Array.isArray(products) &&
          products.map((product) => (
            <Card key={product.id} style={{ marginTop: '10px' }}>
              <CardBody>
                <Row>
                  <Col md="12">
                    <CardTitle>{product.product_name}</CardTitle>
                    <CardSubtitle>{product.price}</CardSubtitle>
                    <CardText>{product.inventory}</CardText>
                    <Button
                      className="text-white"
                      color="warning"
                      size="sm"
                      block
                      onClick={() =>
                        history.push(`/reduxform-productedit/${product.id}`)
                      }>
                      EDIT
                    </Button>
                    <Button
                      color="danger"
                      size="sm"
                      block
                      onClick={() => this.deleteProduct(product.id)}>
                      DELETE
                    </Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          ))}
      </>
    );
  }
}

Products.propTypes = {
  products: PropTypes.instanceOf(Array).isRequired,
  // products: PropTypes.object.isRequired,
  productsFetch: PropTypes.func.isRequired,
  productDelete: PropTypes.func.isRequired,
  history: PropTypes.shape.isRequired,
};

function mapStateToProps({ products }) {
  return { products };
}

export default withRouter(
  connect(mapStateToProps, { productsFetch, productDelete })(Products),
);
