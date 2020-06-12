import axios from "axios";
import { USERS_FETCH } from "../type"

export const usersFetch = () => {
  return (dispatch) => {
    axios.get("http://localhost:3001/user").then((res) => {
      dispatch({ type: USERS_FETCH, payload: res.data });
    });
  };
};

export const userDelete = (id) => {
    return (dispatch) => {
      axios.delete(`http://localhost:3001/user/${id}`).then((res) => {
        axios.get(`http://localhost:3001/user`).then((res) => {
          dispatch({ type: USERS_FETCH, payload: res.data });
        });
      });
    };
  };