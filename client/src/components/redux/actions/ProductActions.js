/* eslint-disable func-names */
import axios from 'axios';
import {
  PRODUCTS_FETCH,
  PRODUCT_FETCH,
  PRODUCTS_CREATE,
  PRODUCTS_UPDATE,
} from '../type';

export function productsFetch() {
  return function (dispatch) {
    axios.get('http://localhost:3001/product').then((res) => {
      dispatch({ type: PRODUCTS_FETCH, payload: res.data });
    });
  };
}

export function productFetch(id) {
  return function (dispatch) {
    axios.get(`http://localhost:3001/product/${id}`).then((res) => {
      dispatch({ type: PRODUCT_FETCH, payload: res.data });
    });
  };
}

export function productCreate(values) {
  return function (dispatch) {
    axios.post('http://localhost:3001/product', values).then(() => {
      dispatch({ type: PRODUCTS_CREATE });
    });
  };
}

export function productUpdate(id, values) {
  return function (dispatch) {
    axios.put(`http://localhost:3001/product/${id}`, values).then(() => {
      dispatch({ type: PRODUCTS_UPDATE });
    });
  };
}

export function productDelete(id) {
  return function (dispatch) {
    axios.delete(`http://localhost:3001/product/${id}`).then(() => {
      axios.get('http://localhost:3001/product').then((res) => {
        dispatch({ type: PRODUCTS_FETCH, payload: res.data });
      });
    });
  };
}
