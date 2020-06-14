/* eslint-disable func-names */

import axios from 'axios';
import { USERS_FETCH } from '../type';

export function usersFetch() {
  return function (dispatch) {
    axios.get('http://localhost:3001/user').then((res) => {
      dispatch({ type: USERS_FETCH, payload: res.data });
    });
  };
}

export function userDelete(id) {
  return function (dispatch) {
    return axios.delete(`http://localhost:3001/user/${id}`).then(() => {
      axios.get('http://localhost:3001/user').then((res) => {
        dispatch({ type: USERS_FETCH, payload: res.data });
      });
    });
  };
}
