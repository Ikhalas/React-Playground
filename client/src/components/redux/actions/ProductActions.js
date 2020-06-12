import axios from "axios";
import { PRODUCTS_FETCH } from "../type";

export const productsFetch = () => {
  return (dispatch) => {
    axios.get(`http://localhost:3001/product`).then((res) => {
      dispatch({ type: PRODUCTS_FETCH, payload: res.data });
    });
  };
};

export const productDelete = (id) => {
  return (dispatch) => {
    axios.delete(`http://localhost:3001/product/${id}`).then((res) => {
      axios.get(`http://localhost:3001/product`).then((res) => {
        dispatch({ type: PRODUCTS_FETCH, payload: res.data });
      });
    });
  };
};
