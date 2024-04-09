import { combineReducers, createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import productReducer from "./productReducer";
import productDetailsReducer from "./productDetailsReducer";

const rootReducer = combineReducers({
  products: productReducer,
  product: productDetailsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
