import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import ProductReducer from "./ProductReducer"

const rootReducer = combineReducers({
  users: UserReducer,
  products : ProductReducer,
});

export default rootReducer;
