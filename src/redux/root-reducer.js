// -- the root reducer is the actual base reducer object that represents all of the state of our application
// -- this root reducer is the actual code that will combine all the other states together
// -- all the other reducers that we will write will go into this root reducer

import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
