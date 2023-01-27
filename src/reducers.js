import {
  REQUEST_USERS_FAILED,
  REQUEST_USERS_PENDING,
  REQUEST_USERS_SUCCESS,
} from "./constants";

const initialState = {
  isPending: true,
  users: [],
  error: "",
};

export const requestUsers = (state = initialState, action = {}) => {
  switch (action.type) {
    case REQUEST_USERS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_USERS_SUCCESS:
      return Object.assign({}, state, {
        users: action.payload,
        isPending: false,
      });
    case REQUEST_USERS_FAILED:
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false,
      });
    default:
      return state;
  }
};
