import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import UserReducer from "./UserReducer";
import ProductReducer from "./ProductReducer";

const rootReducer = combineReducers({
  users: UserReducer,
  products: ProductReducer,
  form: reduxForm,
});

export default rootReducer;
