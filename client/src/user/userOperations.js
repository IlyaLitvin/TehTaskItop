import axios from "axios";
import userActions from "./userActions";

const url = "http://localhost:8080/api/user";

const getAllUsers = (data, token) => (dispatch) => {
  dispatch(userActions.getAllUsersRequest());
  axios
    .get(`${url}/users`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then(({ data }) => {
      console.log(data);
      dispatch(userActions.getAllUsersSuccess(data));
    })
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

const getInfo = (data, token) => (dispatch) => {
  dispatch(userActions.getUsersInfoRequest());
  axios
    .get(`${url}/dashboard`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((data) => dispatch(userActions.getUsersInfoSuccess(data)))
    .catch((error) => dispatch(userActions.getUsersInfoError(error)));
};

export default { getAllUsers, getUser, getInfo, deleteUser };
