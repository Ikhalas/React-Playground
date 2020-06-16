/* eslint-disable class-methods-use-this */
/* eslint-disable no-class-assign */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import FormField from './common/FormField';

const formField = [
  {
    label: 'Product Name',
    name: 'product_name',
    type: 'text',
    required: true,
  },
  {
    label: 'Unit Price',
    name: 'price',
    type: 'text',
    required: true,
  },
  {
    label: 'Inventory',
    name: 'inventory',
    type: 'text',
    required: true,
  },
];

class MyReduxForm extends Component {
  renderField() {
    return formField.map(({ label, name, type, required }) => (
      <Field
        key={name}
        label={label}
        name={name}
        type={type}
        required={required}
        component={FormField}
      />
    ));
  }

  render() {
    const { handleSubmit, onProductSubmit } = this.props; // handleSubmit เป็นของ redux-form
    return (
      <div className="container col-md-5">
        <form onSubmit={handleSubmit(onProductSubmit)}>
          {this.renderField()}
          <button className="btn btn-block btn-info" type="submit">
            บันทึก
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  formField.forEach(({ name, required }) => {
    if (!values[name] && required) {
      errors[name] = 'กรุณากรอกข้อมูล';
    }
  });

  return errors;
}

function mapStatetoProps({ products }) {
  if (products && products.id) {
    return { initialValues: products };
  }
  return {};
}

MyReduxForm = reduxForm({ validate, form: 'productForm' })(MyReduxForm);

MyReduxForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onProductSubmit: PropTypes.func.isRequired,
};

export default connect(mapStatetoProps)(MyReduxForm);
