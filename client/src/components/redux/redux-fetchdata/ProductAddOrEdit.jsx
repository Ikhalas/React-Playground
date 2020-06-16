/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import MyReduxForm from '../reduxform/MyReduxForm';
import { productCreate, productUpdate, productFetch } from '../actions';

class ProductAddOrEdit extends Component {
  componentDidMount() {
    const { match } = this.props;
    if (match.params.id) {
      const { productFetch } = this.props;
      productFetch(match.params.id);
    }
  }

  componentDidUpdate(prevProps) {
    const { products, history } = this.props;
    if (prevProps.products.saved !== products.saved) {
      history.push('/redux');
    }
  }

  render() {
    const {
      match,
      formValuse,
      products,
      productCreate,
      productUpdate,
    } = this.props;
    return (
      <div>
        {match.path.indexOf('add') > 0 && (
          <div className="mt-1" style={{ textAlign: 'center' }}>
            <h2>ADD PRODUCT</h2>
            {products.saved && (
              <div className="alert alert-success text-white" role="alert">
                {products.msg}
              </div>
            )}
            <MyReduxForm onProductSubmit={() => productCreate(formValuse)} />
          </div>
        )}
        {match.path.indexOf('edit') > 0 && (
          <div className="mt-1" style={{ textAlign: 'center' }}>
            <h2>EDIT PRODUCT</h2>
            {products.saved && (
              <div className="alert alert-success text-white" role="alert">
                {products.msg}
              </div>
            )}
            <MyReduxForm
              onProductSubmit={() => productUpdate(products.id, formValuse)}
            />
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ form, products }) {
  return {
    formValuse: form.productForm ? form.productForm.values : null,
    products,
  };
}

ProductAddOrEdit.propTypes = {
  products: PropTypes.instanceOf(Array).isRequired,
  productFetch: PropTypes.func.isRequired,
  productUpdate: PropTypes.func.isRequired,
  productCreate: PropTypes.func.isRequired,
  match: PropTypes.shape.isRequired,
  history: PropTypes.shape.isRequired,
  formValuse: PropTypes.shape.isRequired,
};

export default withRouter(
  connect(mapStateToProps, {
    productCreate,
    productUpdate,
    productFetch,
  })(ProductAddOrEdit),
);
