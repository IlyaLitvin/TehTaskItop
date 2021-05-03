import axios from "axios";
import userActions from "./userActions";

const url = "http://localhost:8080/api/user";

const getAllUsers = (token) => (dispatch) => {
  dispatch(userActions.getAllUsersRequest());
  axios
    .get(`${url}/users`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then(({ data }) => dispatch(userActions.getAllUsersSuccess(data)))
    .catch((error) =>
      dispatch(userActions.getAllUsersError(error), alert(error.response.data))
    );
};

const deleteUser = (data, token) => (dispatch) => {
  dispatch(userActions.deleteUserRequest());
  axios
    .delete(`${url}/users/${data.id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((data) => dispatch(userActions.deleteUserSuccess(data)))
    .catch((error) => dispatch(userActions.deleteUserError(error)));
};

const getUser = (data, token) => (dispatch) => {
  dispatch(userActions.getUserRequest());
  axios
    .get(`${url}/users/${data.id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then(({ data }) => dispatch(userActions.getUserSuccess(data)))
    .catch((error) =>
      dispatch(userActions.getUserError(error), alert(error.response.data))
    );
};

export default { getAllUsers, getUser, deleteUser };
