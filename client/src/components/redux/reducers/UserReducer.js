import { USERS_FETCH } from '../type';

export default function (state = [], action) {
  switch (action.type) {
    case USERS_FETCH:
      return action.payload;
    default:
      return state;
  }
}
