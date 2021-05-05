import axios from "axios";
import userActions from "./userActions";

const url = "http://localhost:8080/api/user/users";

const getAllUsers = () => (dispatch, getState) => {
  const token = getState().user.token;
  dispatch(userActions.getAllUsersRequest());
  axios
    .get(`${url}`, {
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

const deleteUser = (data) => (dispatch, getState) => {
  const token = getState().user.token;
  dispatch(userActions.deleteUserRequest());
  axios
    .delete(`${url}/${data.id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((data) => dispatch(userActions.deleteUserSuccess(data)))
    .catch((error) => dispatch(userActions.deleteUserError(error)));
};

const getUser = () => (dispatch, getState) => {
  const token = getState().user.token;
  const userId = getState().users.id;
  dispatch(userActions.getUserRequest());
  axios
    .get(`${url}/${userId}`, {
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
