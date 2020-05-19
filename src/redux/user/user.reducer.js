/* -- user reducer will be the reducer that will store the state of our current user
 -- the REDUCER is just a function that gets two properties
    1. state object -- this is the previous state or the initial state
    2. action object -- with type and payload
*/

import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
