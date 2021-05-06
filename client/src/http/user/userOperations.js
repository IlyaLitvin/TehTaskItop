import { authHost } from "../index";
import userActions from "./userActions";

const getAllUsers = () => (dispatch, getState) => {
  const token = getState().user.token;
  dispatch(userActions.getAllUsersRequest());
  authHost
    .get("/users", {
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
  authHost
    .delete(`/delete/${data.id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((data) => dispatch(userActions.deleteUserSuccess(data)))
    .catch((error) => dispatch(userActions.deleteUserError(error)));
};

const getUser = (data) => (dispatch, getState) => {
  console.log(data);
  const token = getState().user.token;
  dispatch(userActions.getUserRequest());
  authHost
    .get(`/users/${data.id}`, {
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
