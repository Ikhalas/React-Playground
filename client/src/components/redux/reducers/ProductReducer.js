import { PRODUCTS_FETCH } from "../type"

export default function (state = [], action) {
  switch (action.type) {
    case PRODUCTS_FETCH:
      return action.payload;
    default:
      return state;
  }
}
