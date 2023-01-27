import {
  REQUEST_USERS_FAILED,
  REQUEST_USERS_PENDING,
  REQUEST_USERS_SUCCESS,
} from "./constants";

export const setUsers = () => (dispatch) => {
  dispatch({ type: REQUEST_USERS_PENDING });
  fetch("https://futurista-backend.onrender.com")
    .then((res) => res.json())
    .then((data) => dispatch({ type: REQUEST_USERS_SUCCESS, payload: data }))
    .catch((err) => dispatch({ type: REQUEST_USERS_FAILED, payload: err }));
};
