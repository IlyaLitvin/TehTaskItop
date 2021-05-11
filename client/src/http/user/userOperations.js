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

const deleteUser = (id) => (dispatch, getState) => {
  const token = getState().user.token;
  dispatch(userActions.deleteUserRequest());
  authHost
    .delete(`/delete/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then(() => dispatch(userActions.deleteUserSuccess(id)))
    .catch((error) => dispatch(userActions.deleteUserError(error)));
};

const getUser = (data) => (dispatch, getState) => {
  const token = getState().user.token;
  dispatch(userActions.getUserRequest());
  authHost
    .get(`/users/${data.id}`, data, {
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

const updateUser = ({ data, editId }) => (dispatch, getState) => {
  const token = getState().user.token;
  dispatch(userActions.updateUserRequset());
  authHost
    .patch(`/users/${editId}/update/${editId}`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then(() =>
      dispatch(userActions.updateUserSuccess({ id: editId, ...data }))
    )
    .catch((error) => dispatch(userActions.updateUserError(error)));
};

export default { getAllUsers, getUser, deleteUser, updateUser };
