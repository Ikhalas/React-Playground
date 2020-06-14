/* eslint-disable func-names */

import axios from 'axios';
import { PRODUCTS_FETCH } from '../type';

export function productsFetch() {
  return function (dispatch) {
    axios.get('http://localhost:3001/product').then((res) => {
      dispatch({ type: PRODUCTS_FETCH, payload: res.data });
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
