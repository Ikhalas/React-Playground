import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { connect } from "react-redux";
import { productsFetch, productDelete } from "./actions";

class Products extends Component {
  componentDidMount() {
    this.props.productsFetch();
  }

  deleteProduct(id) {
    this.props.productDelete(id);
  }

  render() {
    const { products } = this.props;
    return (
      <>
        {products.map((product, key) => (
          <Card key={key} style={{ marginTop: "10px" }}>
            <CardBody>
              <Row>
                <Col md="12">
                  <CardTitle>{product.product_name}</CardTitle>
                  <CardSubtitle>{product.price}</CardSubtitle>
                  <CardText>{product.inventory}</CardText>
                  <Button
                    color="danger"
                    size="sm"
                    block
                    onClick={() => this.deleteProduct(product.id)}
                  >
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
  products: PropTypes.array,
};

function mapStateToProps({ products }) {
  return { products };
}

export default connect(mapStateToProps, { productsFetch, productDelete })(
  Products
);
